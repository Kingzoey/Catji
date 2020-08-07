<template>
    <div class="mainBody">
       <div class="head">
           <h1>投稿信息</h1>
       </div>
       <div class="File">
            <div class="UploadIco">
            
                    <img :src= "uploadCover" height="100" width="200"> 
                    <br/>
                    <p> &nbsp;&nbsp;&nbsp;    
                    <input type="file" name="cover" class="button" >
                    </p>
            </div>
            <div class="state">
                  
                <div class="state2">
                    <h2>封面</h2>
                    <tr>JPG、JEPG、PNG格式图片需要小于10M</tr>
                    <tr>GIF格式图片需要小于3M，建议时长小于3s</tr>
                   
                </div>
              
            </div>
                       
        
       </div>
    </div>
</template>

<script>
import uploadCover from "@/assets/uploadCover.png";
export default {
    name: "Middle",
    data() {
        return {
            uploadCover:uploadCover,
        };
  }
}
</script>

<style>
.mainBody
{
    float:left;
    margin-right:50px;
    margin-top:50px;
}

.File
{
 /*   border:0.5px solid grey;*/
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
    
}

.state2
{
    margin-top:50px;
}



</style>