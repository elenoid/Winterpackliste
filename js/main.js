$(document).ready(function(){

  $('#more-info').on('click', function(){
    $('.listbox__textbox').toggleClass('list-hidden');
  });

  $('#product-sugestion').on('click', function(){
    $('.listbox__products').toggleClass('list-hidden');
  });

  $('#print').on('click', function(){
    window.print();
  });

  // Liste
  $('.select-more-info--ski').on('click', function(){
    $('.listbox__textbox--ski').toggleClass('list-hidden');
  });

  $('.select-more-info--skischuhe').on('click', function(){
    $('.listbox__textbox--skischuhe').toggleClass('list-hidden');
  });

  $('.select-more-info--langlaufski').on('click', function(){
    $('.listbox__textbox--langlaufski').toggleClass('list-hidden');
  });

  $('.select-more-info--snowboard').on('click', function(){
    $('.listbox__textbox--snowboard').toggleClass('list-hidden');
  });

});
