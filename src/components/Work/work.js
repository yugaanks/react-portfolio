import React, { Component } from 'react';
import GitHub from 'github-api';
const gh = new GitHub({
   username: '##github_username##',
   password: '##github_password##'
});

class Work extends Component {
	constructor(){
		super();
		this.state={
			repos: null
		}
	}

componentWillMount(){
	const me = gh.getUser();
	me.listRepos().then((res, rej)=>{
		//console.log(res);
		this.setState({repos: res.request.response})
	})
}

  render() {
  	return(
      <div>
      	<h2>Work</h2>
      	<div>
      		{
      			this.state.repos!=null ? this.state.repos.map(repo =>{
      					if(!repo.private)
      					return(
      						<div key="{repo.id+repo.name}">
      							<dt>{repo.name}</dt>
      							<dd>{repo.description}</dd>
      							<hr/>
      						</div>
      					)
      					return(<div/>)
      			}) : <div/>
      		}
      	</div>
      </div>
    )
  }
}
export default Work