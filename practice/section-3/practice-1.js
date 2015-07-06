function create_updated_collection(collection_a, object_b) {
  for (var x = 0; x < collection_a.length; x++) {
    findInB(collection_a[x], object_b);
  }
  return collection_a;
}
function findInB(beFound, searchIn) {
  for (var y = 0; y < (searchIn.value).length; y++) {
    if (beFound.key == (searchIn.value)[y]) {
      beFound.count--;
      return;
    }
  }
}
