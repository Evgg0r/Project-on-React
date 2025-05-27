
export type Credentials = {
    email: string,
    password: string,
}

export type SortSelectProps = {
    id: string,
    label: string,
    options: string[],
    value: string,
    onChange: (newValue: string) => void
}

    export type GenresCheckboxProps = {
        id: string,
        value: string,
        checked: boolean,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    }

export type Genre = {
    id: string,
    name: string,
}

export type MovieSortProps = {
    sortBy: string,
    releaseYear: string,
    onChangeSortBy: (value: string) => void,
    onChangeReleaseYear: (value: string) => void,
}

export type GenresFilmProps = {
    selectedGenres: string[],
    onChange: (genres: string[]) => void,
}

export type HeaderFilterFilmsPors = {
    onReset: () => void
}

export type FilterState = {
    sortBy: string,
    releaseYear: string,
    selectedGenres: string[],
}

export type FilterAction =
    | {type: 'setSortBy'; value: string}
    | {type: 'setReleaseYear'; value: string}
    | {type: 'setSelectedGenres'; value: string[]}
    | {type: 'reset'};