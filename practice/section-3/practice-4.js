function create_updated_collection(collection_a, object_b) {
  var result = [];
  for (var x = 0; x < collection_a.length; x++) {
    findInR(collection_a[x], result);
  }
  for (var y = 0; y < result.length; y++) {
    findAndSub(result[y], object_b);
  }
  return result;
}
function findInR(beFound, searchIn) {
  for (var y = 0; y < searchIn.length; y++) {
    if (beFound[0] == searchIn[y].key) {
      searchIn[y].count += beFound.length > 1 ? parseInt(beFound[2]) : 1;
      return 0;
    }
  }
  searchIn.push({key: beFound[0], count: beFound.length > 1 ? parseInt(beFound[2]) : 1});
}
function findAndSub(beFound, searchIn) {
  for (var y = 0; y < (searchIn.value).length; y++) {
    if (beFound.key == (searchIn.value)[y]) {
      beFound.count -= Math.floor((beFound.count) / 3);
    }
  }
}
