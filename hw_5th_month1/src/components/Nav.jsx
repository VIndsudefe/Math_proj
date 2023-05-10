import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'
function Nav() {
  return (
    <div className={styles.nav}>
      <ul className={styles.menu}>
        <li className={styles.menupart1}><li className={styles.menuItem}><Link className={styles.link} to='/'>Logonpm</Link></li></li>
        
        <li className={styles.menupart2}>
          <li className={styles.menuItem}><Link className={styles.link} to='/about'>Биз жонундо</Link> </li>
          <li className={styles.menuItem}><Link className={styles.link} to='/catalog'>Кыргызча</Link></li>
          <li className={styles.menuItem}><Link className={styles.link} to='/registr'>Англисче</Link></li>
        </li>
      </ul>
    </div>
  )
}

export default Nav