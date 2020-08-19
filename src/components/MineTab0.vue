<template>
<div id="area-main-left" class="l">
  <div id="list-guide-left">
    <div class="part-guide-left active">
      <div class="banner">
        <a href="/welcome" class="tab fixed">
		<font-awesome-icon :icon="['fas', 'smile']" />
          <i class="icon icon-home"></i> 欢迎
        </a>
      </div>
     
    </div>
    
    <div class="part-guide-left">
      <div class="banner">
        <a href="/udata" class="tab fixed">
		<font-awesome-icon :icon="['fas', 'edit']" />
          <i class="icon icon-cog"></i> 个人资料
        </a>
        <span id="hint-setting-left" class="hidden">0</span>
      </div>
    </div>
	<div class="part-guide-left">
      <div class="banner">
        <a href="/uploadlist" class="tab fixed unfold">
		<font-awesome-icon :icon="['fas', 'blog']" />
          <i class="icon icon-upload"></i> 个人动态
        </a>
      </div>
    </div>
    <div class="part-guide-left">
      <div class="banner">
        <a href="/flist" class="tab fixed">
		<font-awesome-icon :icon="['fas', 'list']" />
          <i class="icon icon-university"></i> 关注 / 粉丝列表
        </a>
      </div>
    </div>
    <div class="part-guide-left">
      <div class="banner">
        <a href="/favourite" class="tab fixed">
			<font-awesome-icon :icon="['fas', 'folder']" />
          <i class="icon icon-folder-open"></i> 收藏夹
        </a>
        <span id="hint-favourite-left" class="hidden">0</span>
      </div>
      
    </div>
    <div class="part-guide-left">
      <div class="banner">
        <a href="/history" class="tab fixed">
			<font-awesome-icon :icon="['fas', 'history']" />
          <i class="icon icon-history"></i> 历史
        </a>
      </div>
    </div>
    <div class="part-guide-left">
      <div class="banner">
        <a href="/uploadlist" class="tab fixed unfold">
		<font-awesome-icon :icon="['fas', 'upload']" />
          <i class="icon icon-upload"></i> 投稿管理
        </a>
      </div>
    </div>
    <div class="part-guide-left">
      <div class="banner nav-data-center">
        <a href="/datacentre" class="tab fixed">
		<font-awesome-icon :icon="['fas', 'database']" />
          <i class="icon icon-bar-chart"></i> 数据中心
        </a>
        <img
          src="https://static.yximgs.com/udata/pkg/acfun/icon_new_pink.svg"
          style="width:31px;height:14px;display:inline-block;margin: 10px 0 0 34px"
        />
      </div>
    </div>

  </div>
</div>
</template>




<style scoped>
#list-guide-left {
	display: block;
	width: 197px;
}

.l {
    float: left;
}

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, tt, var, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	margin: 0 auto;
	padding: 0;
	outline: 0;
	border: 0;
	vertical-align: baseline;
	font-weight: inherit;
	font-style: inherit;
	font-size: 100%;
	font-family: inherit;
	*zoom: 1;
}

.no-select, #area-main-left, #block-title-banner {
	cursor: default;
}

#header-inner, #mainer-inner, #footer-inner {
	text-align: left;
}

#stage {
	text-align: center;
}

body {
	font-size: 12px;
	font-family: "Helvetica Neue",Helvetica,Arial,STHeiti,"Microsoft Yahei",sans-serif;
	line-height: 16px;
}

#list-guide-left .part-guide-left .banner .tab {
	color: #999;
}

.part-guide-left .banner .tab {
	color: #fff;
	cursor: pointer;
	padding: 0;
}

.banner .tab.fixed {
	float: left !important;
	overflow: visible;
	padding: 0 8px;
	border: none;
	font-weight: normal;
	font-size: 18px;
	font-family: Michroma,'Segoe UI Light','Segoe UI','Segoe UI WP','Microsoft Jhenghei','微软雅黑',sans-serif,Times;
	cursor: default;
}

