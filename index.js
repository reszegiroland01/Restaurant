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

function getStandOutDishes()
{
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then(dishes => dishes.json())
    .then(dishesY => renderDishes(dishesY.meals) )
}
getStandOutDishes()

function renderDishes(dishesArray){
    let itemsHTML = "";
    dishesArray.forEach((dish)=>{
        
        itemsHTML += '<div class="standout-dish-container">'
        itemsHTML += '<div class="standout-dish-img-container"> <img class="standout-dish-img" src="' +dish.strMealThumb+ '" alt=""> </div>'
        itemsHTML += '<p class="standout-dish-title category-title">'+dish.strMeal+'</p>'
        itemsHTML += '<p class="standout-dish-sub-title category-sub-title">'+dish.strTags+'</p>'

        itemsHTML += '<div class="standout-dish-thumb">'
        itemsHTML += '<div class="standout-dish-sub-price">'+dish.idMeal+' Ft</div>'
        itemsHTML += '<div class="standout-dish-sub-rating">'+dish.idMeal/15000+'</div>'
        itemsHTML += '</div>'
        itemsHTML += '</div>'
        
    })

    document.getElementById("standout-dishes-container").innerHTML = itemsHTML
}