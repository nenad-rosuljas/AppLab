$(document).ready(()=>{
  let $toggleButton = $('.c-header__nav-toggle');
  //Hamburger button
  $toggleButton.on('click',function(){
    $(this).toggleClass('c-button-open');
  });

  $(".c-header__nav-toggle-container").on('click',()=>{
    $(".c-header__container--inner").slideToggle();
  })
})