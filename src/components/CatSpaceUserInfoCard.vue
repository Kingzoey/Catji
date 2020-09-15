<template>
  <div class="content" style>
    <div class="user-pic"></div>
    <div class="name-test">
      <router-link
        class="user-name tc-black c-pointer"
        :to="'/space/' + user.usid"
      >{{user.nickname}}</router-link>
    </div>
    <div class="bottom">
      <router-link class="number-part c-pointer f-left" :to="'/space/' + user.usid + '/fol'">
        <p class="numbersa fs-14">{{user.followee_num}}</p>
        <span class="icon-info-a">
          <font-awesome-icon :icon="['fas', 'heart']" />&nbsp;
        </span>
        <p class="texta tc-slate fs-12 ls-0">关注</p>
      </router-link>
      <router-link class="number-part c-pointer f-left" :to="'/space/' + user.usid + '/fan'">
        <p class="numbersb fs-14">{{user.follower_num}}</p>
        <span class="icon-info-b">
          <font-awesome-icon :icon="['fas', 'heart']" />&nbsp;
        </span>
        <p class="textb tc-slate fs-12 ls-0">粉丝</p>
      </router-link>
      <router-link class="number-part c-pointer f-left" :to="'/space/' + user.usid + '/upload'">
        <p class="numbersc fs-14">{{user.upload_num}}</p>
        <span class="icon-info-c">
          <font-awesome-icon :icon="['fas', 'blog']" />&nbsp;
        </span>
        <p class="textc tc-slate fs-12 ls-0">动态</p>
      </router-link>
    </div>
    <img :src="user.avatar" class="user-head c-pointer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        usid: 0,
        nickname: "获取中...",
        avatar: "",
        followee_num: 0,
        follower_num: 0,
        upload_num: 0,
      },
    };
  },
  mounted() {
    var usid = this.$store.state.user.usid;
    if (!usid) {
      this.$message.error("用户未登录");
      return;
    }
    this.$store.commit("cacheGetMineInfo", {
      onSuccess: (res) => {
        this.user = { ...res };
        console.log(res);
      },
    });
  },
};
</script>

<style scoped>
.icon-info-a {
  color: pink;
}

.icon-info-b {
  color: cornflowerblue;
}

.icon-info-c {
  color: orange;
}

.content {
  width: 244px;
  height: 220px;
  position: relative;
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
}

.content .user-pic {
  width: 244px;
  height: 64px;
  background: center/cover no-repeat;
  background-image: url(../assets/userinfo4.png);
}

.content .user-name {
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0;
  margin-left: 80px;
  padding-top: 10px;
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
}

.name-test :hover {
  color: pink;
}

.content .user-name :hover {
  color: pink;
}

.content .bottom {
  width: 192px;
  height: 92px;
  margin: 0 26px 0 26px;
}

.content .bottom .number-part {
  width: calc(100% / 3);
  height: 92px;
  text-align: center;
}

.content .bottom .number-part .texta {
  font-size: 14px;
  color: #99a2aa;
  padding-top: 0px;
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
}

.content .bottom .number-part .textb {
  font-size: 14px;
  color: #99a2aa;
  padding-top: 0px;
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
}

.content .bottom .number-part .textc {
  font-size: 14px;
  color: #99a2aa;
  padding-top: 0px;
  font-family: Michroma, "Segoe UI Light", "Segoe UI", "Segoe UI WP",
    "Microsoft Jhenghei", "微软雅黑", sans-serif, Times;
}

.content .bottom .number-part .numbersa {
  font-size: 16px;
  letter-spacing: 0;
  padding-top: 12px;
  font-weight: bold;
  line-height: 19px;
  color: #222;
}

.content .bottom .number-part .numbersb {
  font-size: 16px;
  letter-spacing: 0;
  padding-top: 12px;
  font-weight: bold;
  line-height: 19px;
  color: #222;
}

.content .bottom .number-part .numbersc {
  font-size: 16px;
  letter-spacing: 0;
  padding-top: 12px;
  font-weight: bold;
  line-height: 19px;
  color: #222;
}

.content .bottom .number-part .numbersa:hover {
  color: pink;
}

.content .bottom .number-part .numbersb:hover {
  color: cornflowerblue;
}

.content .bottom .number-part .numbersc:hover {
  color: orange;
}

.content .bottom .number-part .texta:hover {
  color: pink;
}

.content .bottom .number-part .textb:hover {
  color: cornflowerblue;
}

.content .bottom .number-part .textc:hover {
  color: orange;
}

.content .user-head {
  position: absolute;
  width: 56px;
  height: 56px;
  left: 16px;
  top: 54px;
  border-radius: 50%;
  overflow: hidden;
}

.c-pointer {
  cursor: pointer;
}

.f-left {
  float: left;
}

.fs-14 {
  font-size: 14px;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.tc-slate {
  color: #99a2aa;
}

.fs-12 {
  font-size: 12px;
}

.ls-0 {
  letter-spacing: 0;
}
</style>
