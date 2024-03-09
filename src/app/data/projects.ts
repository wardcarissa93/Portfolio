import { Project } from '../models/project';

export const PROJECTS: Project[] = [
    {
      id:  1,
      title: "News App",
      slug:  "news-app",
      excerpt: "Discover the latest in technology news through an engaging React-powered homepage. This responsive design, complemented with Sass, guarantees an optimal viewing experience across devices.",
      body: "<p>Stay updated on the latest tech trends with our News App. The homepage, skillfully crafted with React and stylized with Sass, promises a visually appealing and user-friendly journey across various devices.</p></p>Explore the future of technology with our responsive and innovative news platform.</p>",
      url: null,
      published_date: null,
      image: null,
      thumb: null,
      category_id: 2,
      created_at: "2024-01-30T16:23:23.000000Z",
      updated_at: "2023-01-30T16:24:52.000000Z",
      category: { id:  2, slug:  "front-end", name:  "Front End" },
      tags: [
        {
          id:  1,
          name:  "React",
          slug:  "react",
          "pivot": { "projects_id": 1, "tags_id": 1 }
        },
        {
          id:  2,
          name:  "Sass",
          slug:  "sass",
          "pivot": { "projects_id": 1, "tags_id": 2 }
        }
      ]
    },
    {
      id:  2,
      title: "Express Billing",
      slug:  "express-billing",
      excerpt: "Efficiently manage billing operations with our MERN stack app. Featuring user roles, robust authentication, and MongoDB for secure and scalable data storage.",
      body: "<p>Take control of billing processes effortlessly with Express Billing, a MERN stack application. User roles, secure authentication, and MongoDB ensure a powerful and scalable solution for efficient data management.</p></p>Experience the convenience of streamlined billing operations with our feature-rich application.</p>",
      url: null,
      published_date: null,
      image: null,
      thumb: null,
      category_id: 3,
      created_at: "2024-01-30T16:23:23.000000Z",
      updated_at: "2023-01-30T16:24:52.000000Z",
      category: { id:  3, slug:  "full-stack", name:  "Full Stack" },
      tags: [
        {
          id:  3,
          name:  "MongoDB",
          slug:  "mongodb",
          "pivot": { "projects_id": 2, "tags_id": 3 }
        },
        {
          id:  4,
          name:  "Node.js",
          slug:  "node.js",
          "pivot": { "projects_id": 2, "tags_id": 4 }
        }
      ]
    },
    {
      id:  3,
      title: "Responsive Images",
      slug:  "responsive-images",
      excerpt: "Immerse yourself in a visually stunning website where images adapt seamlessly to various device widths, ensuring a captivating and responsive user experience.",
      body: "<p>Step into the world of Responsive Images, a website designed to captivate users with visually stunning content. Each image adapts seamlessly to different device widths, providing an immersive and responsive user experience.</p></p>Explore the beauty of adaptability with our collection of visually arresting images.</p>",
      url: null,
      published_date: null,
      image: null,
      thumb: null,
      category_id: 2,
      created_at: "2024-01-30T16:23:23.000000Z",
      updated_at: "2023-01-30T16:24:52.000000Z",
      category: { id:  2, slug:  "front-end", name:  "Front End" },
      tags: []
    },
    {
      id:  4,
      title: "Novella",
      slug:  "novella",
      excerpt: "Indulge in the artistry of necklace design through Novella, an e-commerce platform. Immerse yourself in a seamless shopping experience using C#, MVC, SQL, and PayPal integration.",
      body: "<p>Discover the allure of Novella, an e-commerce platform dedicated to the artistry of necklace design. Immerse yourself in a seamless shopping experience, powered by C# and MVC architecture, with robust SQL data management and secure PayPal integration.</p></p>Adorn yourself with exquisite necklaces and make a fashion statement with Novella.</p>",
      url: null,
      published_date: null,
      image: null,
      thumb: null,
      category_id: 1,
      created_at: "2024-01-30T16:23:23.000000Z",
      updated_at: "2023-01-30T16:24:52.000000Z",
      category: { id:  1, slug:  "back-end", name:  "Back End" },
      tags: [
        {
          id:  5,
          name:  "C#",
          slug:  "c-sharp",
          "pivot": { "projects_id": 4, "tags_id": 5 }
        },
        {
          id:  6,
          name:  "MVC",
          slug:  "mvc",
          "pivot": { "projects_id": 4, "tags_id": 6 }
        },
        {
          id:  7,
          name:  "SQL",
          slug:  "sql",
          "pivot": { "projects_id": 4, "tags_id": 7 }
        },
        {
          id:  8,
          name:  "PayPal",
          slug:  "paypal",
          "pivot": { "projects_id": 4, "tags_id": 8 }
        }
      ]
    },
    {
      id:  5,
      title: "Spectrum",
      slug:  "spectrum",
      excerpt: "Challenge your color perception with Spectrum, a JavaScript game. Guess the hexcode of randomly-generated colors and explore the vibrant world of hues.",
      body: "<p>Dive into the captivating world of Spectrum, a JavaScript game that puts your color knowledge to the test. Can you guess the hexcode of the randomly-generated color? Challenge yourself and explore the vibrant spectrum of colors.</p></p>Unlock the artist within and embark on an exciting journey with Spectrum.</p>",
      url: null,
      published_date: null,
      image: null,
      thumb: null,
      category_id: 2,
      created_at: "2024-01-30T16:23:23.000000Z",
      updated_at: "2023-01-30T16:24:52.000000Z",
      category: { id:  2, slug:  "front-end", name:  "Front End" },
      tags: [
        {
          id:  9,
          name:  "JavaScript",
          slug:  "javascript",
          "pivot": { "projects_id": 5, "tags_id": 9 }
        }
      ]
    },
    {
      id:  6,
      title: "Banking App",
      slug:  "banking-app",
      excerpt: "Experience financial convenience with our C#-powered Banking App. View balances, make deposits, and withdrawals with ease.",
      body: "<p>Transform your banking experience with our C#-powered Banking App. View account balances, make deposits, and withdrawals with utmost ease and security.</p></p>Empower your financial journey with the convenience of our user-friendly and feature-rich Banking App.</p>",
      url: null,
      published_date: null,
      image: null,
      thumb: null,
      category_id: 1,
      created_at: "2024-01-30T16:23:23.000000Z",
      updated_at: "2023-01-30T16:24:52.000000Z",
      category: { id:  1, slug:  "back-end", name:  "Back End" },
      tags: [
        {
          id:  5,
          name:  "C#",
          slug:  "c-sharp",
          "pivot": { "projects_id": 6, "tags_id": 5 }
        }
      ]
    }
  ];