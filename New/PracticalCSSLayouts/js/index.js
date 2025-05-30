function findTime(genome, mutation) {
  // Write your code here
  var result = 0,
    tempResult = 0,
    lastMutationIdx = 0;

  for (var i = 0; i < genome.length; i++) {
    if (genome[i] == mutation) {
      tempResult = i - lastMutationIdx;
      lastMutationIdx = i;
    }

    if (tempResult >= result) {
      result = tempResult;
      tempResult = 0;
    }
  }

  return result;
}

console.log(replaceChars('abcd', [1, 2, 3, 4]));

function replaceChars(str, indexes) {
  var arr = [...str];

  for (let i = 0; i < indexes.length; i++) {
    arr[indexes[i] - 1] = '*';

    console.log(getSubStringsAux(arr.join('')));
  }

  return arr.join('');
}

function getSubStringsAux(str) {
  if (str == '') return [];

  if (str.length == 1) return [str];

  if (str.length == 2) return [str[0], str[1], str];

  var left = getSubStringsAux(str.substring(0, str.length - 1));
  var right = getSubStringsAux(str.substring(1));

  return [str, ...left, ...right];
}

function getSubStrs(str) {
  var subStrs = getSubStringsAux(str);
  var obj = {};
  subStrs.forEach((element) => {
    obj[element] = element;
  });
  return Object.keys(obj);
}
