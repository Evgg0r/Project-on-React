import styles from "../Select/Select.module.css";
import type {SortSelectProps} from "../../types/Types.tsx";

export function Select({id, label, options, value, onChange}: SortSelectProps) {
    return (
        <>
            <div className={styles.selectWrapper}>
                <label htmlFor={id}>{label}</label>
                <select  id={id} value={value} onChange={(e) => onChange(e.target.value)}>
                    <option value="" disabled hidden>Выбрать</option>
                    {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </>
    )
}
