class FoodItem extends HTMLElement {
    set food(food) {
        this._food = food;
        this.render();
    }

    render() {
        this.innerHTML = `
        <img class="image-food" src="${this._food.image}" alt="Food Image">
            <div class="food-info">
                <h2>${this._food.name}</h2>
                <h4>${this._food.area}</h4>
                <h4>${this._food.category}</h4>
                <p>${this._food.description}</p>
            </div>`;
    }
}

customElements.define("food-item", FoodItem);