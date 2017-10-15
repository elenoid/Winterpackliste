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

  $('.select-more-info--snowbordschuhe').on('click', function(){
    $('.listbox__textbox--snowboardschuhe').toggleClass('list-hidden');
  });

  $('.select-more-info--skiwachs').on('click', function(){
    $('.listbox__textbox--skiwachs').toggleClass('list-hidden');
  });

  $('.select-product-sugestion--skiwachs').on('click', function(){
    $('.listbox__products--skiwachs').toggleClass('list-hidden');
  });

  $('.select-more-info--schlitten').on('click', function(){
    $('.listbox__textbox--schlitten').toggleClass('list-hidden');
  });

  $('.select-product-sugestion--schlitten').on('click', function(){
    $('.listbox__products--schlitten').toggleClass('list-hidden');
  });

  $('.select-more-info--bonbons').on('click', function(){
    $('.listbox__textbox--bonbons').toggleClass('list-hidden');
  });

  $('.select-product-sugestion--bonbons').on('click', function(){
    $('.listbox__products--bonbons').toggleClass('list-hidden');
  });

  $('.select-more-info--spiele').on('click', function(){
    $('.listbox__textbox--spiele').toggleClass('list-hidden');
  });

  $('.select-product-sugestion--spiele').on('click', function(){
    $('.listbox__products--spiele').toggleClass('list-hidden');
  });

  $('.select-more-info--sportschuhe').on('click', function(){
    $('.listbox__textbox--sportschuhe').toggleClass('list-hidden');
  });

  $('.select-product-sugestion--sportschuhe').on('click', function(){
    $('.listbox__products--sportschuhe').toggleClass('list-hidden');
  });

  $('.select-more-info--sonnenbrille').on('click', function(){
    $('.listbox__textbox--sonnenbrille').toggleClass('list-hidden');
  });

  $('.select-product-sugestion--sonnenbrille').on('click', function(){
    $('.listbox__products--sonnenbrille').toggleClass('list-hidden');
  });

});
