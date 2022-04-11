# games-reviews
Games Reviews Web App

## Requirements

- Take the sample data provided in reviews.json and build a little app to navigatethese reviews.
- Use any Framework if required.
- include short readme file to be included with the task submission which describes the approach taken
  
### Task 1 Display Reviews

Develop a micro app to present the game reviews. The reviews canbe sorted in their natural order (the order they are in the JSON) and you don’t need to paginate it.

Each review should have the full text displayed as well as the following metadata:

- score
- likes
- sentiment
- game
- submission date

Critically, what we want is that the full text data is visible when each element is loaded, and should not be presented as a spreadsheet.

### Task 2 Sortable Data

This task is to provide a mechanism to sort the reviews.

The minimum requirement is to sort reviews by submission date and score.

Each sort option needs to be switchable between ascending and descending order.

The interface should clearly show which type of sort is applied


## Approach

The initial approach was to attempt to produce the app using the Vue.js framework. Several attempts were made with this and due to the author not being sufficiently familiar with the framework a decision was made to revert to plain html,css and javascript.


### Libraries

Due to time constraints the library sort-table.js has been used to provide the sorting functionality. 

For the design of the project images were sauced from pixabay.com

The following fonts and css libraries were also used:

- Google Fonts
- Bootstrap
- Font Awesome

### File Structure

- css/styles.css: main stylesheet. 
- img: Background images
- js/reviews.js: placeholder for data array. This would be moved to a module in a future iteration
- js/sort-table.js: Library
- js/sort-table.min.js: Library
- js/displaySortOrder.js : displays content in sort order div
- js/showLikes.js : displays likes content
- js/showScore.js : displays score content
- js/showSentiment.js: display sentiment conttent
- js/topButton.js : logic for "back to top" button
- index.html container for content



