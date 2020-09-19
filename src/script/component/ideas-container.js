class IdeasContainer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            h4 {
                padding-top: 30px;
                margin-left: 100px;
            }
            .thumbnail {
                margin-left: 135px;
                margin-bottom: 113px;
            }
        </style>
        <h4>Inpiration and Ideas</h4>
        <div class="thumbnail">
                <div class="jumbo-thumbnail">
                    <img src="src/assets/img/emy-XoByiBymX20-unsplash.jpg" alt="">
                    <div class="overlay">Malaysian Spicy Curry</div>
                </div>
                <div class="img1 thumb">
                    <img src="src/assets/img/homemade italian pizza.jpg" alt="">
                    <div class="overlay-thumbnail">Home Made Italian Pizza</div>
                </div>
                <div class="img2 thumb">
                    <img src="src/assets/img/Oreo Cookie sandwiches.jpg" alt="">
                    <div class="overlay-thumbnail">Oreo Cookie Sandwiches</div>
                </div>
                <div class="img3 thumb">
                    <img src="src/assets/img/slideshow/slide2.jpg" alt="">
                    <div class="overlay-thumbnail bottom-thumb">Oreo Cookie Sandwiches</div>
                </div>
                <div class="img4 thumb">
                    <img src="src/assets/img/slideshow/slide3.jpg" alt="" >
                    <div class="overlay-thumbnail bottom-thumb">Chocolate Pancake</div>
                </div>
            </div>`;
    }

}

customElements.define("ideas-container", IdeasContainer);
