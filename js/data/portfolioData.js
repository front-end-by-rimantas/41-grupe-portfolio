/*
Eiliskumas:
- pagal pavadinima A-Z
- pagal pavadinima Z-A
- pagal kaina A-Z
- pagal kaina Z-A
- pagal data A-Z
- pagal data Z-A
- pagal irasymo eiliskuma (entry) A-Z
- pagal irasymo eiliskuma (entry) Z-A
- pagal lankomumas A-Z
- pagal lankomumas Z-A
- pagal xxx A-Z
- pagal xxx Z-A
- pagal random
*/

const portfolioData = {
    size: {
        min: 3,
        max: 6,
    },
    rendering: {
        strategy: 'title',
        order: 'az',
    },
    content: [
        {
            published: true,
            img: './img/portfolio/1.jpg',
            alt: 'Portfolio image 1',
            title: 'Working Keyboard',
            link: '#',
            tag: ['Branding', 'Designing'],
        },
        {
            published: true,
            img: './img/portfolio/2.jpg',
            alt: 'Portfolio image 2',
            title: 'The Micro Headphones',
            link: '#',
            tag: ['Branding', 'Development'],
        },
        {
            published: true,
            img: './img/portfolio/3.jpg',
            alt: 'Portfolio image 3',
            title: 'The Coffee Cup',
            link: '#',
            tag: ['Designing', 'Development'],
        },
        {
            published: true,
            img: './img/portfolio/4.jpg',
            alt: 'Portfolio image 4',
            title: 'The Wooden Desk',
            link: '#',
            tag: ['Photography'],
        },
        {
            published: true,
            img: './img/portfolio/5.jpg',
            alt: 'Portfolio image 5',
            title: 'Camera',
            link: '#',
            tag: ['Photography'],
        },
        {
            published: true,
            img: './img/portfolio/6.jpg',
            alt: 'Portfolio image 6',
            title: 'Branded Laptop',
            link: '#',
            tag: ['Photography'],
        },
        {
            published: true,
            img: './img/portfolio/7.jpg',
            alt: 'Portfolio image 7',
            title: 'Kitchen',
            link: '#',
            tag: ['Photography', 'Designing'],
        },
        {
            published: true,
            img: './img/portfolio/8.jpg',
            alt: 'Portfolio image 8',
            title: 'Flower',
            link: '#',
            tag: ['Photography', 'Designing'],
        },
        {
            published: true,
            img: './img/portfolio/9.jpg',
            alt: 'Portfolio image 9',
            title: 'Chair',
            link: '#',
            tag: ['Branding', 'Development'],
        },
    ],
};

export { portfolioData };
