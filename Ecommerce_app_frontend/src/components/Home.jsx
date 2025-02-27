import React, { useEffect, useState } from 'react'
import Logout from './Logout'
import DeleteProfile from './DeleteProfile'
import '../styles/Home.css'

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
    <div className='inner-page main-page'>
      <image src='https://images.unsplash.com/photo-1543698666-124b9208bb03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D' width="100vw" height="100%"/>
      <div className='main-section'>
        <p className='main-heading'>{displayedText}</p>
        <p className='sub-heading'>25% Off On All Products</p>
        <a href= "" className='primary-button'> Shop Now </a>
        <a href="" className='secondary-button'> Find More </a>
      </div>
    </div>
  )
}
