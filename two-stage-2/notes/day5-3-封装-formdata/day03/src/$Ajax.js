let $ = {
    get(options) {
        options.type = "get";
        this.ajax(options)
    },
    post(options) {
        options.type = "post";
        this.ajax(options)
    },
    ajax(options) {
        //type, url, data, success, error
        let type = options.type || "get";
        let url = options.url;
        let data = options.data || {};
        let success = options.success;
        let error = options.error;

        let xmlhttp = new XMLHttpRequest;

        if (type == "get") {
            url = encodeURI(url);
            let queryString = this.obj2string(data);
            if (queryString.length == 0) {
                queryString = "t=" + Math.random();
            }
            url = url + "?" + queryString;
            xmlhttp.open("get", url, true);
            xmlhttp.send();
        } else if (type == "post") {
            xmlhttp.open("post", url, true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send(this.obj2string(data));
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    success(xmlhttp);
                } else {
                    error(xmlhttp);
                }
            }
        }
    },
    obj2string(obj) {
        let arr = [];
        for (key in obj) {
            arr.push(`${key}=${obj[key]}`);
        }
        return arr.join("&");
    }
}