import styles from './Help.module.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
// Importa las imágenes de cada persona
import JuanImage from '../../images/developers/Juan.jpg'
import AlvaroImage from '../../images/developers/Alvaro.jpg'
import JesusImage from '../../images/developers/Jesus.jpg'
import CarlosImage from '../../images/developers/Carlos.jpg'
import ElvisImage from '../../images/developers/Elvis.jpg'

const peopleData = [
  {
    name: 'Juan',
    github: 'https://github.com/JuanSBdev',
    linkedin: 'https://www.linkedin.com/in/juan',
    image: JuanImage,
  },
  {
    name: 'Alvaro',
    github: 'https://github.com/Arivera97',
    linkedin: 'https://www.linkedin.com/in/alvaro-rivera-fernandez/',
    image: AlvaroImage,
  },
  {
    name: 'Jesus',
    github: 'https://github.com/LGSUS93',
    linkedin: 'https://www.linkedin.com/in/jesus-lopez-gomez-93-01-07-lgsus',
    image: JesusImage,
  },
  {
    name: 'Carlos',
    github: 'https://github.com/CarlosCalMen',
    linkedin: 'www.linkedin.com/in/carlos-calderon-mendoza',
    image: CarlosImage,
  },
  {
    name: 'Elvis',
    github: 'https://github.com/ELVISJVV',
    linkedin: 'https://www.linkedin.com/in/elvis-vásquez-ab9277264/',
    image: ElvisImage,
  },
]

export const Help = () => {
  return (
    <>
      <div className={styles.body}>
        <h1 className={styles.developer}>Developers</h1>
        <div className={styles.container}>
          {peopleData.map((person, index) => (
            <div className={styles.card} key={index}>
              <img
                src={person.image}
                alt={`Image ${person.name}`}
                className={styles.image}
              />
              <h2>{person.name}</h2>
              <div className={styles.info}>
                <p>
                  <a
                    className={styles.github}
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </a>
                </p>
                <p>
                  <a
                    className={styles.linkedin}
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin />
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
