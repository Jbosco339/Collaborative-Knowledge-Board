// Import the BoardView component that renders the actual board UI
import BoardView from "../components/BoardView";

// Import useParams hook from react-router-dom
// This allows us to access dynamic route parameters (e.g. /board/:boardId)
import { useParams } from "react-router-dom";

// Page-level component for rendering a specific board
function BoardPage() {

  // Extract boardId from the URL
  // Example route: /board/123 → boardId = "123"
  const { boardId } = useParams();

  return (
    // Semantic HTML element for main page content (good for accessibility)
    <main>

      {/* Display current board ID (useful for debugging or header context) */}
      <h1>Board ID: {boardId}</h1>

      {/* 
        Render BoardView component
        Pass boardId as a prop so the board
        can fetch/filter the correct board data
      */}
      <BoardView boardId={boardId} />

    </main>
  );
}

// Export page component for routing usage
export default BoardPage;