// To create a hashTable we will use class in js.
// Idea is that we will store data in an array behind the scenes and while creating a hashTable we will ask for size from user
class HashTable {
  // To initialize a blank array whenever an object of hashtable is created.
  constructor(size) {
    this.data = new Array(size);
  }

  // A simplest hash function which will return a random index beased on the key passed, which will never exceed size of our array.
  // The reason why this function has _ before it is just to let others know that it's private and we shoudn't access it from ouside
  // even though technically we can access this method outside :)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // When storing a value in out hashtable first we will get an index using hash function and at that index of array,
  // firstly add another array if no value is present at that index and then push our key->value pair in the array at this index.
  set(key, value) {
    let address = this._hash(key);
    // if there is no value at the address than create a blank array at that location
    if (!this.data[address]) {
      this.data[address] = [];
    }
    // push an array containing both key and value.
    this.data[address].push([key, value]);
  }

  // When retrieving data from hashtable using key, we will first generate an index using hash function and if we have an array at that location than return
  // first index of array which is presnt at that index because we only want to retrieve the value for a specific key.
  get(key) {
    let address = this._hash(key);
    let bucketForAddress = this.data[address];
    if (bucketForAddress) {
      // Oterating over the array present at this index because there is a chance that collision occured and we have multiple key->value pasirs in this array
      for (let i = 0; i < bucketForAddress.length; i++) {
        if (bucketForAddress[i][0] === key) {
          return bucketForAddress[i][1];
        }
      }
    }
    return undefined;
  }

  // This method will return the keys which are stored in our hash Table;
  keys() {
    if (!this.data.length) {
      return undefined;
    }
    const keys = [];
    this.data.forEach((val) => {
      // In case of colission we can have multiple values at each index that's why iterate over this array
      // and return those keys as well.
      val[0].forEach((val2) => {
        keys.push[val2[0]];
      });
      keys.push(val[0][0]);
    });
    return keys;
  }

  // This method will return values of a hash table.
  values() {
    const values = [];
    // In case of colission we can have multiple values at each index that's why iterate over this array
    // and return those values as well.
    this.data.forEach((val) => {
      val[0].forEach((val2) => {
        values.push[val2[1]];
      });
      values.push(val[0][1]);
    });
    return values;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
console.log(myHashTable.get("grapes"));
myHashTable.set("apples", 9);
myHashTable.set(9, 9);
console.log(myHashTable);
console.log(myHashTable.keys());
console.log(myHashTable.values());
