import food from '../images/icons/food.png'
import myIcon from '../images/icons/myIcon.png'
import virus from '../images/icons/virus.png'
import piano from '../images/icons/piano.png'

import Bloo from '../images/websitePics/Bloo.png'
import Covid from '../images/websitePics/Covid.png'
import Fifteen from '../images/websitePics/Fifteen.png'
import Portfolio from '../images/websitePics/Portfolio.png'

export const projects = [
    {
        title: "Covid-19 Tracker",
        hostLink: "https://covid19trackerfrontend.herokuapp.com/",
        githubLink: "https://github.com/radbahi/CovidTrackerFrontend",
        githubLink2: "https://github.com/teapuddles/CovidTrackerBackend",
        description: "Covid-19 Tracker is a web application created by Radouane 'Red' Bahi, and Kevin Gleeson. Due to Covid-19 information varying so widely all over the world, this app was created to be a central hub for commonly asked global/country specific statistics.", 
        image: virus,
        siteImage: Covid,
        linkMessage: "Take a look at this app",
        techUsed: [
            "React.js",
            "Redux",
            "Ruby on Rails",
            "PostgreSQL",
            "Styled Components",
            "NewsAPI",
            "Disease.sh",
            "Heroku One-off Dynos"
        ],
    },
    {
        title: "Bloo Karaoke",
        hostLink: "https://bloo-karaoke.herokuapp.com/",
        githubLink: "https://github.com/teapuddles/Bloo-Frontend",
        githubLink2: "https://github.com/teapuddles/Bloo-Backend",
        description: "Bloo Karaoke is a webapp designed to help users find songs that they could sing at karaoke using a music education technique by Edwin Gordon called Music Learning Theory. Just follow the steps in the Find your Song section to learn more!", 
        image: piano,
        siteImage: Bloo,
        linkMessage: "Take a look at this app",
        techUsed: [
            "React.js",
            "Ruby on Rails",
            "npm-react-piano",
            "PostgreSQL",
            "Custom CSS"
        ],
    },
    {
        title: "Fifteen Minute Food",
        hostLink: "https://teapuddles.github.io/fifteen-minute-food-frontend/",
        githubLink: "https://github.com/teapuddles/fifteen-minute-food-frontend",
        githubLink2: "https://github.com/teapuddles/fifteen_min_backend",
        description: "Fifteen Minute Food is a food delivery app that allows users to search for restaurants in the New York City area and place orders for food.",
        image: food,
        siteImage: Fifteen,
        linkMessage: "Take a look at this app",
        techUsed: [
            "React.js",
            "Ruby on Rails",
            "PostgreSQL",
            "Yelp API",
            "Stripe API",
            "Custom CSS",
        ],
    },
    {
        title: "This Portfolio",
        hostLink: "https://github.com/teapuddles/my-portfolio",
        githubLink: "https://github.com/teapuddles/my-portfolio",
        description: "This Portfolio was designed to act as a central hub for the work I create in the world of Web Development. Features include a list of my four most recent blogs, and details into the technologies involved in each of my projects. I invite you to take a look around!", 
        image: myIcon,
        siteImage: Portfolio,
        linkMessage: "I hope you enjoy my portfolio!",
        techUsed: [
            "Gatsby",
            "React Components",
            "Styled Components",
            "Custom CSS",
            "Medium Plugin"
        ],
    }
]