.banner .tab {
	-webkit-transition: .2s 0s all ease;
	-moz-transition: .2s 0s all ease;
	-ms-transition: .2s 0s all ease;
	-o-transition: .2s 0s all ease;
	transition: .2s 0s all ease;
	position: relative;
	float: left;
	overflow: hidden;
	margin: 0;
	padding: 0 16px;
	width: auto;
	height: 35px;
	border: none;
	border-right: 1px solid #eee;
	color: #333;
	text-align: center;
	font-size: 14px;
	line-height: 35px;
	cursor: pointer;
	*zoom: 1;
}

.inline-block, input, select, .td, .area-pager .hint, .area-pager li, .area-pager .ipt-pager, .pager, .ribbon, .btn, .banner .tab, .thumb, .channel, .subtitle, img.captcha, input.captcha, .area-left, .area.left, .area-right, .area.right, #guide-top-bar .win .c a, #a-avatar-guide .info-hint, #win-history-guide .mainer .b .unit .title, .win-hint .tail, #win-info .title, #win-info .name, #view-info, #comment-info {
	display: inline-block;
	_display: inline;
}

a:link {
	text-decoration: none;
}

a {
	color: #08c;
	text-decoration: underline;
}


a {
	color: #369;
	text-decoration: none;
	white-space: normal;
	word-break: break-all;
	cursor: pointer;
	*font-size: 12px;
	*font-weight: normal;
}

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, tt, var, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	margin: 0 auto;
	padding: 0;
	outline: 0;
	border: 0;
	vertical-align: baseline;
	font-weight: inherit;
	font-style: inherit;
	font-size: 100%;
	font-family: inherit;
	*zoom: 1;
}

.part-guide-left .banner {
	color: #fff;
}

.banner {
	color: #666;
	text-align: left;
	font-size: 14px;
	line-height: 34px;
}

.no-select, .win .block-title, .area-pager, .btn, .switch, .banner, .thumb, .subtitle, #sub-guide-inner .unit .divider-x, #avatar-ac-footer {
	cursor: default;
}

#header-inner, #mainer-inner, #footer-inner {
	text-align: left;
}

#stage {
	text-align: center;
}

body {
	font-size: 12px;
	font-family: "Helvetica Neue",Helvetica,Arial,STHeiti,"Microsoft Yahei",sans-serif;
	line-height: 16px;
}

.part-guide-left {
	margin: 16px auto;
	padding: 0 0 0 16px;
	overflow: visible;
}

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, tt, var, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	margin: 0 auto;
	padding: 0;
	outline: 0;
	border: 0;
	vertical-align: baseline;
	font-weight: inherit;
	font-style: inherit;
	font-size: 100%;
	font-family: inherit;
	*zoom: 1;
}

body {
	font-size: 12px;
	font-family: "Helvetica Neue",Helvetica,Arial,STHeiti,"Microsoft Yahei",sans-serif;
	line-height: 16px;
}

.part-guide-left .banner {
	background: none;
	color: #fff;
	border: none;
	box-shadow: none;
}

.banner {
	position: relative;
	width: auto;
	height: 36px;
	color: #666;
	text-align: left;
	font-size: 14px;
	line-height: 34px;
	*zoom: 1;
	margin: 0;
	padding: 0;
}

.no-select, .win .block-title, .area-pager, .btn, .switch, .banner, .thumb, .subtitle, #sub-guide-inner .unit .divider-x, #avatar-ac-footer {
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-o-user-select: none;
	user-select: none;
	cursor: default;
}

#list-guide-left .part-guide-left.active .banner .tab {
	color: pink;
}

#list-guide-left .part-guide-left .banner .tab:hover {
    color: #5dceea;
}
</style>

<style scoped>
.nav-switch-item {
  display: inline-block;
  height: 56px;
  line-height: 56px;
  width: 20%;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  border-bottom: 1px solid #ccd0d7;
}

.nav-switch-item:hover {
  color: pink;
}

.nav-switch-item.on {
  color: pink;
}

.nav-switch-anchor {
  background-color: pink;
  height: 2px;
  width: 50px;
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
</style>
