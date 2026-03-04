import { useState } from "react";
import Card from "./Card";

function Column({ column, addCard, deleteColumn, editColumn, deleteCard }) {
  const [newTitle, setNewTitle] = useState("");

  const handleAdd = () => {
    if (!newTitle.trim()) return;

    addCard(column.id, newTitle);
    setNewTitle("");
  };

  return (
    <div className="column">
      <div className="column-header">
        <h3>{column.title}</h3>

        <div>
          <button onClick={() => editColumn(column.id)}>Edit</button>
          <button onClick={() => deleteColumn(column.id)}>Delete</button>
        </div>
      </div>

      {column.cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          columnId={column.id}
          deleteCard={deleteCard}
        />
      ))}

      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="New card..."
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Column;