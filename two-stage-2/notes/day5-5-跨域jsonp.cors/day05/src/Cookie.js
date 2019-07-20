let COOKIE = {
    getItem(key) {
        //先获取当前页面中所有的Cookie数据，然后切割成数组
        let cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            console.log(cookies[i]); //address=广州市
            let tempArr = cookies[i].split("="); //["address","广州市"]
            if (key == tempArr[0]) {
                return tempArr[1];
            }
        }
    },
    setItem(key, value, days) {
        if (!days) {
            document.cookie = `${key}=${value}`;
        } else {
            let date = new Date();
            date.setDate(date.getDate() + days);
            document.cookie = `${key}=${value};expires=${date}`;
        }
    },
    removeItem(key) {
        this.setItem(key, null, -1);
    },
    clear() {
        let keys = this.keys();
        keys.forEach(ele => {
            this.setItem(ele, null, -1)
        });

        // var slef = this
        // keys.forEach(function(value, index, arrT) {
        //     console.log(this);
        //     slef.setItem(value, null, -1);
        // })
    },
    keys() {
        let cookies = document.cookie.split("; ");
        let resultKeys = [];
        for (let i = 0; i < cookies.length; i++) {
            let tempArr = cookies[i].split("="); //["address","广州市"]
            resultKeys.push(tempArr[0]);
        }
        return resultKeys;
    }
}