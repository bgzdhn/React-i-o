import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends React.Component {
  constructor(props) {
     super(props);
     this.state = { 
	 userNameForInput: '', 
	 userNameForDisplay: '',
	 message: '',
	 }; 
  }

  myChangeHandler = (e) => {
    this.setState ({userNameForInput: e.target.value});
  }

  mySubmitHandler = () => {
    this.setState ({userNameForDisplay: this.state.userNameForInput}); 
	this.setState ({message: 'Hello'});
  }

  render() {
      const {userNameForDisplay} = this.state

      return (
	    <div>
          <form>
              <h2>Enter your name:</h2>

              <input
                  type='text'
                  onChange={this.myChangeHandler}
              />

              <div id = "btn" onClick={this.mySubmitHandler}>Submit</div>
          </form>
		  
		  <p>{this.state.message} {userNameForDisplay}</p>

		</div>
      );
  }
}

export default App;