function create_updated_collection(collection_a, object_b) {
  var result = [];
  for (var x = 0; x < collection_a.length; x++) {
    inR(collection_a[x], result);
  }
  for (var y = 0; y < result.length; y++) {
    findAndSub(result[y], object_b);
  }
  return result;
}
function inR(cMember, result) {
  for (var y = 0; y < result.length; y++) {
    if (cMember[0] == result[y].key) {
      result[y].count += cMember.length > 1 ? parseInt(cMember[2]) : 1;
      return 0;
    }
  }
  result.push({key: cMember[0], count: cMember.length > 1 ? parseInt(cMember[2]) : 1});
}
function findAndSub(rMember, obj_b) {
  for (var y = 0; y < (obj_b.value).length; y++) {
    if (rMember.key == (obj_b.value)[y]) {
      rMember.count -= Math.floor((rMember.count) / 3);
    }
  }
}
