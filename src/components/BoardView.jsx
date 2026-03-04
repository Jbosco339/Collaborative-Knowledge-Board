import Column from "./Column";
import { useState } from "react";

function BoardView() {
  const [columns, setColumns] = useState([
    {
      id: "1",
      title: "Ideas",
      cards: [{ id: "c1", title: "Build dark mode" }]
    },
    {
      id: "2",
      title: "In Progress",
      cards: [{ id: "c2", title: "Refactor components" }]
    }
  ]);

  // Add new column
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

  // Edit column name
  const editColumn = (columnId) => {
    const title = prompt("New column name:");

    if (!title || !title.trim()) return;

    const updated = columns.map((col) =>
      col.id === columnId ? { ...col, title } : col
    );

    setColumns(updated);
  };

  // Delete column
  const deleteColumn = (columnId) => {
    const updated = columns.filter((col) => col.id !== columnId);
    setColumns(updated);
  };

  // Add card to column
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

    setColumns(updated);
  };

  // Delete card
  const deleteCard = (columnId, cardId) => {
    const updated = columns.map((col) => {
      if (col.id !== columnId) return col;

      return {
        ...col,
        cards: col.cards.filter((card) => card.id !== cardId)
      };
    });

    setColumns(updated);
  };

  return (
    <div>
      <div className="board-container">
        {columns.map((column) => (
          <Column
            key={column.id}
            column={column}
            addCard={addCard}
            deleteColumn={deleteColumn}
            editColumn={editColumn}
            deleteCard={deleteCard}
          />
        ))}
      </div>

      
    </div>
  );
}

export default BoardView;