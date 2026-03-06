## Collaborative Workspace Tool
A Collaborative Knowledge Board tool built with React + Vite.
This project simulates an internal SaaS product used by fast-moving teams to manage boards, columns, and cards with a strong focus on architecture, performance, and accessibility.
This stage intentionally prioritizes engineering discipline over feature quantity.

## Tech Stack
React (Vite)
React Router
Plain CSS (no UI libraries)

## Folder Structure Explanation
The project uses a simple, flat, and readable structure to avoid over-engineering while remaining scalable.

src/
├── main.jsx    
├── App.jsx       
├-- responsiveness.css
│
├── pages/          
│   ├── Dashboard.jsx 
│   └── BoardPage.jsx 
│
├── components/     
│   ├── BoardView.jsx 
│   ├── Column.jsx  
│   └── Card.jsx   
│
├── index.css/

## Components handle UI and interaction
Avoids unnecessary abstraction
Easy to understand during code review
Can scale gradually without refactors

## State Architecture
Current Stage
State is managed using React local state (useState) inside BoardView.
This decision was intentional for Stage 1 to:
Keep logic visible and inspectable
Avoid premature complexity
Demonstrate understanding of immutability and updates

## Performance Strategy
Performance considerations were applied deliberately even at this early stage.

1. Prevent Unnecessary Re-renders
    State updates are immutable
    Child components receive minimal props
    Clear data ownership boundaries

2. Memoization (Planned)
    React.memo for Card and Column
    useCallback for handlers
    useMemo for derived data

3. Code Splitting
    BoardPage is designed to be lazy-loaded
    Prevents loading board logic on dashboard view

4.  Render Cost Awareness
    No anonymous inline components
    No excessive prop drilling
    Flat component tree
    This app is inspected using React DevTools for render behavior.



## Key Engineering Decisions Explained
No UI Libraries
Prevents hiding accessibility and performance issues
Forces explicit layout and interaction decisions
Produces product-like UI instead of template UI
No Drag-and-Drop Libraries
Keeps focus on data modeling and state correctness
Drag behavior is meaningless without solid architecture
State and architecture must stand on their own

## Summary
This project is not a tutorial clone.
It is an engineering-first implementation that demonstrates:
Clear architectural thinking
Awareness of scalability constraints
Performance discipline
Accessibility responsibility
Strong communication of tradeoffs