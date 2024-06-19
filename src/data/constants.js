import realestate from "../images/real-estate.png";
import Aiassistant from "../images/ai-assistant.png";
import netflix from "../images/netflix.png";
import vidtube from "../images/youtube.png";

export const Bio = {
  name: "Twinkle Goyal",
  roles: ["Frontend Developer"],
  description:
    "Self-taught frontend developer passionate about crafting user-friendly web experiences. Eager to learn and Contribute in collaborative team environment. Seeking an opportunity to grow as a developer. ",
  github: "https://github.com/twinklegoyal233",
  resume:
    "https://drive.google.com/file/d/1ffZrcMcn8UatXGIaautbbqpV7ADNaETA/view?usp=sharing",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "Html",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "Css",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },

      {
        name: "Tailwind",
        image:
          "https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp",
      },

      {
        name: "Git",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFT1MO4Ln0Ynz4VKkD2EDyylsYzoVg1d8FiQ&s",
      },
      {
        name: "Responsive Design",
        image:
          "https://i0.wp.com/webdevpuneet.com/wp-content/uploads/2020/05/responsive-web-design-icon-3.png?fit=837%2C679&ssl=1",
      },
      {
        name: "Styled Components",
        image: "https://styled-components.com/atom.png",
      },
      {
        name: "Firebase",
        image:
          "https://w7.pngwing.com/pngs/573/662/png-transparent-firebase-database-mobile-backend-as-a-service-push-technology-firebase-angle-text-orange.png",
      },
    ],
  },
];

export const education = [
  {
    id: 0,
    school: "Indra Gandhi Natiional Open University ",
    degree: "BSC MATHS",
    date: "Apr 2018 - Apr 2021",
  },
  {
    id: 1,
    school: "Emmanuel Mission School, Talwandi Kota",
    degree: "PCM",
    date: "Apr 2015 - Apr 2017",
  },
  {
    id: 2,
    school: "Delhi Public School, NTPC",
    date: "Apr 2013 - Apr 2015",
  },
];

export const projects = [
  {
    id: 0,
    title: "AI-assistant",
    description:
      "In my AI Assistant project, I integrated the Gemini API for data retrieval and utilized the Context API for efficient state management thereby expanded my proficiency in API integration.",
    image: Aiassistant,
    github: "https://github.com/twinklegoyal233/ai-assistant",
    webapp: "https://twinklegoyal-ai-assistant.vercel.app/",
  },
  {
    id: 1,
    title: "Youtube",
    description:
      "In my Youtube project, I explored the YouTube API and Redux. I implemented essential features such as video playback, user interaction functionalities like comments, and seamless switching between various content types such as news, blogs, and shorts. ",
    image: vidtube,
  
    github: "https://github.com/twinklegoyal233/Youtube",
    webapp: "https://twinklegoyal-youtube.vercel.app/",
  },
  {
    id: 2,
    title: "Real Estate",
    description:
      "For this project, I built a real estate website using HTML, CSS and JavaScript. Through this project, I learnt Responsive Web Design, Building reusable Components. ",
    image: realestate,
    github: "https://github.com/twinklegoyal233/real-estate",
    webapp: "https://twinklegoyal-realestate.vercel.app/",
  },
  {
    id: 3,
    title: "Netflix",
    description:
      "For this project, I worked with Firebase, Redux, and TMDB API. It features user login, Redux state management, and fetches movie data from TMDB. ",
    image: netflix,
    github: "https://github.com/twinklegoyal233/Netflix-project",
    webapp: "https://twinklegoyal-netflix.vercel.app/",
  },
];
