import React from 'react';
import './Drumpad.css';


const active = {
	background: 'hsl(240, 100%, 47%)',
	boxShadow: 'none',
	transform: 'scale(.9,.9)',
	margin: '5px'
}

const inactive = {
	background:'#0000FF	',
	boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.75)',
	margin: '5px'
}

class Drumpad extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			padStyle: inactive
		};
		
		this.playSound = this.playSound.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this)
		this.padPress = this.padPress.bind(this);
	}
	
	padPress(){
		this.state.padStyle.background === 'hsl(240, 100%, 47%)' ? 
			this.setState({
				padStyle: inactive
			}) :
			this.setState({
				padStyle: active
			})
	}
	
	
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}
	handleKeyPress(e) {
		if (e.keyCode === this.props.keyCode) {
			this.playSound();
			
		}
	}
	
	playSound(){
		let sound = document.getElementById(this.props.keyName);
		sound.currentTime = 0;
		sound.play();	
		this.padPress();
		this.props.displayName(this.props.audioLabel);
		setTimeout(() => this.padPress(), 200);
		
	}


	render(){
	return(
		
		<div style = {this.state.padStyle} onClick = {this.playSound} className = "drum-pad" id = {this.props.audioLabel}>
			<audio className = "clip" id={this.props.keyName} src = {this.props.url}></audio>
			{this.props.keyName}
		</div>
	
	)};
}

export default Drumpad;