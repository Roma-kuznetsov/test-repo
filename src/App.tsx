import Dropdown, { dataType } from './components/Dropdown';
//icons
import icon_an from './icons/Icon_an.svg';
import icon_is from './icons/Icon_is.svg';
import icon_it from './icons/Icon_it.svg';
import icon_ne from './icons/Icon_ne.svg';
import icon_po from './icons/Icon_po.svg';
import icon_ru from './icons/Icon_ru.svg';


function App() {
    const data: dataType[] = [
        { id: 1, flag: icon_ru, text: "Русский" },
        { id: 2, flag: icon_an, text: "Английский" },
        { id: 3, flag: icon_is, text: "Испанский" },
        { id: 4, flag: icon_ne, text: "Немецкий" },
        { id: 5, flag: icon_it, text: "Итальянский" },
        { id: 6, flag: icon_po, text: "Польский" }
    ]

    return (
        <div>
            <Dropdown data={data}
                multiselect={false}
                flags={true}
                />
        </div>
    );
}

export default App;
