"use client"
import React from 'react'
import styles from './navbar.module.css'
import { usePathname } from 'next/navigation'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'
import { Search } from '../../components/search/Search'

const Navbar = () => {

  const pathname = usePathname()


  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <Search placeholder="Axtar..."/>
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20}/>
          <MdNotifications size={20}/>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
