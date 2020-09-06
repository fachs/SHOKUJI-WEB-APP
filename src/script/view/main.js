const main = function () {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const foodListElement = document.querySelector("#foodList");

    const onButtonSearchClicked = function () {
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchFood(searchElement.value);
    };
    
    const renderResult = function (results) {
        foodListElement.innerHTML = "";
        results.forEach(function (food) {
            const name = food.name;
            const image = food.image;
            const description = food.description;
            const area = food.area;
            const category = food.category;
            
            const foodElement = document.createElement("div");
            foodElement.setAttribute("class", "food");

            foodElement.innerHTML = `
                <img class="image-food" src="${image}" alt="Food Image">
                <div class="food-info">
                    <h2>${name}</h2>
                    <h4>${area}</h4>
                    <h4>${category}</h4>
                    <p>${description}</p>
                </div>`;
            
            foodListElement.appendChild(foodElement);
        })
    };

    var fallbackResult = function (message) {
        foodListElement.innerHTML = "";
        foodListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};
