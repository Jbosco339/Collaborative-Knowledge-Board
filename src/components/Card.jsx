function Card({ card, columnId, deleteCard }) {
  return (
    <div className="card">
      <span>{card.title}</span>
      <button onClick={() => deleteCard(columnId, card.id)}>Delete</button>
    </div>
  );
}

export default Card;