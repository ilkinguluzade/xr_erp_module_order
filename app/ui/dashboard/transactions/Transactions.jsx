import React from 'react'
import styles from './transactions.module.css'

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ən son daxil olan 10 sifariş</h2>
      <table className={styles.table}>
        <thead className={styles.table_header}>
          <tr>
            <td>Raportun tarixi</td>
            <td>Təstiqlənmə tarixi</td>
            <td>Əmr №</td>
            <td>Məhsul</td>
            <td>Sayı (ədəd)</td>
            <td>Sifarişçi</td>
            <td>Kimə</td>
            <td>Cari status</td>
            <td>Əməliyyatlar</td>
          </tr>
        </thead>
        <tbody  className={styles.table_body}>
          <tr>
            <td>20.09.2024</td>
            <td>24.09.2024</td>
            <td>12/2N</td>
            <td>Noutbuk</td>
            <td>2</td>
            <td>XXXX XXXX</td>
            <td>YY YYY</td>
            <td className={`${styles.status} ${styles.pending}`}>Gözləmədə</td>
            <td>X</td>
          </tr>
          <tr>
            <td>20.09.2024</td>
            <td>24.09.2024</td>
            <td>12/2N</td>
            <td>Noutbuk</td>
            <td>1</td>
            <td>XXXX XXXX</td>
            <td>YY YYY</td>
            <td className={`${styles.status} ${styles.done}`}>Tamamlandı</td>
            <td>X</td>
          </tr>
          <tr>
            <td>20.09.2024</td>
            <td>24.09.2024</td>
            <td>12/2N</td>
            <td>Klaviatura</td>
            <td>3</td>
            <td>XXXX XXXX</td>
            <td>YY YYY</td>
            <td className={`${styles.status} ${styles.done}`}>Tamamlandı</td>
            <td>X</td>
          </tr>
          <tr>
            <td>20.09.2024</td>
            <td>24.09.2024</td>
            <td>12/2N</td>
            <td>Qələm</td>
            <td>54</td>
            <td>XXXX XXXX</td>
            <td>YY YYY</td>
            <td className={`${styles.status} ${styles.cancelled}`}>İmtina edildi</td>
            <td>X</td>
          </tr>
          <tr>
            <td>20.09.2024</td>
            <td>24.09.2024</td>
            <td>12/2N</td>
            <td>Pozan</td>
            <td>73</td>
            <td>XXXX XXXX</td>
            <td>YY YYY</td>
            <td className={`${styles.status} ${styles.pending}`}>Gözləmədə</td>
            <td>X</td>
          </tr>
          <tr>
            <td>20.09.2024</td>
            <td>24.09.2024</td>
            <td>12/2N</td>
            <td>Soyuducu</td>
            <td>2</td>
            <td>XXXX XXXX</td>
            <td>YY YYY</td>
            <td className={`${styles.status} ${styles.cancelled}`}>İmtina edildi</td>
            <td>X</td>
          </tr>
          <tr>
            <td>20.09.2024</td>
            <td>24.09.2024</td>
            <td>12/2N</td>
            <td>Masa</td>
            <td>1</td>
            <td>XXXX XXXX</td>
            <td>YY YYY</td>
            <td className={`${styles.status} ${styles.pending}`}>Gözləmədə</td>
            <td>X</td>
          </tr>
          <tr>
            <td>20.09.2024</td>
            <td>24.09.2024</td>
            <td>12/2N</td>
            <td>Masa</td>
            <td>3</td>
            <td>XXXX XXXX</td>
            <td>YY YYY</td>
            <td className={`${styles.status} ${styles.pending}`}>Gözləmədə</td>
            <td>X</td>
          </tr>
          <tr>
            <td>20.09.2024</td>
            <td>24.09.2024</td>
            <td>12/2N</td>
            <td>Stolüstü kompüter</td>
            <td>2</td>
            <td>XXXX XXXX</td>
            <td>YY YYY</td>
            <td className={`${styles.status} ${styles.pending}`}>Gözləmədə</td>
            <td>X</td>
          </tr>
          <tr>
            <td>20.09.2024</td>
            <td>24.09.2024</td>
            <td>12/2N</td>
            <td>Klaviatura</td>
            <td>4</td>
            <td>XXXX XXXX</td>
            <td>YY YYY</td>
            <td className={`${styles.status} ${styles.pending}`}>Gözləmədə</td>
            <td>X</td>
          </tr>

        </tbody>
   
      </table>
    </div>
  )
}

export default Transactions
