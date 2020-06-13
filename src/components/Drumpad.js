import React from 'react';


class Drumpad extends React.Component{
	constructor(props){
		super(props);
		
		this.playSound = this.playSound.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
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
		this.props.displayName(this.props.audioLabel);
		
	}


	render(){
	return(
		
		<div onClick = {this.playSound} className = "drum-pad" id = {this.props.audioLabel}>
			<audio className = "clip" id={this.props.keyName} src = {this.props.url}></audio>
			{this.props.keyName}
		</div>
	
	)};
}

export default Drumpad;