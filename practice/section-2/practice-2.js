function count_same_elements(collection) {
    var result=[];
  
    for(var i=0;i<collection.length;i++){
        if (collection[i].length==3) {
            result.push( {key: collection[i][0], count: collection[i][2]-0 } ); //减0转化为number.
        }else{
            var counts=1;
            while(collection[i+1]==collection[i]){
       	       counts++;
       	       i++;
            }
           result.push({key:collection[i],count:counts});
        }
    }
    return result;
}
