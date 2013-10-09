


function appendMovieInfo(data){
  
  var li = $("#" + data.imdbID);

  var h2 = $('<h2>');
  var h3 = $('<h3>');
  var p = $('<blockquote>');
  var img = $('<img>')

  li.addClass("movie")

  h2.text(data.Title);
  h3.text(data.Year);
  p.text(data.Plot);
  img.attr('src', data.Poster);

  li.empty();

  li.append(h2).append(h3).append(img).append(p);

  // results.append(li);

}

function appendMovies(data){
  // console.log(data);
  results.empty();
  var mov_list = data.Search;
  md = mov_list;
  $.each(mov_list, function(i, movie) {
    var li = $('<li>');
    var a = $('<a>');
    var h3 = $('<h3>');

    li.addClass("movie")
    li.attr('id', movie.imdbID)

    a.text(movie.Title).attr('href','#');
    a.on('click', function() {
      var self = $(this);

      var title = self.text();
      $.getJSON(base_url, {t: title}, appendMovieInfo)

    });
    h3.append(a);
    li.append(h3);
    results.append(li);

  });
}

var results;
var base_url = 'http://www.omdbapi.com/'

$(function(){

  results = $('#results');
  var search_form = $('#search-form')

  search_form.submit(function(e){
    e.preventDefault()
    var self = $(this)
    var request_url = base_url + "?" + self.serialize();
    $.getJSON(request_url).done(appendMovies);
    return false;
  });

  $('#search-button').on('click', function() {
    search_form.submit();
  })


});