//Symbol
{
    //声明
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1 === a2); //false
    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');
    console.log(a3 === a4); //true
}

{
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]: '123',
        'abc': 345,
        'c': 456
    };
    console.log('obj', obj);

    for (let [key, value] of Object.entries(obj)) {
        console.log('let of', key, value);
    }
    Object.getOwnPropertySymbols(obj).forEach(item => {
        console.log(obj[item]); //123
    })

    //所有的key-value
    Reflect.ownKeys(obj).forEach(item => {
        console.log('ownKeys', item, obj[item]);
    })
}