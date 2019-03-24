//let const
function test() {
    let a = 1;
    console.log(a);
}

function last() {
    const PI = 3.1415926;
    const k = {
        a: 1
    }
    k.b = 3;
    console.log(PI, k);

}
test();
last();