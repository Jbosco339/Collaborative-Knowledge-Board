function Card({ card, columnId, deleteCard, column }) {
  return (
    <div className="card">
      <span>{card.title}</span>

      <button className="item_delete_btn" onClick={() => deleteCard(columnId, card.id)}>
        DEL
      </button>

    </div>
  );
}
export default Card;