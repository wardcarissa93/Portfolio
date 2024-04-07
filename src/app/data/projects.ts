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
      code_snippets: null,
    },
    {
      id:  2,
      title: "Expense App",
      slug:  "expense-app",
      excerpt: "A full-stack app for recording and viewing expenses.",
      body: "This is an untitled full-stack TypeScript application for expense management. The React-based front-end requires users to authenticate themselves via Kinde prior to using the application. Once logged in, the user can create new expenses, view their expense history, and track the total sum of their expenses. User-friendly error handling prevents incorrect datatypes from being submitted to the PostgreSQL database, powered by Neon. Hono framework is also used to construct the back-end of this app. This app has been securely deployed on AWS EC2 for maximum scalability and reliability.",
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
      code_snippets: [
        `
        // expenses.tsx

        import { useQuery } from '@tanstack/react-query';
        import { createFileRoute, Link } from '@tanstack/react-router'; // Importing necessary modules
        import dateFormat from 'dateformat'; // Importing date formatting utility
        
        // Creating a file route for authenticated expenses
        export const Route = createFileRoute('/_authenticated/expenses')({
            component: Expenses, // Component to render for this route
        })
        
        type Expense = {
            id: number;
            title: string;
            amount: string;
            date: Date;
        };
        
        type ExpensesQueryData = {
            expenses: Expense[];
        };
        
        // Async function to fetch all expenses
        async function getAllExpenses() {
            const res = await fetch('/api/expenses');
            const json: ExpensesQueryData = await res.json();
            return json;
        }
        
        // Expenses component
        function Expenses() {
            const expensesQuery = useQuery({
                queryKey: ['expenses'],
                queryFn: getAllExpenses, // Fetching expenses data
              });
        
            return (
                /* Rendering expenses content */
                &lt;div className="p-2"&gt; {/* Opening div with class name */}
                    {((expensesQuery.error as Error | undefined)?.message) &amp;&amp; ( // Checking for errors
                        &lt;div&gt;{(expensesQuery.error as Error).message}&lt;/div&gt; // Displaying error message
                    )}
                    {expensesQuery.isPending ? ( // Checking if data is pending
                        &lt;div className="flex flex-col max-w-96 m-auto animate-pulse"&gt; {/* Displaying loading animation */}
                        Loading Expenses ...
                        &lt;/div&gt;
                    ) : (
                        &lt;div&gt; {/* Opening div for expenses data */}
                        {expensesQuery.data?.expenses.length === 0 ? ( // Checking if there are no expenses
                            &lt;p className="text-center"&gt;Click &lt;Link to="/create" id="create-link"&gt;here&lt;/Link&gt; to create your first expense.&lt;/p&gt; // Displaying message to create expense
                        ) : (
                            &lt;div&gt; {/* Opening div for expenses list */}
                            &lt;h2 className="text-center header"&gt;Expenses&lt;/h2&gt; {/* Displaying header */}
                            {expensesQuery.data?.expenses
                                .slice()
                                .sort(
                                (a: Expense, b: Expense) =>
                                    new Date(b.date).getTime() - new Date(a.date).getTime()
                                )
                                .map((expense: Expense) => ( // Mapping through expenses to display each item
                                &lt;div key={expense.id} className="expense-item"&gt; {/* Opening div for each expense item */}
        
                                    &lt;p className="date"&gt; {/* Displaying expense date */}
                                        {dateFormat(expense.date, "mmm dS yyyy", true)} -{" "} {/* Formatting date */}
                                    &lt;/p&gt;
                                    &lt;p className="title"&gt;{expense.title}:&lt;/p&gt; {/* Displaying expense title */}
                                    &lt;div&gt;\${parseFloat(expense.amount).toFixed(2)}&lt;/div&gt; {/* Displaying expense amount */}
                                &lt;/div&gt; {/* Closing div for expense item */}
                                ))}
                            &lt;/div&gt; {/* Closing div for expenses list */}
                        )}
                        &lt;/div&gt; {/* Closing div for expenses data */}
                    )}
                &lt;/div&gt; {/* Closing div for content */}
            )
        }`,
        `
        // expenses.ts

        import {
          pgTable, // Importing pgTable function for PostgreSQL table creation
          text, // Importing data type for text columns
          varchar, // Importing data type for varchar columns
          timestamp, // Importing data type for timestamp columns
          numeric, // Importing data type for numeric columns
          serial, // Importing data type for serial columns (auto-incrementing integers)
          date, // Importing data type for date columns
        } from "drizzle-orm/pg-core"; // Importing necessary modules from "drizzle-orm/pg-core"
        
        // Defining the expenses table using pgTable
        export const expenses = pgTable("expenses", {
          id: serial("id").primaryKey(), // Defining id column as a primary key auto-incrementing serial
          userId: text("user_id").notNull(), // Defining userId column as text, not nullable
          title: varchar("title", { length: 100 }).notNull(), // Defining title column as varchar with max length 100, not nullable
          amount: numeric("amount", { precision: 10, scale: 2 }).notNull(), // Defining amount column as numeric with precision 10 and scale 2, not nullable
          date: date("date", { mode: "string" }), // Defining date column as date with mode "string"
          createdAt: timestamp("created_at", { withTimezone: true }) // Defining createdAt column as timestamp with timezone, not nullable, defaulting to current timestamp
            .notNull()
            .defaultNow(),
        });
        `,
        `
        // auth.ts

        import {
          createKindeServerClient,
          GrantType,
          type SessionManager,
          type UserType,
        } from "@kinde-oss/kinde-typescript-sdk";
        
        import { type Context, type MiddlewareHandler } from "hono";
        import { getCookie, setCookie, deleteCookie } from "hono/cookie";
        
        // Client for authorization code flow
        export const kindeClient = createKindeServerClient(
          GrantType.AUTHORIZATION_CODE,
          {
            authDomain: process.env.KINDE_DOMAIN!,
            clientId: process.env.KINDE_CLIENT_ID!,
            clientSecret: process.env.KINDE_CLIENT_SECRET!,
            redirectURL: process.env.KINDE_REDIRECT_URI!,
            logoutRedirectURL: process.env.KINDE_LOGOUT_REDIRECT_URI!,
          }
        );
        
        export const sessionManager = (c: Context): SessionManager => ({
          async getSessionItem(key: string) {
            const result = getCookie(c, key);
            return result;
          },
          async setSessionItem(key: string, value: unknown) {
            const cookieOptions = {
              httpOnly: true,
              secure: true,
              sameSite: "Lax",
            } as const;
            if (typeof value === "string") {
              setCookie(c, key, value, cookieOptions);
            } else {
              setCookie(c, key, JSON.stringify(value), cookieOptions);
            }
          },
          async removeSessionItem(key: string) {
            deleteCookie(c, key);
          },
          async destroySession() {
            ["id_token", "access_token", "user", "refresh_token"].forEach((key) => {
              deleteCookie(c, key);
            });
          },
        });
        
        export const getUser: MiddlewareHandler<{
          Variables: {
            user: UserType;
          };
        }> = async (c, next) => {
          try {
            const manager = sessionManager(c);
            const isAuthenticated = await kindeClient.isAuthenticated(manager);
            if (!isAuthenticated) {
              return c.json({ error: "Unauthorized" }, 401);
            }
            const profile = await kindeClient.getUserProfile(manager);
            c.set("user", profile);
            await next();
          } catch (e) {
            console.error(e);
            return c.json({ error: "Unauthorized" }, 401);
          }
        };`
      ],
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
      code_snippets: [`...

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
    `],
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