// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(typeof(a));
console.log(typeof(b));
console.log(b instanceof Array);

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
function fn (item, index, array) {
    return (item * 2);
}
console.log(a.map(fn));


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
console.log(colors.join(' '));
// case 2 output: 'Red+Green+White+Black'
console.log(colors.join('+'));
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join());


// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function compare (a, b) {
    if (a > b){
        return -1;
    }else if (a < b) {
        return 1;
    }else{
        return 0;
    }
}
a.sort(compare);
console.log(a);

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function findMost(arr) {
    var obj = {};
    var maxNum = 0;
    var maxElem = null;
    for (var i = 0; i < arr.length; i++) {
        var tmp = arr[i];
        obj[tmp] === undefined ? obj[tmp] = 1 : (obj[tmp]++);
        if (obj[tmp] > maxNum) {
            maxElem = tmp;
            maxNum = obj[tmp];
        }
    }
    return '出现频率最高的元素为：' + maxElem + '，出现次数为：' + maxNum;
}
console.log(findMost(a));