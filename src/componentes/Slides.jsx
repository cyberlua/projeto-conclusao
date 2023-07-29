import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../styles/components/slides.module.css"

import foto1 from "../assets/slide1.svg"
import foto2 from "../assets/slide2.svg"
import foto3 from "../assets/slide3.svg"
import foto4 from "../assets/slide4.svg"
import foto5 from "../assets/slide5.svg"
import foto6 from "../assets/slide6.svg"
import foto7 from "../assets/slide7.svg"
import foto8 from "../assets/slide8.svg"
import foto9 from "../assets/slide9.svg"
import foto10 from "../assets/slide10.svg"
import foto11 from "../assets/slide11.svg"
import foto12 from "../assets/slide12.svg"
import foto13 from "../assets/slide13.svg"


const Slides = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className={styles.slides} src={foto1}></img>
                </Carousel.Item>

                <Carousel.Item>
                    <img className={styles.slides} src={foto2}></img>
                </Carousel.Item>

                <Carousel.Item>
                    <img className={styles.slides} src={foto3}></img>
                </Carousel.Item>

                <Carousel.Item>
                    <img className={styles.slides} src={foto4}></img>
                </Carousel.Item>

                <Carousel.Item>
                    <img className={styles.slides} src={foto5}></img>
                </Carousel.Item>

                <Carousel.Item>
                    <img className={styles.slides} src={foto6}></img>
                </Carousel.Item>

                <Carousel.Item>
                    <img className={styles.slides} src={foto7}></img>
                </Carousel.Item>

                <Carousel.Item>
                    <img className={styles.slides} src={foto8}></img>
                </Carousel.Item>

                <Carousel.Item>
                    <img className={styles.slides} src={foto9}></img>
                </Carousel.Item>

                <Carousel.Item>
                    <img className={styles.slides} src={foto10}></img>
                </Carousel.Item>

                <Carousel.Item>
                    <img className={styles.slides} src={foto11}></img>
                </Carousel.Item>

                <Carousel.Item>
                    <img className={styles.slides} src={foto12}></img>
                </Carousel.Item>

                <Carousel.Item>
                    <img className={styles.slides} src={foto13}></img>
                </Carousel.Item>

            </Carousel>


        </div>
    );

}

export default Slides;