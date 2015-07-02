function count_same_elements(collection) {
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    if (!inR(collection[i], result)) {
      if (collection[i].length != 1) {
        result.push({
          name: collection[i][0],
          summary: collection[i].length > 4 ? parseInt(collection[i][2]) * 10 + parseInt(collection[i][3]) : parseInt(collection[i][2])
        });
      } else {
        result.push({name: collection[i], summary: 1});
      }
    }
  }
  return result;
}
function inR(cMember, result) {
  for (var y = 0; y < result.length; y++) {
    if (cMember[0] == result[y].name) {
      if (cMember.length != 1) {
        result[y].summary += cMember.length > 4 ? parseInt(cMember[2]) * 10 + parseInt(cMember[3]) : parseInt(cMember[2]);
      } else {
        result[y].summary++;
      }
      return true;
    }
  }
  return false;
}
