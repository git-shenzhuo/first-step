function js(a,b) {
    var n   = 0;
    for(var i = (a < b ? a : b); i <= b;i++){
        var result = 0;
        for(var j = (a < b ? a : b); j <= b && j != i;j++){
            var num = "i" + "j";    
            if (num % 2 == 1) {
                n++
            }
        }
        result += n;
        console.log(result);
        
    }
}