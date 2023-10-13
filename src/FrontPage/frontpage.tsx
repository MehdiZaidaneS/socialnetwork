import React from 'react'
import Login from '../LogIn/login'
import AppStore from "./AppStore.png"
import GooglePlay from "./GooglePlay.png"
import Phone from "./Phone.png"
import styles from "./frontpage.module.css"

type FrontpageProps = {

}

const Frontpage: React.FC<FrontpageProps> = () => {

  return (
    <div className={styles.frontPageBlock}>
      <img id={styles.photo} src={Phone} alt="" width={400}></img> 
      <div className={styles.frontPage}>
        <div className={styles.axis}>
          <h1>Zhoot</h1>
        </div>
      </div>

      <Login></Login>

      <div className={styles.getIn}>
        <img src={AppStore} alt="" width={125}></img>
        <img src={GooglePlay} alt="" width={155}></img>
      </div>

    </div>
  )
}

export default Frontpage
