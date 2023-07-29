import Header from "../componentes/Header";
import cursos from "../cursos.json"
import { useEffect, useState } from "react";
import styles from "../styles/pages/cursos.module.css"
import { InstagramLogo } from "phosphor-react"

const Cursos = () => {

  const [cursosFromApi, setCursosFromApi] = useState([]);

  useEffect(() => {
    try {
      setCursosFromApi(cursos);
    } catch (error) {
      console.error("Erro Capturado :", error);
    }
  }, []);

  return (
    <>
      <Header title="Conhecimento que transforma, juntos pela educação inclusiva na capacitacitação de pessoas trans" />
      <h2 className={styles.cursoText}>Desperte seu potencial e fortaleça sua jornada. Descubra cursos inclusivos, especialmente criados para a comunidade trans. Vamos juntos trilhar o caminho do conhecimento e empoderamento.</h2>
      <div className={styles.cursoContainer}>
        {cursosFromApi.map((curso) => (
          <div className={styles.cardCurso} key={curso.id}>
            <img className={styles.cardImage} src={curso.imagem} />
            <h3 className={styles.cardTitle}>{curso.titulo}</h3>
            <p className={styles.cardText}>{curso.descrição}</p>
            <a className={styles.cardLink} href={curso.insta} target="_blank" rel="noreferrer">
              ACESSE AQUI O INSTA
              <InstagramLogo size={25} color="#000000" weight="light" />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cursos;