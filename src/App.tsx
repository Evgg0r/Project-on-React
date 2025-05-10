import {RenderForm} from "./RenderForm/RenderForm.tsx";

export type TypeForm = {
    typeForm: "login" | "registration";
};

export function App() {
  return <RenderForm typeForm="registration" />
}


