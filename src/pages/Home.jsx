import Header from "../componentes/Header"
import styles from "../styles/pages/home.module.css"
import { Rainbow, Factory, Student, Headset } from 'phosphor-react'

const Home = () => {
    return (
        <>
            <Header title="Fortalecendo a comunidade LGBT com oportunidades e empoderamento" />
            <h2 className={styles.homeText}>"Não há nada de errado com você. Há muita coisa errada com o mundo em que você vive."</h2>
            <p className={styles.homeIntro}>Seja bem-vinda(o) a Conexão Bapho, o ponto de encontro online para incentivar a comunidade LGBT+ a se capacitar e ingressar no mercado de trabalho formal com empresas que estão comprometidas em promover a diversidade e inclusão da comunidade LGBT+.
                Meu objetivo é destacar o trabalho de empresas que abraçam a diversidade como um valor fundamental, criando um ambiente mais acolhedor, inclusivo e respeitoso para todos.
                E também destaco ONGs e Instituições que trabalham com o ensino voltado à inclusão e diversidade, com um foco em especial à comunidade Trans. </p>

            <div className={styles.homeContainer}>
                <div className={styles.cardContainer}>
                    <Rainbow size={150} color="#DF2257" weight="thin" />
                    <h2 className={styles.cardTitle}>Causa Social</h2>
                    <h5 className={styles.cardText}>Levanto questões e causas sociais que cercam a comunidade LGBT+ e apresento dados e pesquisas relevantes para aumentar a conscientização e incentivar ações positivas.</h5>
                </div>

                <div className={styles.cardContainer}>
                    <Factory size={150} color="#DF2257" weight="thin" />
                    <h2 className={styles.cardTitle}>Empresas</h2>
                    <h5 className={styles.cardText}>Apresento um conteúdo exclusivo de empresas que estão liderando o caminho rumo à inclusão. Conheça empresas que estão adotando práticas inclusivas em seu ambiente de trabalho.</h5>
                </div>

                <div className={styles.cardContainer}>
                    <Student size={150} color="#DF2257" weight="thin" />
                    <h2 className={styles.cardTitle}>Cursos</h2>
                    <h5 className={styles.cardText}>Navegue pelo meu catálogo especial de cursos, realizados por ONGs e instituições comprometidas com a capacitação e empoderamento da comunidade Trans.</h5>
                </div>

                <div className={styles.cardContainer}>
                    <Headset size={150} color="#DF2257" weight="thin" />
                    <h2 className={styles.cardTitle}>Contato</h2>
                    <h5 className={styles.cardText}>Entre em contato comigo! Ficarei feliz em receber suas sugestões, dúvidas ou até mesmo novas indicações de empresas que estão fazendo a diferença na comunidade LGBT+.</h5>
                </div>


            </div>

        </>
    );
}

export default Home;