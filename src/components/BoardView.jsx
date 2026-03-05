import Column from "./Column";
import { useState } from "react";

function BoardView() {
  const [columns, setColumns] = useState([
    {
      id: "1", 
      title: "Board 1",
      cards: [{ id: "c1", title: "Task one" }]
    },
    {
      id: "2",
      title: "Board 2",
      cards: [{ id: "c2", title: "Task b" }]
    }
  ]);

 
  const addColumn = () => {
    const title = prompt("Column name:");

    if (!title || !title.trim()) return;
    const newColumn = {
      id: Date.now().toString(),
      title,
      cards: []
    };

    setColumns([...columns, newColumn]);
  };
  const editColumn = (columnId) => {
    const title = prompt("New column name:");

    // Prevent invalid titles
    if (!title || !title.trim()) return;

    // Map through columns and update only matching column
    const updated = columns.map((col) =>
      col.id === columnId ? { ...col, title } : col
    );

    setColumns(updated);
  };

  // Function to delete a column
  const deleteColumn = (columnId) => {
    const updated = columns.filter((col) => col.id !== columnId);

    setColumns(updated);
  };

  // Function to add a new card inside a column
  const addCard = (columnId, title) => {
    if (!title.trim()) return;

    const newCard = {
      id: Date.now().toString(),
      title
    };

    const updated = columns.map((col) =>
      col.id === columnId
        ? { ...col, cards: [...col.cards, newCard] }
        : col
    );

    // Update state
    setColumns(updated);
  };

  // Function to delete a card from a specific column
  const deleteCard = (columnId, cardId) => {
    const updated = columns.map((col) => {
      if (col.id !== columnId) return col;

      // If target column, remove matching card
      return {
        ...col,
        cards: col.cards.filter((card) => card.id !== cardId)
      };
    });

    setColumns(updated);
  };

  return (
    <div className="parent_div">
      <div className="board-container">
        {columns.map((column) => (
          <div className="column-wrapper" key={column.id}>
          <Column
            key={column.id} 
            column={column} 
            addCard={addCard}
            deleteColumn={deleteColumn}
            editColumn={editColumn}
            deleteCard={deleteCard}
          />
          </div>
        ))}
          
      </div>
      <button onClick={addColumn} >
        + Add Column
      </button>

    </div>
  );
}
export default BoardView;