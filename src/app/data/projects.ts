import { Project } from '../models/project';

export const PROJECTS: Project[] = [
    {
      id:  1,
      title: "Novella",
      slug:  "novella",
      excerpt: "An e-commerce platform specializing in the sale of necklaces.",
      body: "Novella is an e-commerce platform specializing in the sale of necklaces. Built primarily using C# with Identity Framework for authentication and role-based authorization, this was a 3-month group project incorporating Agile methodology. Unauthenticated users can browse products and create an account with the website. Recaptcha is incorporated into the registration process in order to ensure only valid users can access the website. Once their email has been verified via SendGrid, customers may add products to their cart and complete purchases via PayPal. An admin area allows authorized users to perform CRUD operations on the products, users, and orders in the database.",
      urls: [
        "https://github.com/wardcarissa93/Novella"
      ],
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
      urls: [
        "https://d3negrz2kpioyi.cloudfront.net/"
      ],
      published_date: "2024",
      images: [
        "bird-tracker-login.png",
        "bird-tracker-search.png",
        "bird-tracker-add-bird.png",
        "bird-tracker-bird-list.png"
      ],
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
      code_snippets: [
        `
        import { useState } from 'react';
        import { createFileRoute, Link } from '@tanstack/react-router';
        import SearchBar from '../../components/search-bar';
        import '../../App.css';

        interface Bird {
          id: number;
          name: string;
          sciName: string;
          images: string[];
        }

        export const Route = createFileRoute('/_authenticated/')({
          component: HomePage,
        })

        function HomePage() {
          const [searchResults, setSearchResults] = useState<Bird[]>([]);

          const handleSearch = async (query: string) => {
            try {
              const searchResultsFor = document.getElementById('search-results-for');
              if (searchResultsFor) {
                searchResultsFor.textContent = "Loading search results...";
              }

              const apiUrl = \`https://nuthatch.lastelm.software/v2/birds?page=1&pageSize=100&region=North%20America&operator=AND&name=\${query}\`;
              const res = await fetch(apiUrl, {
                headers: {
                  'api-key': import.meta.env.VITE_NUTHATCH_API_KEY,
                },
              });
              if (!res.ok) {
                throw new Error('Failed to fetch search results');
              }
              const data = await res.json();
              console.log(data);

              if (data["entities"].length === 0) {
                if (searchResultsFor) {
                  searchResultsFor.textContent = \`No search results matching '\${query}'. \`;
                }
              } else {
                if (searchResultsFor) {
                  searchResultsFor.textContent = \`Search results for '\${query}': \`;
                }
              }
              setSearchResults(data["entities"]);
            } catch (error) {
              console.error('Error fetching search results: ', error);
            }
          };

          return (
            <div className="App">
              <div id="search-title">
                <h2>Search for North American Birds</h2>
                <h2>by Common Name</h2>
              </div>
              <SearchBar onSearch={handleSearch} />
              <p id="search-results-for"></p>
              <div id="bird-results-div">
                {searchResults.map((bird) => (
                  <div key={bird.id} className="bird-result">
                    {(bird.images && bird.images.length > 0) ? (
                      <img src={bird.images[0]} alt={bird.name} className="bird-result-image"/>
                    ) : (
                      <div className="bird-result-no-image">
                        <p>No Image Available</p>
                      </div>
                    )}
                    <div className="bird-result-name">
                      <p>{bird.name}</p>
                      <p className="species-name">{bird.sciName}</p>
                    </div>
                    <Link to="/bird/$birdId" params={{ birdId: bird.id.toLocaleString() }}>
                      <button className="more-info-button">More Info</button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        `,
        `
        import { StackContext, Api, EventBus, StaticSite, Bucket } from "sst/constructs";

        export function API({ stack }: StackContext) {
          const audience = \`api-BirdApp-\${stack.stage}\`;

          const assetsBucket = new Bucket(stack, "assets");

          const api = new Api(stack, "api", {
            authorizers: {
              myAuthorizer: {
                type: "jwt",
                jwt: {
                  issuer: "https://birdtracker.kinde.com",
                  audience: [audience],
                },
              },
            },
            defaults: {
              authorizer: "myAuthorizer",
              function: {
                environment: {
                  DRIZZLE_DATABASE_URL: process.env.DRIZZLE_DATABASE_URL!,
                }
              }
            },
            routes: {
              "GET /": {
                authorizer: "none",
                function: {
                  handler: "packages/functions/src/lambda.handler",
                }
              },
              "GET /birds": "packages/functions/src/birds.handler",
              "POST /birds": "packages/functions/src/birds.handler",
              "POST /signed-url": {
                function: {
                  environment: {
                    ASSETS_BUCKET_NAME: assetsBucket.bucketName,
                  },
                  handler: "packages/functions/src/s3.handler",
                }
              }
            },
          });

          api.attachPermissionsToRoute("POST /signed-url", [assetsBucket, "grantPut"]);

          const web = new StaticSite(stack, "web", {
            path: "packages/web",
            buildOutput: "dist",
            buildCommand: "npm run build",
            environment: {
              VITE_APP_API_URL: api.url,
              VITE_APP_KINDE_AUDIENCE: audience,
            },
          })

          stack.addOutputs({
            ApiEndpoint: api.url,
            WebsiteUrl: web.url,
          });
        }
        `,
        `
        import { Hono } from 'hono';
        import { handle } from 'hono/aws-lambda';

        import { birds as birdsTable } from '@bird-tracker/core/db/schema/birds';
        import { db } from "@bird-tracker/core/db";
        import { eq, desc } from "drizzle-orm";

        import { authMiddleware } from '@bird-tracker/core/auth';

        const app = new Hono();

        app.get("/birds", authMiddleware, async (c) => {
            const userId = c.var.userId;
            const birds = await db
                .select()
                .from(birdsTable)
                .where(eq(birdsTable.userId, userId))
                .orderBy(desc(birdsTable.date));
            return c.json({ birds });
        });

        app.post("/birds", authMiddleware, async (c) => {
            const userId = c.var.userId;
            const body = await c.req.json();
            const bird = {
                ...body,
                userId,
            };
            const newBird = await db.insert(birdsTable).values(bird).returning()
            return c.json({ birds: newBird });
        });

        export const handler = handle(app);
        `,
        `
        import { createMiddleware } from 'hono/factory'
        import type { LambdaEvent, LambdaContext } from 'hono/aws-lambda'

        type EnhancedLambdaEvent = LambdaEvent & {
          requestContext?: {
            authorizer?: {
              jwt?: {
                claims: {
                  sub: string;
                };
              };
            };
          };
        };

        type AuthEnv = {
          Variables: {
            userId: string
          },
          Bindings: {
            event: EnhancedLambdaEvent
            context: LambdaContext 
          }
        }
        export const authMiddleware = createMiddleware<AuthEnv>(async (c, next) => {
          const userId = c.env.event.requestContext?.authorizer?.jwt?.claims.sub
          if (!userId) {
            return c.json({ error: "Unauthorized" }, 401)
          }
          c.set('userId', userId)
          await next()
        });
        `
      ],
    },
    {
      id: 3,
      title: "Our Beauty Referral Network",
      slug:  "our-beauty-referral-network",
      excerpt: "A platform for clients and businesses in the beauty industry to make referrals and income.",
      body: "This industry project was developed for Our Beauty Referral Network, a relatively new compnay which offers a platform for clients and businesses in beauty, wellness, and related industries to refer each other to their favorite service providers, while earning income for doing so. As a group of 5 students, we built a prototype of the website from scratch. The React front-end communicates with a PostgreSQL database via an API built with C#.",
      urls: [
        "https://github.com/wardcarissa93/OBRN",
        "https://github.com/wardcarissa93/OurBeautyReferralNetworkBackEnd"
      ],
      published_date: "2024",
      images: [
        "obrn-home-page.png"
      ],
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
      code_snippets: [
        `
        function ProfileBanner({ title, imagePath, name, email, phone, location, referralCode }) {
          const [imageUrl, setImageUrl] = useState({ name: '', url: '' });
          const [sasToken, setSasToken] = useState(null);
      
          // Fetch a single image by name
          const fetchImageByName = useCallback(async (blobName) => {
              try {
                  const account = import.meta.env.VITE_STORAGE_ACCOUNT;
                  const containerName = import.meta.env.VITE_STORAGE_CONTAINER;
                  const blobServiceClient = new BlobServiceClient(\`https://\${account}.blob.core.windows.net/?\${sasToken}\`);
                  const containerClient = blobServiceClient.getContainerClient(containerName);
                  const blobClient = containerClient.getBlockBlobClient(blobName);
                  const blobUrl = blobClient.url;
                  setImageUrl({ name: blobName, url: blobUrl });
              } catch (error) {
                  console.error(error);
              }
          }, [sasToken]);
      
          useEffect(() => {
              async function fetchData() {
                  const token = await fetchSasToken();
                  setSasToken(token);
                  fetchImageByName(imagePath);
              }
              fetchData();
          }, [fetchImageByName, setSasToken, imagePath])
      
          return (
              <div className="profile-banner">
                  <div className="profile-banner-top-container">
                      <h1 className="profile-banner-title">{title}</h1>
                      <div className="profile-banner-buttons">
                      <NavLink to="/editprofile" className="button">EDIT PROFILE</NavLink>
                      </div>
                  </div>
                  <div className="profile-banner-image-container">
                      <img src={imageUrl.url || defaultProfile} alt="Profile Picture" className="profile-banner-picture"/>
                  </div>
                  <div className="profile-banner-details"> 
                      <h2 className="profile-banner-name">{capitalizeFirstLetters(name)}</h2>
                      <p><i className="fa-solid fa-user-plus"></i> {referralCode}</p>
                      <p><i className="fa-solid fa-envelope"></i> {email}</p>
                      <p><i className="fa-solid fa-phone"></i> {phone}</p>
                      <p><i className="fa-solid fa-location-dot"></i> {capitalizeFirstLetters(location)}</p>
                  </div>
              </div>
          );
      }
      `,
      `
      public async Task<string> GenerateJwtToken(string email)
      {
          var user = await _userManager.FindByEmailAsync(email);
          if (user == null)
          {
              throw new ApplicationException("User not found.");
          }

          var claims = new List<Claim>
          {
              new Claim(ClaimTypes.Email, email),
              new Claim(ClaimTypes.NameIdentifier, user.Id)
          };

          var roles = await _userRoleRepo.GetUserRolesAsync(email);
          if (roles != null)
          {
              foreach (var role in roles)
              {
                  claims.Add(new Claim(ClaimTypes.Role, role));
              }
          }

          var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
          var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
          var expires = DateTime.Now.AddDays(Convert.ToDouble(_configuration["Jwt:ExpireDays"]));

          var token = new JwtSecurityToken(
              _configuration["Jwt:Issuer"],
              _configuration["Jwt:Issuer"],
              claims,
              expires: expires,
              signingCredentials: creds
          );

          return new JwtSecurityTokenHandler().WriteToken(token);
      }
      `,
      `
      using Microsoft.AspNetCore.Authentication.JwtBearer;
      using Microsoft.AspNetCore.Hosting;
      using Microsoft.AspNetCore.Identity;
      using Microsoft.EntityFrameworkCore;
      using Microsoft.Extensions.Configuration;
      using Microsoft.Extensions.DependencyInjection;
      using Microsoft.Extensions.Hosting;
      using Microsoft.IdentityModel.Tokens;
      using Npgsql;
      using OurBeautyReferralNetwork.Data;
      using OurBeautyReferralNetwork.Models;
      using OurBeautyReferralNetwork.Repositories;
      using OurBeautyReferralNetwork.Utilities;
      using Stripe;
      using System;
      using System.Net;
      using System.Text;

      var builder = WebApplication.CreateBuilder(args);

      var connectionString = builder.Configuration["ConnectionStrings:DefaultConnection"];

      Console.WriteLine("builder.Configuration[\"ConnectionStrings:DefaultConnection\"] = " + builder.Configuration["ConnectionStrings:DefaultConnection"]);

      StripeConfiguration.ApiKey = builder.Configuration["StripeKey"];
      Console.WriteLine("builder.Configuration[\"StripeKey\"] = " + builder.Configuration["StripeKey"]);

      // Add services to the container.
      builder.Services.AddDbContext<obrnDbContext>(options =>
          options.UseNpgsql(connectionString));

      builder.Services.AddDbContext<ApplicationDbContext>(options =>
          options.UseNpgsql(connectionString));

      builder.Services.AddScoped<CustomerRepo>();
      builder.Services.AddScoped<BusinessRepo>();
      builder.Services.AddScoped<RoleRepo>();
      builder.Services.AddScoped<UserRoleRepo>();
      builder.Services.AddScoped<JWTUtilities>();
      builder.Services.AddScoped<ReferralRepo>();
      builder.Services.AddScoped<UserRepo>();

      builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
          .AddJwtBearer(options =>
          {
              options.TokenValidationParameters = new TokenValidationParameters
              {
                  ValidateIssuerSigningKey = true,
                  IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JwtKey"])),
                  ValidateIssuer = false,
                  ValidateAudience = false,
                  ValidateLifetime = true,
                  ClockSkew = TimeSpan.Zero,
              };
          });

      // Configure identity options
      builder.Services.AddIdentity<IdentityUser, IdentityRole>(options =>
      {
          options.Password.RequireDigit = true;
          options.Password.RequiredLength = 6;
          options.Password.RequireNonAlphanumeric = false;
          options.Password.RequireUppercase = true;
          options.Password.RequireLowercase = true;
      })
      .AddRoles<IdentityRole>()
      .AddEntityFrameworkStores<ApplicationDbContext>()
      .AddDefaultTokenProviders();

      builder.Services.AddControllers();
      builder.Services.AddEndpointsApiExplorer();
      builder.Services.AddSwaggerGen();

      builder.Services.AddControllers().AddJsonOptions(options =>
      {
          options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.Preserve;
      });


      builder.Services.AddCors(options =>
      {
          options.AddPolicy("AllowReactApp",
              builder =>
              {
                  builder.WithOrigins("http://localhost:5173/")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
              });
      });

      var app = builder.Build();

      if (app.Environment.IsDevelopment())
      {
          app.UseSwagger();
          app.UseSwaggerUI();
      }
      app.UseCors("AllowReactApp");
      app.UseAuthentication();
      app.UseAuthorization();
      app.MapControllers();
      app.Run();
      `
      ],
    },
    {
      id:  4,
      title: "Film Findr",
      slug:  "film-findr",
      excerpt: "A React application that fetches movie data via an API and displays it in a user-friendly manner.",
      body: "FilmFindr is a React application that fetches movie data from the 'The Movie Database' (TMDB) API and displays it in a user-friendly manner. The UI includes buttons for adding movies to 'Favorites' and/or 'Watch List'. This data is managed in local storage. React-Redux is used to manage state throughout the app, allowing for smooth and efficient data management.",
      urls: [
        "http://filmfindr.ca"
      ],
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