// Import Link component from react-router-dom
// This will be used to navigate between routes without page refresh
import { Link } from "react-router-dom";

// Dashboard page component
// This represents the main workspace overview screen
function Dashboard() {
  return (
    // Semantic main landmark for accessibility
    <main>

      {/* Page heading describing the workspace */}
      <h1>Workspace Dashboard</h1>

      {/*
        Future Implementation:
        - Display list of boards
        - Provide link to each board (using <Link />)
        - Add create/delete board functionality
      */}

    </main>
  );
}

// Export component for routing usage
export default Dashboard;