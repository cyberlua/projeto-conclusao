import { useState } from "react";
import Header from "../componentes/Header";
import styles from "../styles/pages/contato.module.css"
import logo from "../assets/cb.mono.svg"
import { GithubLogo, LinkedinLogo, InstagramLogo, At } from 'phosphor-react'

import database from '../service/firebase'
import { ref, push, set } from 'firebase/database'

const Contato = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function handleInputNome(e) {
        setNome(e.target.value)
    }

    function handleInputEmail(e) {
        setEmail(e.target.value)
    }

    function handleInputMensagem(e) {
        setMensagem(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const messageListRef = ref(database, 'mensagens')
        const newMessageRef = push(messageListRef)
        set(newMessageRef, {
            nome: nome,
            email: email,
            texto: mensagem
        })

        setNome('')
        setEmail('')
        setMensagem('')
    }



    return (
        <>
            <Header title="Conecte-se comigo e compartilhe sugestões de empresas e apoie esse projeto" />

            <div className={styles.contatoContainer}>

                <img className={styles.logoContato} src={logo} />

                <p className={styles.contatoText}>Você também pode entrar em contato nas minhas redes sociais</p>

            </div>

            <div className={styles.contatoFlexContainer}>

                <a href="https://github.com/cyberlua" target="_blank" rel="noopener noreferrer">
                    <GithubLogo size={40} color="#000" weight="light" className={styles.contatoIcon} />
                </a>

                <a href="https://www.linkedin.com/in/cyberlua7/" target="_blank" rel="noopener noreferrer">
                    <LinkedinLogo size={40} color="#000" weight="light" className={styles.contatoIcon} />
                </a>

                <a href="https://www.instagram.com/cyberlua7/" target="_blank" rel="noopener noreferrer">
                    <InstagramLogo size={40} color="#000" weight="light" className={styles.contatoIcon} />
                </a>
            </div>


            <div>

                <form className={styles.form} onSubmit={handleSubmit}>

                    <input className={styles.formInput}
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={handleInputNome}
                        value={nome}
                    />
                    <input className={styles.formInput}
                        type="email"
                        placeholder="Digite seu email"
                        onChange={handleInputEmail}
                        value={email}
                    />
                    <textarea
                        className={styles.formInput}
                        placeholder="Digite sua mensagem"
                        onChange={handleInputMensagem}
                        value={mensagem}
                    />

                    <button className={styles.formButton}
                        type="submit">Enviar Mensagem</button>

                </form>
            </div>
        </>
    );
}

export default Contato;