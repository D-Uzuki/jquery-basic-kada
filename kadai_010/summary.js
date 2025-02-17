$(document).ready(function() {
  $('#change-color').click(function() {
    $('#target').css('color', 'red'); // 任意の色に変更
  });

  $('#change-text').click(function() {
    $('#target').text('Hello!'); // 任意の文字内容に変更
  });

  $('#fade-out').click(function() {
    $('#target').fadeOut(); // フェードアウトで文字が消える
  });

  $('#fade-in').click(function() {
    $('#target').fadeIn(); // フェードインで文字が現れる
  });
});