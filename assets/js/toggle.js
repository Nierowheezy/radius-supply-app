$(document).ready(function () {
  $('#burger-container').on('click', function () {
    $(this).toggleClass('open');
  });
});

// setTimeout(() => {
//   document.getElementById('burger-container').classList.add('open');
// }, 1000);
