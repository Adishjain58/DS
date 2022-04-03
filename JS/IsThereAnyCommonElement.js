const isThereAnyCommonElementNaive = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        return true;
      }
    }
  }
  return false;
};

const isThereAnyCommonElement = (arr1, arr2) => {
  let obj = {};
  for (let i of arr1) {
    if (!obj[i]) {
      obj[i] = true;
    }
  }

  for (let j of arr2) {
    if (obj[j]) {
      return true;
    }
  }
  return false;
};

let arr = ["a", "b", "c", "d"];
let arr2 = ["e", "f", "g", "a"];
console.log(isThereAnyCommonElement(arr));
console.log(isThereAnyCommonElementNaive(arr, arr2));
