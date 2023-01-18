import { IsValid } from '../is-valid/IsValid.js';

class Gallery {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
        this.size = {
            min: 3,
            max: 6,
        };
        this.rendering = {
            strategy: 'entry',
            order: 'az',
        };
        this.dataForRendering = [];

        this.init();
    }

    init() {
        if (!this.isValidSelector() || !this.isValidData()) {
            return false;
        }

        this.filterDataForRendering();
        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' || this.selector === '') {
            return false;
        }

        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;
    }

    isValidData() {
        if (!IsValid.object(this.data)) {
            return false;
        }

        // validuojam this.data.size ...
        const { size } = this.data;
        if (IsValid.object(size)) {
            const { min, max } = size;
            if (IsValid.positiveInteger(min)) {
                this.size.min = min;
            }
            if (IsValid.positiveInteger(max)) {
                this.size.max = max;
            }
        }

        // validuojam this.data.rendering ...
        const { rendering } = this.data;
        if (IsValid.object(rendering)) {
            const { strategy, order } = rendering;
            if (IsValid.nonEmptyString(strategy)) {
                this.rendering.strategy = strategy;
            }
            if (IsValid.nonEmptyString(order)) {
                this.rendering.order = order;
            }
        }

        // validuojam this.data.content ...
        if (!IsValid.nonEmptyArray(this.data.content)) {
            return false;
        }

        // PIRMAS ATRINKIMO BUDAS
        // const validData = [];
        // for (const item of this.data.content) {
        //     if (this.isValidGalleryItem(item)) {
        //         validData.push(item);
        //     }
        // }
        // this.data.content = validData;

        // ANTRAS ATRINKIMO BUDAS
        this.data.content = this.data.content.filter(
            this.isValidGalleryItem.bind(this)
        );

        return true;
    }

    filterDataForRendering() {
        const { max } = this.size;
        const { strategy, order } = this.rendering;

        switch (strategy) {
            case 'entry':
                this.dataForRendering = this.filterDataByEntry(order);
                break;

            case 'price':
                this.dataForRendering = this.filterDataByPrice(order);
                break;

            case 'title':
                this.dataForRendering = this.filterDataByTitle(order);
                break;

            case 'date':
                this.dataForRendering = this.filterDataByDate(order);
                break;

            case 'random':
                this.dataForRendering = this.filterDataByRandom(order);
                break;

            default:
                this.dataForRendering = this.data.content;
                break;
        }

        this.dataForRendering = this.dataForRendering.slice(0, max);
    }

    filterDataByEntry(order) {
        const dataCopy = [...this.data.content];
        return order === 'az' ? dataCopy : dataCopy.reverse();
    }

    filterDataByTitle(order) {
        const dataCopy = [...this.data.content];
        dataCopy.sort((a, b) =>
            a.title > b.title ? 1 : a.title === b.title ? 0 : -1
        );
        return order === 'az' ? dataCopy : dataCopy.reverse();
    }

    filterDataByPrice(order) {
        const dataCopy = [...this.data.content];
        // need to implement...
        return order === 'az' ? dataCopy : dataCopy.reverse();
    }

    filterDataByDate(order) {
        const dataCopy = [...this.data.content];
        // need to implement...
        return order === 'az' ? dataCopy : dataCopy.reverse();
    }

    filterDataByRandom() {
        const dataCopy = [...this.data.content];
        // need to implement...
        return dataCopy;
    }

    isValidGalleryItemImage(str) {
        return true;
    }

    isValidGalleryItemImageAlt(str) {
        return true;
    }

    isValidGalleryItemTitle(str) {
        return true;
    }

    isValidGalleryItemLink(str) {
        return true;
    }

    isValidGalleryItemTags(tags) {
        return true;
    }

    isValidGalleryItem(item) {
        if (
            item.published !== true ||
            !this.isValidGalleryItemImage(item.img) ||
            !this.isValidGalleryItemImageAlt(item.alt) ||
            !this.isValidGalleryItemTitle(item.title) ||
            !this.isValidGalleryItemLink(item.link) ||
            !this.isValidGalleryItemTags(item.tags)
        ) {
            return false;
        }
        return true;
    }

    generateContent() {
        let HTML = '';

        for (const item of this.dataForRendering) {
            HTML += `<div class="item">
                        <div class="visual">
                            <img class="img" src="${item.img}" alt="${item.alt}">
                            <div class="hover-layer">
                                <i class="icon fa fa-camera"></i>
                            </div>
                        </div>
                        <div class="description">
                            <a class="title" href="${item.link}">${item.title}</a>
                            <div class="tag">${item.tags[0]}</div>
                            <div class="btn">Click me</div>
                        </div>
                    </div>`;
        }

        return HTML;
    }

    generateFilter() {
        return `<button class="option">Labas</button>
                <button class="option">Rytas</button>
                <button class="option">Lietuva</button>
                <button class="option">Didi</button>`;
    }

    render() {
        let HTML = `<div class="filter">
                        <button class="option active">All</button>
                        ${this.generateFilter()}
                    </div>
                    <div class="content">
                        ${this.generateContent()}
                    </div>`;

        this.DOM.innerHTML = HTML;
    }
}

export { Gallery };
