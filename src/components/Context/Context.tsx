import {createContext, useContext, useReducer, type Dispatch} from 'react';
import {TOKEN} from "../../constants/urls.ts";
import type {FilterAction, FilterProviderProps, FilterState} from "../../types/Types.tsx";

export const UserContext = createContext<string>(TOKEN)
const FilterContext = createContext<FilterState | null>(null)
export const FilterDispatchContext = createContext<Dispatch<FilterAction> | null>(null);

export function useFilter(): FilterState | null {
    return useContext(FilterContext)
}

export function useFilterDispatch():Dispatch<FilterAction> | null {
    return useContext(FilterDispatchContext)
}

const initialState = {
    sortBy: '',
    releaseYear: '',
    selectedGenres: [],
}

function reducer(state: FilterState, action: FilterAction) {
    switch (action.type) {
        case 'setSortBy':
            return {...state, sortBy: action.value}
        case 'setReleaseYear':
            return {...state, releaseYear: action.value}
        case 'setSelectedGenres':
            return {...state, selectedGenres: action.value}
        case 'reset':
            return initialState
        default:
            return state;
    }
}

export function FilterProvider({children}: FilterProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <FilterContext.Provider value={state}>
            <FilterDispatchContext.Provider value={dispatch}>
                {children}
            </FilterDispatchContext.Provider>
        </FilterContext.Provider>
    )
}