const cross = document.querySelector(".cross");
const chat = document.querySelector(".chat")
const chatopen = document.querySelector(".chatopen")
const bodytwo = document.querySelector(".bodytwo")


cross.addEventListener('click', function(){
    chat.classList.add('hide');
    cross.classList.add('hide');
})
chat.addEventListener('click', function(){
    chat.classList.add('hide');
    cross.classList.add('hide');
    chatopen.classList.remove('hide');
    chatopen.classList.add('showf');
})
chat.addEventListener('click', function(){
    bodytwo.classList.remove('hide');
})
bodytwo.addEventListener('click',function(){
    bodytwo.classList.add('hide');
    chatopen.classList.add('hide');
    chat.classList.remove('hide');
    cross.classList.remove('hide');
})