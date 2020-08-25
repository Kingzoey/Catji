<template>
<div>
    <div class="container">
        <div class="tab">
          <ul>
            <li class="tab-item"
              :class="{on:index==on}"
              v-for="(tab, index) in tablist"
              :key="tab.name">
              <a href="javascript:void(0);" @click="on = index">
                <font-awesome-icon :icon="['fas', tab.iconname]" />
                {{tab.name}}
              </a>
            </li>
          </ul>
      </div>
        <component :is="tablist[on].tab"></component>
    </div>
</div>
</template>


<script>
export default {
  name: "Space",
  components: {
   
  },
  methods: {},
  data() {
    return {
      on: 0,
      tablist: [
        {
          name: "我的粉丝",
          iconname: "child",
          tab: () => import("@/components/FanList.vue"),
        },
        {
          name: "我的关注",
          iconname: "heart",
          tab: () => import("@/components/FolList.vue"),
        }
      ],
    };
  },
  mounted() {
    console.log(this.$route.params.usid);
  },
};
</script>



<style scoped>
* { 
margin:5; 
padding:0; 
list-style:none; 
} 

.container {
 padding: 50 50 50 50px;
 margin:left 500px;
}

.tab {
  display: inline;
  width: 900px;
}

.tab :hover {
    color: #5dceea;
}

.tab {
	overflow: visible;
	padding: 0 300px;
	border: none;
	font-weight: normal;
	font-size: 18px;
	font-family: Michroma,'Segoe UI Light','Segoe UI','Segoe UI WP','Microsoft Jhenghei','微软雅黑',sans-serif,Times;
	cursor: default;
     border-top: 1px solid #ddd;
}


.tab-item {
  margin: 16px auto;
  padding: 0 0 0 16px;
  overflow: visible;
  display: block;
  
}

.tab-item.on a{
  color: pink;
}


.tab-item a {
  overflow: visible;
  padding: 0 8px;
  border: none;
  font-weight: normal;
  font-size: 18px;
  
  height: 36px;
  margin-right: 4px;
  color:#999;
}

.tab-item a svg {
  color: #3a9bd9;
}

.tab-item.on a svg {
  color: pink;
}
</style>