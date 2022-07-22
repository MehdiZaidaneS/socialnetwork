import React from 'react'
import styles from "./login.module.css"

type LoginProps = {

}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className={styles.logIn} >
      <h2>Sign In</h2>
      <h5>Username:</h5>
      <input></input>
      <h5>Password:</h5>
      <input></input>
    </div>
  )
}

export default Login
