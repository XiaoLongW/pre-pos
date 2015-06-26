function collect_same_elements(collection_a, object_b) {
  var result=[];
  var i=0;
  var j=0;
  
  var length_a=collection_a.length;
  var length_b=object_b["value"].length;
  
  for (i = 0;i<length_a;i++) {
    for(j = 0;j<length_b;j++){
  	   if(collection_a[i]==object_b["value"][j]){
  		   result.push(collection_a[i]);
  		   break;
  	   }
    }
  }
  return result;
}
