import classNames from 'classnames/bind';
import { FC, useCallback, useEffect, useState } from 'react';
import arrow_icon from '../icons/arrow_icon.svg';
import styles from './Dropdown.module.css';
import SelectItem from './SelectItem';
import SelectItemLabel from './SelectItemLabel';


export type dataType = {
    id: number
    flag?: string
    text: string
}

interface dataSerial extends dataType {
    isActive: boolean
}

interface DropdownPropsType {
    data: dataType[]
    multiselect: boolean
    flags: boolean
}

let cx = classNames.bind(styles);

const Dropdown: FC<DropdownPropsType> = ({ data, multiselect, flags }) => {

    useEffect(() => {
        setLabels(data.map((item) => { return { ...item, isActive: false } }))
    }, [])

    const [isShow, setIsShow] = useState<boolean>(true);
    const [search, setSearch] = useState<string>('');
    const [labels, setLabels] = useState([] as dataSerial[])


    const handleChecked = useCallback((id: number, check: boolean) => {
        setLabels(prevState =>
            prevState.map(item =>
                item.id === id
                    ? { ...item, isActive: check }
                    : item
            )
        )
    }, [])

    const removeLabel = useCallback((id: number) => {
        setLabels(prevState =>
            prevState.map(item =>
                item.id === id
                    ? { ...item, isActive: false }
                    : item
            )
        )
    }, [])

    const soloItem = useCallback((id: number) => {
        setLabels(prevState =>
            prevState.map(item =>
                item.id === id
                    ? { ...item, isActive: true }
                    : { ...item, isActive: false }
            )
        )
    }, [])

    const handleSearch = (search: string) => {
        return labels.filter((item) => item.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            .map((i) => <SelectItem key={i.id} id={i.id} flag={i.flag}
                text={i.text} isActive={i.isActive} handleChecked={handleChecked}
                soloItem={soloItem} flags={flags} multiselect={multiselect} />)
    }

    let openMenu = cx({
        select__menu: true,
        none: isShow
    });

    let animateArrow = cx({
        select__block__icon: true,
        rotate: isShow
    });

    return (
        <div className={styles.wrapper}>

            <div className={styles.block}>

                <label className={styles.title}>Язык</label>
                <div className={styles.select__block} onClick={() => { setIsShow(!isShow) }}>

                    <div className={styles.select__block__language} >
                        {labels.filter((i) => i.isActive).map((i) => <SelectItemLabel key={i.id} id={i.id}
                            language={i.text} removeLabel={removeLabel} />)}
                    </div>

                    <div className={styles.select__block__button}>
                        <img className={animateArrow} src={arrow_icon} alt="#" />
                    </div>

                </div>


                <div className={openMenu}>
                    <div className={styles.select__menu__group}>
                        <input className={styles.select_menu_find}
                            value={search}
                            type="text"
                            placeholder='Поиск'
                            onChange={(e) => { setSearch(e.target.value) }} />
                    </div>
                    {handleSearch(search)}
                </div>
            </div>
        </div>
    );
}

export default Dropdown;