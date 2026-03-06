import { useState } from "react";
import Card from "./Card";

function Column({ column, addCard, deleteColumn, editColumn, deleteCard }) {
  const [newTitle, setNewTitle] = useState("");

  const handleAdd = () => {
    
    if (!newTitle.trim()) return;

    addCard(column.id, newTitle);

    // Clear input field after adding card
    setNewTitle("");
  };

  return (
    <div className="column">
      <div className="column-header">

        <h3>{column.title}</h3>

        <div>
          
          <button className="btn_edit" onClick={() => editColumn(column.id)}>
            Edit
          </button>

          <button className="btn_edit" onClick={() => deleteColumn(column.id)}>
            Delete
          </button>
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
      <div className="description_div">
      <input
        type="text"
        value={newTitle}                  
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="New card..."
      />
        <img src="/public/add2.PNG" className="add_img" alt="addImage"
        onClick={handleAdd}
        />
      </div>

    </div>
  );
}

export default Column;