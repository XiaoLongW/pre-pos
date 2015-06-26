function count_same_elements(collection) {
var result=[];
    var length_l=collection.length;
    var i=0;
  
    for(i=0;i<length_l;i++){
          var counts=1;
          var attr=collection[i][0];
          while(collection[i+1][0]==attr){
          	if(collection[i].length>1){
                if(collection[i].length=3){
                	counts+=parseInt(collection[i][2]);
                }else{
                	if(collection[i][3]=="\d"){
                		counts+=parseInt(collection[i][2]+collection[i][3]);
                	}else{
                		counts+=parseInt(collection[i][2]);
                	}
                }
          	}else{
       	       counts++; 
       	    }
       	     i++;
          }
          result.push({key:attr,count:counts});
        }
    }
    return result;
}
