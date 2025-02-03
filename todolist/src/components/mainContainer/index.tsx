import styles from './styles.module.scss';
import { Header } from '../header';
import { Lists } from '../lists';
import { Tasks } from '../tasks';
import { useState } from 'react';


const Container = () =>{
    const [listSelected, setListSelected] = useState<number>(-1); // Usando um valor numérico padrão



    const handleSelectList = (id: number) => {
        setListSelected(id);
    };
    return(
    <div className={styles.MainContainer}>
        <Header/>
        <div className={styles.Body}>
            <div className={styles.listsContainer}>
            <Lists  onSelectList={handleSelectList}  listItem={listSelected}/>
            </div>
            <div className={styles.tasksContainer}>
            {listSelected !== null ? (
                        <Tasks listId={listSelected} />
                    ) : (
                        <>Nenhuma lista selecionada</>
                    )}
            </div>
        </div>
    </div>
    );
};

export default Container;