# github 博客

这是一个使用在github page的单页面应用，使用 github api 数据生成一个博客网站，文章数据来源于指定仓库 issues

## 使用方法

1. clone 该项目
```
git clone https://github.com/eyasliu/eyasliu.github.io.git
```

2. 安装依赖
```
npm i 
```

3. 修改 `/config/config.client.js`，将`github`字段的user和repo修改为你写博客的仓库
4. `npm run build`编译，并上传，过几分钟后可看到效果(如果一直访问不了github page，请科学上网)
