function create_updated_collection(collection_a, object_b) {
   for(var x=0;x<collection_a.length;x++){
       for(var y=0;y<object_b["value"].length;y++){
       	   if(collection_a[x]["key"]==object_b["value"][y]){
       	   	   	    var num=Math.floor((collection_a[x]["count"])/3);
       	   	        collection_a[x]["count"]-=num;
       	   }
       }
   }
   return collection_a;
}
