function create_updated_collection(collection_a, object_b) {
  for (var x = 0; x < collection_a.length; x++) {
    findInB(collection_a[x], object_b);
  }
  return collection_a;
}
function findInB(aMember, obj_b) {
  for (var y = 0; y < (obj_b.value).length; y++) {
    if (aMember.key == (obj_b.value)[y]) {
      aMember.count -= Math.floor(aMember.count / 3);
      return;
    }
  }
}
