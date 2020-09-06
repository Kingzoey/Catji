<template>
  <div class="mine-Info">
    <el-form ref="form" :model="form" label-width="100px">
      <div class="item_block head_p">
        <div class="head_img">
          <img :src="pic" width="30" height="30" />
        </div>
        <div class="setting_right" @click="uploadHeadImg">
          <span class="caption">更改头像</span>
        </div>
        <input type="file" accept="image/*" @change="handleChange" class="hiddenInput" />
      </div>
      <el-form-item>
        <template slot="label">
          <font-awesome-icon :icon="['fas', 'user']" />&nbsp;昵称
        </template>
        <el-input v-model="form.nickname" placeholder="请输入用户昵称"></el-input>
      </el-form-item>
      <el-form-item>
        <template slot="label">
          <font-awesome-icon :icon="['fas', 'venus-mars']" />&nbsp;性别
        </template>
        <el-select v-model="form.gender" placeholder="请选择性别">
          <el-option value="男">
            <font-awesome-icon :icon="['fas', 'mars']" />&nbsp;男
          </el-option>
          <el-option value="女">
            <font-awesome-icon :icon="['fas', 'venus']" />&nbsp;女
          </el-option>
          <el-option value="保密">
            <font-awesome-icon :icon="['fas', 'mask']" />&nbsp;保密
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <template slot="label">
          <font-awesome-icon :icon="['fas', 'pen']" />&nbsp;签名
        </template>
        <el-input v-model="form.signature" placeholder="请输入签名" type="textarea" :rows="2"></el-input>
      </el-form-item>
      <el-form-item>
        <template slot="label">
          <font-awesome-icon :icon="['fas', 'birthday-cake']" />&nbsp;生日
        </template>
        <el-date-picker v-model="form.birthday" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <template slot="label">
          <font-awesome-icon :icon="['fas', 'at']" />&nbsp;邮箱
        </template>
        <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item>
        <template slot="label">
          <font-awesome-icon :icon="['fas', 'key']" />&nbsp;密码
        </template>
        <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">更新个人信息</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { userInfo, updateInfo } from "../api";
export default {
  name: "Middle",
  async mounted() {
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
      if (res.status === "ok") {
        this.form = this.origin = {
          usid: res.data.usid,
          nickname: res.data.nickname,
          avatar: res.data.avatar,
          gender: res.data.gender,
          signature: res.data.signature,
          birthday: new Date(res.data.birthday * 1000),
          email: res.data.email,
        };
        this.pic = res.data.avatar;
      }
    } catch (e) {
      this.$message.error("网络错误: " + e.response.data.status);
    }
  },
  data() {
    return {
      origin: {},
      form: {},
      pic: "",
    };
  },

  methods: {
    // 打开图片上传
    uploadHeadImg() {
      this.$el.querySelector(".hiddenInput").click();
    },
    // 将头像显示
    handleChange(e) {
      console.log(e);
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      this.preview(file);
      this.form.avatar = file;
    },
    preview(file) {
      var reader = new FileReader();
      reader.onload = (ev) => {
        console.log(ev);
        let res = ev.target || ev.srcElement;
        this.pic = res.result;
      };
      reader.readAsDataURL(file);
    },
    async onSubmit() {
      try {
        let res = await updateInfo({
          avatar: this.form.avatar,
          usid: this.form.usid,
          nickname: this.form.nickname,
          gender: this.form.gender,
          signature: this.form.signature,
          birthday: Math.floor(this.form.birthday / 1000),
          email: this.form.email,
          password: this.form.password,
        });
        res = res.data;
        if (res.status === "ok") {
          this.origin = { ...this.form };
          this.$message.info("更新完成");
        } else {
          this.$message.error("网络错误: " + res.status);
        }
      } catch (e) {
        this.$message.error("网络错误: " + e.response.data.status);
      }
    },
    onReset() {
      this.form = { ...this.origin };
      this.pic = this.origin.avatar;
    },
  },
};
</script>

<style scoped>
.mine-Info {
  margin-top: 50px;
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
  font-size: 18px;
}

.item_block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 94px;
  width: 300px;
  padding: 0px 24px 0px 38px;
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

.caption :hover {
  color: pink;
}
</style>