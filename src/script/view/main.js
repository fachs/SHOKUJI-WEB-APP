const main = () => {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const foodListElement = document.querySelector("#foodList");

    const onButtonSearchClicked = () => {
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchFood(searchElement.value);
    };
    
    const renderResult = results => {
        foodListElement.innerHTML = "";
        results.forEach(function (food) {
            const {name, image, description, area, category} = food;
            
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

    var fallbackResult = message => {
        foodListElement.innerHTML = "";
        foodListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};
