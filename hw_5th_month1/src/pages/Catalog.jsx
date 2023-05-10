import React from 'react'
import styles from "./Catalog.module.css"
import { useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';

function Catalog(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://math-course-p926y4f5x-baiel1922.vercel.app/course/course/")
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error(error));
  }, []);
  const cardList = cards.map(card => (

    <div  className={styles.card} style={{background:`url(${card.cover}) no-repeat` , backgroundSize:"cover"}}>  
      <Link className={styles.link} to='/registr'>
      <div key={card.id}>
        <h2 className={styles.h2}>{card.title}</h2>
        <p>{card.text}</p>    
      </div>
      </Link>
    </div>
    
  ));




  return (
    <div className={styles.container2}>
        <div className={styles.leftPart}>
          <div className={styles.tex1}>
            Матемамтика
            <p className={styles.description}>класс {props.title}</p>
          </div>
          <div className={styles.tex1}>
            Об курсе
            <p className={styles.description}>
              очень интересно
            </p>
          </div>
        </div>
        <div className={styles.rightPart}>
          {cardList}
        </div>
    </div>
  )
}

export default Catalog