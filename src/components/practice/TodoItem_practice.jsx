import IconButton from "../ui/iconButton"

const TodoItem = () => {
  return (
    <li className="flex-col">
        <div><img src="" alt="" />아이콘</div>
        <div className="flex justify-around">
            <div className="font-bold">REACT 공부</div>
            <div className="flex">
                <IconButton icon={'✏️'}/>
                <IconButton icon={'🗑'}/>
            </div>
        </div>
        <p>React를 공부한다.</p>
    </li>
  )
}

export default TodoItem