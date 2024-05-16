import { Project } from '../models/project';

export const PROJECTS: Project[] = [
    {
      id:  1,
      title: "Novella",
      slug:  "novella",
      excerpt: "An e-commerce platform specializing in the sale of necklaces.",
      body: "Novella is an e-commerce platform specializing in the sale of necklaces. Built primarily using C# with Identity Framework for authentication and role-based authorization, this was a 3-month group project incorporating Agile methodology. Unauthenticated users can browse products and create an account with the website. Recaptcha is incorporated into the registration process in order to Once their email has been verified via SendGrid, customers may add products to their cart and complete purchases via PayPal. An admin area allows authorized users to perform CRUD operations on the products, users, and orders in the database.",
      url: "https://github.com/wardcarissa93/Novella",
      published_date: "2024",
      images: [
        "novella-home-page.png",
        "novella-product-page.png",
        "novella-cart-page.png",
        "novella-checkout-page.png",
      ],
      category_id: 3,
      category: { id: 3, slug: "full-stack", name: "Full Stack" },
      tags: [
        {
          id:  3,
          name:  "C#",
          slug:  "c-sharp",
          "pivot": { "projects_id": 1, "tags_id": 3 }
        },
        {
          id:  4,
          name:  "SQL",
          slug:  "sql",
          "pivot": { "projects_id": 1, "tags_id": 4 }
        },
        {
          id: 5,
          name: "PayPal",
          slug: "paypal",
          "pivot": { "projects_id": 1, "tags_id": 5 }
        }
      ],
      code_snippets: null,
    },
    {
      id:  2,
      title: "Bird Tracker",
      slug:  "bird-tracker",
      excerpt: "A full-stack app for searching for birds and documenting sightings, including optional image upload.",
      body: "Bird Tracker is a serverless full-stack TypeScript application for learning about and recording birds seen in the wild. The React-based front-end requires users to authenticate themselves via Kinde prior to using the application. Once logged in, the user can search for birds of North America by name, fetching data via the Nuthatch API. They can also record birds they have seen in the wild, including the option to upload a photo if desired. User-friendly error handling prevents incorrect datatypes from being submitted to the PostgreSQL database, powered by Neon. Hono framework is also used to construct the back-end of this app.",
      url: "https://d3negrz2kpioyi.cloudfront.net/",
      published_date: "2024",
      images: [],
      category_id: 3,
      category: { id: 3, slug: "full-stack", name: "Full Stack" },
      tags: [
        {
          id: 4,
          name: "SQL",
          slug: "sql",
          "pivot": { "projects_id": 2, "tags_id": 4 }
        },
        {
          id: 7,
          name: "TypeScript",
          slug: "typescript",
          "pivot": { "projects_id": 2, "tags_id": 7 }
        },
        {
          id: 8,
          name: "Hono",
          slug: "hono",
          "pivot": { "projects_id": 2, "tags_id": 8 }
        }
      ],
      code_snippets: [],
    },
    {
      id: 3,
      title: "Our Beauty Referral Network",
      slug:  "our-beauty-referral-network",
      excerpt: "A platform for clients and businesses in the beauty industry to make referrals and income.",
      body: "This industry project was developed for Our Beauty Referral Network, a relatively new compnay which offers a platform for clients and businesses in beauty, wellness, and related industries to refer each other to their favorite service providers, while earning income for doing so. As a group of 5 students, we built a prototype of the website from scratch. The React front-end communicates with a PostgreSQL database via an API built with C#.",
      url: "",
      published_date: "2024",
      images: [],
      category_id: 3,
      category: { id:  3, slug:  "full-stack", name:  "Full Stack" },
      tags: [
        {
          id:  1,
          name:  "React",
          slug:  "react",
          "pivot": { "projects_id": 3, "tags_id": 1 }
        },
        {
          id:  2,
          name:  "Sass",
          slug:  "sass",
          "pivot": { "projects_id": 3, "tags_id": 2 }
        },
        {
          id:  3,
          name:  "C#",
          slug:  "c-sharp",
          "pivot": { "projects_id": 3, "tags_id": 3 }
        },
        {
          id:  4,
          name:  "SQL",
          slug:  "sql",
          "pivot": { "projects_id": 3, "tags_id": 4 }
        },
        {
          id:  6,
          name:  "JavaScript",
          slug:  "javascript",
          "pivot": { "projects_id": 3, "tags_id": 6 }
        }
      ],
      code_snippets: [],
    },
    {
      id:  4,
      title: "Film Findr",
      slug:  "film-findr",
      excerpt: "A React application that fetches movie data via an API and displays it in a user-friendly manner.",
      body: "FilmFindr is a React application that fetches movie data from the 'The Movie Database' (TMDB) API and displays it in a user-friendly manner. The UI includes buttons for adding movies to 'Favorites' and/or 'Watch List'. This data is managed in local storage. React-Redux is used to manage state throughout the app, allowing for smooth and efficient data management.",
      url: "http://filmfindr.ca",
      published_date: "2024",
      images: [
        "filmfindr-home-page.png",
        "filmfindr-watch-list.png",
      ],
      category_id: 2,
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
      ],
      code_snippets: [`
      // userSlice.js

      // Import createSlice function 
      import { createSlice } from '@reduxjs/toolkit';
      
      const initialState = {
          favorites: [], // Array to store favorite movie IDs
          watchlist: [], // Array to store watchlist movie IDs
      };
      
      // Creating a slice for user-related state
      const userSlice = createSlice({
          name: 'user', // Name of the slice
          initialState, // Initial state
          reducers: {
              // Reducer function to add a movie to favorites
              addToFavorites: (state, action) => {
                  state.favorites = [...state.favorites, action.payload]; // Adding movie ID to favorites
                  localStorage.setItem('favorites', JSON.stringify(state.favorites)); // Updating localStorage
              },
              // Reducer function to remove a movie from favorites
              removeFromFavorites: (state, action) => {
                  state.favorites = state.favorites.filter((id) => id !== action.payload); // Removing movie ID from favorites
                  localStorage.setItem('favorites', JSON.stringify(state.favorites)); // Updating localStorage
              },
              // Reducer function to add a movie to the watchlist
              addToWatchList: (state, action) => {
                  state.watchlist = [...state.watchlist, action.payload]; // Adding movie ID to the watchlist
                  localStorage.setItem('watchlist', JSON.stringify(state.watchlist)); // Updating localStorage
              },
              // Reducer function to remove a movie from the watchlist
              removeFromWatchList: (state, action) => {
                  state.watchlist = state.watchlist.filter((id) => id !== action.payload); // Removing movie ID from the watchlist
                  localStorage.setItem('watchlist', JSON.stringify(state.watchlist)); // Updating localStorage
              }
          },
      });
      
      // Extracting action creators and reducer from the slice
      export const {
          addToFavorites, // Action creator for adding a movie to favorites
          removeFromFavorites, // Action creator for removing a movie from favorites
          addToWatchList, // Action creator for adding a movie to the watchlist
          removeFromWatchList, // Action creator for removing a movie from the watchlist
      } = userSlice.actions;
      
      export default userSlice.reducer; // Reducer function for the user slice`
    ]
    }
  ];