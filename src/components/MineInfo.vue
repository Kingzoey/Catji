<template>
    <div class="MineInfo">
        <form method="post" name="form1">
            <li class="user">
                <label for="username">昵称：</label>
                <input type="text" id="username" name="username">
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
            <li class="user">
                <label for="birthday">出生日期：</label>
                <textarea class="birthday" placeholder="2000-01-01" rows="1" type="textarea" validateevent="true"></textarea>
            </li>
            <li class="save">
                <button>保存</button>
            </li>
        </form>
    </div>
</template>

<style>
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
.user input
{
    border: 1px solid black;
	width: 250px;
	padding-left: 10px;
    outline: none;
}
.signal
{
    width: 618px;
    height: 88px;
    resize: none;
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