function count_same_elements(collection) {
  var result = [];
  for (var x = 0; x < collection.length; x++) {
    inR(collection[x], result);
  }
  return result;
}
function inR(cMember, result) {
  for (var y = 0; y < result.length; y++) {
    if (cMember == result[y].key) {
      result[y].count++;
      return;
    }
  }
  result.push({key: cMember, count: 1});
}
