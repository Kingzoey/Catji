<template>
	<div class="total">
		<div class="line1">
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频1" />
				</a>
				<br>
				<a title="视频1">视频1</a>
			</div>
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频2" />
				</a>
				<br>
				<a title="视频2">视频2</a>
			</div>
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频3" />
				</a>
				<br>
				<a title="视频3">视频3</a>
			</div>
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频4" />
				</a>
				<br>
				<a title="视频4">视频4</a>
			</div>
		</div>
		<div class="line2">
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频5" />
				</a>
				<br>
				<a title="视频5">视频5</a>
			</div>
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频6" />
				</a>
				<br>
				<a title="视频6">视频6</a>
			</div>
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频7" />
				</a>
				<br>
				<a title="视频7">视频7</a>
			</div>
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频8" />
				</a>
				<br>
				<a title="视频8">视频8</a>
			</div>
		</div>
		<div class="line3">
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频9" />
				</a>
				<br>
				<a title="视频9">视频9</a>
			</div>
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频10" />
				</a>
				<br>
				<a title="视频10">视频10</a>
			</div>
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频11" />
				</a>
				<br>
				<a title="视频11">视频11</a>
			</div>
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频12" />
				</a>
				<br>
				<a title="视频12">视频12</a>
			</div>
		</div>
		<div class="line4">
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频13" />
				</a>
				<br>
				<a title="视频13">视频13</a>
			</div>
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频14" />
				</a>
				<br>
				<a title="视频14">视频14</a>
			</div>
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频15" />
				</a>
				<br>
				<a title="视频15">视频15</a>
			</div>
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频16" />
				</a>
				<br>
				<a title="视频16">视频16</a>
			</div>
		</div>
		<div class="line5">
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频17" />
				</a>
				<br>
				<a title="视频17">视频17</a>
			</div>
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频18" />
				</a>
				<br>
				<a title="视频18">视频18</a>
			</div>
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频19" />
				</a>
				<br>
				<a title="视频19">视频19</a>
			</div>
			<div class="normal-item">
				<a class="cover" href="#" target="_blank">
					<img :src="test1" height="90" width="175" alt="视频20" />
				</a>
				<br>
				<a title="视频20">视频20</a>
			</div>
		</div>
	</div>
</template>

<script>
	import test1 from "@/assets/test.png";
	export default {
		name: "VideoList",
		data() {
			return {
				test1: test1,
			};
		}
	}
</script>

<style scoped>
	.total {
		position: absolute;
		top: 60px;
		left:300px;
	}
		.normal-item {
		float: left;
		border: 200px;
		margin-left: 50px;
	}
</style>
