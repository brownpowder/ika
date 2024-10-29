const Card = (props: any) => {
  return (
    <div className="card">
      <h2 className="card_title">{props.value.title}</h2>
      <p className="card_description">{props.value.description}</p>
    </div>
  );
};
export default Card;
