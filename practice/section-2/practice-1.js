function count_same_elements(collection) {
  var result=[];
  
  for(var x=0;x<collection.length;x++){
       var counts=1;
       while(collection[x+1]==collection[x]){
       	  counts++;
       	  x++;
       }
       result.push({key:collection[x],count:counts});
  }
  return result;
}
