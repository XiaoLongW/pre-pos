function count_same_elements(collection) {
  var result = [];
  for (var x = 0; x < collection.length; x++) {
    inR(collection[x], result);
  }
  return result;
}
function inR(cMember, result) {
  for (var y = 0; y < result.length; y++) {
    if (cMember[0] == result[y].key) {
      result[y].count += cMember.length == 1 ? 1 : parseInt(cMember[2]);
      return;
    }
  }
  result.push({key: cMember[0], count: cMember.length == 1 ? 1 : parseInt(cMember[2])});
}
