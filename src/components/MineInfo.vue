<template>
  <div class="MineInfo">
    <form method="post" name="form1">
      <li class="user">
        <div class="item_bock head_p">
          <div class="head_img">
            <!--<img :src="this.$store.state.user.avatar" width="30" height="30" /><-->
			<img :src="displayUser.avatar" width="30" height="30" />
          </div>
          <div class="setting_right" @click="uploadHeadImg">
            <div class="caption">更改头像</div>
          </div>
          <input type="file" accept="image/*" @change="handleFile" class="hiddenInput" />
        </div>
      </li>
      <br />
      <li class="user">
        <font-awesome-icon :icon="['fas', 'user']" />&nbsp;
        <label for="username">昵称：</label>
        <textarea class="username" :placeholder="displayUser.nickname" rows="1" type="textarea" validateevent="true"></textarea>
      </li>
      <li class="user">
        <font-awesome-icon :icon="['fas', 'venus-mars']" />
        <label for="sex">性别：</label>
        <!--
        <select name="sex">
          <option value="male">男</option>
          <option value="female">女</option>
          <option value="secret">保密</option>
        
        </select>
        -->
        <div class="el-radio-group" style="display: inline-block;">
          <label class="el-radio-button">
            <input type="radio" class="el-radio-button__orig-radio" value="男" name="gender" />
            <span class="el-radio-button__inner">
              男
              <font-awesome-icon :icon="['fas', 'mars']" />
            </span>
          </label>
          <label class="el-radio-button">
            <input type="radio" class="el-radio-button__orig-radio" value="女" name="gender" />
            <span class="el-radio-button__inner">
              女
              <font-awesome-icon :icon="['fas', 'venus']" />
            </span>
          </label>
          <label class="el-radio-button">
            <input type="radio" class="el-radio-button__orig-radio" value="保密" name="gender" />
            <span class="el-radio-button__inner">
              密
              <font-awesome-icon :icon="['fas', 'mask']" />
            </span>
          </label>
        </div>
      </li>
      <li class="user">
        <font-awesome-icon :icon="['fas', 'pen']" />&nbsp;
        <label for="signal">签名：</label>
        <textarea
          class="signal"
          :placeholder="displayUser.signature"
          rows="2"
          autocomplete="off"
          type="textarea"
          validateevent="true"
        ></textarea>
      </li>
      <li class="user birthclass">
        <font-awesome-icon :icon="['fas', 'birthday-cake']" />&nbsp;&nbsp;
        <label for="birthday">生日：</label>
        <textarea
          class="birthday"
          :placeholder="displayUser.birthday"
          rows="1"
          type="textarea"
          validateevent="true"
        ></textarea>
      </li>
      <li class="user emailclass">
        <font-awesome-icon :icon="['fas', 'at']" />&nbsp;
        <label for="email">邮箱：</label>
        <textarea
          class="email"
          :placeholder="displayUser.email"
          rows="1"
          type="textarea"
          validateevent="true"
        ></textarea>
      </li>
      <li class="save">
        <button>保存</button>
      </li>
    </form>
  </div>
</template>

<script>
import { userInfo } from "../api";
export default {
  name: "Middle",
  async beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
    let usid;
    if (this.$route.params.usid) {
      usid = this.$route.params.usid;
    } else if (this.$store.state.user.usid) {
      usid = this.$store.state.user.usid;
    } else {
      this.$message.error("用户信息有误");
      return;
    }
    try {
      let res = await userInfo(usid);
      res = res.data;
      if (res.status == "ok") {
        this.displayUser = { ...res.data };
      }
    } catch (e) {
      this.$message.error("网络错误: " + e.response.data.status);
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      displayUser: {
        usid: 0,
        nickname: "获取中",
        avatar: "",
        birthday:"获取中" ,
		signature: "获取中",
		email: "获取中",
      },
    };
  },

  methods: {
    // 打开图片上传
    uploadHeadImg: function () {
      this.$el.querySelector(".hiddenInput").click();
    },
    // 将头像显示
    handleFile: function (e) {
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      var reader = new FileReader();
      reader.onload = (data) => {
        let res = data.target || data.srcElement;
        this.userInfo.avatar = res.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style scoped>
* {
  list-style: none;
}

.MineInfo {
  margin-top: 50px;
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
  font-size: 18px;
}

.item_bock {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 94px;
  width: 300px;
  padding: 0px 24px 0px 38px;
  border-bottom: 1px solid #f7f7f7;
  background: #fff;
}
.head_p {
  height: 132px;
}
.head_img {
  height: 90px;
}
.head_img img {
  width: 90px;
  height: 90px;
  border-radius: 50px;
}
.setting_right {
  display: flex;
  height: 37px;
  justify-content: flex-end;
  align-items: center;
}
.hiddenInput {
  display: none;
}
.caption {
  color: #8f8f8f;
  font-size: 26px;
  height: 37px;
}
.user label {
  width: 90px;
  margin-right: 20px;
  margin-bottom: 20px;
  display: inline-block;
  width: 85px;
  height: 30px;
  text-align: right;
  font-size: 18px;
}
.user textarea {
  width: 250px;
  outline: none;
}
.username {
  width: 618px;
  height: 28px;
  resize: none;
  vertical-align: text-top;
  padding: 5px 7px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.birthday {
  width: 618px;
  height: 28px;
  resize: none;
  vertical-align: text-top;
  padding: 5px 7px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.email {
  width: 618px;
  height: 28px;
  resize: none;
  vertical-align: text-top;
  padding: 5px 7px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.signal {
  width: 618px;
  height: 28px;
  resize: none;
  vertical-align: text-top;
  padding: 5px 7px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.user {
  margin-left: 50px;
}

.birthclass {
  margin-left: 50px;
}
.emailclass {
  margin-left: 50px;
}
.save button {
  display: block;
  width: 150px;
  height: 30px;
  background-color: #fb7299;
  margin: 25px 145px;
  color: #fff;
  text-align: center;
  border: none;
  outline: none;
}
.caption button {
  display: block;
  width: 150px;
  height: 30px;
  background-color: #fb7299;
  margin: 25px 145px;
  color: #fff;
  text-align: center;
  border: none;
  outline: none;
}
.caption :hover {
  color: pink;
}
.save {
  margin-left: 200px;
}
</style>