import styles from './LoginForm.module.css'
import {useState, type FormEvent, type ChangeEvent} from "react";
import type {Credentials} from "../../types/Types.tsx";

export function LoginForm() {
    const [credentials, setCredentials] = useState<Credentials>({
        email: "",
        password: "",
    })

    const handleEmailChange = (e :ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            email: e.target.value
        })
    }

    const handlePasswordChange = (e :ChangeEvent<HTMLInputElement>) => {
        setCredentials({
           ...credentials,
           password: e.target.value
       })
   }


    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(`Пользователь успешно авторизован!
Логин: ${credentials.email}
Пароль: ${credentials.password}`)
    }

  return (
          <div className={styles.loginFormWrapper}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <p className={styles.loginFormTitle}>Login Form</p>
          <input onChange={handleEmailChange} value={credentials.email} name="email" type="text" className={styles.userNameInput} placeholder="Username" autoComplete="username" />
          <input onChange={handlePasswordChange} value={credentials.password} name="password" type="password" className={styles.passwordInput} placeholder="Password" autoComplete="current-password" />
          <button type="submit" className={styles.loginButton}>LOGIN</button>
        </form>
      </div>
  )
}


