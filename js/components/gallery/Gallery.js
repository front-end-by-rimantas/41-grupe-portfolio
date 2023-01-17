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

    render() {
        let HTML = '';

        console.log(this.dataForRendering);

        // HTML += ...
        // HTML += ...
        // HTML += ...

        this.DOM.innerHTML = HTML;
    }
}

export { Gallery };
