<template>
    <div class="tag-part">
        <header class="tag-header">
            <span class="tag-name">标签</span>
        </header>
        <div class="tag-list-top">
            <div class="top-left">
               <div class="big-item">
                    <a class="cover" newhref="#" target="_blank">
                        <img :src="test1" height="208" width="400" alt="标签1"/>
                    </a>
                     <br>
                    <a title="标签1">标签1</a>
                </div>
            </div>
            <div class="top-right">
               <div class="top-right-line1">
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="标签2"/>
                        </a>
                        <br>
                        <a title="标签2">标签2</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="标签3"/>
                        </a>
                            <br>
                        <a title="标签3">标签3</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="标签4"/>
                        </a>
                            <br>
                        <a title="标签4">标签4</a>
                    </div>
                </div>
                <div class="top-right-line2">
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="标签5"/>
                        </a>
                        <br>
                        <a title="标签5">标签5</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="标签6"/>
                        </a>
                            <br>
                        <a title="标签6">标签6</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="标签7"/>
                        </a>
                            <br>
                        <a title="标签7">标签7</a>
                    </div>
                </div> 
            </div>    
            <div class="bottom">   
                <div class="bottom-line1">
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="标签8"/>
                        </a>
                            <br>
                        <a title="标签">标签8</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="标签9"/>
                        </a>
                            <br>
                        <a title="标签9">标签9</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="标签10"/>
                        </a>
                            <br>
                        <a title="标签10">标签10</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="标签11"/>
                        </a>
                            <br>
                        <a title="标签11">标签11</a>
                    </div>
                    <div class="normal-item">
                        <a class="cover" href="#" target="_blank">
                            <img :src="test1" height="90" width="175" alt="标签12"/>
                        </a>
                            <br>
                        <a title="标签12">标签12</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import test1 from "@/assets/test.png";
export default {
    name: "Middle3",
    data() {
        return {
            test1: test1,
        };
  }
}
</script>

<style>
.tag-part{
	position: absolute;
	top:1650px;
}
.tag-list-top:after{
    content:"";
    display:block;
    clear:both;
}
.tag-list-top{
    white-space: nowrap;
}
.tag-name{
    font-size: 50px;
}
.tag-header{
    margin-left: 10px;
}
.top-left{
    display: inline-block;
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
    display: inline-block;
    margin-right: 270px;
}
</style>