import IconButton from '@/components/ui/iconButton'
import { TODO_CATEGORY_ICON } from '@/constants/icon'
import { useState } from 'react'
import { createPortal } from 'react-dom';
import TodoForm from './TodoForm';
import Modal from '@/components/ui/Modal';

const TodoItem = ({addTodo, deleteTodo, todo}) => {
  const [modalOpen, setModalOpen] = useState(false);
  // const todo = todos[id]
  const handleOpenModal = () => {
    setModalOpen(true);
    console.log(todo)
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  }
  const deleteHandle = () => {
    deleteTodo(todo.id)
  }

  
  return (
    <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">
        <div>
            <span className="text-lg font-medium text-gray-300">{ TODO_CATEGORY_ICON[todo.category]}</span>
            <div>
                <h2 data-test="title" className="mb-0 text-lg font-bold text-gray-100 uppercase">{todo.title}</h2>
                <p className="mt-2 text-base text-gray-200">{todo.summary}</p>
            </div>
        </div>
        <div className="flex items-center gap-1">
          <IconButton onClick={handleOpenModal} icon={'✏️'}/>
          {modalOpen && createPortal(
            <Modal onClose={handleCloseModal}>
              <TodoForm addTodo={addTodo} onClose={handleCloseModal}  type={"update"} id={todo.id} todo={todo} />
              {/* <TodoForm>New Todo</TodoForm> */}
            </Modal>, document.body)}
          <IconButton onClick={deleteHandle} textColor='text-gray-300' icon={'🗑'} />
        </div>
    </li>
  )
}

export default TodoItem