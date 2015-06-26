function count_same_elements(collection) {
    var result=[];
    var length_l=collection.length;
    var i=0;
  
    for(i=0;i<length_l;i++){
        if (collection[i].length==3) {
          result.push({key:collection[i][0],count:parseInt(collection[i][2])});
        }
        else if (collection[i].length==4) {
          result.push({key:collection[i][0],count:parseInt(collection[i][2]+collection[i][3])});
        }else{
          var counts=1;
          var attr=collection[i];
          while(collection[i+1]==attr){
       	    counts++;
       	    i++;
          }
          result.push({key:attr,count:counts});
        }
    }
    return result;
}
