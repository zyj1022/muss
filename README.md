# MUSS 一个简单的sass库

[![npm version](https://badge.fury.io/js/muss.svg)](https://badge.fury.io/js/muss)

根据工作中实践总结以及参考了同类库，正在逐步完善之中， MUSS 提供基础常用样式的调用，如果你有兴趣可以帮助一起完善这个库。

# 安装方法


安装node，之后全局安装muss

	npm install muss -g

# 使用方法

然后进入工作目录

	muss install


在CSS文件中调用：

	@import "muss/muss";


# 文件描述


MUSS 目前涵盖了目前常用的样式核心，避免样式冗余，主要包含如下文件

### cards

设置基础功能方面的文件，主要包含如下：

-	border
-	border-images
-	border-radius
-	center-block
-	clearfix
-	ellipsis
-	hide-text
-	image-2x
-	image-text
-	margin
-	padding
-	opacity
-	size
-	triangle
-	word-wrap
-	reset
-   nth-child

### css3

设置css3属性前缀的文件，主要包含如下：

-	animation
-	appearance
-	background-gradient
-	background-opacity
-	background-size
-	box-shadow
-	box-sizing
-	flex-box
-	font-size
-	font-face
-	keyframes
-	media-queries
-	perspective
-	text-shadow
-	transform
-	transition
-   flex - flex 布局用法

### function

设置Function功能函数文件，主要包含如下：

-	font-rem
-	get-map
-	prefixes

### settings

设置基础变量文件，主要包含如下：

-	prefix
-	variables

### animate

设置动画功能 使用了[daneden](http://daneden.me/animate) 的 animate.css

-	attention-seekers
-	bounce
-	fade
-	flip
-	lightspeed
-	rotate
-	slide
-	specials
-	zoom

### nth-child

CSS伪类 :Nth-Child 的用法 [Demo用法效果](http://lukyvj.github.io/family.scss/)
