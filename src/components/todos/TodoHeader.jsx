// index.html 같은 곳에 작성했던 방식처럼 동일하게
import TodoFilter from "@/components/todos/TodoFilter";
import { createPortal } from "react-dom";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import TodoForm from "./TodoForm";
// 함수형 컴포넌트

const TodoHeader = ({addTodo, changeFilter}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // const [modalOpen, open] = useState(false)
  // const modalClose = () => open(false);
  
    return (
        <div className="flex items-center justify-between mb-2" id="task-control">
        <button onClick={handleOpenModal}  className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
                data-cy="add-todo-button">Add Todo
        </button>
        {/* Modal 호출 부분 */}
        {modalOpen && createPortal(
          <Modal onClose={handleCloseModal}>
            <TodoForm  onClose={handleCloseModal} addTodo={addTodo} type={"add"}/>
          </Modal>, document.body )}
        <TodoFilter changeFilter={changeFilter} />
      </div> 
    )
}


export default TodoHeader;

