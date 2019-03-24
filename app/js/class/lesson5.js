//数值扩展
{
    console.log(0b111110111);
    console.log(0B111110111);
    console.log(0o767);
}

{
    //是否有尽
    Number.isFinite(number);
    console.log('15', Number.isFinite(15));
    console.log('NaN', Number.isFinite(NaN));
    console.log('1/0', Number.isFinite('true' / 0));
    Number.isNaN(number);
    console.log('NaN', Number.isNaN(NaN)); //true
}

{
    Number.isInteger(number);
    console.log('25', Number.isInteger(25));
    console.log('25.0', Number.isInteger(25.0));
    console.log('25.1', Number.isInteger(25.1)); //false
    console.log('25.2', Number.isInteger('25')); //false
}

{
    console.log(Number.MAX_SAFE_INTEGER); //最大安全数 2^53 不包含两个端点
    console.log(Number.MIN_SAFE_INTEGER);
    Number.isSafeInteger(number);
    console.log('a', Number.isSafeInteger('a'));
}

{
    Math.trunc(x);
    console.log('4.1', Math.trunc(4.1)); //4
    console.log('4.9', Math.trunc(4.9)); //4
}

{
    Math.spin();
    console.log('-5', Math.sign(-5)); //-1
    console.log('0', Math.sign(0)); //0
    console.log('5', Math.sign(5)); //1
    console.log('50', Math.sign('50')); //1
    console.log('foo', Math.sign('foo')); //NaN
}

{
    //立方根
    Math.cbrt(x);
    console.log('-1', Math.cbrt(-1)); //-1
    console.log('8', Math.cbrt(8)); //2
}
//对数