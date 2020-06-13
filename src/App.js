import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
		<div id = "drum-machine">
			<div className = "drum-pad" id = "q">Q
			</div>
			<div className = "drum-pad" id = "w">W
			</div>
			<div className = "drum-pad" id = "e">E
			</div>
			<div className = "drum-pad" id = "a">A
			</div>
			<div className = "drum-pad" id = "s">S
			</div>
			<div className = "drum-pad" id = "d">D
			</div>
			<div className = "drum-pad" id = "z">Z
			</div>
			<div className = "drum-pad" id = "x">X
			</div>
			<div className = "drum-pad" id = "c">C
			</div>
			<div id = "display">
				<h1>Hello World!</h1>
			</div>
		</div>
    </div>
  );
}

export default App;
