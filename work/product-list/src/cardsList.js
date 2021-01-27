import img1 from './img/1.jpg'
import img1_1 from './img/1_1.jpg'
import img2 from './img/2.jpg'
import img2_1 from './img/2_1.jpg'
import img3 from './img/3.jpg'
import img3_1 from './img/3_1.jpg'

const cardsList = [
    {
        id: 1,
        name: 'Шампунь 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut sollicitudin nunc, eget ' +
            'pharetra orci. Nulla et metus sollicitudin, tincidunt justo et, ultrices sem. ' +
            'Vestibulum porta dignissim bibendum.',
        price: '200',
        img: img1,
        imgOnHover: img1_1,
        color: [
            'Жёлтый',
            'Синий',
            'Розовый',
            'Зелёный'
        ],
        volume: [
            '100',
            '500',
            '300'
        ],
    },
    {
        id: 2,
        name: 'Шампунь 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut sollicitudin nunc, eget ' +
            'pharetra orci. Nulla et metus sollicitudin, tincidunt justo et, ultrices sem. ' +
            'Vestibulum porta dignissim bibendum.',
        price: '200',
        img: img2,
        imgOnHover: img2_1,
        color: [
            'Жёлтый',
            'Фиолетовый',
            'Синий',
            'Зелёный'
        ],
        volume: [
            '100',
            '800',
            '300'
        ],
    },
    {
        id: 3,
        name: 'Шампунь 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut sollicitudin nunc, eget ' +
            'pharetra orci. Nulla et metus sollicitudin, tincidunt justo et, ultrices sem. ' +
            'Vestibulum porta dignissim bibendum.',
        price: '200',
        img: img3,
        imgOnHover: img3_1,
        color: [
            'Белый',
            'красный',
            'Синий',
            'Чёрный'
        ],
        volume: [
            '100',
            '200',
            '300'
        ],
    }
]

export default cardsList;