function count_same_elements(collection) {
    var result=[];
    var attr='';
    for( var i=0;i<collection.length;i++){
      var counts=0;
      attr=collection[i].length>1?collection[i][0]:collection[i];
      var l=collection[i].length;
      while(collection[i].length>1?collection[i][0]==attr:collection[i]==attr) {
        if(collection[i].length==1){
          counts++;
          attr=collection[i];
        }else if(collection.length==5){
          counts+=((collection[i][2]-0)*10+(collection[i][3]-0));
          attr=collection[i][0];
        }else{
          counts+=(collection[i][2]-0);
          attr=collection[i][0];
        }
        
        i++;
        l=collection[i].length;
      }
      result.push({key:attr,summary:counts});
      i--;
    }
    return result;
}
