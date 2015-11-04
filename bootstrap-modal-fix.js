//  Fixes the issue where the youtube video continues to play after the modal is closed.
$('#myModal button').click(function () {
  $('#myModal iframe').removeAttr('src');
});
