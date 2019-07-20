
(function($){
    $.extend({
        // 随机颜色
        getRandomColor(){
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            return `rgb(${r},${g},${b})`;
        },
        // 随机数
        getRandomNumber(min,max){
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        // 对象数组中某一项最小值的索引
        getMinIndexWithArr(arr){
            let minIndex = 0;
            for(let i = 0,len = arr.length;i < len;i++){
                if(arr[minIndex].top > arr[i].top){
                    minIndex = i;
                }
            };
            return minIndex;          
        }
    })
})(jQuery)