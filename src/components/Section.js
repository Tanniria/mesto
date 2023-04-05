export class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    };

    // renderItems(items) {
    //     this._initialArray = items;
    //     this._initialArray.forEach(item => {
    //         this._renderer(item);
    //     });
    // };
    
    renderItems(cards) {
        items.forEach(element => {
            const item = this._renderer(element);
            this._addItem(item);
        });
    }

    addItem(item) {
        this._container.prepend(item);
    };
};