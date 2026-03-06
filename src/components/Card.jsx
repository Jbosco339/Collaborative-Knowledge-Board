function Card({ card, columnId, deleteCard, column }) {
  return (
    <div className="card">
      <span>{card.title}</span>

      <button className="item_delete_btn1" onClick={() => deleteCard(columnId, card.id)}>
        <h3>X</h3>
      </button>

    </div>
  );
}
export default Card;