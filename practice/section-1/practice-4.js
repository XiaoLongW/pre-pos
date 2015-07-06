function collect_same_elements(collection_a, object_b) {
  var result = [];

  for (var x = 0; x < collection_a.length; x++) {
    findInB(result, collection_a[x].key, object_b);
  }
  return result;
}
function findInB(bePushed, beFound, searchIn) {
  for (var y = 0; y < (searchIn.value).length; y++) {
    if (beFound == (searchIn.value)[y]) {
      bePushed.push(beFound);
      break;
    }
  }
}
