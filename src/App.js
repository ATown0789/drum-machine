import React from 'react';
import './App.css';
import Drumpad from './components/Drumpad';

const PADINFO = [{
	keyName: 'Q',
	keyCode:81,
	audioLabel:'Heater-1',
	url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
	},{
	keyName: 'W',
	keyCode:87,
	audioLabel:'Heater-2',
	url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
	},{
	keyName: 'E',
	keyCode:69,
	audioLabel:'Heater-3',
	url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
	},{
	keyName: 'A',
	keyCode:65,
	audioLabel:'Heater-4',
	url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
	},{
	keyName: 'S',
	keyCode:83,
	audioLabel:'Clap',
	url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
	},{
	keyName: 'D',
	keyCode:68,
	audioLabel:'Open-HH',
	url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
	},{
	keyName: 'Z',
	keyCode:90,
	audioLabel:"Kick-n'-Hat",
	url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
	},{
	keyName: 'X',
	keyCode:88,
	audioLabel:'Kick',
	url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
	},{
	keyName: 'C',
	keyCode:67,
	audioLabel:'Closed-HH',
	url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
}]

class App extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			audioLabel:''
		}
		
		this.displayName = this.displayName.bind(this);
	}
	
	displayName(label){
		this.setState({
			audioLabel: label
		});
	}
	
	

	render(){
		let drumpad = PADINFO.map(a => <Drumpad displayName = {this.displayName} keyCode = {a.keyCode} url ={a.url} keyName = {a.keyName} audioLabel ={a.audioLabel} />)
	
	  return (
		<div className="App">
			<h1>Drum Machine</h1>
			<div id = "drum-machine">
				{drumpad}
				<div id = "display">
					<h1>{this.state.audioLabel}</h1>
				</div>
			</div>
		</div>
	)};
}

export default App;
