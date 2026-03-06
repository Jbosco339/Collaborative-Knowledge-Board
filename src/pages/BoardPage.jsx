import BoardView from "../components/BoardView";
import { useParams } from "react-router-dom";
function BoardPage() {

  const { boardId } = useParams();

  return (
    <>
      <h1>Board ID: {boardId}</h1>

      <BoardView boardId={boardId} />
    </>
  );
}
export default BoardPage;