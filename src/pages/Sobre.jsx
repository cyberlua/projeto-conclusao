import Header from "../componentes/Header";
import styles from "../styles/pages/sobre.module.css"
import infografico from "../assets/infografico-lgbt.svg"
import infografico1 from "../assets/infografico-trans.svg"
import infografico2 from "../assets/infografico-educ.svg"

const Sobre = () => {
    return (
        <>
            <Header title="Abraçar a diversidade e o talento da comunidade LGBT é a chave para o crescimento empresarial" />
            <div className={styles.aboutContainer}>
                <h2 className={styles.aboutTitle}>Por que muitas empresas e instituições de ensino não trabalham promovendo a diversidade e inclusão?</h2>

                <div className={styles.flexContainer}>
                    <p className={styles.aboutText}>
                        A discriminação contra a comunidade LGBT+ persiste no mercado de trabalho brasileiro.
                        De acordo com o Center for Talent Innovation, pesquisas revelam que 33% das empresas não contratariam pessoas LGBT+ para cargos de chefia e 41% dos funcionários LGBT+ já sofreram discriminação no ambiente profissional.
                        Além disso, 61% escondem sua orientação sexual por medo de sofrerem violências.
                    </p>
                    <img className={styles.aboutImage} src={infografico} />
                </div>

                <div className={styles.flexContainerTwo}>
                    <p className={styles.aboutText}>
                        A exclusão desde a infância limita a formação profissional e oportunidades de emprego.
                        Pessoas trans e gays "afeminados" sofrem discriminação mesmo com qualificações adequadas.
                        De acordo com dados alarmantes da Antra (Associação Nacional de Travestis e Transsexuais), 90% da população trans está na prostituição, devido à falta de oportunidades formais de emprego.
                        O ambiente hostil em instituições de ensino também leva à evasão escolar.
                    </p>
                    <img className={styles.aboutImage} src={infografico1} />
                </div>

                <div className={styles.flexContainerThree}>
                    <p className={styles.aboutText}>
                        Segundo a Pesquisa Nacional Sobre o Ambiente Educacional no Brasil 2016, feita pela Associação Brasileira de Gays, Lésbicas, Bissexuais, Travestis e Transexuais (ABGLT),
                        73% dos alunos LGBTs entrevistados já sofreram agressões verbais devido sua orientação sexual e 68% por conta de sua identidade de gênero,
                        revelando como a escola pode ser um espaço hostil e violento para a comunidade LGBT+
                    </p>
                    <img className={styles.aboutImage} src={infografico2} />
                </div>

                <p className={styles.aboutText}>
                    Para avançar, é fundamental promover a inclusão e combater preconceitos, garantindo respeito à diversidade e igualdade de oportunidades.
                    O estado deve trabalhar em leis e projetos garantindo que empresários e educadores lidem com a diversidade e inclusão como uma competência, e não como um departamento.
                    Sendo assim vai criar ambientes de trabalho e educacionais mais acolhedores, que valorizem e preparem cada vez mais jovens e a sociedade lidar com a diversidade e inclusão.
                    Somos capazes e principalmente temos um dever social de construir um futuro mais igualitário e plural para todos, onde a comunidade LGBT possa viver com dignidade e alcançar seu potencial máximo.
                    E por fim, a luta pela igualdade e justiça é uma responsabilidade de todos, e juntos poderemos superar os desafios enfrentados pela comunidade LGBT no mercado de trabalho, nas instituições de ensino e na sociedade como um todo.
                </p>

            </div>
        </>
    );
}

export default Sobre;