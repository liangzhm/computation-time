## 处理时间展现形式的功能

### 安装

`npm install '@cnpm/computation-time';`


### 引入方法

### 普通引入方式

```
<script type="text/javascript" src="http://n3.static.pg0.cn/fp/computation-time/dist/computation-time.js">
```
### CMD

```
var Co = require('@cnpm/computation-time');
```
### ES6

```
import ImageCutURL from '@cnpm/computation-time';
```

### AMD
```
require(['@cnpm/computation-time'], function(ComputationTime){


})
```

## 调用方式
```
ComputationTime.init($(".time"),"data-time"); //init函数用来把2018-09-10 08:30:29这样的时间转换成多久之前
ComputationTime.jsDateDiff(seconds) //将时间转换成多久前
ComputationTime.transSeconds(seconds) //将秒数如90转换成01:30秒的形式
ComputationTime.addOneSeconds(seconds) //将时间+1秒后返回
ComputationTime.reduceOneSeconds(seconds) //将时间-1秒后返回
```
把选择器为time的时间填充上取得此元素的属性为data-time处理后的时间


