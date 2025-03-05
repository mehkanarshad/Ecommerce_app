import React, { useEffect, useState } from 'react'
import Logout from './Logout'
import DeleteProfile from './DeleteProfile'
import '../styles/Home.css'
import Carousel from './Carousel';
import Card1 from '../assets/Card1.jpg';
import Card2 from '../assets/Card2.jpg';
import Card3 from '../assets/Card3.jpg';

export default function Home() {
  const phrases = [
    "Welcome to our store",
    "Best Deals Awaits",
    "Shop the Latest Trends",
    "Fast and secure checkout",
    "Your one shop-stop"
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting , setIsDeleting] = useState(false);
  const [phraseIndex, setIsPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const speed = 100;
  const deleteSpeed = 50;
  const pauseTime = 1000;

  useEffect(()=>{
    const currentPhrase = phrases[phraseIndex];
    let timeoutId;
    if (!isDeleting && charIndex < currentPhrase.length){
      timeoutId = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } , speed);
    }else if (isDeleting && charIndex > 0){
      timeoutId = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deleteSpeed)
    }else{
      timeoutId = setTimeout(() => {
        if(!isDeleting){
          setIsDeleting(true);
        }else{
          setIsDeleting(false);
          setIsPhraseIndex((phraseIndex + 1) % phrases.length);
          setCharIndex(0);
        }
      }, pauseTime)
    }
    return () => clearTimeout(timeoutId);
  } , [charIndex , isDeleting , phraseIndex])
  return (
    <>
    <div className='inner-page main-page'>
      <div className='main-section'>
        <p className='main-heading'>{displayedText}</p>
        <p className='sub-heading'>25% Off On All Products</p>
        <a href= "" className='primary-button'> Shop Now </a>
        <a href="" className='secondary-button'> Find More </a>
      </div>
    </div>
    <div style={{display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Carousel/>
    </div>
    <div className="cards">
      <div className="card">
        <img src={Card1} alt="Card 1" className="card-img" />
        <div className="card-text">
          <h1>Luxury Meets Comfort</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
      </div>
      <div className="card">
        <img src={Card2} alt="Card 2" className="card-img" />
        <div className="card-text">
          <h1>Where Trends Begin</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="card">
        <img src={Card3} alt="Card 3" className="card-img" />
        <div className="card-text">
          <h1>Effortless Glamour</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
      </div>
    </div>

    </>
  )
}
