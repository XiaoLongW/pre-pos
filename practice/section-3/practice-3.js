function create_updated_collection(collection_a, object_b) {
    var result=[];
    var length_l=collection_a.length;
    var i=0;
    var j=0;
  
    for(i=0;i<length_l;i++){
        var counts=1;
        var attr=collection_a[i];
        while(collection_a[i+1]==attr){
       	    counts++;
       	    i++;
        }
        result.push({key:attr,count:counts});
    }
  
    for(i=0;i<result.length;i++){
       for(j=0;j<object_b["value"].length;j++){
       	    if(result[i]["key"]==object_b["value"][j]){
       	   	   	var num=Math.floor((result[i]["count"])/3);
       	   	    result[i]["count"]-=num;
       	    }
       }
    }
    return result;
}
