GsTab 切换
---

### html
```html
<div class="gs-tab GsTab">
    <div class="gs-tab-navs GsTabNavs">
        <a class="gs-tab-nav GsTabNav"></a>
        <a class="gs-tab-nav GsTabNav"></a>
    </div>
    <div class="gs-tab-items GsTabItems">
        <div class="gs-tab-item GsTabItem"></div>
        <div class="gs-tab-item GsTabItem"></div>
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
			&.cur{
				
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
			&.cur{
				opacity: 1;
				visibility: visible;
			}
		}
	}
}
```