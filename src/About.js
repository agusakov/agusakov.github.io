import * as React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <div className="container">
      <h1>About Me</h1>
        <p>My name is Alena Gusakov, and I've just completed a masters degree in Combinatorics & Optimization 
      at the University of Waterloo.</p>

      <p>I am interested in how we can formalize mathematical topics in the Lean Proof Assistant for 
      verification, proof improvement, and automation purposes. My masters thesis is on formalizing
      William Tutte's Excluded Minor Characterization for Binary Matroids. In addition, I'm also interested
      in Computer Science pedagogy, and understanding how to communicate complex topics to novice learners.</p>
      
      <p>I'm currently working as a Sessional Instructor for CS245 at the 
      University of Delaware.</p>

      <h1>Hobbies</h1>
      <p>I love dancing - in particular, Latin dance. </p>
      </div>


    </>
  );
}