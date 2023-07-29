import Header from "../componentes/Header";
import { useEffect, useState } from "react";
import data from "../data.json"
import styles from "../styles/pages/empresas.module.css"
import { PiHandTapBold } from "react-icons/pi"


const Empresas = () => {

  const [empresasFromApi, setEmpresasFromApi] = useState([]);

  useEffect(() => {
    try {
      setEmpresasFromApi(data);
    } catch (error) {
      console.error("Erro Capturado :", error);
    }
  }, []);

  return (
    <>
      <Header title="Caminhando rumo à igualdade e construindo relações positivas com a comunidade LGBT" />
      <h2 className={styles.empresasText}>Conheça as empresas que valorizam a autenticidade de cada indivíduo e constroem um ambiente acolhedor para todos. Descubra suas histórias inspiradoras e o impacto positivo que estão criando no mundo.</h2>
      <div className={styles.empresasContainer}>
        {empresasFromApi.map((empresa) => (
          <div className={styles.cardEmpresas} key={empresa.id}>
            <img className={styles.cardImage} src={empresa.imagem} />
            <h3 className={styles.cardTitle}>{empresa.titulo}</h3>
            <p className={styles.cardText}>{empresa.descrição}</p>
            <a className={styles.cardLink} href={empresa.html_url} target="_blank" rel="noreferrer">
              ACESSE AQUI AS EMPRESAS
              <PiHandTapBold size={25} color="#000000" weight="light" />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Empresas;