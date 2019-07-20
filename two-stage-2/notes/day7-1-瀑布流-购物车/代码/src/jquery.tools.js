(function ($) {

  $.extend({
    getRandomColor(){
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      let a = Math.random().toFixed(1);
      return `rgba(${r},${g},${b},${a})`;
    },
    getRandomNumber(min,max){
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    getMinIndexWithArr(arr)
    {
      let minIndex = 0 ;
      for (var i = 0 ;i <arr.length;i++)
      {
        if (arr[minIndex].offsetTop > arr[i].offsetTop)
        {
          minIndex = i;
        }
      }
      return minIndex;
    }
  })

})(jQuery)