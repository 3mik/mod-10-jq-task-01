$(function(){
    $('span:even').css('color', 'yellow');
    $('p').each(function(idx, el){
      let button = '<button class="btn btn-primary btn-lg"  data-tmp="' + idx + '">Click me</button>';
      $(el).append(button)
    });
    $('button').click(function(){
      alert($(this).attr('data-tmp'))
    })
  })