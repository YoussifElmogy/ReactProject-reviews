import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex]=useState(0);
  const {name,job,image,text} = people[index];


  const nextPerson = () => {
    setIndex((indx) => {
      let newIndex = indx + 1;
      if(newIndex>people.length-1){
        return 0;
      }
      return newIndex;
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) {
        return people.length-1;
      }
      return newIndex;
     
    });
  };
  const randomPerson=()=>{
    let randomN = Math.floor( Math.random()* people.length);
    setIndex(randomN);

  }

  return <article className="review">
    <div className="img-container">
      <img className="person-img" src={image} alt={name}/>
      <span className="quote-icon" >
        <FaQuoteRight></FaQuoteRight>
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job" >{job}</p>
    <p className="info" >{text}</p>
    <div className="button-containr">
      <button  className="prev-btn" >
        <FaChevronLeft onClick={prevPerson}></FaChevronLeft>
      </button>
      <button onClick={nextPerson} className="next-btn" >
        <FaChevronRight></FaChevronRight>
      </button>


    </div>
    <button className="random-btn" onClick={randomPerson} >Surprise me</button>

  </article>
};

export default Review;
