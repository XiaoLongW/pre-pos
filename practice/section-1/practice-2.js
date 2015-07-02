function collect_same_elements(collection_a, collection_b) {
  var result = [];
  for (var x = 0; x < collection_a.length; x++) {
    findInB(result, collection_a[x], collection_b);
  }
  return result;
}
function findInB(result, aValue, col_b) {
  for (var y = 0; y < col_b[0].length; y++) {
    if (aValue == col_b[0][y]) {
      result.push(aValue);
      break;
    }
  }
}
