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
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}>
        <h2 style={{ color: "#333" }}>Todo List</h2>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={(e) => this.setState({ newTodo: e.target.value })}
            placeholder="New Todo"
            style={{
              flex: "1",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginRight: "10px",
            }}
          />
          <button 
            onClick={this.handleAddTodo} 
            style={{ 
              backgroundColor: "#28a745", 
              color: "white", 
              border: "none", 
              padding: "8px 15px", 
              borderRadius: "5px", 
              cursor: "pointer" 
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
