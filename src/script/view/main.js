import '../component/food-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const foodListElement = document.querySelector("food-list");
    const ideasElement = document.querySelector("ideas-container");

    const onButtonSearchClicked = () => {
        DataSource.searchFood(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    //Async Await

    // const onButtonSearchClicked = async () => {
    //     try {
    //         const result = await DataSource.searchFood(searchElement.value);
    //         renderResult(result);
    //     } catch (message) {
    //         fallbackResult(message)
    //     }
    // };
    
    const renderResult = results => {
        ideasElement.innerHTML = `
        <style>
            display: none;
        </style>`;

        foodListElement.foods = results;
    };

    const fallbackResult = message => {
        foodListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
