import realestate from "../images/real-estate.png";
import Aiassistant from "../images/ai-assistant.png";
import vidtube from "../images/youtube.png";

export const Bio = {
  name: "Twinkle Goyal",
  roles: ["Frontend Developer"],
  description:
    "Self-taught frontend developer passionate about crafting user-friendly web experiences. Eager to learn and Contribute in collaborative team environment.Seeking an opportunity to grow as a developer. ",
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
    school: "Kalinga Institute of Industrial Technology, Bhubaneswar",
    grade: "8.71 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Kalinga Institute of Industrial Technology, Bhubaneswar. I have completed 4 semesters and have a CGPA of 8.71. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of the Google Developers Student Club (GDSC) at KIIT, where I am learning and working on exciting projects with a team of talented developers.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/methodist.png?alt=media&token=018a1b18-e2dd-4f34-8855-cff1b6b69fd3",
    school: "Methodist School, Dankuni",
    date: "Apr 2019 - Apr 2025",
    grade: "88.2%",
    desc: "I completed my class 12 high school education at Methodist School, Dankuni, where I studied Science with Computer Science.",
    degree: "ISC(XII), Science with Computer",
  },
  {
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/methodist.png?alt=media&token=018a1b18-e2dd-4f34-8855-cff1b6b69fd3",
    school: "Methodist School, Dankuni",
    date: "Apr 2017 - Apr 2019",
    grade: "92.3%",
    desc: "I completed my class 10 education at Methodist School, Dankuni, where I studied Science with Computer Application.",
    degree: "ICSC(X), Science with Computer",
  },
];

export const projects = [
  {
    id: 0,
    title: "AI-assistant",
    description:
      "In my AI Assistant project, I integrated the Gemini API for data retrieval and utilized the Context API for efficient state management. It expanded my proficiency in API integration and enhanced my ability to maintain clear and organized state management within complex web applications.",
    image: Aiassistant,
    tags: ["Html", "Css", "Javascript", "React Js", "Responsive Design"],
    github: "https://github.com/rishavchanda/Brain-Tumor-Detection",
    webapp: "https://brain-tumor.netlify.app/",
  },
  {
    id: 1,
    title: "Youtube",
    description:
      "In my Youtube project, I explored the YouTube API and Redux. I implemented essential features such as video playback, user interaction functionalities like comments, and seamless switching between various content types such as news, blogs, and shorts. ",
    image: vidtube,
    tags: [
      "Html",
      "Css",
      "Javascript",
      "React Js",
      "Redux",
      "Responsive Design",
    ],
    github: "https://github.com/rishavchanda/Podstream",
    webapp: "https://podstream.netlify.app/",
  },
  {
    id: 1,
    title: "Real Estate",
    description:
      "For this project, I built a real estate website using HTML, CSS and JavaScript. Through this project, I learnt Responsive Web Design, Building reusable Components. Adding SwiperJS and making the Form work. ",
    image: realestate,
    tags: ["Html", "Css", "Javascript", "React Js", "Responsive Design"],
    github: "https://github.com/rishavchanda/Project-Management-App",
    webapp: "https://main--extraordinary-crostata-d5388b.netlify.app/",
  },
];
