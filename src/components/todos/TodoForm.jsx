import { TODO_CATEGORY_ICON } from '@/constants/icon'
import { useEffect, useState } from 'react'

const TodoForm = ({onClose, addTodo, type, id, todo}) => {
    const [title, setTitle] = useState(type === "update" ? todo.title : '')
    const [summary, setSummary] = useState(type === "update" ? todo.summary : '')
    const [category, setCategory] = useState(type === "update" ? todo.category : 'TODO')
    const [isFormValid, setIsFormValid] = useState(false)


    const addTodoHandler = () => {
        console.log({title, summary,category})
        console.log("addTodo(add)", addTodo)
        onClose()
        addTodo({title, summary, category})
    }

    const updateTodoHandler = () => {
        onClose()
        console.log("addTodo(update)", addTodo)
        addTodo({id, title, summary, category})
    }


    // 강사님 수업 부분 코드 
    
    // const [title, setTitle] = useState(isNewTodoForm(children) ? '' : todo.title)
    // const isNewTodoForm = (children) => children.startsWith('New')?true:false;

    // const addOrUpdateTodoHandler = () => {
    //     if(isNewTodoForm(children)){
    //         //Add 로직
    //         const newTodo = {title, summary, category};
    //         addTodo(newTodo);
    //     } else {
    //         const updateTodo = {
    //             id:todo.id,
    //             title,
    //             summary,
    //             category
    //         }
    //     }
    // }

    useEffect(()=>{
      const result = (title === '' || summary === '') ? false : true
      setIsFormValid(result)
    }, [title, summary])

    const isFormInValid = title === '' || summary === '';

    return (
        <>
                {type==="add"?<h3 className="text-3xl text-red-200">Add Todo</h3>:<h3 className="text-3xl text-red-200">Update Todo</h3>}
                <form className='my-2'>
                    <div>
                        <label className='block mb-2 text-xl text-white' htmlFor='title'>Title</label>
                        <input className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded' 
                            type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label className='block mb-2 text-xl text-white' htmlFor='summary'>Summary</label>
                        <textarea className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded' 
                                value={summary} rows='5' onChange={(e) => setSummary(e.target.value)} />
                    </div>
                    <div>
                        <label className='block mb-2 text-xl text-white' htmlFor='category'>Category</label>
                        <select className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded' 
                                value={category} onChange={(e) => setCategory(e.target.value)} >

                            <option value='TODO'>{TODO_CATEGORY_ICON.TODO} To do</option>
                            <option value='PROGRESS'>{TODO_CATEGORY_ICON.PROGRESS} On progress</option>
                            <option value='DONE'>{TODO_CATEGORY_ICON.DONE} Done</option>
                        </select>
                    </div>
                    {!isFormValid && <div className='mt-2 text-red-500'>모든 항목을 채워서 작성해주세요1</div>}
                    {isFormInValid && <div className='mt-2 text-red-500'>모든 항목을 채워서 작성해주세요2</div>}
                    <div className='flex justify-end gap-4'>
                        <button onClick={onClose} className='text-xl text-white' type='button'>Cancel</button>
                        <button onClick={type === 'add' ? addTodoHandler : updateTodoHandler} className='px-6 py-3 text-xl text-red-200' type='button' disabled={isFormInValid} >
                            {type === 'add' ? "add": "update"}
                        </button>
                    </div>
                </form>
            </>
    )
    }

export default TodoForm