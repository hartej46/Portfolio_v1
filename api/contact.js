import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export async function handleContactSubmission({ name, email, message }) {
    if (!name || !email || !message) {
        return {
            status: 400,
            data: { success: false, error: 'Please provide name, email, and message.' }
        }
    }

    const smtpHost = process.env.SMTP_HOST ?? 'smtp.gmail.com'
    const smtpPort = Number(process.env.SMTP_PORT ?? 587)
    const smtpUser = process.env.SMTP_USER
    const smtpPassword = process.env.SMTP_PASS

    if (!smtpUser || !smtpPassword) {
        return {
            status: 500,
            data: {
                success: false,
                error: 'SMTP credentials are not configured. Please set SMTP_USER and SMTP_PASS in your .env file.'
            }
        }
    }

    const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        requireTLS: smtpPort !== 465,
        auth: {
            user: smtpUser,
            pass: smtpPassword,
        },
    })

    const recipientEmail = 'reach.hartej@gmail.com'
    const subject = `Portfolio Inquiry from ${name}`

    const text = `You got an inquiry from ${name}!\n\nSender Details:\n- Name: ${name}\n- Email: ${email}\n\nMessage:\n${message}\n\n---\nSent from your portfolio contact form.`

    const html = `
    <div style="margin: 0; padding: 32px 16px; background-color: #0b0c10; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #e0e0e0;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #1a1a24; border-radius: 16px; border: 1px solid #2d2d3f; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
            <tr>
                <td style="padding: 28px 32px; background: linear-gradient(135deg, #7928ca 0%, #ff0080 100%); text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">Portfolio Inquiry</h1>
                    <p style="margin: 6px 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">You have received a new inquiry from ${name}</p>
                </td>
            </tr>
            <tr>
                <td style="padding: 32px;">
                    <h2 style="margin: 0 0 20px; color: #ffffff; font-size: 18px; font-weight: 600; border-bottom: 1px solid #2d2d3f; padding-bottom: 12px;">
                        Sender Information
                    </h2>
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 24px;">
                        <tr>
                            <td style="padding: 8px 0; color: #9ca3af; font-size: 14px; width: 100px; font-weight: 600;">Name:</td>
                            <td style="padding: 8px 0; color: #f3f4f6; font-size: 14px; font-weight: 500;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #9ca3af; font-size: 14px; font-weight: 600;">Email:</td>
                            <td style="padding: 8px 0; color: #a78bfa; font-size: 14px; font-weight: 500;">
                                <a href="mailto:${email}" style="color: #a78bfa; text-decoration: none;">${email}</a>
                            </td>
                        </tr>
                    </table>

                    <h2 style="margin: 0 0 12px; color: #ffffff; font-size: 16px; font-weight: 600;">
                        Message:
                    </h2>
                    <div style="padding: 18px 20px; background-color: #12121a; border-radius: 10px; border-left: 4px solid #7928ca; color: #e5e7eb; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                </td>
            </tr>
            <tr>
                <td style="padding: 16px 32px; background-color: #12121a; text-align: center; border-top: 1px solid #2d2d3f;">
                    <p style="margin: 0; color: #6b7280; font-size: 12px;">This email was sent from your portfolio contact form.</p>
                </td>
            </tr>
        </table>
    </div>`

    try {
        const delivery = await transporter.sendMail({
            from: `"${name} (Portfolio Inquiry)" <${smtpUser}>`,
            to: recipientEmail,
            replyTo: email,
            subject,
            text,
            html,
        })
        console.info("Email accepted by SMTP server", {
            messageId: delivery.messageId,
            accepted: delivery.accepted,
            rejected: delivery.rejected,
        })
        return {
            status: 200,
            data: {
                success: true,
                message: 'Inquiry sent successfully! I will get back to you soon.'
            }
        }
    } catch (error) {
        console.error("SMTP error:", error)
        if (error && typeof error === "object" && "code" in error && error.code === "EAUTH") {
            return {
                status: 500,
                data: {
                    success: false,
                    error: "Failed to authenticate with Gmail. Verify your SMTP App Password in .env"
                }
            }
        }
        return {
            status: 500,
            data: {
                success: false,
                error: error instanceof Error ? error.message : "SMTP email delivery failed"
            }
        }
    }
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` })
    }

    try {
        const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {})
        const result = await handleContactSubmission(body)
        return res.status(result.status).json(result.data)
    } catch (err) {
        return res.status(400).json({ success: false, error: 'Invalid request body' })
    }
}
