//解构赋值
{
    let a, b, rest;
    [a, b] = [1, 2];
}

{
    let a, b, rest;
    [a, b, ...rest] = [1, 2, 3, 4, 5, 6]
}

{
    let a, b;
    ({ a, b } = { a: 1, b: 2 });
}

{
    let a, b, c, rest;
    [a, b, c = 3] = [1, 2];
}

{
    let a = 1;
    let b = 2;
    [a, b] = [b, a]; //变量交换
}

{
    function f() {
        return [1, 2]
    }
    let a, b;
    [a, b] = f();
}

{
    function f() {
        return [1, 2, 3, 4, 5]
    }
    let a, b, c;
    [a, , , b] = f();
}

{
    function f() {
        return [1, 2, 3, 4, 5]
    }
    let a, b, c;
    [a, , ...b] = f();
}

{
    let o = { P: 42, q: true };
    let { p, q } = o;
}

{
    let { a = 10, b = 5 } = { a: 3 };
}

{
    let metaData = {
        title: 'abc',
        test: [{
            title: 'test',
            desc: 'desc'
        }]
    }
    let { title: esTitle, test: [{ title: cnTitle }] } = metaData;
    console.log(esTitle, cnTitle)
}