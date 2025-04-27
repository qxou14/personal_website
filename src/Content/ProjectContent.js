import photoshare from "../Assets/project1.gif";
import photoshareApi from "../Assets/project2.gif";
import movieFlicks from "../Assets/project3.gif";
import iAuctionsApi from "../Assets/project4.gif";
import flix1 from "../Assets/Flixster1.gif";
import flix2 from "../Assets/Flixster2.gif";
import tweet1 from "../Assets/tweet1.gif";
import tweet2 from "../Assets/tweet2.gif";
import insClone1 from "../Assets/instagramClone1.gif";
import insClone2 from "../Assets/instagramClone2.gif";
// import todo from "../Assets/Todo.gif";
// import piechart from "../Assets/piechart.png";
import online from "../Assets/onlineRestaurant.png";

//images
import photoshareImage from "../Assets/image/project1.png";
import photoshareApiImage from "../Assets/image/project2.png";
import movieFlicksImage from "../Assets/image/project3.png";
import iAuctionsApiImage from "../Assets/image/project4.png";
import flixImage from "../Assets/image/flixster.png";
import tweetImage from "../Assets/image/tweet.png";
import insCloneImage from "../Assets/image/instagramClone.png";
// import todoImage from "../Assets/image/todo.png";

const Project = [
  {
    id: 1,
    isMobile: false,
    title: "Photoshare",
    label: "PhotoShare",
    link: "",
    gif: [photoshare],
    image: photoshareImage,
    description:
      "A photo sharing application that is simiar to a social media app.",
    features: [
      "Users can sign up for an account , log in to their account and log out from their account.",
      "Users have a profile page that shows their username, bio, and profile photo. And they can edit it whenever they want.",
      "Users can make a post which include a description and an image and they can comment on an existing post.",
      "Users can see posts that are posted by other users.",
    ],
    tool: "Python, Django",
  },

  {
    id: 2,
    isMobile: false,
    title: "PhotoShare-API",
    label: "PhotoShareAPI",
    link: "",
    gif: [photoshareApi],
    image: photoshareApiImage,
    description: "a RESTfulApi for a photo sharing application.",
    features: [
      "Users can retrieve a list of information such as profiles and posts by sending a GET request.",
      "Users can add a new post by sending a POST request.",
      "Users can changed their posts by sending a PUT/PATCH request.",
      "Users can delete their posts by sending a DELETE request.",
    ],
    tool: "Python, Django",
  },

  {
    id: 3,
    isMobile: false,
    title: "Movie Flicks",
    label: "Flicks",
    link: "",
    gif: [movieFlicks],
    image: movieFlicksImage,
    description:
      "A movie app built with React that displays details of movies based on the movie database API.",
    features: [
      "Users can see the latest 10 upcoming movies.",
      "Users can see the latest 10 trending movies.",
      "Users can see the latest 10 trending TV shows.",
      "Users can see the details of a movie or a TV show such as rating, overview and release date by clicking on them.",
    ],
    tool: "Javascript, HTML/CSS, React, Next.js, The Movie Database API",
  },

  {
    id: 4,
    isMobile: false,
    title: "iAuctions-API",
    label: "IAuctionsAPI",
    link: "",
    gif: [iAuctionsApi],
    image: iAuctionsApiImage,
    description:
      "A RESTful api to an eBay-like e-commerce auction site that will allow users to post auction listings, categorize listings, place bids on listings and comment on those listings.",
    features: [
      "Users can get a list of information such as users,categories and listings by using GET request.",
      "Users can create a new user/category by using the POST request.",
      "Users can modify the information by using the PUT/PATCH request.",
      "Users can delete the information by using the DELETE request.",
    ],
    tool: "Typescript, Express, Sequelize, Postman",
  },

  {
    id: 5,
    isMobile: true,
    title: "Android: Flix",
    label: "Flix",
    link: "",
    gif: [flix1, flix2],
    image: flixImage,
    description:
      "An Android app that allows users to view movies from the The Movie Database API.",
    features: [
      "Users can view a list of movies from The Movide Database API.",
      "Users can view a movie's details by clicking on it.",
      "Users can watch a movie's trailer by using YouTubePlayerView.",
    ],
    tool: "Java, Glide, Android Async HTTP, The Movie Database API , Android Studio",
  },
  {
    id: 6,
    isMobile: true,
    title: "Android: SimpleTweet",
    label: "Tweet",
    link: "",
    gif: [tweet1, tweet2],
    image: tweetImage,
    description:
      "An Android app that allows users to view Twitter timeline and post a new tweet by utilizing Twitter REST API.",
    features: [
      "Users can enter a new tweet and post this to twitter",
      "Users can see a counter with total number of characters left to tweet while composing their tweets",
      "Users can view the new tweet without refreshing their app.",
      "Users can view tweets offline and see last loaded tweets",
    ],
    tool: "Java, Glide, Android Async HTTP, Twitter Rest API , Android Studio",
  },

  {
    id: 7,
    isMobile: true,
    title: "Android: InstagramClone",
    label: "InsClone",
    link: "",
    gif: [insClone1, insClone2],
    image: insCloneImage,
    description: "An Android app that is similar to instagram.",
    features: [
      "Users can sign up and log in to their account and log out from their account.",
      "Users can take a photo, write a description and post it.",
      "Users can view other people's posts.",
      "Users can pull to refresh the page",
    ],
    tool: "Java, Glide, Android Async HTTP, Android Studio",
  },

  // {
  //   id: 8,
  //   isMobile: true,
  //   title: "Android: ToDo List",
  //   label: "Todo",
  //   link: "",
  //   gif: [todo],
  //   image: todoImage,
  //   description: "a Todo List for Android.",
  //   features: [
  //     "Users can view a list of todo items.",
  //     "Users can add or remove a todo item.",
  //     "Users can edit a todo item.",
  //   ],
  //   tool: "Java, Android Studio",
  // },
  {
    id: 9,
    isMobile: false,
    title: "Online Restaurant",
    label: "Online",
    link: "",
    gif: [online],
    image: online,
    description:
      "An online restaurant system that is capable of making transactions such as ordering, rating and viewing.",
    features: [
      "Users can sign up for an account,log in to their account and log out from their account.",
      "Users can view different dishes on the main page.",
      "Users can make a deposit.",
      "Users can order dishes if they have enough money in their account and with enough orders, they will become a VIP user which gives them discounts.",
      "Users can rate chefs and delivery men and they can file a complaint/compliment.",
      "Superusers can promote/demote a worker, process customer registrations and handle their complaints/compliments.",
    ],
    tool: "PHP.HTML/CSS,MySQL",
  },
  // {
  //   id: 10,
  //   isMobile: false,
  //   title: "Database Pie chart",
  //   label: "Piechart",
  //   link: "",
  //   gif: [piechart],
  //   image: piechart,
  //   description: "A piechart built with Javafx and MySQL database.",
  //   features: [
  //     "Enhanced understanding of class inheritance, Javafx and how to interact with MySQL server.",
  //   ],
  //   tool: "Java, Javafx, MySQL",
  // },
];

export default Project;
