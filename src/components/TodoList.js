import React from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, updateTodoStatus } from "../redux/todoReducer/actions";
import Todo from "./Todo";

class TodoList extends React.Component {
  state = {
    newTodo: "",
  };
    
  handleAddTodo = () => {
    if (this.state.newTodo.trim() === "") return;
    this.props.addTodo({ text: this.state.newTodo, status: "Todo" });
    this.setState({ newTodo: "" });
  };

  render() {
    return (
      <div style={{
        margin: "auto",
        textAlign: "center",
        padding: "25px",
        maxWidth: "800px"
      }}>
        <h2 style={{ color: "#222", fontSize: "24px", marginBottom: "15px" }}>Todo List</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={(e) => this.setState({ newTodo: e.target.value })}
            placeholder="New Todo"
            style={{
              flex: "1",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              outline: "none",
              fontSize: "16px",
              transition: "border-color 0.3s ease-in-out",
            }}
            onFocus={(e) => e.target.style.borderColor = "#28a745"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
          <button 
            onClick={this.handleAddTodo} 
            style={{ 
              backgroundColor: "blue", 
              color: "white", 
              border: "none", 
              padding: "10px 18px", 
              borderRadius: "8px", 
              fontSize: "16px",
              cursor: "pointer",
            }}
            
          >
            Add
          </button>
        </div>
     
      
        {this.props.todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            deleteTodo={this.props.deleteTodo}
            updateTodoStatus={this.props.updateTodoStatus}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

export default connect(mapStateToProps, { addTodo, deleteTodo, updateTodoStatus })(TodoList);
