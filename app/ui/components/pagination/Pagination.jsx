
import React from 'react'
import styles from "./pagination.module.css"
import { Button } from '../button/Button'

export const Pagination = () => {
  return (
    <div className={styles.container}>
        <Button type="disabled" link="/" buttonText="Əvvələ"/>
        <Button type="paginationNext" link="/" buttonText="Sonraya"/>
    </div>
  )
}
