//define functions here
function getIt(){
  $('p').on('click', (e) =>{
    alert('Hey!')
  })
}
function frameIt(){
  $('img').on('load', (e)=>{
    $('img').addClass("tasty");
  })
}
$(document).ready(function(){

// call functions here

});
