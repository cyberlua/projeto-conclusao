import { Link } from "react-router-dom"
import styles from "../styles/components/menu.module.css"
import Logo from "../assets/cb.svg"


const Menu = () => {
    return (

        <nav className={styles.menuContainer}>
            <Link className={styles.menuLogo} to="/">
                <img src={Logo} />
            </Link>
            <div className={styles.containerLinks}>
                <li><Link className={styles.menuLink} to="/sobre">Causa Social</Link></li>
                <li><Link className={styles.menuLink} to="/empresas">Empresas</Link></li>
                <li><Link className={styles.menuLink} to="/cursos">Cursos</Link></li>
                <li><Link className={styles.menuLink} to="/contato">Contato</Link></li>
            </div>

        </nav>

    );
}

export default Menu;