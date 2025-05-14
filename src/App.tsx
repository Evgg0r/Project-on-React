// import {RenderForm} from "./RenderForm/RenderForm.tsx";

import {Header} from "./compoments/Header/Header";
import {FiltersFilm} from "./compoments/FiltersFilm/FiltersFilm";

// export type TypeForm = {
//     typeForm: "login" | "registration";
// };

export function App() {
    // return <RenderForm typeForm="login" />
    return (
        <>
            <Header />
            <FiltersFilm />
        </>
    )
}


