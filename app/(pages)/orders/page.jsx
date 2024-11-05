import React from 'react'
import styles from "../../ui/users/users.module.css"
import { Search } from '@/app/ui/components/search/Search'
import { Button } from '@/app/ui/components/button/Button'
import Image from 'next/image'
import { Pagination } from '@/app/ui/components/pagination/Pagination'

const OrdersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Sifariş axtar..."/>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Kateqoriya</td>
            <td>Alt kateqoriya</td>
            <td>Sifarişçi</td>
            <td>İstifadəçi</td>
            <td>Əmr No</td>
            <td>Sifariş tarixi</td>
            <td>Say</td>
            <td>Ehtimal olunan dəyər</td>
            <td>Cari status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Məişət texnikası</td>
            <td>Tozsoran</td>
            <td>Ağazadə Ayxan</td>
            <td>Quluzadə İlkin Vasif</td>
            <td>SA12/3</td>
            <td>06.09.2024</td>
            <td>12</td>
            <td>4321 AZN</td>
            <td>İmza gözlənilir</td>
            <td className={styles.buttonTd}>
              <Button buttonText="Bax" link="/" type="main"/>
              <Button buttonText="Redaktə et" link="/" type="main"/>
            </td>
          </tr>
        </tbody>
      </table>
        <Pagination/>
    </div>
  )
}

export default OrdersPage
