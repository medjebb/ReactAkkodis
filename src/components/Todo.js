import React from "react";

class Todo extends React.Component {
  render() {
    const { todo, index, deleteTodo, updateTodoStatus } = this.props;

    return (
<div style={{ 
  display: "flex", 
  alignItems: "center", 
  justifyContent: "space-between",
  gap: "12px", 
  marginBottom: "12px", 
  padding: "12px", 
  border: "1px solid #ddd", 
  borderRadius: "10px",
  backgroundColor: "#199fff",
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
  transition: "0.3s ease-in-out",
  cursor: "pointer"
}}
  onMouseOver={(e) => e.currentTarget.style.boxShadow = "0px 5px 12px rgba(0, 0, 0, 0.15)"}
  onMouseOut={(e) => e.currentTarget.style.boxShadow = "0px 3px 6px rgba(0, 0, 0, 0.1)"}
>
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
      color: "white",
      outline: "none",
      fontWeight: "500",
    }} 
  />
  <select 
    value={todo.status} 
    onChange={(e) => updateTodoStatus(index, e.target.value)}
    style={{
      padding: "6px 10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      backgroundColor: "#f8f8f8",
      transition: "0.2s ease-in-out",
    }}
    onFocus={(e) => e.target.style.borderColor = "#28a745"}
    onBlur={(e) => e.target.style.borderColor = "#ccc"}
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
      borderRadius: "6px", 
      padding: "7px 14px", 
      border: "none",
      cursor: "pointer",
      fontWeight: "500",
      transition: "0.3s ease-in-out",
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
