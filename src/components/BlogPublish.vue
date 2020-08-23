<template>
  <div>
    <div data-v-d130ef7a class="publish-panel">
      <div>
        <input type="text" placeholder="有什么想和大家分享的？" id="re_username" />
      </div>
      <br />
      <br />
      <div data-v-d130ef7a class="toolbar">
        <!-- 要将父布局的position设置为relative，父布局将无法包裹input -->
        <div style="position: relative;">
          <!--设置input的position为absolute，使其不按文档流排版，并设置其包裹整个布局 -->
          <!-- 设置opactity为0，使input变透明 -->
          <!-- 只接受jpg，gif和png格式 -->
          <input
            id="upload-input"
            style="position: absolute; top: 0; bottom: 0; left: 0;right: 0; opacity: 0;"
            type="file"
            accept="image/gif, image/jpg, image/png"
            multiple
          />
          <!-- 自定义按钮效果 -->
          <div style="text-align: top">
            <span style="font-size: 12px;"></span>
            <font-awesome-icon :icon="['fas', 'laugh']" />
            <img
              id="upload"
              src="https://wx1.sinaimg.cn/mw690/00825r6Igy1ght4e6p77wj300z00z0ih.jpg"
              style="width: 40px; height: 40px; vertical-align: middle;"
            />
          </div>
        </div>
        <div id="imgContainer" style="margin-top: 10px;"></div>

        <!---->
        <!---->
      </div>
      <!---->
      <div data-v-8a5dd7f0 data-v-d130ef7a class="publish-launcher">
        <button data-v-8a5dd7f0 class="publish-btn d-i-block bp-v-middle disabled">发布</button>
        <!---->
      </div>
    </div>

    <!---->
  </div>
</template>

<script>
//import uploadpicture from "@/assets/uploadpicture.png";
export default {
  name: "BlogPublish",
};
/*function showImg(obj) {
  var files = obj.files;
  // document.getElementById("imgContainer").innerHTML = getImgsByUrl(files)
  getImgsByFileReader(document.getElementById("imgContainer"), files);
}*/

// 使用window.URL.createObjectURL(file)读取file实例并显示图片
/*function getImgsByUrl(files) {
  var elements = "";
  for (var i = 0; i < files.length; i++) {
    var url = window.URL.createObjectURL(files[i]);
    elements +=
      "<img src='" +
      url +
      "' style='width: 40px; height: 40px; vertical-align: middle; margin-right: 5px;' />";
  }
  return elements;
}*/

// 使用FileReader读取file实例并显示图片
/*function getImgsByFileReader(el, files) {
  for (var i = 0; i < files.length; i++) {
    let img = document.createElement("img");
    img.setAttribute(
      "style",
      "width: 40px; height: 40px; vertical-align: middle; margin-right: 5px;"
    );
    el.appendChild(img);
    var reader = new FileReader();
    reader.onload = function (e) {
      img.src = e.target.result;
    };
    reader.readAsDataURL(files[i]);
  }
}*/
</script>

<style scoped>
input[type="text"] {
  width: 93.4%;
  margin-bottom: 20px;
  padding: 10px;
  float: left;
  background-color: transparent;
  border: none;
  font-size: 15px;
  border-bottom: 1px solid rgba(238, 238, 238, 0.41);
  outline: none;
  color: rgb(22, 22, 22);
}

.publish-panel[data-v-d130ef7a] {
  position: relative;
  width: 100%;
  background-color: #fff;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
   margin-top: 10px;
}
.toolbar[data-v-d130ef7a] {
  margin-top: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.publish-launcher[data-v-8a5dd7f0] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.publish-btn[data-v-8a5dd7f0] {
  width: 70px;
  height: 32px;
  outline: none;
  background-color: #fb7299;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>