import { useEffect } from 'react';
import styles from './styles.module.scss';

interface TasksProps {
    listId: number;
}



export const Tasks = ({ listId }: TasksProps) =>{

    useEffect(()=>{
        
    },[listId])


    return (
        <div>
            {listId}
        </div>
    )
}