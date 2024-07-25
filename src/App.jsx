import { useState } from "react"
import TodoBody from "./components/todos/TodoBody"
import TodoHeader from "./components/todos/TodoHeader"
import DefaultLayout from "./layouts/DefaultLayout"

const dummyTodos = [
  {
    id: 1,
    title: 'React 공부',
    summary: 'React를 공부한다.',
    category: 'TODO',
  },
  {
    id: 2,
    title: '점심 먹기',
    summary: '점심을 먹는다.',
    category: 'PROGRESS',
  },
  {
    id: 3,
    title: '커피 마시기',
    summary: '커피를 마신다.',
    category: 'DONE',
  }
]

function App() {
  const [todos, setTodos] = useState(dummyTodos)
  const [filter, setFilter] = useState('all')

  const addTodo = ({title, summary, category}) => {
    setTodos([...todos, {id: todos.length + 1, title, summary, category}])
  }

  const updateTodo = ({id, title, summary, category}) => {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id){
        return {...todo, ...{title, summary, category} }
      }
      return todo;
    })
    setTodos(updatedTodos)
  }


  // 여러가지 update 함수 

  // const onUpdate = (updatedTodo) => {
  //   setTodos(
  //     todos.map((todo) =>
  //     todo.id === updatedTodo.id ? updatedTodo : todo
  //   )
  //   );
  // };

  // const updateTodoHandler = ({id, title, summary, category}) =>{
	// 	const updateIndex = todos.findIndex((todo)=>{
	// 		return todo.id == id;
	// 	});
	// 	const updateTodos = [...todos];
	// 	updateTodos[updateIndex]={title, summary, category};
	// 	setTodos(updateTodos);
	// }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const changeFilter = (e) => {
    const filter = e.target.value
    setFilter(filter)
  }
  // const addTodo = ({title, summary, category}) => {
  //   const newTodo = {
  //     id: self.crypto.randomUUID(),
  //     title,
  //     summary,
  //     category
  //   }
  
  //   const updatedTodos = [...todos, newTodo]
  //   setTodos(updatedTodos)
  // }
 

  return (
    <>
      <DefaultLayout>
        <header className="flex justify-center">
          <a to="/">
            <h1 className="py-8 text-red-200 max-w-max animate-bounce-slow text-7xl">
                  todos
            </h1>
          </a>
        </header>
        <section className="max-w-xl m-4 mx-auto">
          {/* addTodo라는 이름으로 addTodo 함수를 props로 전달함 */}
          <TodoHeader addTodo={addTodo} changeFilter={changeFilter} />
          <TodoBody addTodo={updateTodo} deleteTodo={deleteTodo} todos={todos} filter={filter} />
        </section>
      </DefaultLayout>
    </>
  )
}

export default App
