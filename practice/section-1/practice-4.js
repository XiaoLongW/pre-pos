function collect_same_elements(collection_a, object_b) {
  var result = [];

  for (var x = 0; x < collection_a.length; x++) {
    findInB(result, collection_a[x].key, object_b);
  }
  return result;
}
function findInB(result, aValue, obj_b) {
  for (var y = 0; y < (obj_b.value).length; y++) {
    if (aValue == (obj_b.value)[y]) {
      result.push(aValue);
      break;
    }
  }
}
