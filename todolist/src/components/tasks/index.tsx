import { useEffect, useState } from 'react';
import { useListServices } from '../../services/list';
import styles from './styles.module.scss';

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
        <div>
            {listUnique ? (
                <div>
                    <div className={styles.list}>
                    {listUnique.nome}
                    </div>
                    {listUnique.tarefas.length ? (
                        <div>
                            {listUnique.tarefas.map((task) => (
                                <div key={task.id} className={styles.teste} style={{ '--task-color': task.color } as React.CSSProperties}>
                                {task.name}
                            </div>
                            ))}
                        </div>
                    ) : (
                        <p>Sem tarefas</p>
                    )}
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};
