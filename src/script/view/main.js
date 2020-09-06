var main = function () {
    var searchElement = document.querySelector("#searchElement");
    var buttonSearchElement = document.querySelector("#searchButtonElement");
    var foodListElement = document.querySelector("#foodList");

    var onButtonSearchClicked = function () {
        var dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchFood(searchElement.value);
    };
    
    var renderResult = function (results) {
        foodListElement.innerHTML = "";
        results.forEach(function (food) {
            var name = food.name;
            var image = food.image;
            var description = food.description;
            var area = food.area;
            var category = food.category;
            
            var foodElement = document.createElement("div");
            foodElement.setAttribute("class", "food");

            foodElement.innerHTML = '<img class="image-food" src="' + image + '" alt="Food Image">\n' +
                '<div class="food-info">\n' +
                '<h2>' + name + '</h2>\n' +
                '<h4>' + area + '</h4>\n' +
                '<h4>' + category + '</h4>\n' +
                '<p>' + description + '</p>' +
                '</div>';
            
            foodListElement.appendChild(foodElement);
        })
    };

    var fallbackResult = function (message) {
        foodListElement.innerHTML = "";
        foodListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};