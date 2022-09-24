# Technical Test : Smiling Agency

We want to get a sense of your backend and frontend experience. Both parts must be completed to be considered for the position.

1. We want clean and correct structured code when possible.
2. You have 2 days to complete it.
3. We are not looking for perfect code, just to see how you think and how far you can get in the alloted time.

## General Guidelines

1. All code must be publicly available either via github, bitbucket, ...etc
2. Db schemas, APIs, client app, backend also must be publicly hosted somewhere (`https://...`) use free services such as netlify, aws, heroku, ...etc

You are gonna be creating 2 applications (`frontend`) or if its easier 1 app with 2 routes (`react-router-dom`) and a their `backend`

### General Guidelines

- use `react` for the frontend
- if possible use `typescript` (frontend + backend)
- css and styles, use `styled-components`, `material-ui`, `emotion` anything that will help you speed the process
- sites are fully responsive
- backend uses `mongo`, `mongoose`, REST api or if you are feeling adventurous, `graphql`
- backend is initially seeded with some fake data of at least 50 objects
- your code contains some unit tests (backend + frontend)

_Note:_ If you can not do it on `typescript` do it on `javascript`, but we would also like to see your efforts, so commit your unfinished (if any ) `typescript` code on a separate branch

## Frontend

**Note** you can use [create-react-app](https://create-react-app.dev/docs/getting-started) to get you up and running quick

#### 1st App: **Subscription Form** (FRONTEND)

- Model Form contains the following inputs

  - firstname (type text)
  - lastname (type text)
  - picture (type string | must be valid image url)
  - gender (type radiobutton)
  - date of birth (select | calendar)
  - profession (type select: commedian, actor, actres, model)
  - shoesize (type number)
  - hair color (type number)
  - hair length (type number)
  - bra size (type number)
  - waist size in cm (type number)
  - height in cm (type number)
  - weight (type number)
  - what type of castings you will like to attend (type select: movies, commercials, newspapers, magazines, ..etc)

- Complete form information is send to the backend via a REST API and saved to a db (`mongo`, `mongoose`)

#### 2nd App: **Search Form** (FRONTEND)

- A simple search bar where I can search for the models that are on the `db`. I can search by name, lastname, profession
- The search bar also has a filter option where I can filter my search by model's hair color, hair length, height, profession, ...etc all selects that were on the form
- When I complete the search I see cards of the models matching my search, the card should have the model picture and some basic information

## Backend

**Note** some links to get you started

- [express](https://expressjs.com/)
- [how to setup mongodb , mongoose in express](https://www.robinwieruch.de/mongodb-express-setup-tutorial/)

### Instructions

- Create a REST API to handle the **form submission** and the **search submission**
- Information is saved to a `db` (form submission)
- The db is originally seeded with at least 50 model objects
- After each form submission the `db` is populated
- Create various routes, following REST. I can `create`, `findAll`, apply filters, ..etc.
- If I go to `https://<my-test-url>/api/models/all` I can get a json response
- If I go to `https://<my-test-url>/api/models/search?haircolor=<filter-selected>` I can get a json response
