import styles from './styles.module.scss';
import { Header } from '../header';
import { Lists } from '../lists';
import { Tasks } from '../tasks';
import { useState } from 'react';


const Container = () =>{
    const [listSelected, setListSelected] = useState(false);

    const SelectList = () =>{
        setListSelected(!listSelected);
    }
    return(
    <div className={styles.MainContainer}>
        <Header/>
        <div className={styles.Body}>
            <div className={styles.listsContainer} onClick={SelectList}>
            <Lists/>
            </div>
            <div className={styles.tasksContainer}>
                {listSelected ? <>selecionou a lista</>: <>Não selecionou</>}
            </div>
        </div>
    </div>
    );
};

export default Container;