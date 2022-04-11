const topButton = document.getElementById('top-button');

// show/hide Top button depending on scrollbar position
window.addEventListener('scroll', ()=> {

if(window.pageYOffset < 300){
    topButton.classList.add('hide');
}else{
    topButton.classList.remove('hide');
}

});



       topButton.addEventListener('click', (event) => {
    event.preventDefault();           

    header.scrollIntoView({behavior : "smooth", block: "end"});    
  

});