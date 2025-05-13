
import styles from './RegistrationForm.module.css'
import {useState, type FormEvent} from "react";



export function RegistrationForm() {
    const [userName, setUserName] = useState<string>('')
    const [userPassword, setUserPassword] = useState<string>('')

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        console.log(`Пользователь успешно зарегистрации!
Логин: ${userName}
Пароль: ${userPassword}`)
    }

  return (
      <div className={styles.registrationFormWrapper}>
        <form className={styles.registrationForm} onSubmit={handleSubmit}>
          <p className={styles.registrationFormTitle}>Registration Form</p>
          <input onChange={(e) => setUserName(e.target.value) } value={userName} name="userName" type="text" className={styles.userNameInput} placeholder="Username" autoComplete="username" />
          <input  onChange={(e) => setUserPassword(e.target.value)} value={userPassword} name="userPassword" type="password" className={styles.passwordInput} placeholder="Password" autoComplete="current-password" />
          <button type="submit" className={styles.registrationButton}>REGISTRATION</button>
        </form>
      </div>
  )
}


