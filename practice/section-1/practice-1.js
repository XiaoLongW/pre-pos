function collect_same_elements(collection_a, collection_b) {
  var result = [];
  for (var x = 0; x < collection_a.length; x++) {
    findInB(result, collection_a[x], collection_b);
  }
  return result;
}

function findInB(bePushed, beFound, searchIn) {
  for (var y = 0; y < searchIn.length; y++) {
    if (beFound == searchIn[y]) {
      bePushed.push(beFound);
      break;
    }
  }
}
