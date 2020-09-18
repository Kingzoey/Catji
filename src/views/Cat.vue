<template>
  <div class="cat">
    <NavBar />
    <div class="container">
      <div class="intro">
        <div class="intro-mid">
          <div class="pic">
            <img :src="pic" width="300" height="300" @click="uploadHeadImg" />
            <input
              type="file"
              accept="image/*"
              @change="handleChange"
              style="display:none;"
              class="hiddenInput"
            />
          </div>
          <div class="info">
            <div class="name">
              <span @click="editing1=true" v-if="!editing1">{{cat.name}}</span>
              <el-input v-else @blur="editing1=false" v-model="cat.name"></el-input>
              <el-button
                type="primary"
                size="medium"
                @click="toUserSpace"
                style="margin-left:8px;"
              >猫咪账号</el-button>
            </div>
            <p @click="editing=true" v-if="!editing" style="font-size:16pt;">{{cat.description}}</p>
            <el-input v-else @blur="editing=false" v-model="cat.description"></el-input>
            <el-button
              type="primary"
              @click="onSubmit"
              style="bottom: -180px;position: relative;"
              v-if="this.$store.state.user.hasOwnProperty('usid') && this.$store.state.user.usid == cat.usid"
            >更新信息</el-button>
            <el-button
              @click="onReset"
              style="bottom: -180px;position: relative;"
              v-if="this.$store.state.user.hasOwnProperty('usid') && this.$store.state.user.usid == cat.usid"
            >重置</el-button>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="nav">
          <ul class="nav-switch">
            <li
              v-for="(item, index) in tabs"
              :key="item.name"
              class="nav-switch-item"
              :class="{on : on == index}"
              @click="on = index"
              @mouseenter="hover = index"
              @mouseleave="hover = on"
            >{{item.name}}</li>
            <li class="nav-switch-anchor" :style="{transform: 'translateX('+anthorx+'px)'}" />
          </ul>
        </div>
        <component :is="tabs[on].component" :cat_id="cat_id" :usid="cat.usid"></component>
      </div>
      <br />
    </div>
    <br />
  </div>
</template>

<script>
import { catInfo, updateCatInfo } from "../api";
import NavBar from "@/components/NavBar.vue";
import SearchResultVideo from "@/components/SearchResultVideo.vue";
import CatBlog from "@/components/CatBlog.vue";
import CatIntroduction from "@/components/CatIntroduction.vue";
export default {
  inject: ["reload"],
  created() {
    this.cat_id = this.$route.params.cat_id;
  },
  methods: {
    toUserSpace() {
      this.$router.push({ path: "/space/" + this.cat.usid });
    },
    uploadHeadImg() {
      this.$el.querySelector(".hiddenInput").click();
    },
    handleChange(e) {
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      this.preview(file);
      this.cat.banner = file;
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

      for (const key in this.cat) {
        let oldValue = origin[key];
        let newValue = this.cat[key];
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
        let res = await updateCatInfo(diff);
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
      this.cat = JSON.parse(this.origin);
      this.previewPic = this.cat.banner;
    },
  },
  mounted() {
    this.hover = this.on;
    catInfo(this.cat_id)
      .then((res) => {
        this.cat = res.data.data;
        this.pic = this.cat.banner;
        this.origin = JSON.stringify(this.cat);
      })
      .catch((err) => {
        this.$message.error("网络错误: " + err.response.data.status);
      });
  },
  computed: {
    anthorx() {
      return 160 + this.hover * 400;
    },
  },
  data() {
    return {
      editing: false,
      editing1: false,
      cat_id: 0,
      pic: "",
      cat: {
        cat_id: 0,
        name: "获取中...",
        description: "获取中...",
        banner: "",
        usid: 0,
      },
      origin: "",
      on: 0,
      hover: 0,
      tabs: [
        {
          name: "猫咪介绍",
          component: CatIntroduction,
        },
        {
          name: "猫咪视频",
          component: SearchResultVideo,
        },
        {
          name: "猫咪动态",
          component: CatBlog,
        },
      ],
    };
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}

.name {
  font-size: 30px;
}

.nav-switch {
  position: relative;
}

.nav-switch-item {
  display: inline-block;
  height: 56px;
  line-height: 56px;
  width: 33.3%;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  border-bottom: 1px solid #ccd0d7;
}

.nav-switch-item:hover {
  color: #00a1d6;
}

.nav-switch-item.on {
  color: #00a1d6;
}

.nav-switch-anchor {
  background-color: #00a1d6;
  height: 2px;
  width: 80px;
  display: block;
  position: absolute;
  left: 0;
  top: 54px;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-property: width, height, transform;
  will-change: transform;
  pointer-events: none;
  transition-duration: 200ms;
}

.nav-wrap {
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-bottom: 18px;
}

.intro {
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.intro-mid {
  padding: 20px;
  background-color: rgb(134, 170, 238);
  border-color: rgb(134, 170, 238);
  border-radius: 8px;
  display: flex;
  justify-content: center;
}

.pic img {
  border-radius: 8px;
}

.info {
  margin-left: 30px;
  margin-right: 30px;
}

.body {
  margin-top: 20px;
}

.name {
  display: inline-block;
}
.name > * {
  vertical-align: middle;
}
</style>