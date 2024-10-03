import React from 'react'
import styles from './rightbar.module.css'
import Image from "next/image";
import {IoMdEye} from "react-icons/io";
const Rightbar = () => {
  return (
      <div className={styles.container}>
          <div className={styles.item}>
              <div className={styles.bgContainer}>
                  <Image src="/purchaseOrder.png" alt="" fill className={styles.bg}/>
              </div>
              <div className={styles.texts}>
                  <div className={styles.notification}>
                      <Image src="/contract.png" alt="" width={30} height={30}/>
                      <span>
                    İmzalanması gözlənilir
                </span>
                  </div>
                  <h3 className={styles.title}>XXX XXXXX tərəfindən satınalma raportu yazıldı</h3>
                  <span className={styles.date}>Raportun yazılma tarixi: 20.09.2024</span>
                  <button className={styles.button}><IoMdEye/> Detallara bax</button>
              </div>
          </div>
          <div className={styles.item}>
              <div className={styles.bgContainer}>
                  <Image src="/purchaseOrder.png" alt="" fill className={styles.bg}/>
              </div>
              <div className={styles.texts}>
                  <div className={styles.notification}>
                      <Image src="/contract.png" alt="" width={30} height={30}/>
                      <span>
                    İmzalanması gözlənilir
                </span>
                  </div>
                  <h3 className={styles.title}>XXX XXXXX tərəfindən satınalma raportu yazıldı</h3>
                  <span className={styles.date}>Raportun yazılma tarixi: 20.09.2024</span>
                  <button className={styles.button}><IoMdEye/> Detallara bax</button>
              </div>
          </div>
          <div className={styles.item}>
              <div className={styles.bgContainer}>
                  <Image src="/purchaseOrder.png" alt="" fill className={styles.bg}/>
              </div>
              <div className={styles.texts}>
                  <div className={styles.notification}>
                      <Image src="/contract.png" alt="" width={30} height={30}/>
                      <span>
                    İmzalanması gözlənilir
                </span>
                  </div>
                  <h3 className={styles.title}>XXX XXXXX tərəfindən satınalma raportu yazıldı</h3>
                  <span className={styles.date}>Raportun yazılma tarixi: 20.09.2024</span>
                  <button className={styles.button}><IoMdEye/> Detallara bax</button>
              </div>
          </div>
          <div className={styles.item}>
              <div className={styles.bgContainer}>
                  <Image src="/purchaseOrder.png" alt="" fill className={styles.bg}/>
              </div>
              <div className={styles.texts}>
                  <div className={styles.notification}>
                      <Image src="/contract.png" alt="" width={30} height={30}/>
                      <span>
                    İmzalanması gözlənilir
                </span>
                  </div>
                  <h3 className={styles.title}>XXX XXXXX tərəfindən satınalma raportu yazıldı</h3>
                  <span className={styles.date}>Raportun yazılma tarixi: 20.09.2024</span>
                  <button className={styles.button}><IoMdEye/> Detallara bax</button>
              </div>
          </div>
          <div className={styles.item}>
              <div className={styles.bgContainer}>
                  <Image src="/purchaseOrder.png" alt="" fill className={styles.bg}/>
              </div>
              <div className={styles.texts}>
                  <div className={styles.notification}>
                      <Image src="/contract.png" alt="" width={30} height={30}/>
                      <span>
                    İmzalanması gözlənilir
                </span>
                  </div>
                  <h3 className={styles.title}>XXX XXXXX tərəfindən satınalma raportu yazıldı</h3>
                  <span className={styles.date}>Raportun yazılma tarixi: 20.09.2024</span>
                  <button className={styles.button}><IoMdEye/> Detallara bax</button>
              </div>
          </div>
          <div className={styles.item}>
              <div className={styles.bgContainer}>
                  <Image src="/purchaseOrder.png" alt="" fill className={styles.bg}/>
              </div>
              <div className={styles.texts}>
                  <div className={styles.notification}>
                      <Image src="/contract.png" alt="" width={30} height={30}/>
                      <span>
                    İmzalanması gözlənilir
                </span>
                  </div>
                  <h3 className={styles.title}>XXX XXXXX tərəfindən satınalma raportu yazıldı</h3>
                  <span className={styles.date}>Raportun yazılma tarixi: 20.09.2024</span>
                  <button className={styles.button}><IoMdEye/> Detallara bax</button>
              </div>
          </div>
      </div>
  )
}

export default Rightbar
