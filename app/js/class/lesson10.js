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

//与Array和Object横向对比
{
    //数据结构横向对比，增，查，改，删
    let map = new Map();
    let array = [];
    //增
    map.set('t', 1);
    array.push({ t: 1 });

    console.info('map-array', map, array);

    //查
    let map_exist = map.has('t'); //true
    let array_exist = array.find(item => item.t); //{t:1}
    console.info('map-array', map_exist, array_exist);

    //改
    map.set('t', 2);
    array.forEach(item => item.t ? item.t = 2 : '');
    console.info('map-array-modify', map, array);

    //删
    map.delete('t');
    let index = array.findIndex(item => item.t);
    array.splice(index, 1);
    console.info('map-array-delete', map, array);
}

{
    set和array的对比
    let set = new Set();
    let array = [];

    //增
    set.add({ t: 1 });
    array.push({ t: 1 });

    console.info('set-array', set, array);

    //查
    let set_exist = set.has({ t: 1 });
    let array_exist = array.find(item => item.t);
    console.info('set-array', set_exist, array_exist);

    //改
    set.forEach(item => item.t ? item.t = 2 : '');
    array.forEach(item => item.t ? item.t = 2 : '');
    console.info('set-array-modify', set, array);


    //删
    set.forEach(item => item.t ? set.delete(item) : '');
    let index = array.findIndex(item => item.t);
    array.splice(index, 1);
    console.info('map-array-delete', set, array);
}

{
    //map,set,object对比
    let item = { t: 1 };
    let map = new Map();
    let set = new Set();
    let obj = {};

    //增
    map.set('t', 1);
    set.add(item);
    obj['t'] = 1;

    console.info('map-set-obj', map, set, obj);

    //查
    console.info({
        map_exist: map.has('t'),
        set_exist: set.has(item),
        obj_exist: 't' in obj
    })

    //改
    map.set('t', 2);
    item.t = 2; //引用
    obj['t'] = 2;
    console.info('map-set-obj-modify', map, set, obj);

    //删
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.info('map-set-obj-delete', map, set, obj);
}