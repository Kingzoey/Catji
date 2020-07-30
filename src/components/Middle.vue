<template>
    <div class="hot-part">
        <header class="hot-header">
            <span class="hot-name">最热</span>
        </header>
        <div class="hot-list-top">
            <div class="top-left">
               <div class="big-item">
                    <a class="cover" href="#" target="_blank">
                        <img :src="test1" width="200" alt="最热视频1"/>
                    </a>
                     <br>
                    <a title="最热视频1">最热视频1</a>
                </div>
            </div>
            <div class="top-right">
               <div class="top-right-line">
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" width="150" alt="最热视频2"/>
                        </a>
                        <br>
                        <a title="最热视频2">最热视频2</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" width="150" alt="最热视频2"/>
                        </a>
                            <br>
                        <a title="最热视频2">最热视频2</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" width="150" alt="最热视频2"/>
                        </a>
                            <br>
                        <a title="最热视频2">最热视频2</a>
                    </div>
                </div>
                <div class="top-right-line">
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" width="150" alt="最热视频2"/>
                        </a>
                        <br>
                        <a title="最热视频2">最热视频2</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" width="150" alt="最热视频2"/>
                        </a>
                            <br>
                        <a title="最热视频2">最热视频2</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" width="150" alt="最热视频2"/>
                        </a>
                            <br>
                        <a title="最热视频2">最热视频2</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import test1 from "F:/Catji/Catji/src/assets/test.png";
export default {
    name: "Middle",
    data() {
        return {
            test1: test1,
        };
  }
}
</script>

<style>
.hot-name{
    font-size: 50px;
}
.hot-header{
    margin-left: 100px;
}
.top-left{
    margin-top:50px;
    float:left;
    margin-left:300px;
}
.top-right{
    float:right;
    margin-right: 400px;
}
.normal-item{
    float:left;
    border:200px;
    margin-left: 50px;
}
.top-right-line{
    margin-top:20px;
}
</style>
