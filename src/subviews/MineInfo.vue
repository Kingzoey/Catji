<template>
  <div class="mine-Info">
    <el-form label-width="100px">
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
        <el-input auto-complete="false" v-model="form.nickname" placeholder="请输入用户昵称"></el-input>
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
        <el-input
          auto-complete="false"
          v-model="form.signature"
          placeholder="请输入签名"
          type="textarea"
          :rows="2"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <template slot="label">
          <font-awesome-icon :icon="['fas', 'birthday-cake']" />&nbsp;生日
        </template>
        <el-date-picker v-model="form.birthday" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <!-- <el-form-item>
        <template slot="label">
          <font-awesome-icon :icon="['fas', 'at']" />&nbsp;邮箱
        </template>
        <el-input auto-complete="false" v-model="form.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>-->
      <el-form-item>
        <template slot="label">
          <font-awesome-icon :icon="['fas', 'cat']" />&nbsp;关联
        </template>
        <el-select
          v-model="form.cat_id"
          filterable
          remote
          :disabled="form.cat_id"
          placeholder="请输入猫咪名字"
          :remote-method="getCatList"
          :loading="loading"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <template slot="label">
          <font-awesome-icon :icon="['fas', 'key']" />&nbsp;密码
        </template>
        <el-input auto-complete="false" v-model="form.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">更新个人信息</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { updateInfo, searchCatByName } from "../api";
export default {
  name: "Middle",
  inject: ["reload"],
  async mounted() {
    // let usid;
    // if (this.$route.params.usid) {
    //   usid = Number.parseInt(this.$route.params.usid);
    // } else if (this.$store.state.user.usid) {
    //   usid = this.$store.state.user.usid;
    // } else {
    //   this.$message.error("用户信息有误");
    //   return;
    // }

    this.$store.commit("cacheGetMineInfo", {
      onSuccess: (me) => {
        this.form = me;
        this.pic = me.avatar;
        this.origin = JSON.stringify(me);
      },
      onFailed: (e) => {
        this.$message.error("网络错误: " + e.response.data.status);
      },
    });
    return;
  },
  data() {
    return {
      origin: "",
      form: {},
      pic: "", // 预览用
      cat_name: "",
      loading: false,
      options: [],
    };
  },

  methods: {
    // 打开图片上传
    uploadHeadImg() {
      this.$el.querySelector(".hiddenInput").click();
    },
    // 将头像显示
    handleChange(e) {
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      this.preview(file);
      this.form.avatar = file;
    },
    preview(file) {
      var reader = new FileReader();
      reader.onload = (ev) => {
        let res = ev.target || ev.srcElement;
        this.pic = res.result;
      };
      reader.readAsDataURL(file);
    },
    async onSubmit() {
      let diff = {};
      let origin = JSON.parse(this.origin);
      origin.birthday = new Date(origin.birthday);

      for (const key in this.form) {
        let oldValue = origin[key];
        let newValue = this.form[key];
        if (oldValue instanceof Date) {
          if (+newValue !== +oldValue) {
            diff[key] = newValue;
          }
        } else if (newValue !== oldValue) {
          diff[key] = newValue;
        }
      }

      if (Object.entries(diff).length === 0) {
        this.$message.info("没有要更新的内容");
        return;
      }

      try {
        let res = await updateInfo(diff);
        res = res.data;
        if (res.status === "ok") {
          this.$message.info("更新完成");
          this.reload();
        } else {
          this.$message.error("网络错误: " + res.status);
        }
      } catch (e) {
        this.$message.error("网络错误: " + e.response.data.status);
      }
    },
    onReset() {
      this.form = JSON.parse(this.origin);
      this.pic = this.form.avatar;
    },
    getCatList(query) {
      searchCatByName(query).then((res) => {
        res = res.data;
        this.options = res.data.map((item) => ({
          value: item.cat_id,
          label: item.name,
        }));
      });
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