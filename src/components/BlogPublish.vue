<template>
<div class="box">
    <div class="text" contenteditable="true"></div>
    <input class="btn" type="button" value="发布">
    <ul class="list"></ul>
    <div class="imgBox">
        <ul class="imgList">
            <li><img src="../img/01.gif"></li>
            <li><img src="../img/02.gif"></li>
            <li><img src="../img/03.gif"></li>
            <li><img src="../img/04.gif"></li>
            <li><img src="../img/05.gif"></li>
            <li><img src="../img/06.gif"></li>
            <li><img src="../img/07.gif"></li>
            <li><img src="../img/08.gif"></li>
            <li><img src="../img/09.gif"></li>
            <li><img src="../img/10.gif"></li>
            <li><img src="../img/11.gif"></li>
            <li><img src="../img/12.gif"></li>
            <li><img src="../img/01.gif"></li>
            <li><img src="../img/02.gif"></li>
            <li><img src="../img/03.gif"></li>
            <li><img src="../img/04.gif"></li>
            <li><img src="../img/05.gif"></li>
            <li><img src="../img/06.gif"></li>
            <li><img src="../img/07.gif"></li>
            <li><img src="../img/08.gif"></li>
            <li><img src="../img/09.gif"></li>
            <li><img src="../img/10.gif"></li>
            <li><img src="../img/11.gif"></li>
            <li><img src="../img/12.gif"></li>
        </ul>
    </div>
</div>
</template>

<script>
 var txt = document.querySelector(".text");
    var btn = document.querySelector(".btn");
    var list = document.querySelector(".box .list");
    var imgBox = document.querySelector(".imgBox");
    var imgList = document.querySelector(".imgList");

    //程序一开始便要渲染一次，为了将以前的内容，也就是缓存中的内容呈现在界面上
    view();

    //发布消息函数
    function send() {
        //保存输入框中的内容
        var txtValue = txt.innerHTML;
        //获取当前时间毫秒值，后面用此赋值给id,确保了id的唯一性
        var time = +new Date();
        if (txtValue.length===0){
            alert("不能发送空消息")
        }else if (txtValue.length>120){
            alert("消息过长")
        }else {
            /*
            * 发布消息也就是将text中的得到的内容存入缓存
            * 再从缓存中抽取内容在页面中呈现的过程
            * */
            //获取缓存内容
            var arr = getContent();
            //在该数组中存入text中输入的内容
            arr.unshift({content:txtValue,id:time});
            //将该数组重新存入缓存中
            saveLocal(arr);
            //删除界面原本的内容
            deletView();
            //渲染界面
            view();
            //保证获取text的内容后,输入框清空
            txt.innerHTML="";
        }
    }

    //发布按钮的检测（点击发布按钮或者回车都可以发布消息）
    btn.onclick=send;
    txt.onkeyup=function (ev) {
        if (ev.keyCode===13){
            send();
        }
    };

    //编辑界面内容
    /*
    * 检测是否点击了界面上的list
    * */
    list.onclick=function (ev) {
       //检测是否点击了list里面的A标签,点击了便执行删除缓存内容
        if (ev.target.nodeName==="A"){
            //在删除缓存函数里面会调用删除界面内容函数
            deletLocal(ev.target);
            //检测是否点击list里面的div标签,触发编辑功能
        }else if (ev.target.nodeName==="DIV"){
            //改变界面的div,设置div为可编辑模式
            ev.target.setAttribute("contenteditable","true");
            //自动获取焦点
            ev.target.focus();
            //当失去焦点的时候,关闭div可编辑功能,达到对内容编辑的效果
            ev.target.onblur=function () {
                ev.target.setAttribute("contenteditable","false");
                //调用-编辑本地缓存函数  传入当前点击的标签
                //当界面内容发生改变，就将改变后的内容存入缓存（页面渲染时是从缓存中抽取内容的）
                changeLocal(ev.target);
            };

        }
    };

    //编辑本地缓存内容
    function changeLocal(target){
        //调用-获取缓存内容函数
        var a1 = getContent();
        /*
        * 保存当前标签的className
        *    （改变缓存内容时，用标签的className与缓存id进行对比，找到对应目标后进行修改）
        *     class设置时使用的是id（唯一的）
        * */
        var className = target.className;
        //遍历得到的缓存数组
        a1.forEach(function (item) {
            if(className == item.id){
                //找到id相同的便将缓存的值重新赋值
                item.content = target.innerHTML;
            }
            //将改变后的数组赋值给缓存（会自动覆盖原本缓存中的数据）
            saveLocal(a1);
            //删除原本界面上的内容，否则会重复
            deletView();
            //删除原本界面上的内容后，将界面重新渲染一次（类似于刷新），将缓存中的内容，再一次呈现的界面上
            view();
        })
    }

    //表情发送
    imgBox.onclick=function (ev) {
        //当表情按键被点击，弹出表情选择框
        imgList.style.display="block";
        if (ev.target.nodeName==="IMG"){//如果用户点击的是图片
            //1、把用户点击的图片克隆一份
            var newImg = ev.target.cloneNode();
            //2、将克隆好的图片添加到div中
            txt.appendChild(newImg);
            //3、将图片盒子消失
            imgList.style.display="none";

        }
    };

    //获取本地缓存数据
    function getContent() {

        /*
        * setItem(key,JSON.stringify(arr))
        * getItem(key)
        * */
        var str = localStorage.getItem("newArr");
        if(str === null){
            return [];
        }else {
            return JSON.parse(str);
        }
    }

    //渲染界面
    function view() {
        var contentArr = getContent();
        console.log(contentArr);
        contentArr.forEach(function (item) {
            var li = document.createElement("li");
            li.innerHTML = "<div class='"+item.id+"' contenteditable='false'>"+item.content+"</div>"+"<a id='"+item.id+"' href='#'>删除</a>";
            list.appendChild(li);
        });
    }

    //存储本地数据
    function saveLocal(arr) {
        localStorage.setItem("newArr",JSON.stringify(arr));
    }

    //删除界面ul内的li
    function deletView() {
        var len = list.children.length;
        for(var i=len-1;i>=0;i--){
            list.removeChild(list.children[i]);
        }
    }

    //删除缓存里面的数据(
    // 1.使用被点击的删除标签的id 和 缓存数组的id进行比较,
    // 2.把id相同的缓存数组元素删除,
    // 3.再把执行了删除操作后的数组重新保存在缓存中)
    // 4.删除界面本来的内容
    // 5.重新渲染界面
    function deletLocal(target) {
        var conArr = getContent();
        var id = target.id;

        conArr.forEach(function (item,index) {
            if(item.id == id){
                conArr.splice(index,1);
            }
        });
        saveLocal(conArr);
        deletView();
        view();
    }
