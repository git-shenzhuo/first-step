let cookie = {
    // 查,通过key，找value
    getitem(key){
        // 先获取页面中的cookie数据，然后切割
        let cookies = document.cookie.split("; ");
        // 遍历每个cookie
        for(let i =0,len = cookies.length;i < len;i++){
            // 把cookie数据切割成数组
            let tempArr = cookies[i].split("=");
            // 比较判断，输出value
            if(key == tempArr[0]){
                return tempArr[1];
            }
        }
    },
    // 增，改
    setitem(key,value,days){
        // 检查是否修改存储时间
        if(!days){
            document.cookie = `${key}=${value}`;
        }else{
            let date = new Date();
            date.setDate(date.getDate() + days);
            document.cookie = `${key}=${value};expires=${date}`;
        }
    },
    // 删
    removeitem(key){
        // 利用window自带的清除机制，修改存储的时间
        this.setitem(key,null,-10);
    },
    // 清空
    clear(){
        // 通过keys拿到所有key，然后遍历删除
        let key = this.keys;
        key.forEach(element => {
            tihs.setitem(element,null,-10);
        });
    },
    // 获得所有key
    keys(){
        let cookies = document.cookie.split("; ");
        let result = [];
        for(let i =0,len = cookies.length;i < len;i++){
            let tempArr = cookies[i].split("=");
            result.push(tempArr[0]);
        };
        return result;
    }
}