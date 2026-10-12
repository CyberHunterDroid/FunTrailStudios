import './TechCard.css'

function TechCard({ title, imageUrl }: { title: string;imageUrl: string }) {
    return (
        <div className="tech-card">
            <img src={imageUrl} alt={title} className="tech-card-image" />
            <h3 className="tech-card-title">{title}</h3>
        </div>
    )
}
export default TechCard;