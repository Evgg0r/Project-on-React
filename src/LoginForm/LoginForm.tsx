import styles from './LoginForm.module.css'
import * as React from "react";

export function LoginForm() {
    function renderMessage(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const userName = e.currentTarget.userName.value
        const userPassword = e.currentTarget.userPassword.value

        console.log(`Пользователь успешно авторизован!
Логин: ${userName}
Пароль: ${userPassword}`)
    }

  return (
      <div className={styles.loginFormWrapper}>
        <form className={styles.loginForm} onSubmit={renderMessage}>
          <p className={styles.loginFormTitle}>Login Form</p>
          <input name="userName" type="text" className={styles.userNameInput} placeholder="Username" autoComplete="username" />
          <input name="userPassword" type="password" className={styles.passwordInput} placeholder="Password" autoComplete="current-password" />
          <button type="submit" className={styles.loginButton}>LOGIN</button>
        </form>
      </div>
  )
}


