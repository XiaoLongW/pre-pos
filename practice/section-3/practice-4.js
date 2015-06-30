function create_updated_collection(collection_a, object_b) {
    var result=[];
  
    for(var x=0;x<collection_a.length;x++){
      var counts=1
        if (collection_a[x].length==3) {
          counts=collection_a[x][2]-0;
        }else{
          counts=1;
          while(collection_a[x+1]==collection_a[x]){
       	    counts++;
       	    x++;
          }
        }
        for(var y=0;y<object_b["value"].length;y++){
            if(collection_a[x][0]==object_b["value"][y]){
                var num=0;
                for(var z=0;z+3<=counts;z+=3){
                  num++;
                }
                counts-=num;
            }
        }
        result.push({key:collection_a[x][0],count:counts});
    }

    return result;
}
