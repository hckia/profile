/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
//console.log('hi');
$('#js-toggle').on('click', function(e) {
  e.preventDefault();
  $('.dropdown').toggleClass('open');
});

$('.js-link-clicked').on('click', (e) => {
  // e.preventDefault();
  $('.dropdown').toggleClass('open');
})
