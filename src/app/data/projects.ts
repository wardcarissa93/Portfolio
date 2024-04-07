import { Project } from '../models/project';

export const PROJECTS: Project[] = [
    {
      id:  1,
      title: "Novella",
      slug:  "novella",
      excerpt: "Excerpt for Novella",
      body: "Body for Novella",
      url: null,
      published_date: "2024",
      images: null,
      category_id: 3,
      category: { id: 3, slug: "full-stack", name: "Full Stack" },
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
      ],
      code_snippet: null,
    },
    {
      id:  2,
      title: "Expense App",
      slug:  "expense-app",
      excerpt: "Excerpt for Expense App",
      body: "Body for Expense App",
      url: "https://expense-app.carissa-expense-app.xyz",
      published_date: "2024",
      images: [
        "expense-app-login.png",
        "expense-app-create.png",
        "expense-app-error.png",
        "expense-app-list.png",
      ],
      category_id: 3,
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
      ],
      code_snippet: null,
    },
    {
      id:  3,
      title: "Spectrum",
      slug:  "spectrum",
      excerpt: "A JavaScript-based color-guessing game.",
      body: "Spectrum is a simple web-based game that truly tests the user's color vision. Constructed using HTML, CSS, and JavaScript, the game begins with the computer randomly generating an RGB-formatted color. The user then has a limited number of chances (determined by the selected difficulty level) to correctly guess the RGB values of that color. Feedback within the UI guides with latter attempts.",
      url: "http://spectrum-game.me",
      published_date: "2024",
      images: [
        "spectrum-gameplay-screen.png",
        "spectrum-congratulations-screen.png",
      ],
      category_id: 2,
      category: { id:  2, slug:  "front-end", name:  "Front End" },
      tags: [
        {
          id:  9,
          name:  "JavaScript",
          slug:  "javascript",
          "pivot": { "projects_id": 3, "tags_id": 9 }
        }
      ],
      code_snippet: `...

      checkGuess() {
        // Compares the player's guess with the target color and provides feedback
        // by updating UI elements
    
        // Get the RGB values from the input fields
        const redInput = this.redInputField.value;
        const greenInput = this.greenInputField.value;
        const blueInput = this.blueInputField.value;
    
        // Update the player's guess with the input values
        player.updatePlayerGuess(redInput, greenInput, blueInput);
    
        // Store the input values and corresponding UI elements
        const colorInputs = [redInput, greenInput, blueInput];
        this.colorResults = [this.redResult, this.greenResult, this.blueResult];
    
        // Loop through each color input to compare with the target color
        for (let i = 0; i < colorInputs.length; i++) {
            // Check if the input matches the target color
            if (colorInputs[i] == this.colorTargets[i]) {
                // Update the UI element with a checkmark if the guess is correct
                this.colorResults[i].innerHTML = '&#x2713;';
            } else if (colorInputs[i] < this.colorTargets[i]) {
                // Update the UI element with an arrow pointing upwards if the guess is too low
                this.colorResults[i].innerHTML = '&#8593;';
            } else if (colorInputs[i] > this.colorTargets[i]) {
                // Update the UI element with an arrow pointing downwards if the guess is too high
                this.colorResults[i].innerHTML = '&#8595;';
            }
        }
    },

            ...
    `,
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
      code_snippet: `
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
    }
  ];