class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<div class="dropdown">
        <button class="dropbtn">Find by
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <div class="row">
                <div class="column">
                    <h3>Ingredients</h3>
                    <a href="#">Ingredients 1</a>
                    <a href="#">Ingredients 2</a>
                    <a href="#">Ingredients 3</a>
                    <a href="#">Ingredients 4</a>
                </div>
                <div class="column">
                    <h3>Area</h3>
                    <a href="#">Area 1</a>
                    <a href="#">Area 2</a>
                    <a href="#">Area 3</a>
                </div>
                <div class="column">
                    <h3>Category</h3>
                    <a href="#">Category 1</a>
                    <a href="#">Category 2</a>
                    <a href="#">Category 3</a>
                </div>
            </div>
        </div>
    </div>
    <img src="src/assets/img/shokuji.png" alt="">`;
    }
}

customElements.define("nav-bar", NavBar);
