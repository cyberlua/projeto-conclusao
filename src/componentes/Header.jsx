import styles from '../styles/components/header.module.css'
import Slides from './Slides';

const Header = ({ title }) => {
    return (
        <>
            <header className={styles.headerContainer}>
                <h1 className={styles.headerTitle}>{title}</h1>
                <Slides />
            </header>

        </>
    );
}

export default Header;