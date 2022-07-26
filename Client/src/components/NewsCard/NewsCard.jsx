import './NewsCard.css';

export const NewsCard = ({data})=>{
    const {image, category, title} =data;

    return <div className="news-card">
        <img src={image} alt="" />
        <p>{category[0]}</p>
        <p>{title}</p>
    </div>
}