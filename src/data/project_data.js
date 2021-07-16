import food from '../images/icons/food.png'
import myIcon from '../images/icons/myIcon.png'
import virus from '../images/icons/virus.png'
import piano from '../images/icons/piano.png'

import Bloo from '../images/websitePics/Bloo.png'
import Covid from '../images/websitePics/Covid.png'
import Fifteen from '../images/websitePics/Fifteen.png'

// import from '../images/kevinPics/.png'


export const projects = [
    {
        title: "Covid-19 Tracker",
        hostLink: "https://covid19trackerfrontend.herokuapp.com/",
        githubLink: "https://github.com/radbahi/CovidTrackerFrontend",
        githubLink2: "https://github.com/teapuddles/CovidTrackerBackend",
        description: "description of Covid Tracker ", 
        image: virus,
        siteImage: Covid,
        techUsed: [{
            detail1: "React.js",
            detail2: "Redux",
            detail3: "Ruby on Rails",
            detail4: "PostgreSQL",
            detail5: "Styled Components",
            detail6: "NewsAPI",
            detail7: "Disease.sh",
            detail8: "Heroku One-off Dynos"
        }],
    },
    {
        title: "Bloo Karaoke",
        hostLink: "https://bloo-karaoke.herokuapp.com/",
        githubLink: "https://github.com/teapuddles/Bloo-Frontend",
        githubLink2: "https://github.com/teapuddles/Bloo-Backend",
        description: "description of Bloo Karaoke ", 
        image: piano,
        siteImage: Bloo,
        techUsed: [{
            detail1: "React.js",
            detail2: "Ruby on Rails",
            detail3: "npm-react-piano",
            detail4: "PostgreSQL",
            detail5: "Custom CSS"
        }],
    },
    {
        title: "Fifteen Minute Food",
        hostLink: "https://teapuddles.github.io/fifteen-minute-food-frontend/",
        githubLink: "https://github.com/teapuddles/fifteen-minute-food-frontend",
        githubLink2: "https://github.com/teapuddles/fifteen_min_backend",
        description: "description of Fifteen Minute Food ",
        image: food,
        siteImage: Fifteen,
        techUsed: [{
            detail1: "React.js",
            detail2: "Ruby on Rails",
            detail3: "PostgreSQL",
            detail4: "Yelp API",
            detail5: "Stripe API",
            detail6: "Custom CSS",
        }],
    },
    {
        title: "This Portfolio",
        hostLink: "host link here",
        githubLink: "github link here",
        description: "description of This Portfolio ", 
        image: myIcon,
        techUsed: [{
            detail1: "Gatsby",
            detail2: "React Components",
            detail3: "Styled Components",
            detail4: "Custom CSS"
        }],
    }
]

// export const assets = [
//     {
//         id: 1,
//         src: '../images/icons/virus.png',
//         title: 'Covid Tracker Image'
//     },
//     {
//         id: 2,
//         src: '../images/icons/piano.png',
//         title: 'Bloo Karaoke Image'
//     },
//     {
//         id: 3,
//         src: '../images/icons/food.png',
//         title: 'Fifteen Min Food Image'
//     },
//     {
//         id: 4,
//         src: '../images/icons/myIcon.png',
//         title: 'Portfolio Image'
//     }

// ]