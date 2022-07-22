import React from 'react'
import logo from "./faviconn.ico.png";
import Login from '../LogIn/login';
import styles from "./frontpage.module.css"

type FrontpageProps = {

}

const Frontpage: React.FC<FrontpageProps> = () => {
  return (
    <div>
      <div className={styles.frontPage}>
        <div>
          <img src={logo} width={160} alt=""/>
        </div>
        <div>
          <h1>ChatSN</h1>
        </div>
      </div>
      <Login></Login>
    </div>
  )
}

export default Frontpage
