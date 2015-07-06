function count_same_elements(collection) {
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    findInR(collection[i], result);
  }
  return result;
}
function findInR(beFound, searchIn) {
  for (var y = 0; y < searchIn.length; y++) {
    if (beFound[0] == searchIn[y].name) {
      searchIn[y].summary += beFound.length == 1 ? 1 : (beFound.length > 4 ? parseInt(beFound[2]) * 10 + parseInt(beFound[3]) : parseInt(beFound[2]));
      return;
    }
  }
  searchIn.push({
    name: beFound[0],
    summary: beFound.length == 1 ? 1 : (beFound.length > 4 ? parseInt(beFound[2]) * 10 + parseInt(beFound[3]) : parseInt(beFound[2]))
  });
}
