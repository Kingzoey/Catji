<template>
    <div class="TagList">
        <div class="tag">
            <div class="rectangle1"></div>
            <span class="TagWords">“</span>
            <span class="TagWords">橘猫</span>
            <span class="TagWords">”</span>

        </div>
        <br>
        <div class="tag">
            <div class="rectangle2"></div>
            <span class="TagWords">  “</span>
            <span class="TagWords">哆啦a梦</span>
            <span class="TagWords">”</span>
        </div>
        <br>
        <div class="tag">
            <div class="rectangle3"></div>
            <span class="TagWords">  “</span>
            <span class="TagWords">橘猫123122131231231233</span>
            <span class="TagWords">”</span>
        </div>
    </div>
</template>

<style>
.TagList
{
    float: left;
    font-size: 20px;
}
.tag
{
    margin-top:20px;
    border:0.5px solid grey;
    padding:10px 10px;
    border-radius: 15px;
    display: inline-block;
    
}

.rectangle1
{
    margin-top:10px;
    margin-right: 10px;
    float: left;
    width:15px;
    height:15px;
    background:blue;
}
.rectangle2
{
    margin-top:10px;
    margin-right: 10px;
    float: left;
    width:15px;
    height:15px;
    background:orange;
}
.rectangle3
{
    margin-top:10px;
    margin-right: 10px;
    float: left;
    width:15px;
    height:15px;
    background:green;
}

</style>