//set-map数据结构
{
    let list = new Set();
    list.add(5);
    list.add(7);
    console.log('size', list.size); //2
}

{
    let arr = [1, 2, 3, 4, 5];
    let list = new Set(arr);
    console.log('size', list.size); //5
}

{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);
    console.log('list', list); //Set(2) {1, 2}

    let arr = [1, 2, 3, 1, 2];
    let list2 = new Set(arr);
    console.log('unique', list2); //Set(3) {1, 2,3}
}

{
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);

    console.log('has', list.has('add')); //true
    console.log('delete', list.delete('add'), list);
    list.clear();
    console.log('list', list);
}

{
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);

    //遍历
    for (let key of list.keys()) {
        console.log('keys', key);
    }
    for (let value of list.values()) {
        console.log('values', value);
    }
    for (let value of list) { //同上
        console.log(value);
    }
    for (let [key, value] of list.entries()) {
        console.log('entries', key, value);
    }
    list.forEach(item => {
        console.log(item);
    })
}

{
    let weakList = new WeakSet();

    let arg = {};

    weakList.add(arg);

    console.log('weakList', weakList);
}

{
    let map = new Map();
    let arr = ['123'];

    map.set(arr, 456);

    console.log('map', map, map.get(arr));
}

{
    let map = new Map([
        ['a', 123],
        ['b', 456]
    ]);
    console.log('map args', map);
    console.log('size', map.size); //2
    console.log('delete', map.delete('a'), map);
    console.log('clear', map.clear(), map);
}

{
    let weakMap = new weakMap();

    let o = {};
    weakMap.set(o, 123);
    console.log(weakMap.get(o)); //123
}