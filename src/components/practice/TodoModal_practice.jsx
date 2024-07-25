import { useState } from "react"
import { createPortal } from "react-dom"

const TodoModal = ({isOpen, onClose, addTodo}) => {
  if (!isOpen) return null

  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [category, setCategory] = useState('')

  const handleAddButton = () => {
    addTodo(title,summary,category)
  }
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-full max-w-md  bg-white p-8 rounded-lg relative">
            <button className="absolute top-5 right-7 text-gray-500 hover:text-gray-700" onClick={onClose}>
                Close
            </button>
            <div className="flex flex-col space-y-6">
                <input type="text" placeholder="Title" className="input-field" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="Summary" className="input-field" value={summary} onChange={(e) => setSummary(e.target.value)} />
                <input type="text" placeholder="Category" className="input-field" value={category} onChange={(e) => setCategory(e.target.value)} />
                <button onClick={handleAddButton} className="bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md">
                    Add
                </button>
            </div>
        </div>
    </div>, 
    document.getElementById('modal-root')
  )
}

export default TodoModal