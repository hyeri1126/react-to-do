import TodoItem from "@/components/todos/TodoItem"

const TodoBody = ({ addTodo, deleteTodo ,todos,filter}) => {
  let filterdTodos = todos;

  if (filter !== "all") {
    filterdTodos = todos.filter(todo => todo.category === filter);
  }


  return (
    <ul className="px-0 my-8">
      {/* {li태그를 todos 배열의 요소만큼 렌더링 } */}
     {filterdTodos.map((todo)=><TodoItem addTodo={addTodo} deleteTodo={deleteTodo} key={todo.id} todo={todo} /> )}
    </ul>
  )
}

export default TodoBody;