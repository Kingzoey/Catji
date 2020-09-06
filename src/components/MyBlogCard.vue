<template>
  <div>
    <div class="card" v-for="blog in blogs" :key="blog.bid">
      <router-link
        :to="/space/ + blog.up.usid"
        :style="'background-image:url('+blog.up.avatar+')'"
        class="user-head c-pointer"
      ></router-link>
      <div class="main-content" style="padding-bottom: 0px;">
        <div class="user-name fs-16 ls-0 d-i-block">
          <router-link :to="/space/ + blog.up.usid" class="c-pointer">{{blog.up.name}}</router-link>
        </div>
        <div class="time fs-12 ls-0 tc-slate">
          <span class="detail-link tc-slate">{{blog.time}}</span>
        </div>
        <div class="delete" @click="deletemine(blog.bid)">
          <font-awesome-icon :icon="['fas', 'trash-alt']" />
        </div>
        <div class="card-content">
          <div class="text p-rel description">
            <div class="content">
              <div class="content-full">{{blog.content}}</div>
            </div>
          </div>
          <BlogCardImage :images="blog.images" />
        </div>
        <div class="button-bar tc-slate">
          <div class="single-button c-pointer" @click="forward(blog.bid)">
            <span class="text-bar">
              <font-awesome-icon :icon="['fas', 'share-square']" />
              <span class="text-offset">{{blog.transmit_num||'转发'}}</span>
            </span>
          </div>
          <div class="single-button c-pointer" @click="comment(blog.bid)">
            <span class="text-bar">
              <font-awesome-icon :icon="['fas', 'comment-alt']" />
              <i class="bp-svg-icon single-icon comment"></i>
              <span class="text-offset">{{blog.comment_num||'评论'}}</span>
            </span>
          </div>
          <div class="single-button c-pointer p-rel" @click="like(blog.bid)">
            <span class="text-bar">
              <font-awesome-icon :icon="['fas', 'thumbs-up']" />
              <span class="text-offset">{{blog.like_num||'点赞'}}</span>
            </span>
          </div>
        </div>
      </div>
      <br />
    </div>
    <br />
  </div>
</template>

<script>
import BlogCardImage from "@/components/BlogCardImage.vue";
export default {
  name: "BlogCard",
  components: {
    BlogCardImage,
  },
  methods: {
    forward(bid) {
      window.alert(bid);
    },
    comment(bid) {
      window.alert(bid);
    },
    like(bid) {
      window.alert(bid);
    },
    deletemine(bid) {
      window.alert(bid);
    },
  },
  data() {
    return {
      blogs: [
        {
          bid: 1,
          time: "20200202",
          content: "早上好",
          up: {
            usid: 1,
            name: "王小明",
            avatar: "//static.hdslb.com/images/member/noface.gif",
          },
          transmit_num: 123,
          comment_num: 123,
          like_num: 123,
          images: [],
        },
        {
          bid: 2,
          time: "20200202",
          content: "早上好",
          up: {
            usid: 1,
            name: "王小红",
            avatar: "//static.hdslb.com/images/member/noface.gif",
          },
          transmit_num: 123,
          comment_num: 123,
          like_num: 123,
          images: [
            {
              url: "//static.hdslb.com/images/member/noface.gif",
            },
          ],
        },
        {
          bid: 3,
          time: "20200202",
          content: "早上好",
          up: {
            usid: 1,
            name: "王小绿",
            avatar: "//static.hdslb.com/images/member/noface.gif",
          },
          transmit_num: 123,
          comment_num: 123,
          like_num: 123,
          images: [
            {
              url: "//static.hdslb.com/images/member/noface.gif",
            },
            {
              url: "//static.hdslb.com/images/member/noface.gif",
            },
          ],
        },
        {
          bid: 4,
          time: "20200202",
          content: "早上好",
          up: {
            usid: 1,
            name: "王小蓝",
            avatar: "//static.hdslb.com/images/member/noface.gif",
          },
          transmit_num: 123,
          comment_num: 123,
          like_num: 123,
          images: [
            {
              url: "//static.hdslb.com/images/member/noface.gif",
            },
            {
              url: "//static.hdslb.com/images/member/noface.gif",
            },
            {
              url: "//static.hdslb.com/images/member/noface.gif",
            },
          ],
        },
        {
          bid: 5,
          time: "20200202",
          content: "早上好",
          up: {
            usid: 1,
            name: "王小橘",
            avatar: "//static.hdslb.com/images/member/noface.gif",
          },
          transmit_num: 123,
          comment_num: 123,
          like_num: 123,
          images: [
            {
              url: "//static.hdslb.com/images/member/noface.gif",
            },
            {
              url: "//static.hdslb.com/images/member/noface.gif",
            },
            {
              url: "//static.hdslb.com/images/member/noface.gif",
            },
            {
              url: "//static.hdslb.com/images/member/noface.gif",
            },
          ],
        },
        {
          bid: 6,
          time: "20200202",
          content: "早上好",
          up: {
            usid: 1,
            name: "王小粉",
            avatar: "//static.hdslb.com/images/member/noface.gif",
          },
          transmit_num: 123,
          comment_num: 123,
          like_num: 123,
          images: [
            {
              url: "//static.hdslb.com/images/member/noface.gif",
            },
            {
              url: "//static.hdslb.com/images/member/noface.gif",
            },
            {
              url: "//static.hdslb.com/images/member/noface.gif",
            },
            {
              url: "//static.hdslb.com/images/member/noface.gif",
            },
            {
              url: "//static.hdslb.com/images/member/noface.gif",
            },
            {
              url: "//static.hdslb.com/images/member/noface.gif",
            },
            {
              url: "//static.hdslb.com/images/member/noface.gif",
            },
            {
              url: "//static.hdslb.com/images/member/noface.gif",
            },
            {
              url: "//static.hdslb.com/images/member/noface.gif",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  position: relative;
  top: 0;
  border-radius: 4px;
  min-width: 632px;
  background: #fff;
  margin-top: 8px;
}

.user-head {
  display: block;
  position: absolute;
  width: 48px;
  height: 48px;
  top: 24px;
  left: 24px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 50%;
}

.main-content {
  width: 534px;
  padding-top: 27px;
  margin-left: 88px;
}

.user-name a:hover {
  color: #00b5e5;
}

.time {
  padding-top: 4px;
}

.time .detail-link {
  transition: color 0.3s ease;
}

.card-content {
  width: 532px;
  margin-top: 10px;
  padding-right: 0;
  padding-bottom: 20px;
}

.description {
  max-width: 100%;
  display: inline-block;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 22px;
  word-wrap: break-word;
}

.content {
  display: block;
  color: inherit;
  padding-right: 10px;
}

.content-full {
  width: 100%;
  word-break: break-word;
  word-wrap: break-word;
}

.button-bar {
  width: 100%;
  height: 44px;
  line-height: 44px;
  color: #99a2aa;
}

.single-button {
  display: inline-block;
  width: 92px;
  font-size: 12px;
  cursor: pointer;
}

.single-button:hover {
  color: #fb7299;
}

.text-offset {
  position: relative;
  top: 1px;
  left: 3px;
}
.delete {
  position: absolute;
  top: 35px;
  right: 30px;
  color: #6d757a;
  font-size: 22px;
}
.delete:hover {
  color: #00ffff;
}
</style>
