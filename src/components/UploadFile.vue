<template>
    <div class="mainBody">
       <div class="head">
           <h2>上传文件</h2>
           <span class="warning">请勿上传含有政治因素、色情挑逗、血腥暴力等违法因素<br>的视频内容</span>
       </div>
       <div class="File">
            <div class="UploadIco">
                <a  href="#" target="_blank">
                    <img :src= "upload" height="50" width="50"> 
                </a>
            </div>
            <div class="state">
                <div class="state1">
                    <h2>把文件拖至此处上传</h2>
                </div>
                <div class="state2">
                    <tr>支持批量添加文件</tr>
                    <tr>单次上传的所有文件总大小不超过20G</tr>
                    <tr>支持wmv、avi、mpg、mp4、rmvb、flv、3gp、<br>mov、mkv、 vob格式文件</tr>
                    <tr>建议上传mp4文件</tr>
                </div>
                <div class="UploadButton">
                    <button>上传视频</button>
                </div>
                <br><br><br><br><br>
            </div>
           
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

<style>
.mainBody
{
    float:right;
    margin-right:50px;
    margin-top:50px;
}

.File
{
    border:0.5px solid grey;
    margin-top:50px;
}

.UploadIco
{
    margin-top:50px;
    text-align: center;
}

.state
{
    margin-left: 20px;
    text-align: center;
}

.state2
{
    margin-top:50px;
}

.UploadButton button
{
    margin-top: 60px;
    margin-left: 60px;
    display: block;
	width: 150px;
	height: 30px;
    text-align: center;
	background-color: #c81623;
	color: #fff;
	border: none;
	outline: none;
}


</style>