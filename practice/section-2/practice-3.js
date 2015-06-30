function count_same_elements(collection) {
    var result=[];

    for( var i=0;i<collection.length;i++){
        var counts=1;

        if(collection[i].length==1){
          while(collection[i+1]==collection[i]){
             counts++;
             i++;
          }
        }else if(collection[i].length>=5){
          counts=((collection[i][2]*10-0)+(collection[i][3]-0));
        }else{
          counts=(collection[i][2]-0);
        }
        var bo=true;
        for(var x=0;x<result.length;x++){
          if(collection[i][0]==result[x]['name']){
            result[x]['summary']+=counts;
            bo=false;
            break;
          }
        }
        if(bo){
          result.push({name:collection[i][0],summary:counts});
        }
    }
    return result;
}
