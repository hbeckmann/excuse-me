For testing:  
`npm install`  
`gulp test`  

For Selenium-webdriver testing:  
`npm install`  
You may have to global install mocha, selenium-webdriver, and chromedriver  
`npm install -g mocha selenium-webdriver chromedriver`  

To run webdriver test:  
`npm start`  
In new terminal tab or window:  
`mocha test/integration-test.coffee --compilers coffee:coffee-script/register`  


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

Code Tests:
- Basic API Call tests
- Functions work correctly
