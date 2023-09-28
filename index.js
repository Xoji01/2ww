let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]
let nums = 0
let others= 0
let str = 0

let qq = arr.filter(item =>typeof(item)==='string').length
console.log(qq)
let ww = arr.filter (num =>typeof(num) === 'number').length
console.log(ww);
let ee = arr.filter (other => typeof(other) !==isNaN).length
console.log(ee);