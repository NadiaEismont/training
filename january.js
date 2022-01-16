const products = [{
    id: 'sku1',
    qty: 1,
}, {
    id: 'sku2',
    qty: 2,
}, {
    id: 'sku3',
    qty: 3,
}, {
    id: 'sku1',
    qty: 6,
}, {
    id: 'sku1',
    qty: 8,
}, {
    id: 'sku2',
    qty: 19,
}, {
    id: 'sku4',
    qty: 1,
}]

// const sortCart = function (products) {
//     let counter = [];
//     for (let index = 0; index < products.length; index++) {
//         const element = products[index];
//         if (products.id === products) {
//             return products.qty += `${qty}`
//         }
//     }
// }
// console.log([products]);
// sortCart();

for (let i = 0; i < products.length; i++) {
    for (let j = i + 1; j < products.length; j++) {
        if (products[i].id === products[j].id) {
            console.log(products[j])
            products[i].qty += products[j].qty
            products.splice(j, 1)
            j -= 1;
        }

    }

}
console.log(products);