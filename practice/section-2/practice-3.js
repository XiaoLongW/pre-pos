function count_same_elements(collection) {
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    inR(collection[i], result);
  }
  return result;
}
function inR(cMember, result) {
  for (var y = 0; y < result.length; y++) {
    if (cMember[0] == result[y].name) {
      result[y].summary += cMember.length == 1 ? 1 : (cMember.length > 4 ? parseInt(cMember[2]) * 10 + parseInt(cMember[3]) : parseInt(cMember[2]));
      return;
    }
  }
  result.push({
    name: cMember[0],
    summary: cMember.length == 1 ? 1 : (cMember.length > 4 ? parseInt(cMember[2]) * 10 + parseInt(cMember[3]) : parseInt(cMember[2]))
  });
}
