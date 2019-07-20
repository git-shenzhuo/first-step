<template>
    <div>
        <!-- 上传图像 -->
        <!-- <el-avatar :size="200" shape="square" :src="touxiang"></el-avatar> -->
        <el-avatar :size="200" :src="touxiang"></el-avatar>

        <el-upload
        drag
        action="http://localhost:1904/upload/avatar"
        name='avatar'
        multiple
        :on-success="uploadSuccess">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>

<script>
import Vue from 'vue'
import {Avatar,Upload} from 'element-ui'
Vue.use(Avatar)
Vue.use(Upload)

export default {
    data() {
        return {
            touxiang:''
        }
    },
    methods: {
        uploadSuccess(response, file, fileList){
            this.touxiang = 'http://localhost:1904/' + response.data;
            console.log(this.touxiang);
            
        }
    },
}
</script>

<style>

</style>
