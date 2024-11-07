import React from 'react'
import styles from "./sidebar.module.css"
import {MdDashboard, MdInsertDriveFile, MdLogout} from "react-icons/md"
import MenuLink from './menuLink/MenuLink'
import Image from 'next/image'
import { ST } from 'next/dist/shared/lib/utils'

const menuItems = [
    {
        title: "Menu",
        list: [
            {
                title: "Məlumat lövhəsi",
                path: "/dashboard",
                icon: <MdDashboard/>
            },
            {
                title: "Sifarişlər",
                path: "/orders",
                icon: <MdInsertDriveFile/>
            },
            {
                title: "İstifadəçilər",
                path: "/users",
                icon: <MdInsertDriveFile/>
            }
        ]
    },
    {
        title: "Analitika",
        list: [
           
        ]
    },
    {
        title: "Tətbiqlər",
        list: [
            
        ]
    }
]



const Sidebar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.userContainer}>
            <Image src="/noAvatar.png" alt="" width="50" height="50" className={styles.userProfilePhoto} />
            <div className={styles.userDetail}>
                <span className={styles.userName}>Ilkin Guluzade</span>
                <span className={styles.userPosition}>FullStack Developer</span>
            </div>
        </div>
      <ul className={styles.list}>
        {
            menuItems.map(menuItem => (
                <li key={menuItem.title}>
                <span className={styles.menuItem}>{menuItem.title}</span>
                {menuItem.list.map(item => (<MenuLink item={item} key={item.title}/>))}
                </li>
            ))
        }
      </ul>
      <button className={styles.logout}>
        <MdLogout/>
        Çıxış
      </button>
    </div>
  )
}

export default Sidebar
