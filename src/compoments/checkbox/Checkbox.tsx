import styles from "./Checkbox.module.css"
import type {GenresCheckboxProps} from "../../types/Types.tsx";


export function Checkbox({id, value, checked, onChange}: GenresCheckboxProps) {
    return (
        <>
            <label className={styles.checkboxLabel}>
                <input type="checkbox" id={id} className="checkbox-input"  value={value} onChange={onChange} checked={checked}/>
                <span className="checkbox-text">{value}</span>
            </label>
        </>
    )
}


