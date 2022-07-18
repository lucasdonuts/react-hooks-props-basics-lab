import React from "react";
import Links from "./Links";



function About(props) {
  function isValidBio() {
    if( props.bio && props.bio != '' ) {
      return <p>{ props.bio }</p>
    }
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      { isValidBio() }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={ props.links.github } linkedin={ props.links.linkedin } />
    </div>
  );
}

export default About;
