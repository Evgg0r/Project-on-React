import styles from './LoginForm.module.css'

export function LoginForm() {
  return (
      <div className={styles.loginFormWrapper}>
        <form className={styles.loginForm}>
          <p className={styles.loginFormTitle}>Login Form</p>
          <input type="text" className={styles.userNameInput} placeholder="Username" />
          <input type="text" className={styles.passwordInput} placeholder="Password" />
          <button className={styles.loginButton}>LOGIN</button>
        </form>
      </div>
  )
}


