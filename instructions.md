
###Instructions

#####Setup

1. Visit [http://www.omdbapi.com/](http://www.omdbapi.com/) and look through the page
2. click on the Sample Request ([URL](http://www.omdbapi.com/?t=True Grit&y=1969))
4. Open the starting temlate and look at the index.html DOM and the movie.js file
6. Get the search parameter from the input field and encodeURI it into the URL provided
7. Fill out the body of the .ajax call to the URL provided and get the response to display in the console (this .done() functionality is already provided)

#####Look through the request and response

1. Go over the ajax call in the Network tab, look through:
   - Method: GET
   - Status: 200 OK
   - Type: "text/html"
   - Size
2. click the request and look through the Headers tab
   - notice the `Access-Control-Allow-Origin:*` header
   - it allows us to make cross-site requests but also makes www.omdbapi.com not secure
3. Look at the Response tabs
   - notice that the data we want is under the `"Search"` key
4. In the `movie.js`
  - delete the `"?"` query parameter in the url to cause a bad request
  - look through the __Network tab__ again to practice basic debugging the problem:
  - Notice the `404 Not Found` status
  - Notice that the request is red, marking a failed request
5. Fix the url and move on to the next step

#####Append the response to the DOM

1. Look through the response log in the console
2. Append the response to the DOM

#####Adding ajax to the title links

 1. One of the response attributes besides `title` is `imdbID`.  It's used in another URL to retrieve more info on a particular movie
 2. http://www.omdbapi.com/?i=[imdbID]&tomatoes=true&plot=full

#####Appending the content

1. Look throught the long list of attributes on the response
2. Display the appropriate content (append to the DOM)

#####There are lots of places to go from here (BONUS FUN!!)

- Choose to add more buttons to show more data
- Play more with DOM manipulation
- Animate!
