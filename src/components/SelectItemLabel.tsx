import React, { FC } from "react";
import delete_icon from '../icons/delete_icon.svg';
import styles from "./SelectItemLabel.module.css";


interface SelectItemLabelPropType {
    id: number
    language: string
    removeLabel: (id: number) => void
}

const SelectItemLabel: FC<SelectItemLabelPropType> = ({ language, id, removeLabel }) => {

    const handlerClick = (e: React.MouseEvent<HTMLImageElement>): void => {
        e.stopPropagation()
        removeLabel(id)
    }

    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <p className={styles.text}>{language}</p>
                <img onClick={(e) => { handlerClick(e) }} className={styles.icon} src={delete_icon} alt="" />
            </div>
        </div>
    )
}

export default SelectItemLabel;

