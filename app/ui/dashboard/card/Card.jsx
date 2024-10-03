import React from 'react'
import styles from './card.module.css'
import { MdDashboard } from 'react-icons/md'

const Card = ({icon, title, number, difference, isPositive }) => {
  return (
    <div className={styles.container}>
        {icon}
        <div className={styles.texts}>
          <span className={styles.title}>{title}</span>
          <span className={styles.number}>{number}</span>
          <span className={styles.detail}>
          Ötən aya nisbətdə{' '}
          <span className={isPositive ? styles.positive : styles.negative}>
            {difference}% {isPositive ? 'artım' : 'azalma'}
          </span>
        </span>
      </div>
    </div>
  )
}

export default Card
