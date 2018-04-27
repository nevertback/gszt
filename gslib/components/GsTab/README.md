GsTab 切换
---

### html
```html
<div class="GsTab">
    <div class="GsTabNavs">
        <a class="GsTabNav"></a>
        <a class="GsTabNav"></a>
    </div>
    <div class="GsTabItems">
        <div class="GsTabItem"></div>
        <div class="GsTabItem"></div>
    </div>
</div>
```

### javascript
```javascript
GsTab.init();
```

### scss
```scss
.gs-tab{
	position: relative;
	.gs-tab-navs{
		.gs-tab-nav{
			.cur{
				
			}
		}
	}
	.gs-tab-items{
		position: relative;
		width: 100%;
		height: 100%;
		.gs-tab-item{
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			transition:all 0.25s ease;
			opacity: 0;
			visibility: hidden;
			.cur{
				opacity: 1;
				visibility: visible;
			}
		}
	}
}
```