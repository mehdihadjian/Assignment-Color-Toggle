let logo=document.querySelector('.container');
let menu=document.querySelector('.menu');

logo.addEventListener('click', function(){
  menu.classList.toggle('showmenu');

});

let home = document.querySelector('.home')
let blue = document.querySelector('.blue')
let red = document.querySelector('.red')
let orange = document.querySelector('.orange')
let green = document.querySelector('.green')

let body = document.body


home.addEventListener('click',function(){
  body.style.background='grey'
  menu.classList.toggle('showmenu');

});
blue.addEventListener('click',function(){
  body.style.background='blue'
  menu.classList.toggle('showmenu');

});
red.addEventListener('click',function(){
  body.style.background='red'
  menu.classList.toggle('showmenu');

});
orange.addEventListener('click',function(){
  body.style.background='orange'
  menu.classList.toggle('showmenu');

});
green.addEventListener('click',function(){
  body.style.background='green'
  menu.classList.toggle('showmenu');

});


// function toggle(){
//   let hide = document.querySelector('.menu')
//   if (hide.style.display==='none') {
//     hide.style.display='block';
    
//   } else {
//     hide.style.display ='none';
    
//   }

// }

