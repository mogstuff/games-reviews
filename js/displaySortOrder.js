document.getElementById("sort-order").innerHTML = `<h3>Reviews by: Game asc</h3>`;

const header = document.getElementById('banner'); 

let th = document.querySelector('.js-sort-active');


function showSorted(sortedBy)
{

    let table = document.getElementById("review-list");


 let sortOrder = "asc";

 if(table.classList.contains('js-sort-desc')){
    sortOrder = "asc";
    document.getElementById("sort-order").innerHTML = `<h3>Reviews by: ${sortedBy} ${sortOrder}</h3>`;
 }

 if(table.classList.contains('js-sort-asc')){
    sortOrder = "desc";
    document.getElementById("sort-order").innerHTML = `<h3>Reviews by: ${sortedBy} ${sortOrder}</h3>`;
 }
}