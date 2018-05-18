Gamersky 浮动跟随插件
---
html代码示例:
```html
<div class="gs-fix-cell GsFixCell">
    ...
</div>
```
js代码示例：
```javascript
let GsFixCell = require('gslib/components/GsFixCell');
GsFixCell.init({
    //minWidth:1640 最小显示宽度。默认1280
    //halfSize:number 值：数字。默认自动计算一半宽度
});
```

scss代码示例：
```scss
.gs-fix-cell{
    position: absolute;
    top: 1142px;
    left: 50%;
    margin-left: 600px;
    width: 231px;
    height: 425px;
    &.cur{
    	position: fixed;
    	top: 50%;
    }
}
```