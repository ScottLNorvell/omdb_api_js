function appendMovieInfo(data){
  console.log(data);
  //append the movie Info below the clicked movie
}

function appendMovies(data){
  console.log(data);
  //append the movies to the DOM
}

$(function(){
  $('form').submit(function(){
    var request_url = 'http://www.omdbapi.com/';
    $.getJSON(request_url)({
      //set up the ajax call to the above URL
    })
    .done(appendMovies);
    return false;
  });


});