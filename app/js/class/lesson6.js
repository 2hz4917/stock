{
    //转换成数组类型
    let arr = Array.of(3, 4, 5, 7, 8, 9, 11)
    console.log('arr = ', arr);

    let empty = Array.of();
    console.log('empty', empty);
}

{
    //伪数组转换为真数组
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach((item) => {
        console.log(item.textContent);
    });

    console.log(Array.from([1, 3, 5], (item) => {
        return item * 2;
    }));
}

{
    console.log('fill-7', [1, 'a', undefined].fill[7]); //[7,7,7]
    //填充,起始位置,结束位置
    console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 3)); //['a',7,7]
}

{
    for (let index of['1', 'c', 'ks'].keys()) {
        console.log('keys', index); //0,1,2
    };
    for (let value of['1', 'c', 'ks'].values()) {
        console.log('values', value); //value 
    };
    for (let [index, value] of['1', 'c', 'ks'].entries()) {
        console.log('values', index, value); //value 
    }
}

{
    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)); //4,2,3,4,5
}

{
    console.log([1, 2, 3, 4, 5, 6].find((item) => {
        return item > 3
    })); //4
    console.log([1, 2, 3, 4, 5, 6].findIndex((item) => {
        return item > 3
    })); //3 (index)
}

{
    console.log('number', [1, 2, NaN].includes(1));
    console.log('number', [1, 2, NaN].includes(NaN));

}