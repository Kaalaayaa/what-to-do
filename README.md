# WhatToDo-App
App to search and list events

- one sentence description: With this app you can find, filter and create event listings happening in Berlin at anytime!
- (slightly) longer description: You can look up events by category, date and/or keyword. If you signup/login, you can also list your own events.
- MVP (Minimal Viable Product):
  - list of events on current day
  - filter by category
  - filter by date
  - registration/login
  - create event listing

## Usage

### Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


### Using Sanity with React

#### Creating and Managing Content

Access the Sanity Studio interface : 

  - Open a new terminal

  - When in the what-to-do repo cd into sanity-event folder

  - Run the npm run dev command

  - Follow the link shown to open Sanity Studio interface

1. Define your content schema by creating schemas for different content types in the schemas folder.
2. Use the Sanity Studio interface to create, update, and delete content entries based on your defined schema.
3. Publish your content changes to make them live and accessible to your React application.

Refer to the official **[Sanity documentation](https://www.sanity.io/docs)** for detailed instructions on working with Sanity Studio and managing content.


## Table of contents
- [Overview](#overview)
  - [Team](#team)
  - [The idea](#the-idea)
  - [User flow](#user-flow)
  - [Categories](#categories)
- [Process](#process)
  - [Git workflow](#git-workflow)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
### Team

- Sofia P
  - Role: Design 
- Kalaya Chatelain (https://github.com/Kaalaayaa)
  - Role: Web Developer

- Repository Maintainance is shared

### The idea

Users should be able to:
- View the optimal layout for the app depending on their device's screen size

### User flow 
- case 1: user is NOT logged in
  - LANDING PAGE MAIN: events happening that current day as a list --> KEY FEATURE
  - OR events as pins on a map (you can switch between listings view and map view) --> NICE TO HAVE
  - HEADER: login/signup; create a listing --> KEY FEATURE
  - HEADER: User can filter for events by category (drop-down menu) and/or by date (drop-down menu) --> KEY FEATURES
  - HEADER: User could also filter by district (drop-down) and/or search by keywords (input field) --> NICE TO HAVE
  - MAIN: Events displayed as cards; 4 in a row on Web App, 1 or 2 in a row on mobile, infinite scroll-down --> KEY FEATURE 
  - OR 20 results per page (web and mobile) AND on mobile change from 2 cards per row view (grid) to 1 card per row view (single)  --> NICE TO HAVE
  - EVENT CARD: Image (incl. Date or duration), Title, Teaser, Category (only 1 displayed here, more on event page), District, (Wishlist Icon), GO button on Web (click on image on mobile) --> KEY FEATURES (apart from Wishlist)
  - FOOTER: contact, disclaimer (not responsible for content correctness), privacy (what type of data we collect and what we do with it) --> NICE TO HAVE
  - EVENT PAGE: 
    - WEB: 
      - Left 2/3: Image (incl. date/duration), Title, Description, Categories (all) --> KEY FEATURE; also Wishlist Icon and Map with Pin (GoogleMaps Integration) --> NICE TO HAVE
      - Right 1/3: Date & Times; Location (link to googlemaps); Price & Bookings (link to bookingpage); Contact Details: Telephone, email (link to website)
    - MOBILE: 1 Row: first image, title, start of description with a show more drop down; then the Date & Times, Location etc. row, Map
- case 2: user wants to register --> KEY FEATURE
  - SIGNUP --> redirect to LOGIN
- case 3 user wants to login --> KEY FEATURE
  - LOGIN --> redirect to LANDING PAGE
- case 4: user wants to create a listing --> KEY FEATURE
  - GO TO SIGNUP --> redirect to SIGNUP
- case 5: user wants to make a wishlist --> NICE TO HAVE
  - GO TO SIGNUP --> redirect to SIGNUP
- case 6: user is LOGGED IN --> KEY FEATURE
  - HEADER stays the same, plus logout
  - MAIN: still defaults to events on that day
  - above events, CREATE LISTING component, maybe display only a bit and hide the rest in a show more
  - adding hashtags (like keywords - additional to categories) --> NICE TO HAVE
  - NICE TO HAVE: Wishlist
- case 7: user gets a 404 page --> NICE TO HAVE

### Categories 
- to filter events by
1. Free
2. Workshop
3. Family
4. Market
5. Food
6. Reading
7. Opening
8. Exhibition
9. Performing Arts
10. Film
11. Music
12. Party

## Process
### Git workflow
1. Create issue in frontend repo AND/OR backend-repo (make note of issue number, which is set automaically by GitHub)
2. Set issue to “in progress”, assign yourself (or someone else)
3. Create branch for the issue like this: `git checkout -b issue#20-add-git-workflow-to-readme` (creates local branch on your machine)
4. Work in that branch
5. When done, `git commit -m “issue#20 Add user login on backend`
6. `git push -u origin issue#20-add-git-workflow-to-readme` (create remote branch on GitHub and push your work there)
7. On GitHub create pull request from `issue#20-add-git-workflow-to-readme` to main
8. Open pull request and in sidebar on the right link under a) Projects: "@Mxx1029's WhatToDo App tasks" and b) Linked issues: issue#20 ("Documenation: add git workflow to README.md (frontend repo)")
9. Someone reviews
10. Merge
11. Delete the branch on GitHub and locally
12. Repeat :)

### Built with
- Figma
- Semantic HTML5 markup
- CSS, Flexbox, Grid
- SCSS
- React
- Sanity
- Git, GitHub