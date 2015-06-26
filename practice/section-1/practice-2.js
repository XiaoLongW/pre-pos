function collect_same_elements(collection_a, collection_b) {
  var result=[];
  var i=0;
  var j=0;
  var e=0;

  var length_a=collection_a.length;
  var length_b=collection_b.length;
  
  for (i = 0;i<length_a;i++) {
    for(j = 0;j<length_b;j++){
    	for(e=0;e<collection_b[j].length;e++){
  	       if(collection_a[i]==collection_b[j][e]){
  		       result.push(collection_a[i]);
  		       break;
  	       }
  	    }
    }
  }
  return result;
}
