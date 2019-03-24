//正则扩展
{
    let regex = new RegExp('xyz', 'i');
    let regex2 = new RegExp(/xyz/i);

    //i 会覆盖之前的ig
    let regex3 = new RegExp(/xyz/ig, 'i');
    console.log(regex3.flags); //i 获取修饰符
}

{
    let s = 'bb_b_bbb';
    let a1 = /b+/g;
    let a2 = /b+/y; //粘连模式

    console.log('one', a1.exec(s), a2.exec(s)); //bb,bb
    console.log('two', a1.exec(s), a2.exec(s)); //b,null

    console.log(a1.sticky, a2.sticky);

}

{
    //unicode
    console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));
    console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'));

    //u-1 true//两个字母
    //u-2 false//一个字符

    console.log(/\u{61}/.test('a')); //false
    console.log(/\u{61}/u.test('a')); //true

    console.log(`\u{20BB7}`); //不会打

    console.log('u', /^.\u{20BB7}$/.test(s));
    console.log('u-2', /^.\u{20BB7}$/u.test(s));
}