import { useEffect, useState } from 'react';
import { useListServices } from '../../services/list';
import styles from './styles.module.scss';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DragHandleTwoToneIcon from '@mui/icons-material/DragHandleTwoTone';
interface TasksProps {
    listId: number;
}

interface Task {
    id: number;
    name: string;
    color: string;
}

interface List {
    id: number;
    nome: string;
    tarefas: Task[]; // Definindo tarefas como um array de objetos Task
}

export const Tasks = ({ listId }: TasksProps) => {
    const { listGetUnique } = useListServices();
    const [listUnique, setList] = useState<List | null>(null);

    useEffect(() => {
        const handleViewList = async () => {
            try {
                const response = await listGetUnique(listId);
                setList(response.data); // Atualiza o estado com a lista
                console.log(response.data);
            } catch (error) {
                console.error('Erro ao buscar a lista:', error);
            }
        };
        handleViewList();
    }, [listId]);

    return (
        <div className={styles.list}>
            {listUnique ? (
                <div>
                    <div className={styles.listHeader}>
                        <div className={styles.listName}>
                        {listUnique.nome}
                        
                    </div>
                    <div className={styles.icons}>
                        <span className={styles.icon}>
                            <ModeEditOutlineOutlinedIcon/>
                        </span>
                        <span className={styles.icon}>
                            <DeleteOutlineOutlinedIcon/>
                        </span>
                    </div>
                    </div>
                    {listUnique.tarefas.length ? (
                        <div>
                            {listUnique.tarefas.map((task) => (
                                <div key={task.id} className={styles.itemContainer}  >
                                <div className={styles.itens}>
                                <div className={styles.checkBox}>
                                    <input type="checkbox" className={styles.checkmark }/>
                                </div>
                                <div className={styles.taskName}>
                                    {task.name}
                                </div>
                                </div>
                                <div className={styles.taskColor} style={{ '--task-color': task.color } as React.CSSProperties}></div>
                                    
                            </div>
                            
                            ))}
                        </div>
                    ) : (
                        <p>Sem tarefas</p>
                    )}
                </div>
            ) : (
                <p>Nenhuma lista de tarefas selecionada</p>
            )}
        </div>
    );
};
