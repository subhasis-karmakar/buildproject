
import React from 'react';

import logo from '../../images/logo.svg';
import footer_logo from '../../images/logo.png';

import '../../css/App.css';


export class Header extends React.Component{
	render() {			
			
		return (
			
			<div className="App">
				<div className="App-header">
				  <img src={logo} alt="Logo" className="App-logo" />
				  <h2>Welcome to React</h2>				  
				</div>
				<p className="App-intro">
				  Lets get started .... 
				</p>
			  </div>	
			
		);
	}
}

export class HeaderContent extends React.Component{
	render(){

		var myStyle = 
		{
			fontSize: 50,
			color: '#FF0000'
		};
	
		return(
			<div>
				<h1 style={myStyle}>Welcome to React</h1>	
			</div>
		);
	}
}


export class Footer extends React.Component{
	render() {	
		return (	
		
			<div className="App-footer">				
			  <div className="footer-left">&copy; {new Date().getFullYear()} ReactJS Website</div>			
			  <div className="footer-right">Powered By <img src={footer_logo} alt="MSSPL" height="15" /></div>			  
  		    </div>		
			
		);
	}
}
