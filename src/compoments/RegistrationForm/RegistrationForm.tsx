
import styles from './RegistrationForm.module.css'
import {useState, type FormEvent, type ChangeEvent} from "react";
import type {Credentials} from "../../types/Types.tsx";


export function RegistrationForm() {

    const [credentials, setCredentials] = useState<Credentials>({
        email: '',
        password: '',
    })

    const handleEmailChange = (e : ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            email: e.target.value
        })
    }

    const handlePasswordChange = (e : ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            password: e.target.value
        })
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        console.log(`Пользователь успешно зарегистрации!
Логин: ${credentials.email}
Пароль: ${credentials.password}`)
    }

  return (
      <div className={styles.registrationFormWrapper}>
        <form className={styles.registrationForm} onSubmit={handleSubmit}>
          <p className={styles.registrationFormTitle}>Registration Form</p>
          <input onChange={handleEmailChange} value={credentials.email} name="userName" type="text" className={styles.userNameInput} placeholder="Username" autoComplete="username" />
          <input  onChange={handlePasswordChange} value={credentials.password} name="userPassword" type="password" className={styles.passwordInput} placeholder="Password" autoComplete="current-password" />
          <button type="submit" className={styles.registrationButton}>REGISTRATION</button>
        </form>
      </div>
  )
}


