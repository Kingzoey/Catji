<template>
	<div class="content" style="">
		<div class="user-pic" style="background-image">
		</div>
		<a class="user-name tc-black c-pointer" data-userinfo-popup-inited="true" href="http://localhost:8080/">bili_17352450701</a>
		<div class="bottom"><a class="number-part c-pointer f-left" href="http://localhost:8080/">
				<p class="numbers fs-14">3</p>
				<p class="text tc-slate fs-12 ls-0">关注</p>
			</a><a class="number-part c-pointer f-left" href="http://localhost:8080/">
				<p class="numbers fs-14">0</p>
				<p class="text tc-slate fs-12 ls-0">粉丝</p>
			</a><a class="number-part c-pointer f-left" href="http://localhost:8080/">
				<p class="numbers fs-14">1</p>
				<p class="text tc-slate fs-12 ls-0">动态</p>
			</a></div><img src="../assets/userhead.png" class="user-head c-pointer"
		data-userinfo-popup-inited="true">
	</div>
</template>

<script>
</script>

<style>
	.content {
		width: 244px;
		height: 188px;
	}

	.content .user-pic {
		width: 244px;
		height: 64px;
		background: center/cover no-repeat;
		background-image: url(../assets/userinfo.jpg);
	}

	.content .user-name {
		display: inline-block;
		font-size: 13px;
		letter-spacing: 0;
		margin-left: 80px;
		padding-top: 10px;
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

	.content .bottom .number-part .text {
		font-size: 12px;
		color: #99a2aa;
		padding-top: 9px;
	}

	.content .bottom .number-part .numbers {
		letter-spacing: 0;
		padding-top: 35px;
		font-weight: bold;
		line-height: 19px;
		color: #222;
	}
.content .bottom .number-part .numbers:hover {
  color: cornflowerblue;
}
	.content .user-head {
		position: absolute;
		width: 56px;
		height: 56px;
		left: 16px;
		top: 110px;
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
