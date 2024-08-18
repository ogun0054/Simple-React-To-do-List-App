// Import styled-components into our app
import styled from "styled-components";
import Header from "./components/Header.js";
import Task from "./components/Task.js";
import Button from "./components/Button.js";
import Subheader from "./components/subheader.js";
import Tasks from "./components/Tasks.js";
import Card from "./components/Card.js";
import TasksContainer from "./components/TasksContainer.js";

export default function App() {
  return (
    <Card>
      <Header> 🏴‍☠️ Captain's Tasks </Header>
      <Subheader> Manage the daily jobs at sea </Subheader>
      <Button onClick={() => alert("Adding task")}>Add Task</Button>
      <TasksContainer>
        {Tasks.map(({ name, id }, i) => (
          <Task key={`task-${id}`} name={name} />
        ))}
      </TasksContainer>
    </Card>
  );
}
