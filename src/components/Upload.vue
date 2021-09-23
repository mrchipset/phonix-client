<template>
<div class="box">
  <div id="preview" v-on:paste="handlePaste" width="600" height="600">
      <span>将图片按Ctrl+V 粘贴至此处</span>
  </div>
  <button @click="uploadPlans">上传文件</button>
</div>  

</template>

<script>
export default {
  name: 'Upload',
  props: {
  },

  methods: {
    handlePaste(event) {
      const items = (event.clipboardData || window.clipboardData).items;
      let file = null;

      if (!items || items.length === 0) {
        console.error("当前浏览器不支持本地");
        return;
      }
      // 搜索剪切板items
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          file = items[i].getAsFile();
          break;
        }
      }
      if (!file) {
        console.error("粘贴内容非图片");
        return;
      }
      // 此时file就是我们的剪切板中的图片对象
      // 如果需要预览，可以执行下面代码
      const reader = new FileReader();
      reader.onload = event => {
        var preview = document.getElementById("preview");
        preview.innerHTML = `<img src="${event.target.result}">`;
      };
      reader.readAsDataURL(file);
      this.file = file;
    },
    //上传文件成功后回调
    uploadPlans() {
      let file = this.file;
      if (!file) {
        this.$message.error("请粘贴图片后上传");
        return;
      }
      this.loading = true;


      // const {net} = require('electron').remote;
      // var FormData = require('form-data');

      let form = new FormData();
      form.append("data", file);
      form.append("key", "key");
      form.append("id", "mrchip");

      const axios = require('axios');

      axios({
        method: "post",
        url: "/PictureItems",
        crossdomain: true,
        data: form
      })
      .then(data => {
        if (data.data && data.data.success) {
          this.certificate_pic = data.data.data.source;
          this.$message.success(this.name + "上传成功！");
        } else {
          this.$message.error(this.name + "上传失败！");
        }
      }).catch(() => {});
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
