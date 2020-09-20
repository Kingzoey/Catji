<template>
  <div class="cb-page">
    <a @click="toPage(cur_page-1)" class="prev" v-if="cur_page > 1">上一页</a>
    <a @click="toPage(cur_page-3)" class="tcd-number" v-if="cur_page > 3">{{cur_page-3}}</a>
    <a @click="toPage(cur_page-2)" class="tcd-number" v-if="cur_page > 2">{{cur_page-2}}</a>
    <a @click="toPage(cur_page-1)" class="tcd-number" v-if="cur_page > 1">{{cur_page-1}}</a>
    <span class="current">{{cur_page}}</span>
    <a @click="toPage(cur_page+1)" class="tcd-number" v-if="cur_page+1 < tot_page">{{cur_page+1}}</a>
    <a @click="toPage(cur_page+2)" class="tcd-number" v-if="cur_page+2 < tot_page">{{cur_page+2}}</a>
    <span class="dian" v-if="cur_page+3 < tot_page">...</span>
    <a @click="toPage(tot_page)" class="tcd-number" v-if="cur_page < tot_page">{{tot_page}}</a>
    <a @click="toPage(cur_page+1)" class="next" v-if="cur_page < tot_page && tot_page > 1">下一页</a>
    <div class="jump">
      &nbsp;共
      <span>{{tot_page}}</span>页，
      跳至
      <input type="text" v-model="jmp_page" @keyup.enter="toPage(jmp_page)" />页
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cur_page: 1,
      tot_page: 1,
      jmp_page: "",
    };
  },
  props: {
    onChange: Function,
    page_num: Number,
  },
  mounted() {
    console.log(this.$props.page_num);
    this.tot_page = this.$props.page_num || 1;
  },
  methods: {
    toPage(new_page) {
      new_page = Number(new_page);
      if (!new_page) return;
      this.cur_page = new_page;
      this.$props.onChange(this.cur_page - 1);
    },
    reset() {
      this.cur_page = 1;
    },
    reload() {
      this.$props.onChange(this.cur_page - 1);
    },
  },
};
</script>

<style>
.cb-page {
  float: left;
  font-size: 12px;
}

.cb-page * {
  box-sizing: content-box;
}

.cb-page .current,
.cb-page .tcd-number,
.cb-page .dian,
.cb-page .prev,
.cb-page .next {
  cursor: pointer;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: all 0.2s;
  font-size: 14px;
  min-width: 15px;
  margin: 0 2px;
  padding: 0 10px;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  text-decoration: none;
  vertical-align: baseline;
}

.cb-page .current,
.cb-page .current:hover,
.cb-page .next:hover,
.cb-page .prev:hover,
.cb-page .tcd-number:hover {
  background: #00a1d6;
  color: #fff;
  border: 1px solid #00a1d6;
}

.cb-page .dian {
  cursor: default;
  border-color: #fff;
}

.cb-page .prev,
.cb-page .next {
  padding: 0 15px;
}

.cb-page .jump {
  float: right;
  color: rgb(17, 16, 17);
  line-height: 36px;
  font-size: 14px;
}

.cb-page .jump input {
  margin: 0 5px;
  margin-top: 0px;
  padding: 0 10px;
  height: 24px;
  line-height: 24px;
  margin-top: 7px;
  font-size: 12px;
  box-shadow: none;
  width: 24px;
  border-radius: 4px;
  border: 1px solid #ddd;
  outline: none;
  text-align: center;
}
</style>