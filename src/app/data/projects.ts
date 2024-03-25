import { Project } from '../models/project';

export const PROJECTS: Project[] = [
    {
      id:  1,
      title: "Novella",
      slug:  "novella",
      excerpt: "Excerpt for Novella",
      body: "Body for Novella",
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
      title: "Expense App",
      slug:  "expense-app",
      excerpt: "Excerpt for Expense App",
      body: "Body for Expense App",
      url: null,
      published_date: null,
      image: null,
      thumb: null,
      category_id: 3,
      created_at: "2024-01-30T16:23:23.000000Z",
      updated_at: "2023-01-30T16:24:52.000000Z",
      category: { id: 3, slug: "full-stack", name: "Full Stack" },
      tags: [
        {
          id: 7,
          name: "SQL",
          slug: "sql",
          "pivot": { "projects_id": 2, "tags_id": 7 }
        },
        {
          id: 10,
          name: "TypeScript",
          slug: "typescript",
          "pivot": { "projects_id": 2, "tags_id": 10 }
        },
        {
          id: 11,
          name: "Hono",
          slug: "hono",
          "pivot": { "projects_id": 2, "tags_id": 11 }
        }
      ]
    },
    {
      id:  3,
      title: "Spectrum",
      slug:  "spectrum",
      excerpt: "Challenge your color perception with Spectrum, a JavaScript game. Guess the hexcode of randomly-generated colors and explore the vibrant world of hues.",
      body: "Dive into the captivating world of Spectrum, a JavaScript game that puts your color knowledge to the test. Can you guess the hexcode of the randomly-generated color? Challenge yourself and explore the vibrant spectrum of colors. Unlock the artist within and embark on an exciting journey with Spectrum.",
      url: "http://spectrum-game.me",
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
          "pivot": { "projects_id": 3, "tags_id": 9 }
        }
      ]
    },
    {
      id:  4,
      title: "Film Findr",
      slug:  "film-findr",
      excerpt: "Excerpt for Film Findr",
      body: "Body for Film Findr",
      url: "http://filmfindr.ca",
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
          "pivot": { "projects_id": 4, "tags_id": 1 }
        },
        {
          id:  2,
          name:  "Sass",
          slug:  "sass",
          "pivot": { "projects_id": 4, "tags_id": 2 }
        }
      ]
    }
  ];