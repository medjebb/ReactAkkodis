import React from "react";

class Todo extends React.Component {
  render() {
    const { todo, index, deleteTodo, updateTodoStatus } = this.props;

    return (
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between",
        gap: "10px", 
        marginBottom: "10px", 
        padding: "10px", 
        border: "1px solid #ddd", 
        borderRadius: "8px",
        backgroundColor: "#f9f9f9"
      }}>
        <input 
          type="text" 
          value={todo.text} 
          readOnly 
          style={{
            flex: 1,
            padding: "8px",
            border: "none",
            backgroundColor: "transparent",
            fontSize: "16px",
            outline: "none"
          }} 
        />
        <select 
          value={todo.status} 
          onChange={(e) => updateTodoStatus(index, e.target.value)}
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            cursor: "pointer"
          }}
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button 
          onClick={() => deleteTodo(index)} 
          style={{ 
            backgroundColor: "#ff4d4d", 
            color: "white", 
            borderRadius: "5px", 
            padding: "6px 12px", 
            border: "none",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#cc0000"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#ff4d4d"}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Todo;
