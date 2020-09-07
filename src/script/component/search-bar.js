class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            float: right;
            margin-top: 8px;
            margin-right: 50px;
            }
            
            .search-container input {
            border: none;
            background: #c4c1c1;
            width: 650px;
            height: 34px;
            margin-top: 8px;
            font-size: 17px;
            padding-left: 16px;
            }
            
            .search-container button {
            float: right;
            height: 36px;
            width: 155px;
            padding: 6px;
            margin-top: 8px;
            margin-left: 8px;
            margin-right: 16px;
            background: #B7F667;
            border: none;
            cursor: pointer;
            font-size: 17px;
            color: #474646;
            }
            
            .search-container button:hover,  .link > a:hover{
            background: #88bd42;
            color: white;
            }
        </style>
        <div class="search-container" id="search-container">
            <input type="search" name="search" id="searchElement" placeholder="Keyword...">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>`;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);
