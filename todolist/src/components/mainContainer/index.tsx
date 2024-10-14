import styles from './styles.module.scss';
import { Header } from '../header';

const Container = () =>{
    return(
    <div className={styles.MainContainer}>
        <Header/>
    </div>
    );
};

export default Container;