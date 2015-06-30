function create_updated_collection(collection_a, object_b) {
    var result=[];
  
    for(var x=0;x<collection_a.length;x++){
        var counts=1;
        while(collection_a[x+1]==collection_a[x]){
       	    counts++;
       	    x++;
        }
        result.push({key:collection_a[x],count:counts});
    }
  
    for(var x=0;x<result.length;x++){
       for(var y=0;y<object_b["value"].length;y++){
       	    if(result[x]["key"]==object_b["value"][y]){
       	   	    result[x]["count"]-=Math.floor((result[x]["count"])/3);
       	    }
       }
    }
    return result;
}
