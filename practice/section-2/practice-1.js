function count_same_elements(collection) {
  var result = [];
  for (var x = 0; x < collection.length; x++) {
    findInR(collection[x], result);
  }
  return result;
}
function findInR(beFound, searchIn) {
  for (var y = 0; y < searchIn.length; y++) {
    if (beFound == searchIn[y].key) {
      searchIn[y].count++;
      return;
    }
  }
  searchIn.push({key: beFound, count: 1});
}
