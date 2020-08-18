<template>
    <div class="new-part">
        <header class="new-header">
            <span class="new-name">最新</span>
        </header>
        <div class="new-list-top">
            <div class="top-left">
               <div class="big-item">
                    <a class="cover" newhref="#" target="_blank">
                        <img :src="test1" height="208" width="400" alt="最新视频1"/>
                    </a>
                     <br>
                    <a title="最新视频1">最新视频1</a>
                </div>
            </div>
            <div class="top-right">
               <div class="top-right-line1">
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="最新视频2"/>
                        </a>
                        <br>
                        <a title="最新视频2">最新视频2</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="最新视频3"/>
                        </a>
                            <br>
                        <a title="最新视频3">最新视频3</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="最新视频4"/>
                        </a>
                            <br>
                        <a title="最新视频4">最新视频4</a>
                    </div>
                </div>
                <div class="top-right-line2">
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="最新视频5"/>
                        </a>
                        <br>
                        <a title="最新视频5">最新视频5</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="最新视频6"/>
                        </a>
                            <br>
                        <a title="最新视频6">最新视频6</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="最新视频7"/>
                        </a>
                            <br>
                        <a title="最新视频7">最新视频7</a>
                    </div>
                </div> 
            </div>    
            <div class="bottom">   
                <div class="bottom-line1">
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="最新视频8"/>
                        </a>
                            <br>
                        <a title="最新视频8">最新视频8</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="最新视频9"/>
                        </a>
                            <br>
                        <a title="最新视频9">最新视频9</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="最新视频10"/>
                        </a>
                            <br>
                        <a title="最新视频10">最新视频10</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="最新视频11"/>
                        </a>
                            <br>
                        <a title="最新视频11">最新视频11</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="最新视频12"/>
                        </a>
                            <br>
                        <a title="最新视频12">最新视频12</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import test1 from "@/assets/test.png";
export default {
    name: "Middle2",
    data() {
        return {
            test1: test1,
        };
  }
}
</script>

<style>
.new-part{
	position: absolute;
	top:900px;
}
.new-list-top:after{
    content:"";
    display:block;
    clear:both;
}
.new-list-top{
    white-space: nowrap;
}
.new-name{
    font-size: 50px;
}
.new-header{
    margin-left: 10px;
}
.top-left{
    margin-left: 50px;
    display: inline-block;
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
   display: inline-block;
    margin-right: 270px;
}
</style>