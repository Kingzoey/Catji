<template>
    <div class="mainBody">
       <div class="head">
           <h2>上传文件</h2>
           <span class="warning">请勿上传含有政治因素、色情挑逗、血腥暴力等违法因素<br>的视频内容</span>
       </div>
       <div class="File">
           <a class="UploadIco" href="#" target="_blank">
               <img src= "upload" height="50" width="20"> 
            </a>
           
       </div>
    </div>
</template>

<script>
import upload from "@/assets/upload.png";
export default {
    name: "Middle",
    data() {
        return {
            upload:upload,
        };
  }
}
</script>