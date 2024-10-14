import styles from './styles.module.scss';
import { useListServices } from '../../services/list';
import { useEffect, useState } from 'react';
export const Lists = () =>{
    const{listGetAll} = useListServices();
    const [lists, setLists] = useState();

    const handleViewLists= async()=>{
        const response = await listGetAll();
        setLists(response.data.listas);
        console.log(`Total de tarefas: ${response.data.listas[0].tasks.length}`);
        console.log(response.data.listas);
    };


    useEffect(()=>{
        handleViewLists();
    },[]);
    
return(
    <div>
        <div className={styles.listHeader}>
            <h3>
            Listas
            </h3>
        </div>
        <div className={styles.listBody}>
            <div className={styles.listItem}>
                <div className={styles.listName}>
                    Nome da tarefa
                </div>
                <div className={styles.listAmount}>
                    Quantidade de tarefas-0
                </div>
            </div>
        </div>
    </div>
)
}