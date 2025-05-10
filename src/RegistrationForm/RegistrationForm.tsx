
import styles from './RegistrationForm.module.css'
import * as React from "react";

export function RegistrationForm() {
    function renderMessage(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const userName = e.currentTarget.userName.value
        const userPassword = e.currentTarget.userPassword.value

        console.log(`Пользователь успешно зарегистрации!
Логин: ${userName}
Пароль: ${userPassword}`)
    }

  return (
      <div className={styles.registrationFormWrapper}>
        <form className={styles.registrationForm} onSubmit={renderMessage}>
          <p className={styles.registrationFormTitle}>Registration Form</p>
          <input name="userName" type="text" className={styles.userNameInput} placeholder="Username" autoComplete="username" />
          <input name="userPassword" type="password" className={styles.passwordInput} placeholder="Password" autoComplete="current-password" />
          <button type="submit" className={styles.registrationButton}>REGISTRATION</button>
        </form>
      </div>
  )
}


