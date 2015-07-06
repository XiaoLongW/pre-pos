function count_same_elements(collection) {
  var result = [];
  for (var x = 0; x < collection.length; x++) {
    findInR(collection[x], result);
  }
  return result;
}
function findInR(beFound, searchIn) {
  for (var y = 0; y < searchIn.length; y++) {
    if (beFound[0] == searchIn[y].key) {
      searchIn[y].count += beFound.length == 1 ? 1 : parseInt(beFound[2]);
      return;
    }
  }
  searchIn.push({key: beFound[0], count: beFound.length == 1 ? 1 : parseInt(beFound[2])});
}
