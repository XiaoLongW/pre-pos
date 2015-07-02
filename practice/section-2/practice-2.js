function count_same_elements(collection) {
  var result = [];

  for (var i = 0; i < collection.length; i++) {
    if (!inR(collection[i], result)) {
      if (collection[i].length != 1) {
        result.push({key: collection[i][0], count: parseInt(collection[i][2])});
      } else {
        result.push({key: collection[i], count: 1});
      }
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
