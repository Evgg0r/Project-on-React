
import styles from './RegistrationForm.module.css'

export function RegistrationForm() {
  return (
      <div className={styles.registrationFormWrapper}>
        <form className={styles.registrationForm}>
          <p className={styles.registrationFormTitle}>Registration Form</p>
          <input type="text" className={styles.userNameInput} placeholder="Username" />
          <input type="text" className={styles.passwordInput} placeholder="Password" />
          <button className={styles.registrationButton}>REGISTRATION</button>
        </form>
      </div>
  )
}


