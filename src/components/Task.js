import styled from "styled-components";

const TaskName = styled.div`
  margin: 10px 0px;
`;

function Task({ name }) {
  return <TaskName> {name} </TaskName>;
}

export default Task;
