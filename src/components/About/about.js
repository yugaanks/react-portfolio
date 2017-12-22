import React, { Component } from 'react';
//http://victoriacana.me/ about me page example
class About extends Component {
  render() {
  	const css=` .image {
	  		background-image: url("https://i.imgur.com/wkhqzWk.jpg"); 
	  		background-size: cover; 
	  		background-position: 52.4804% 25%; 
	  		background-repeat: no-repeat; 
	  		padding-bottom: 66.6333%; 
	  		width: 671.344px;
  		}
  	`
    return(
      <div className="profile-content">
        <div className="head">
        	<div className="image">
        		<style>{css}</style>
        	</div>
        </div>
        <div className="body">
        	<section class="name-headline">
        		<section>
        			<h1 class="name">Yugaank Sharma</h1>
        		</section>
	        	<section>
		        	<h2 class="headline">
		        		<span class="roles">
			        		<span class="role">Developer</span>
			        	</span> 
		        	</h2>
	        	</section>
        	</section>
        	<section class="bio">
	        	<div>
		        	<p>Developer by day, Urban Adventurer by night. Yugaank is an ambitious young guy who enjoys developing applications, travelling, music and food. His goal 
		        	is to develop products that will improve people lives. He graduated from Stevens Institute of Technology in December 2017 and currently looking for 
		        	Full time opportunites. He is dedicated and hard working. His dream is to become the best developer in the world.</p>
		        	<p>When Yugaank isn't developing apps, He is listening to music, could be from any genre or any language. He also likes cooking and would be on the road to
		        	become a chef if there would be no computers in the world. Kappa.</p>
	        	 </div>
        	 </section>
        	 <section class="interests">
        	 	<ul class="inline">
        	 		<li class="interest">#career</li>
        	 		<li class="interest">#music</li>
        	 		<li class="interest">#travel</li>
        	 		<li class="interest">#shopping</li>
        	 		<li class="interest">#cooking</li>
        	 	</ul>
        	 </section>
        	 <section class="meta">
        	 	<ul class="meta-sections">
        	 		<li class="meta-section jobs">
        	 			<div class="meta-header">Work</div>
        	 			<ul class="meta-list">
        	 				<li class="meta-item text ellipsis">Actively Seeking Full Time Employment</li>
        	 			</ul>
        	 		</li>
    	 			<li class="meta-section schools">
    	 				<div class="meta-header">Education</div>
    	 				<ul class="meta-list">
    	 					<li class="meta-item text ellipsis">Stevens Institute of Technology</li>
    	 				</ul>
    	 			</li>
    	 		</ul>
    	 	</section>
        </div>
      </div>
    )
  }
}
export default About
