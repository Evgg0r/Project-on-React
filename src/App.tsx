import {LoginForm} from "./LoginForm/LoginForm.tsx";
import {RegistrationForm} from "./RegistrationForm/RegistrationForm.tsx";

function RenderForm ({typeForm} : {typeForm: "login" | "registration"}) {

  return (
      <>
        {typeForm === "login" ? <LoginForm /> : <RegistrationForm />}
      </>
  )
}

export function App() {
  return <RenderForm typeForm="registration" />
}