</script>

<style scoped>
*{
            margin: 0;
            padding: 0;
        }
        .box{
            width: 660px;
            height: 600px;
            border: 1px #ccc solid;
            margin: 50px auto;
            padding: 0 20px;
            position: relative;
        }
        .box .text{
            width: 660px;
            height: 200px;
            resize: none;
            margin: 20px 0;
            outline-color: orange;
            border: 1px #ccc solid;
        }
        .box .btn{
            width: 100px;
            height: 50px;
            background-color: orange;
            border: none;
            outline: none;
            font-size: 20px;
            color: white;
            border-radius: 5px;
        }
        .box .list li{
            list-style: none;
            overflow: hidden;/*清除浮动*/
            border-bottom: 1px #ccc dashed;
            font-size: 20px;
        }
        .list li div{
            float: left;
            line-height: 40px;
            outline: none;
        }
        .list li a{
            float: none;
            color: black;
            text-decoration: none;
            display: inline-block;
            line-height: 40px;
        }
        input{
            width: 600px;
            height: 40px;
            border: none;
            outline: none;
            font-size: 20px;
        }
        .imgBox{
            width: 22px;
            height: 22px;
            background: url("../img/04.gif") no-repeat;
            position: absolute;
            top: 250px;
            left: 150px;
            outline: none;
        }
        .imgBox .imgList{
            width: 300px;
            height: 75px;
            border: 1px #ccc solid;
            position: absolute;
            top: -75px;
            left: 12px;
            background: rgba(255,165,0,.3);
            display: none;
        }
        .imgBox .imgList li{
            list-style: none;
            float: left;
            margin-right: 5px;
            cursor: pointer;
        }
</style>