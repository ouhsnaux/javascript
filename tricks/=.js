var a = { n: 1 };
var b = a;
// 此时会先把a.x 中的a指向的地址计算出来，所以最后发现b变了
a.x = a = { n: 2 };

