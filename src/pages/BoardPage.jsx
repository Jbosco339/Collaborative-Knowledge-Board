import BoardView from "../components/BoardView";
import { useParams } from "react-router-dom";

function BoardPage() {
  const { boardId } = useParams();

  return (
    <main>
      <h1>Board ID: {boardId}</h1>
      <BoardView boardId={boardId} />
    </main>
  );
}

export default BoardPage;