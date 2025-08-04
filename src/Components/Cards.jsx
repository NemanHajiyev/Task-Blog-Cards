import '../Style/Cards.css'

const Cards = ({ data }) => {
    const { id, image, title, snippet, author, date } = data;
    return (
        <div className="Cards">
            <img src={image} alt={title} className="card-img" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-desc">{snippet}</p>
                <div className="card-meta">
                    <span className="author">{author}</span> • <span className="date">{date}</span>
                </div>
                <button className="read-more" >
                    Daha çox oxu →
                </button>
            </div>
        </div>
    )
}

export default Cards