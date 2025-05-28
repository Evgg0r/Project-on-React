import {Select} from "../Select/Select"
import {useFilter, useFilterDispatch} from "../Context/Context.tsx";

export function MovieSort() {
    const sortOptions = ["Полулярности", "Рейтингу", "Новизне"]
    const yearOptions = ["2023", "2024", "2025"]
    const state = useFilter()
    const dispatch = useFilterDispatch()
    if (!state || !dispatch) return null;

    return (
        <>
            <Select
                id="sort-select"
                label="Сортировать по"
                options={sortOptions}
                value={state.sortBy}
                onChange={(value) => dispatch({type: 'setSortBy', value})}
            />

            <Select
            id="year-select"
            label="Год релиза"
            options={yearOptions}
            value={state.releaseYear}
            onChange={(value) => dispatch({type: 'setReleaseYear', value})}
            />
        </>
    )
}


