function getData(){
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then(x => x.json())
        .then(y => console.log(y))
}
getData()  