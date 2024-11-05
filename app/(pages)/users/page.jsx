import React from 'react'
import styles from "../../ui/users/users.module.css"
import { Search } from '@/app/ui/components/search/Search'
import { Button } from '@/app/ui/components/button/Button'
import Image from 'next/image'
import { Pagination } from '@/app/ui/components/pagination/Pagination'

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="İstifadəçi axtar..."/>
        <Button link="users" buttonText="Əlavə et" type="main"/>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Foto</td>
            <td>Soyad</td>
            <td>Ad</td>
            <td>Ata adı</td>
            <td>Rütbə</td>
            <td>Vəzifə</td>
            <td>Əlavə edilmə tarixi</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noAvatar.png"
                alt='User Photo'
                width={40}
                height={40}
                className={styles.userImage}
                />
              </div>
            </td>
            <td>Quluzadə</td>
            <td>İlkin</td>
            <td>Vasif</td>
            <td>Leytenant</td>
            <td>Zabit-Mütəxəssis</td>
            <td>06.09.2024</td>
            <td className={styles.buttonTd}>
              <Button buttonText="Bax" link="/" type="main"/>
              <Button buttonText="Sil" link="/" type="danger" />
            </td>
          </tr>
        </tbody>
      </table>
        <Pagination/>
    </div>
  )
}

export default UsersPage
