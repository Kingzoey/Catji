<template>
    <div class="TagList">
        <div class="tag">
            
            <div class="rectangle1"></div>
            <span class="TagWords">橘猫</span>
        </div>
        <div class="tag">
            <div class="rectangle2"></div>
            <span class="TagWords">橘猫</span>
        </div>
        <div class="tag">
            <div class="rectangle3"></div>
            <span class="TagWords">橘猫</span>
        </div>
    </div>
</template>

<style>
.TagList
{
    float: left;
    font-size: 30px;
}
.tag
{
    margin-top:20px;
    border:0.5px solid grey;
    border-spacing: 10px 10px ;
    border-radius: 15px;
    
}

.rectangle1
{
    margin-top:10px;
    float: left;
    width:30px;
    height:30px;
    background:blue;
}
.rectangle2
{
    margin-top:10px;
    float: left;
    width:30px;
    height:30px;
    background:orange;
}
.rectangle3
{
    margin-top:10px;
    float: left;
    width:30px;
    height:30px;
    background:green;
}
.TagWords1
{
    float: left;
}
</style>