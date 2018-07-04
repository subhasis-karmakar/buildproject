
import React from 'react';
import ReactDOM from 'react-dom';


class RootIndex extends React.Component {
	
	constructor()
	{
		super();
		
		this.record = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
				
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
				
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
	  
	  this.state  = {
		  data:'Initial data...'
	  }
	  
	  this.divColor ={data:'Green'}
	  
	  this.changeDomNodeHandler = this.changeDomNodeHandler.bind(this);
		
	  this.updateState = this.updateState.bind(this);
		
	};
	
	
	changeDomNodeHandler() {
      var myDiv = document.getElementById('myNodeDiv');
	  	  
	  var divColor, divText;
	  if(this.divColor.data != 'red')
	  {
		  divColor  = 'green';
		  divText	= "NODE IN GREEN";
		  this.divColor.data = 'red';
	  }
	  else
	  {
		  divColor  = 'red';
		  divText	= "NODE IN RED";
		  this.divColor.data = 'green';
	  }  
	  
	  ReactDOM.findDOMNode(myDiv).innerHTML 	= divText;
      ReactDOM.findDOMNode(myDiv).style.color 	= divColor;
   };
   
   	
   updateState(e){this.setState({data: e.target.value});};
	
	
   render() {	
   
		var mytableStyle = {width:"100%",border:"solid 10px #ffffff"};
		var mytabletrStyle = {width:"50%",border:"solid 1px #cccccc"};
   
        return (
				 <div>	
					<div>
						<table style={mytableStyle}>
							<tbody>
								<tr>
									<td style={mytabletrStyle}>
										<h2> Loop Through the records: </h2>
										<table>					   
										   <tbody>
											  {this.record.data.map((person, i) => <TableRow key = {i} data = {person} />)}
										   </tbody>
										</table><br />
									</td>
									<td style={mytabletrStyle}>
										<ButtonSection changeDomNodeHandler={this.changeDomNodeHandler} />
									</td>
								</tr>
								<tr>	
									<td colSpan='2'><FormSection frmContent = {this.state.data} frmFunction={this.updateState} /></td>
								</tr>
							</tbody>
						</table>
					</div>				
					
				 </div>
      );
   }
}




class TableRow extends React.Component{
	render(){
			return (
				<tr>
					<td>{this.props.i}</td>
					<td>{this.props.data.id}</td>
					<td>{this.props.data.name}</td>
					<td>{this.props.data.age}</td>
				</tr>
			);
	}	
}

class ButtonSection extends React.Component{
	
	render()
	{
		return(
					<div>
						<button onClick = {this.props.changeDomNodeHandler}>Change Node To Green/Red</button> &nbsp; <br />
						<br /><div id = "myNodeDiv">NODE</div> <br />
					</div>
		);
		
	}
}

class FormSection extends React.Component{
	render()
	{
		return(
				<div>
					<input type = "text" value = {this.props.frmContent} onChange = {this.props.frmFunction} />
					<h4>{this.props.frmContent}</h4>
				</div>
		);
	}
}




export default RootIndex;