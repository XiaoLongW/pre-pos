function collect_same_elements(collection_a, object_b) {
  var result=[];
  
  for (var x = 0;x<collection_a.length;x++) {
    for(var y = 0;y<object_b["value"].length;y++){
  	   if(collection_a[x]==object_b["value"][y]){
  		   result.push(collection_a[x]);
  		   break;
  	   }
    }
  }
  return result;
}
