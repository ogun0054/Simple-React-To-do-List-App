// Import styled-components into our app
import styled from "styled-components";

// Using styled-components to style an h1
const Header = styled.h1`
  font-size: 32px;
`;

const tasks = [
  { name: "Swab the deck", id: 1 },
  { name: "Find treasure", id: 2 },
  { name: "Set sail", id: 3 },
];

function Task({ name, onClick }) {
  return <div onClick={onClick}> {name} </div>;
}

export default function App() {
  return (
    <div>
      <Header> 🏴‍☠️ Captain's Tasks </Header>
      <p> Manage the daily jobs at sea </p>
      <button onClick={() => alert("Adding task")}>Add Task</button>
      {tasks.map(({ name, id }, i) => (
        <Task key={`task-${id}`} name={name} />
      ))}
    </div>
  );
}
