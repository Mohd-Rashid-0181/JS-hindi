// const newArray = [11,22,33,44,55,66,77,88,99]

// const oldArr = newArray.reduce( (acc,currval) => {return acc + currval},0)
// console.log(oldArr);


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "Mobile Dev course",
        price : 5999
    },
    {
        itemName : "Data Science course",
        price : 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => {return acc + item.price },0)

console.log(priceToPay);
