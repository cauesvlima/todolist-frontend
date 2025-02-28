import styles from './styles.module.scss';
import { useListServices } from '../../services/list';
import { useEffect, useState } from 'react';

interface Task {
    id: number;
    name: string;
}

interface List {
    id: number;
    nome: string;
    tasks: Task[];
}

interface ListsProps {
    onSelectList: (id: number) => void;
}

interface ItemProp {
    listItem: number;
}

export const Lists = ({ onSelectList, listItem }: ListsProps & ItemProp) => {

    const { listGetAll } = useListServices();
    const [lists, setLists] = useState<List[]>([]);
    const [editName, setEditName] = useState(0);

    const handleViewLists = async () => {
        const response = await listGetAll();
        setLists(response.data.listas);
        console.log(`Total de tarefas: ${response.data.listas[0].tasks.length}`);
        console.log(response.data.listas);
    };

    const viewEdit = (id: number) => {
        setEditName(id);
    };

    useEffect(() => {
        handleViewLists();
    }, []);

    const updateList = () => {
        alert("oi");
    };

    return (
        <div>
            <div className={styles.listHeader}>
                <h3>Listas</h3>
            </div>
            <div className={styles.listBody}>
                {lists.length > 0 ? (
                    lists.map((list) => (
                        <div
                            className={`${styles.listItem} ${list.id === listItem ? styles.selected : ''}`}
                            onClick={() => onSelectList(list.id)}
                            onMouseEnter={() => viewEdit(list.id)}
                            onMouseLeave={() => viewEdit(0)}
                            key={list.id}
                        >
                            <div className={styles.listName}>
                                {list.nome}
                                {editName === list.id && (
                                    <span onClick={updateList}>Editar</span>
                                )}
                            </div>
                            <div className={styles.listAmount}>
                                Quantidade de tarefas: <span>{list.tasks.length}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Nenhuma lista encontrada.</p> /* Mensagem para caso não haja listas */
                )}
            </div>
        </div>
    );
};
