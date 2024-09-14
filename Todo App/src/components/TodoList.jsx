export default function TodoList(props) {
    const {todo, handleDeleteTodo, handleEditTodo, moveUpTodo, moveDownTodo} = props

    return (
        <>
        <h3>List</h3>
        <ol>
            {todo.map((todo, index) => (
                <li key={index}>
                    <p>{todo}</p>
                    <div className="actionContainer">
                    <button onClick={() => {
                        moveUpTodo(index)
                    }}>
                        <i class="fa-solid fa-angle-up"></i>
                    </button>
                    <button onClick={() => {
                        moveDownTodo(index)
                    }}>
                        <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <button onClick={() => {
                        handleEditTodo(index)
                    }}>
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button onClick={() => handleDeleteTodo(index)}>
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                    </div>
                </li>
            ))}
        </ol>
        </>  
    )
}