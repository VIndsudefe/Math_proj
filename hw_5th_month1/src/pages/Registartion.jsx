/* Компонента с модульными классами */
import React, { useEffect, useState } from 'react';
import styles from './Registration.module.css';
import Quiz from '../components/Quiz';

function Registration() {
  const [data, setData] = useState({});

  useEffect(() => {
    // Здесь вы можете выполнить запрос к бэкенду, чтобы получить данные
    fetch('/backend-data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.description}>{data.description}</p>
      <img src={data.image} alt="Изображение" className={styles.image} />
      <Quiz/>
    </div>
  );
}

export default Registration;
