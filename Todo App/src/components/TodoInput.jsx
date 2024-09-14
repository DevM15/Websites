export default function Todoinput(props) {
const {todoValue, setTodoValue, handleAddTodo} = props

    return(
        <div className="input">
            <input value={todoValue} onChange={(e) => {setTodoValue(e.target.value)}} type="text" placeholder="Enter Todo"/>
            <button className="add" onClick={() => {handleAddTodo(todoValue) ,setTodoValue('')}}>Add</button>
        </div> 
    )
}