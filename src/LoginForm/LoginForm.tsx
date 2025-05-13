import styles from './LoginForm.module.css'
import {useState, type FormEvent}  from "react";

export function LoginForm() {
    const [userName, setUserName] = useState<string>('')
    const [userPassword, setUserPassword] = useState<string>('')

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(`Пользователь успешно авторизован!
Логин: ${userName}
Пароль: ${userPassword}`)
    }

  return (
      <div className={styles.loginFormWrapper}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <p className={styles.loginFormTitle}>Login Form</p>
          <input onChange={(e) => setUserName(e.target.value)} value={userName} name="userName" type="text" className={styles.userNameInput} placeholder="Username" autoComplete="username" />
          <input onChange={(e) => setUserPassword(e.target.value)} value={userPassword} name="userPassword" type="password" className={styles.passwordInput} placeholder="Password" autoComplete="current-password" />
          <button type="submit" className={styles.loginButton}>LOGIN</button>
        </form>
      </div>
  )
}


