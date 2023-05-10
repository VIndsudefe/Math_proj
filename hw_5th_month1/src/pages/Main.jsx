import React, { useState, useEffect } from 'react';
import home_img from '../sources/home.svg'
import styles from './Main.module.css'
import { Link } from 'react-router-dom';

function Main() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://math-course-p926y4f5x-baiel1922.vercel.app/course/course/")
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error(error));
  }, []);
  const cardList = cards.map(card => (

    <div  className={styles.card} style={{background:`url(${card.cover}) no-repeat` , backgroundSize:"cover"}}>  
      <Link className={styles.link} to={{
        pathname: "/catalog",
        title: { id: card.id }
        }}>
      <div key={card.id}>
        
        <h2 className={styles.h2}>{card.title}</h2>
        <p className={styles.Math}>математика</p>
        <p>{card.text}</p>    
      </div>
      </Link>
    </div>
    
  ));

  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.text}>Биз менен оной</h2>
        <img src={home_img} alt="" />
      </div>  
      <div className={styles.container}>
        {cardList}
      </div>
    </div>
  );
}
export default Main