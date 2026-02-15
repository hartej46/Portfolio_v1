import './TechCard.css'

export default function ({ img, alternative, lang }) {
    return (
        <>
            <div className="card1">
                <img src={img} alt={alternative} />

                <p className="text">{lang}</p>
            </div>
        </>
    )
}