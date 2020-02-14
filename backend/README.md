## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## API Endpoints

### `/users`

GET: returns a list of all users in heroku postgres database<br />
POST: registers a user with fields name and password
```
{
    "user_name": "johnson",
    "password": "johnson"
}
```

### `/users/:name`

GET: returns information given a user's name

### `/competitions`

GET: returns a list of competitions
POST: register a competition with fields name and # of problems
```
{
    "comp_name": "UCSB_2020_w20_comp1",
    "num_of_problems": 45 
}
```

### `/scores`

GET: returns a list of scores where each entry has user name, competition name, and climbs completed (problem num, # of attempts)
POST: updates the users current_comp field and adds the corresponding user to the scores table
```
{
    "user_name": "Bob",
    "comp": "World's Largest Soil-based Buritto"
}
```

### `/scores/:name/:comp`

GET: returns list of scores from a competition, sorted by route difficulty
PATCH: records a completed climb for given name and comp and updates corresponding score
```
{
    "problem": 5,
    "attempts": 12
}
```
