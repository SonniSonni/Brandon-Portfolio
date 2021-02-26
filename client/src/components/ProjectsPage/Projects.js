import jules from '../../resources/grg.PNG';
import fashion from '../../resources/fashion.PNG';
import coffee from '../../resources/coffee-express.PNG';
import poketeam from '../../resources/poketeam.PNG';

const Projects = [
  {
    id: 0,
    title: 'JULES TREMBLY',
    img: jules,
    description: "Music producer client personal site *WIP*",
    link: "https://greg-trembly.herokuapp.com/",
    github: "",
    techs: ["HTML", "CSS", "JS", "REACT", "NODEJS", "EXPRESS", "MONGODB"]
  },
  {
    id: 1,
    title: 'ARMON GUTIERRA',
    img: fashion,
    description: "Fashion designer concept website.",
    link: "https://goofy-goldwasser-fd5395.netlify.app/",
    github: "https://github.com/KamajiiSC/fashion-concept",
    techs: ["HTML", "CSS", "SASS"]
  },
  {
    id: 2,
    title: 'Coffee Express',
    img: coffee,
    description: "Coffee shop concept website.",
    link: "https://coffee-express-brandon.herokuapp.com/",
    github: "https://github.com/KamajiiSC/CoffeeExpress",
    techs: ["HTML", "CSS", "JS", "REACT", "NODEJS"]
  },
  {
    id: 3,
    title: 'PokeTeam',
    img: poketeam,
    description: "Simple pokemon team builder using PokeApi",
    link: 'https://pokemon-team-builder-brandon.herokuapp.com/',
    github: 'https://github.com/KamajiiSC/PokeTeam',
    techs: ["HTML", "CSS", "JS", "FETCH API"]
  }
]

export default Projects;