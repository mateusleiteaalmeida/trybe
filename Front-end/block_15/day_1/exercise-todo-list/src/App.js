import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
			selectedTodo: "",
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

	select({target}) {
		if (target.className === "unselected") {
			const selecteds = document.querySelectorAll(".selected")
			selecteds.forEach((select) => {
				select.style.backgroundColor = "white";
				select.className = "unselected";
			})
			target.className = "selected";
			target.style.backgroundColor = "red";
			this.setState({ selectedTodo: target.id })
		} else {
			target.className = "unselected"
			target.style.backgroundColor = "white"
			this.setState({ selectedTodo: "" })
		}
	}

	removeSelected(){
		console.log("remover")
		const { listTodo, selectedTodo } = this.state;
		
		this.setState({
			listTodo: listTodo.filter((todo, index) => index !== Number(selectedTodo)),
			selectedTodo: ""
		})
	}

  render() {
    const { listTodo, selectedTodo } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)}
				
				/>
				<input
					id="btnRemove"
					type="button"
					value="Remover"
					data-testid="id-remove"
					onClick={({target}) => this.removeSelected({target})}
					disabled={selectedTodo === ""}
				/>
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item
										content={todo}
										select={({target}) => this.select({target})}
										id={index}
									/>
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;
