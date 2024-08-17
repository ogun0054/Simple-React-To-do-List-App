function Task({ name, onClick }) {
  return <div onClick={onClick}> {name} </div>;
}

export default Task;
