export class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    };

    renderItems(cards) {
        cards.forEach(element => {
            const item = this._renderer(element);
            this.addItem(item);
        });
    }

    addItem(item) {
        this._container.prepend(item);
    };
};