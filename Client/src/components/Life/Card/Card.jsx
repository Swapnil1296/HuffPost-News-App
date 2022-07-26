import "./Card.css";
export const Card = ({imageUrl, title, heading, text}) => {
  return (
    <>
      <div className="card">
        <img
          height={"200px"}
          width={"380px"}
          src={imageUrl}
          alt=""
        />
        <div className="card-div">
          <h3 className="card-title">{title}</h3>
          <h2 className="card-heading">{heading}</h2>
          <p className="card-p">{text}</p>
        </div>
      </div>      
    </>
  );
};
