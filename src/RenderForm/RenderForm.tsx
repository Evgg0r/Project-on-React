import {LoginForm} from "../LoginForm/LoginForm";
import {RegistrationForm} from "../RegistrationForm/RegistrationForm";
import type {TypeForm} from "../App.tsx";



export function RenderForm ({typeForm}: TypeForm) {

    return (
        <>
            {typeForm === "login" ? <LoginForm /> : <RegistrationForm />}
        </>
    )
}