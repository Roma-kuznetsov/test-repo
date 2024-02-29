import React, { FC } from 'react';
import styles from './SelectItem.module.css';

interface SelectItemPropsType {
    id: number
    flag?: string
    text: string
    isActive: boolean
    flags: boolean
    multiselect: boolean
    handleChecked: (id: number, check: boolean) => void
    soloItem: (id: number) => void
}

const SelectItem: FC<SelectItemPropsType> = React.memo(({ id, flag, text, isActive, flags, multiselect, handleChecked, soloItem, }) => {
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <div className={styles.group}>
                    {flags && <img className={styles.group__image} src={flag} alt="" />}
                    <p className={styles.group__text}>{text}</p>
                </div>
                <input className={styles.input__check} type="checkbox" checked={isActive}
                    onChange={(e) => { multiselect ? handleChecked(id, e.target.checked) : soloItem(id) }} />

            </div>
        </div>
    )
})

export default SelectItem;