import styles from './Help.module.css';
import {BsGithub } from "react-icons/bs";
// Importa las imágenes de cada persona
import JuanImage from '../../images/developers/Juan.jpg';
import AlvaroImage from '../../images/developers/Alvaro.jpg';
import JesusImage from '../../images/developers/Jesus.jpg';
import CarlosImage from '../../images/developers/Carlos.jpg';
import ElvisImage from '../../images/developers/Elvis.jpg';

const peopleData = [
    {
      name: 'Juan',
      github: 'https://github.com/juan',
      linkedin: 'https://www.linkedin.com/in/juan',
      image: JuanImage,
    },
    {
      name: 'Alvaro',
      github: 'https://github.com/alvaro',
      linkedin: 'https://www.linkedin.com/in/alvaro',
      image: AlvaroImage,
    },
    {
      name: 'Jesus',
      github: 'https://github.com/jesus',
      linkedin: 'https://www.linkedin.com/in/jesus',
      image: JesusImage,
    },
    {
      name: 'Carlos',
      github: 'https://github.com/carlos',
      linkedin: 'https://www.linkedin.com/in/carlos',
      image: CarlosImage,
    },
    {
      name: 'Elvis',
      github: 'https://github.com/elvis',
      linkedin: 'https://www.linkedin.com/in/elvis',
      image: ElvisImage,
    },
  ];
  
  export const Help = () => {
    return (
        <>
            <h1 className={styles.developer}>Developers</h1>
            <div className={styles.container}>
                {peopleData.map((person, index) => (
                    <div className={styles.card} key={index}>
                        <img src={person.image} alt={`Image ${person.name}`} className={styles.image} />
                        <div className={styles.info}>
                            <h2>{person.name}</h2>
                            <p>
                                <a href={person.github} target="_blank" rel="noopener noreferrer">
                                    <BsGithub /> GitHub
                                </a>
                            </p>
                            <p>
                                LinkedIn: <a href={person.linkedin} target="_blank" rel="noopener noreferrer">{person.linkedin}</a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};