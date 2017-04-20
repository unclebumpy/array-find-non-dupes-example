var sample = [1,1,2,3,3,4,4,8,8,8,9,9,10,10,10,10,11];

var singleNonDuplicate = function(nums) {
    var array = (nums),
        dupe = [];
        
    nums.forEach(function(item,index){
        var a = item,
            b = array[index+1];

        // add the number to the array of duplicates
        if(a == b){
            dupe.push(a);
        }
    })

    dupe.forEach(function(item,index){

        // delete numbers from the array that were in the array of repeats
        while(array.indexOf(item) !== -1){
            var deleteme = array.indexOf(item);
            array.splice(deleteme,1)
        }
    })
    
    return array
};

//find the single item
singleNonDuplicate(sample)
