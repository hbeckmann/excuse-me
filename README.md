# Excuser
### Excuser is a mobile excuse generator and excuse API. :fire::poop:

- Use `NPM INSTALL` to install the dependencies.
- Enter `GULP` to start the server.
- Navigate to `localhost:8000/excuse` to view the excuse API.
- New Excuses can be submitted on `localhost:8000/submit`.

![I can't even](http://i.imgur.com/fWFJ6rm.gif)

Basic Testing Plan - March 1, 2016
Excuser App Testing Plan
(This plan will be updated based on approved features and functionality)

Basic Functions:
- Go button:
    - Go button on first screen (without category selected) appropriately finds a random excuse pulled from any category
    - Go button on each category screen (without sub-category selected) appropriately finds a random excuse pulled from any sub-category
    - Go button on each  sub-category screen appropriately finds a random excused pulled from that sub-category.
- Categories
    - Categories display correctly and tapping on a category takes you to the sub-category
    - Tapping on a sub-category link goes to the sub-category screen

Menu Functions:
- Menu button opens up the menu correctly
- Submit button opens the new excuse submission form correctly
- Share button correctly opens share options
- New button correctly lets the user add a new excuse
- List button correctly opens the list of excuses

Database Explanation:
Within the database, hosted on firebase, there are a series of json objects. An example of this structure is in the example.json file.

Each of these excuses and objects will be returned and generated to the user, by accessing API endpoints using the http address: `https://excuser.firebaseio.com/excuse/[genre]/[subgenre]`

For example:  to access an random excuse in the school genre, the API will use the endpoint `https://excuser.firebaseio.com/excuse/school`, then use the random function that uses Math.random() and a series of arrays, it will GET an excuse from the "school" object.

If you want to narrow the results to a specific subgenre, it will add that subgenre's name to the end of the endpoint, so the homework subgenre would access json objects from  `https://excuser.firebaseio.com/excuse/school/homework`.
