<template>
    <div class="MineInfo">
        <form method="post" name="form1">
            <li class="user">
                <div class="item_bock head_p">
                    <div class="head_img">
                        <img :src="test1" width="30" height="30"/>
                    </div>
                    <div class="setting_right" @click="uploadHeadImg">
                        <div class="caption">更改头像</div>
                    </div>
                    <input type="file" accept="image/jpg" @change="handleFile(this)" class="hiddenInput"/>
                </div>
            </li>
            <li class="user">
                <label for="username">昵称：</label>
                <textarea class="username" placeholder="王二狗子" rows="1" type="textarea" validateevent="true"></textarea>
            </li>
            <li class="user">
                <label for="sex">性别：</label>
                <select name="sex">
                    <option value="male">男</option>
                    <option value="female">女</option>
                    <option value="secret">保密</option>
                </select>
            </li>
            <li class="user">
                <label for="signal">个性签名：</label>
                <textarea class="signal" placeholder="设置您的签名" rows="2" autocomplete="off" type="textarea" validateevent="true"></textarea>
            </li>
            <br>
            <li class="user">
                <label for="birthday">出生日期：</label>
                <textarea class="birthday" placeholder="2000-01-01" rows="1" type="textarea" validateevent="true"></textarea>
            </li>
            <li class="user emailclass">
                <label for="email">邮箱：</label>
                <textarea class="email" placeholder="xxxx@xxx.xxx" rows="1" type="textarea" validateevent="true"></textarea>
            </li>
            <li class="save">
                <button>保存</button>
            </li>
        </form>
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
    },
    
    methods: {
    // 打开图片上传
    uploadHeadImg: function () {
        this.$el.querySelector('.hiddenInput').click()
    },
    // 将头像显示
    handleFile: function (e) {
        let $target = e.target || e.srcElement
        let file = $target.files[0]
        var reader = new FileReader()
        reader.onload = (data) => {
            let res = data.target || data.srcElement
            this.userInfo.avatar = res.result
        }
        reader.readAsDataURL(file)
    },
  }
}
</script>

<style>
*
{
    list-style: none;
}
.item_bock {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height:94px;
  width: 300px;
  padding:0px 24px 0px 38px;
  border-bottom: 1px solid #f7f7f7;
  background: #fff;
}
.head_p {
  height:132px;
}
.head_img{
  height: 90px;
}
.head_img img{
  width:90px;
  height:90px;
  border-radius:50px
}
.setting_right{
  display: flex;
  height: 37px;
  justify-content: flex-end;
  align-items: center;
}
.hiddenInput{
  display: none;
}
.caption {
  color: #8F8F8F;
  font-size: 26px;
  height: 37px;
}
.user label
{
    width: 90px;
    margin-right: 20px;
    margin-bottom: 20px;
	display: inline-block;
	width: 100px;
	height: 30px;
	text-align: right;
	font-size: 14px;
}
.user textarea
{
	width: 250px;
    outline: none;
}
.signal
{
    width: 618px;
    height: 88px;
    resize: none;
    vertical-align:text-top;
}
.emailclass
{
    margin-left: 195px;
}
.save button
{
	display: block;
	width: 150px;
	height: 30px;
	background-color: pink;
	margin: 25px 145px;
	color: #fff;
	text-align: center;
	border: none;
	outline: none;
}
.save
{
    margin-left: 200px;
}

</style>