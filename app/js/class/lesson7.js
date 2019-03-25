//函数的扩展
{
    function test(x, y = 'world') {
        console.log('默认值', x, y);
    }
    test('hello');
    test('hello', 'life');
}

{
    let x = 'test';

    function test2(x, y = x) {
        console.log('作用域', x, y);
    }
    test2('life'); //life life
    test2(); //undefined undefined
}

{
    function test3(...arg) {
        for (let v of arg) {
            console.log('rest', v);
        }
    }
    test3(1, 2, 3, 4, 'a'); // 1,2,3,4,'a'
}

{
    console.log(...[1, 2, 4]); //1 2 4
    console.log('a', ...[1, 2, 4]); //'a' 1 2 4
}

{
    let arrow = v => v * 2;
    let arrow2 = () => 5;
    console.log('arrow', arrow(3)); //6
    console.log(arrow2()); //5
}

{
    //尾调用
    function tail(x) {
        console.log('tail', x);
    }

    function fx(x) {
        return tail(x)
    }
    fx(123); //'tail' 123
}