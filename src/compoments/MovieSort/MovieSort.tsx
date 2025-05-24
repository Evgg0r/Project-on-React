import {Select} from "../Select/Select"
import type {MovieSortProps} from "../../types/Types.tsx";

export function MovieSort({sortBy, releaseYear, onChangeSortBy, onChangeReleaseYear}: MovieSortProps) {
    const sortOptions = ["Полулярности", "Рейтингу", "Новизне"]
    const yearOptions = ["2023", "2024", "2025"]

    return (
        <>
            <Select
                id="sort-select"
                label="Сортировать по"
                options={sortOptions}
                value={sortBy}
                onChange={onChangeSortBy}
            />

            <Select
            id="year-select"
            label="Год релиза"
            options={yearOptions}
            value={releaseYear}
            onChange={onChangeReleaseYear}
            />
        </>
    )
}


