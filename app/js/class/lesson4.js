//字符串扩展
{
    console.log('a', '\u0061');
    console.log('s', '\u20BB7'); //0xFFFF

    console.log('s', '\u{20BB7}');
}

{
    let s = '𠮷';
    console.log('length', s.length); //2
    console.log('0', s.charAt(0));
    console.log('1', s.charAt(1));
    console.log('at0', s.charCodeAt(0));
    console.log('at1', s.charCodeAt(1));

    let s1 = '𠮷a';
    console.log('length', s1.length); //3
    console.log('code0', s1.codePointAt(0));
    console.log('code0', s1.codePointAt(0).toString(16)); //20BB7
    console.log('code1', s1.codePointAt(1)); //只取20BB7的后两个字节
    console.log('code2', s1.codePointAt(2)); //97
}

{
    console.log(String.fromCharCode('0x20bb7'));
    console.log(String.fromCodePoint('0x20bb7'));
}

{
    let str = '\u{20BB7}abc';
    for (let i = 0; i < str.length; i++) {
        console.log('es5', str[i]);

    }
    for (let code of str) {
        console.log('es6', code);

    }
}

{
    let str = 'string';
    //是否包含
    console.log('includes', str.includes('r'));
    //以什么开头
    console.log('start', str.startsWith('str'));
    //以什么结束
    console.log('end', str.endsWith('ng'));
}

{
    //重复
    let str = 'abc';
    console.log(str.repeat(2));
}

{
    let name = 'list';
    let info = 'hello world';

    let m = `i am ${name},${info}`
    console.log(m);
}

{
    console.log('1'.padStart(2, '0')); //01 向前补位
    console.log('1'.padEnd(2, '0')); //10 向后补位
}

{
    //防止xss攻击
    //多语言模板
    let user = {
        name: 'list',
        info: 'hello world'
    };
    abc `i am ${user.name},${user.info}`;

    function abc(s, v1, v2) {
        console.log(s, v1, v2);
        return s + v1 + v2;
    }
    console.log(abc `i am ${user.name},${user.info}`);
}

{
    //不转义
    console.log(String.raw `Hi\n${1+2}`);
    console.log(`Hi\n${1+2}`);
}