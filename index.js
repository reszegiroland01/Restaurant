function getData(){
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then(x => x.json())
        .then(y => console.log(y))
}
getData()  

function getCategories()
{
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(categories => categories.json())
    .then(categoriesY => renderCategories(categoriesY.categories))
}
getCategories()

function renderCategories(categoriesArray) {
    console.log(categoriesArray);
    let itemsHTML = ""; 
    categoriesArray.forEach((category) => { 
        itemsHTML += '<div class="category-div">';
        itemsHTML += '<div class="img-container"> <img class="category-image" src="' +category.strCategoryThumb+ '" alt=""> </div>';
        itemsHTML += '<p class="category-title">' + category.strCategory + '</p>';
        itemsHTML += '<p class="category-sub-title">(86 dishes)</p>';
        itemsHTML += '</div>';
    });
    document.getElementById("category-container").innerHTML = itemsHTML; 
}