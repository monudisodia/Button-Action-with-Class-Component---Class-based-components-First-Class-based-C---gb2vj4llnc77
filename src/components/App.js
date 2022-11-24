
import React, {Component} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state={paragraph:null};
		//this.clickHandler = this.clickHandler.bind(this);
	}
   clickHandler(){
	this.setState({
		paragraph:
    <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>   
	});
  }
    render() {
    	return(
    		<div id="main">
				{this.state.paragraph}
				<button id="click" onClick={()=>this.clickHandler()}>Click</button>
				
    		</div>
    	);
    }
}


export default App;
