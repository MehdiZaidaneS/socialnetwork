import React, { useState } from 'react'
import logo from "./logo.png"
import styles from "./login.module.css"

type LoginProps = {
   
}

const Login: React.FC<LoginProps> = () => {

  const [logInActive, setLogInActive] = useState(true)
  const [fullName, setFullName] = useState();
  const [userName, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password,setPassword] = useState();
  const [show, setShow] = useState(false)
  

  const handleInputChange = (e:any) => {
    const {id , value} = e.target;
    if(id === "fullName"){
        setFullName(value);
    }
    if(id === "userName"){
        setUsername(value);
    }
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
    
}

 const handleSubmit  = () => {
     if(userName === "admin" && password === "admin"){
        setShow(true)
     }else{
        setShow(false)
     }
 }

 

  return (
    <div>
          <div className={styles.buttons}>
            <button id={styles.button1} onClick={() => setLogInActive(true)}>Sign In</button>
            <button id={styles.button2} onClick={() => setLogInActive(false)}>Register</button>
          </div>
          { logInActive === true &&
          <div className={styles.form}>
                <div className={styles.logo}>
                    <img src={logo} alt="" width={65}></img>
                </div>
                <div className={styles.username}>
                    {/* <label className={styles.form__label} htmlFor="firstName">Username </label> */}
                    <input className={styles.form__input} type="text" value={userName} onChange = {(e) => handleInputChange(e)} id="userName" placeholder="Username"/>
                </div>
                <div className={styles.lastname}>
                    {/* <label className={styles.form__label} htmlFor="lastName">Password </label> */}
                    <input  type="password" name="" id="password" value={password}  className={styles.form__input} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className={styles.footer}>
                <button onClick={()=>handleSubmit()} type="submit" className={styles.btn}>Log In</button>
                    { show === true &&
                    <p style={{color:"green"}}>Login successful!</p>
                    }
                    <p>Forgot password?</p>
                </div> 
          </div>
          }

          { logInActive === false &&
          <div className={styles.form}>
                  <div className={styles.logo}>
                      <img src={logo} alt="" width={65}></img>
                  </div>
                  <div className={styles.eslogan}>
                    <p>Sign up to earn money by uploading photos!</p>
                  </div>
                  <div className={styles.fullname}>
                      {/* <label className={styles.form__label} htmlFor="firstName">First Name </label> */}
                      <input className={styles.form__input} type="text" value={fullName} onChange = {(e) => handleInputChange(e)} id="fullName" placeholder="Full Name"/> 
                  </div>
                  <div className={styles.username}>
                      {/* <label className={styles.form__label} htmlFor="lastName">Last Name </label> */}
                      <input  type="text" name="" id="userName" value={userName}  className={styles.form__input} onChange = {(e) => handleInputChange(e)} placeholder="Username"/>
                  </div>
                  <div className={styles.email}>
                      {/* <label className={styles.form__label} htmlFor="email">Email </label> */}
                      <input  type="email" id="email" className={styles.form__input} value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                  </div>
                  <div className={styles.password}>
                      {/* <label className={styles.form__label} htmlFor="password">Password </label> */}
                      <input className={styles.form__input} type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                  </div>
                  <div className={styles.footer}>
                      {/* <button onClick={()=>handleSubmit()} type="submit" className={styles.btn}>Create Account</button> */}
                  </div>
              </div>
            }
    </div>              
  )
}

export default Login
