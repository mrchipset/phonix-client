<template>

  <div class = "imgGroup">
    <img v-for="image in images" :src="image.url" @click="this.Show(image.url)" v-bind:key="image" width="128" height="128"/>
  </div>

  <div class= "btnGroup">
    <button id='BtnPrev'>Prev</button>
    <span id ='TxtContent'>1/1</span>
    <button id='BtnNext'>Next</button>
  </div>

</template>

<script>

export default {
  name: 'Gallery',
  // props: {
  //   msg: String
  // }

  data: function() {
    return {
      images: [],
      currentPageId: 0,
      pageCount: 1
    }

  },

  mounted: function () {
    this.$nextTick(() => {
      console.log("Mount")
      var btnPrev = document.getElementById('BtnPrev');
      btnPrev.onclick = this.GetPrevFunc

      var btnNext = document.getElementById('BtnNext');
      btnNext.onclick = this.GetNextFunc

      this.GetListFunc(0);
    });
  },

  methods: {
    Show (url) {
      this.$router.push({ name: 'get', params: {url: url}});
    },
    GetPrevFunc ()
    {
      if(this.currentPageId - 1 >= 0)
      {
        this.currentPageId--;
      } else
      {
        return;
      }

      this.GetListFunc(this.currentPageId);
    },

    GetNextFunc ()
    {
      if(this.currentPageId + 1 <= this.pageCount)
      {
        this.currentPageId++;
      } else
      {
        return;
      }

      this.GetListFunc(this.currentPageId);
    },

    GetListFunc(pageId)
    {
      this.currentPageId = this.pageId
      console.log('Get List Clicked.')
      const {net} = require('electron').remote;
      const request = net.request(`https://phonix.mrchip.info/PictureItems/list/9/${pageId}`);
      request.on('response', (response) => {
          console.log(`**statusCode:${response.statusCode}`);
          console.log(`**header:${JSON.stringify(response.headers)}`);
          response.on('data', (chunk)=>{
              console.log(`**body:${JSON.stringify(chunk.toString())}`);
              var json = JSON.parse(chunk.toString());
              this.pageCount = json.pages;
              this.currentPageId = json.current;
              document.getElementById('TxtContent').innerText = `${this.currentPageId}/${this.pageCount}`;

              var list = json.list;
              console.log(list.length);
              var imgArr = [];
              for(var i = 0; i < list.length; ++i)
              {
                var item = list[i];
                console.log(item.summary);
                imgArr.push({url: `https://phonix.mrchip.info/PictureItems/${item.summary}`})
              }
              this.images = imgArr;
          });
          response.on('end', ()=>{
              console.log('Get All data');
          });
      });
      request.end();
    }
  }



}



// console.log(this)
// this.nextTick(() =>{
//   var btnPrev = document.getElementById('BtnPrev');
//   btnPrev.onclick = GetPrevFunc

//   var btnNext = document.getElementById('BtnNext');
//   btnNext.onclick = GetNextFunc

//   GetListFunc(0);
// })
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

.btnGroup {
  display:inline-block;
}
</style>
