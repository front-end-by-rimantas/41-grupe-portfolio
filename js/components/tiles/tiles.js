function tiles(selector, data) {
    if (typeof selector !== 'string') {
        throw new Error('Selector turi buti stringas');
    }

    if (!Array.isArray(data) || data.length === 0) {
        throw new Error('Duomenys turi buti ne tuscias masyvas');
    }

    const hobbiesDOM = document.getElementById(selector);
    if (hobbiesDOM === null) {
        throw new Error(
            `Pagal pateikta selector (${selector}) nepavyko rasti norimo elemento`
        );
    }

    let HTML = '';

    // is duomenu atsifiltruoti tik objektus
    data = data
        .filter((item) => typeof item === 'object')
        .filter((item) => item !== null)
        .filter((item) => !Array.isArray(item))
        .filter((item) => !Array.isArray(item));

    console.log(data);

    for (const item of data) {
        HTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3 hobbie">
                    <div class="icon fa fa-item.icon"></div>
                    <p class="label">item.text</p>
                </div>`;
    }

    hobbiesDOM.innerHTML = HTML;
}

export { tiles };
