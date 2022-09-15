import React from 'react';
import buhari from '../assets/buhari.png';
import macron from '../assets/macron.png';


const Footer = () => {
  return (
    <footer>
        <div>
            <h2>TRIBUTES</h2>
            <p>World leaders pay tribute to Queen Elizabeth II</p>
        </div>
        <div>
            <div>
                <img src={buhari} alt='president'/>
                <p>The story of modern Nigeria will never be complete without a chapter on Queen Elizabeth ll, a towering global personality and an outstanding leader. She dedicated her life to making her nation, the Commonwealth and the entire world a better place.”</p>
            </div>
            <div>
                <img src={macron} alt='president'/>
                <p>“Her Majesty Queen Elizabeth II embodied the British nation's continuity and unity for over 70 years. I remember her as a friend of France, a kind-hearted queen who has left a lasting impression on her country and her century.”</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer