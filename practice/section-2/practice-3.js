function count_same_elements(collection) {
    var result=[];
   // var i=0;
    var attr='';
    for( var i=0;i<collection.length;){
      var counts=0;
      //alert(i);
      attr=collection[i].length>1?collection[i][0]:collection[i];
      //attr=collection[i][0];
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
         
       //if(collection[i].length==1&&collection[i]!=collection[i+1]) {
        //alert(collection[i][0]!=collection[j][0]);
         //alert(i);
         //break;
       // } else if (collection[i].length>1&&collection[i][0]!=collection[i+1]) {
       //  break;
       // }

        i++;
        l=collection[i].length;
      }
      result.push({key:attr,summary:counts});
      //i--;
    }
    return result;
}
