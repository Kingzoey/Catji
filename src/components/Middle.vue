<template>
    <div class="hot-part">
        <header class="hot-header">
            <span class="hot-name">最热</span>
        </header>
        <div class="hot-list-top">
            <div class="top-left">
               <div class="big-item">
                    <a class="cover" href="#" target="_blank">
                        <img :src="test1" height="230" width="450" alt="最热视频1"/>
                    </a>
                    <br>
                    <a title="最热视频1">最热视频1</a>
                </div>
            </div>
            <div class="top-right">
               <div class="top-right-line1">
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="100" width="200" alt="最热视频2"/>
                        </a>
                        <br>
                        <a title="最热视频2">最热视频2</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="100" width="200" alt="最热视频3"/>
                        </a>
                            <br>
                        <a title="最热视频3">最热视频3</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="100" width="200" alt="最热视频4"/>
                        </a>
                            <br>
                        <a title="最热视频4">最热视频4</a>
                    </div>
                </div>
                <div class="top-right-line2">
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="100" width="200" alt="最热视频5"/>
                        </a>
                        <br>
                        <a title="最热视频5">最热视频5</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="100" width="200" alt="最热视频6"/>
                        </a>
                            <br>
                        <a title="最热视频6">最热视频6</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="100" width="200" alt="最热视频7"/>
                        </a>
                            <br>
                        <a title="最热视频7">最热视频7</a>
                    </div>
                </div> 
            </div>    
            <div class="bottom">   
                <div class="bottom-line1">
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="100" width="200" alt="最热视频8"/>
                        </a>
                            <br>
                        <a title="最热视频8">最热视频8</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="100" width="200" alt="最热视频9"/>
                        </a>
                            <br>
                        <a title="最热视频9">最热视频9</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="100" width="200" alt="最热视频10"/>
                        </a>
                            <br>
                        <a title="最热视频10">最热视频10</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="100" width="200" alt="最热视频11"/>
                        </a>
                            <br>
                        <a title="最热视频11">最热视频11</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="100" width="200" alt="最热视频12"/>
                        </a>
                            <br>
                        <a title="最热视频12">最热视频12</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import test1 from "@/assets/test.png";
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
.hot-part{
    /*margin-top:30px;*/
	position: absolute;
	top:100px;
}
.hot-list-top:after{
    content:"";
    display:block;
    clear:both;
}
.hot-name{
    font-size: 50px;
}
.hot-header{
    margin-left: 10px;
}
.top-left{
    float:left;
    margin-left: 50px;
}
.bottom{
    float:left;
}
.normal-item{
    float:left;
    border:200px;
    margin-left: 50px;
}
.top-right{
    float:right;
    margin-right: 270px;
}
</style>