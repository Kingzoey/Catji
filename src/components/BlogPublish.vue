<template>
  <div>
    <div data-v-d130ef7a class="publish-panel">
      <div class="text">
      <textarea style="border:0;border-radius:0px;background-color:#fff;width: 860px;height: 110px;padding: 10px;resize: none;margin-left:9.8px;" placeholder="云上的吸猫，你我共享"></textarea>
      <br />
     
      </div>
       <br /> <br /> <br /> <br /> <br />
      <br />
      <div data-v-d130ef7a class="toolbar" style="position: relative;left:-800;color:antiquewhite;font-size: 30px;"> 
        <font-awesome-icon :icon="['fas', 'laugh']" />  &emsp;
        <font-awesome-icon :icon="['fas', 'hashtag']" /> &emsp;&emsp;
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
            
            <font-awesome-icon :icon="['fas', 'camera']" /> 
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
.text {
  width: 80%;
  margin-bottom: 50px;
  padding: 10px;
  float: left;
  background-color: transparent;
  border: none;
  font-size: 15px;
  border-bottom: 1px solid #fff;
  outline: none;
  color: rgb(22, 22, 22);
}

.publish-panel[data-v-d130ef7a] {
  position: relative;
  height: 200px;
  width: 100%;
  background-color: #fff;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
   margin-top: 10px;
}
.toolbar[data-v-d130ef7a] {
  margin-top: 12px;
 display: -webkit-flex; /* Safari */
    -webkit-justify-content: space-around; /* Safari 6.1+ */
    display: flex;
    justify-content: space-around;
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
  background-color: antiquewhite;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 24px;
  margin-bottom: 20px;
  font-weight: bold;
}
</style>