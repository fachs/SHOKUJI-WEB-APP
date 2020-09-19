class NavBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Quicksand&family=Source+Sans+Pro:wght@300;400&display=swap');

            .dropdown {
            float: left;
            overflow: hidden;
            margin: 10px 15px 0px 15px;
            font-family: 'Quicksand', Helvetica, sans-serif;
            }
            
            .dropdown .dropbtn {
            font-size: 16px;
            border: none;
            outline: none;
            color: #474646;
            padding: 14px 16px;
            background-color: #B7F667;
            font: inherit;
            margin: 0;
            }
            
            .dropdown:hover .dropbtn {
            background-color: #88bd42;
            color: #f1f1f1;
            cursor: pointer;
            }
            
            .dropdown-content {
            display: none;
            position: absolute;
            width: 100%;
            left: 0;
            /* box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); */
            z-index: 1;
            }
            
            .dropdown:hover .dropdown-content {
            display: block;
            }
            
            .row {
            margin-left: 23px;
            width: 75%;
            }
            
            .column {
            float: left;
            width: 25%;
            padding: 10px;
            background-color: #ccc;
            height: 300px;
            }
            
            .column a {
            float: none;
            color: #242424;
            padding: 16px;
            text-decoration: none;
            display: block;
            text-align: left;
            }
            
            .column a:hover {
            background-color: rgb(231, 230, 230);
            }
            
            .row:after {
            content: "";
            display: table;
            clear: both;
            }
            
            @media screen and (max-width: 600px) {
            .column {
                width: 100%;
                height: auto;
            }
            }
            
            img {
            float: left;
            display: block;
            margin-top: 8px;
            margin-right: 8px;
            margin-left: 10px;
            height: 45px;
            }

        </style>
        <div class="dropdown">
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
    <a href="index.html"><img src="src/assets/img/shokuji.png" alt="logo"></a>`;
    }
}

customElements.define("nav-bar", NavBar);
