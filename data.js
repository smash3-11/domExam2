const data = [
    {
        preTitle: 'GET READY',
        title: 'Save time at iPhone pre-order',
        description: 'Get ready for iPhone 13 and iPhone 13 Pro pre-order now. Then speed through checkout on 9.17.',
        img: '1',
    },
    {
        preTitle: 'PRE-ORDER 9.17',
        title: 'iPhone 13 Pro. Oh. So. Pro.',
        description: 'From $999 or $41.62/mo. for 24 mo. before trade-in*',
        img: '2',
    },
    {
        preTitle: 'IPAD MINI',
        title: 'Mega power. Mini sized. ',
        description: 'From $499 or $41.58/mo. for 12 mo.',
        img: '3',
    }
]

let body = document.body

let h1 = document.createElement('h1')
h1.innerHTML = "2. Создать элементы по массиву" 

let container = document.createElement('div')
container.classList.add('container')

for( let elem of data){
    let item = document.createElement('div')
    item.classList.add('item')
    item.style.backgroundImage = `url(./img/${elem.img})`

    console.log(item.style.backgroundImage = `url(./img/${elem.img}.jpg)`);
    

    let h3 = document.createElement('h3')
    h3.innerHTML = elem.preTitle

    let h2 = document.createElement('h2')
    h2.innerHTML = elem.title
    let p = document.createElement('p')
    p.innerHTML = elem.description

    container.append(item)
    item.append(h3, h2, p)
}

body.append( h1, container)