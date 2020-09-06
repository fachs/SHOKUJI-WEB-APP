class DataSource {
    constructor(onSuccess, onFailed) {
        this.onSuccess = onSuccess;
        this.onFailed = onFailed;
    }
}

DataSource.prototype.searchFood = function (keyword) {
    const filteredFoods = foods.filter(food => food.name.toUpperCase().includes(keyword.toUpperCase()));

    if (filteredFoods.length) {
        this.onSuccess(filteredFoods);
    } else {
        this.onFailed(`${keyword} is not found`);
    }
};
