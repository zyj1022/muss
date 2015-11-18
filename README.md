# MUSS 1.0

MUSS 是一个简单的sass库，根据工作中实践总结以及参考了同类库，正在逐步完善之中，
MUSS 提供基础常用样式的调用，如果你有兴趣可以帮助一起完善这个库。

# 使用方法
下载并置入工作文件包中

	git clone https://github.com/zyj1022/muss

在你的CSS文件中调用：

	@import "muss";

# 文件描述

MUSS 目前涵盖了目前常用的样式核心，避免样式冗余，主要包含如下文件

### cards

设置基础功能方面的文件，主要包含如下：

- border
- border-images
- border-radius
- clearfix
- ellipsis
- hide-text
- image-2x
- margin
- padding
- opacity
- size
- triangle
- word-wrap
- reset 

### css3

设置css3属性前缀的文件，主要包含如下：

- animation
- background-gradient
- background-opacity
- background-size
- font-size
- font-face
- text-shadow
- transform
- transition
- media-queries

### function

设置Function功能函数文件，主要包含如下：

- font-rem
- prefixes

### settings

设置基础变量文件，主要包含如下：

- prefix
- variables
