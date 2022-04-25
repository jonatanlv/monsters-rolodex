import "./card.styles.css";

const Card = (props) => {
  const { id, name, email } = props.item;
  return (
    <div className="card-container">
      <div className="card">
        <img
          src={`https://robohash.org/${id}?set=set1&size=180x180`}
          alt={name}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
