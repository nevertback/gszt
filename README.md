游民星空 普通单页专题项目模板
---
### clone项目
1. cnpm install  
1. 创建软连接
> mklink *dir\node_modules\gslib *dir\gslib
> 例：*dir = e:\gs\zt

### git操作
```git
git init
git add .
git commit -m "init"
git remote add origin git@github.com:nevertback/gszt.git
git push -u origin master
```

### 文件说明
- /gslib  
常用公共组件
- /projects  
项目文件夹
- /scsslib  
常用scss库
- /static  
站内代码
- .gitignore  
git忽略文件
- cwp.code-workspace  
VScode工作区
- gulpfile.js  
gulp配置文件
- package.json  
npm包管理
- README.md   
说明文件
- vscode.user.config.json  
vscode习惯配置