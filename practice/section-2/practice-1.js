function count_same_elements(collection) {
  var result = [];
  for (var x = 0; x < collection.length; x++) {
    if (!inR(collection[x], result)) {
      result.push({key: collection[x], count: 1});
    }
  }
  return result;
}

function inR(cMember, result) {
  for (var y = 0; y < result.length; y++) {
    if (cMember == result[y].key) {
      result[y].count++;
      return true;
    }
  }
  return false;
}
