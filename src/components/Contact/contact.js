import React, { Component } from 'react';

class Contact extends Component {
  
  render() {

    function handleQuery(e){
    	e.preventDefault()
	  	var x=document.getElementById("form");
	  	if(x.style.display==='none')
	  		x.style.display="block";
		else
			x.style.display="none";
  	}
    return(
      <div>
        <h2>Contact</h2>
        <div>
        	<ul>
        		<li>Mobile: +1 917-831-2282</li>
        		<li>Email: <a href="mailto:yugaanks@yahoo.co.in">yugaanks@yahoo.co.in</a></li>
        		<li><a href="https://www.linkedin.com/in/yugaanks">LinkedIn</a></li>
        		<li>
        			Leave a message here
        			<div id="query">
        				<form id="form" onsubmit={handleQuery} method="GET" action="">
        					<textarea rows="4" cols="50" placeholder="your query..."/><br/>
        					<input type="submit" value="Submit"/>
        				</form>
        			</div>
        		</li>
        	</ul>
        </div>
      </div>
    )
  }
}
export default Contact