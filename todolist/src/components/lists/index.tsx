import styles from './styles.module.scss';
import { useListServices } from '../../services/list';
import { useEffect, useState } from 'react';
export const Lists = () =>{
    const{listGetAll} = useListServices();
    const [lists, setLists] = useState();

    const handleViewLists= async()=>{
        const response = await listGetAll();
        setLists(response.data.listas);
        console.log(response.data.listas);
    }

    useEffect(()=>{
        handleViewLists();
    },[])
    
return(
    <div>
        Listas
    </div>
)
}