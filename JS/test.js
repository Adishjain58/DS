console.log(1 + "2" + "2"); //5
console.log(1 + +"2" + "2"); // error
console.log(1 + -"1" + "2"); //2
console.log(+"1" + "1" + "2"); //112
console.log("A" - "B" + "2"); // won't work
console.log("A" - "B" + 2); // error

var a = {},
  b = { key: "b" },
  c = { key: "c" };

a[b] = 123;
a[c] = 456;
console.log(JSON.stringify(a));

console.log(a[b]); // 123

var hero = {
  _name: "John Doe",
  getSecretIdentity: function () {
    return this._name;
  },
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity()); // undefined
console.log(hero.getSecretIdentity()); // John Doe
