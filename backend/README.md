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
POST: registers a user with fields name and password (Takes a JSON specifying "user_name" and "password")
DELETE: removes the user corresponding with the given user_name and password (Takes a JSON specifying "user_name" and "password")

#### Example JSON:
```
{
    "user_name": "johnson",
    "password": "johnson"
}
```


### `/users/:name`

GET: returns information given a user's name
PATCH: replaces password field for given user (Takes a JSON specifying "password")

#### Example JSON:
```
{
    "password": "new_password"
}
```

### `/competitions`

GET: returns a list of competitions
POST: register a competition with fields name and # of problems (Takes a JSON specifying "comp_name" and "num_of_problems")
DELETE: removes the specified competition (Takes a JSON specifying "comp_name")

#### Example JSON:
```
{
    "comp_name": "UCSB_2020_w20_comp1",
    "num_of_problems": 45 
}
```

### `/scores`

GET: returns a list of scores where each entry has user name, competition name, and climbs completed (problem num, # of attempts)
POST: updates the users current_comp field and adds the corresponding user to the scores table (Takes a JSON specifying "user_name" and "comp")
DELETE: removes the score entry corresponding with the given user_name and comp (Takes a JSON specifying a "user_name" and "comp")

#### Example JSON:
```
{
    "user_name": "Bob",
    "comp": "World's Largest Soil-based Buritto"
}
```

### `/scores/log/:name/:comp`

GET: returns list of scores from a competition, sorted by route difficulty
PATCH: records a completed climb for given name and comp and updates corresponding score (Takes a JSON specifying "problem", "attempts", "key1", and "key2")

#### Example JSON:
```
{
    "problem": 5,
    "attempts": 12,
    "key1": "player1",
    "key2": "player2"
}
```

### `/scores/del/:name/:comp`

PATCH: removes a climb from an existing score entry (Takes a JSON specifying "problem" and "attempts")

#### Example JSON:
```
{
    "problem": 5,
    "attempts": 12
}
```
