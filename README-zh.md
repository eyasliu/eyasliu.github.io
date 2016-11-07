# github 博客

这是一个使用在github page的单页面应用，使用 github api 数据生成一个博客网站，文章数据来源于指定仓库 issues

** demo: http://eyasweb.com **

## 使用方法

 + clone 该项目
   ```
   git clone https://github.com/eyasliu/eyasliu.github.io.git
   ```
 + 修改根目录 `config.js`，将`github`字段的user和repo修改为你写博客的仓库
 + 上传到仓库名为： **{username}.github.io**

## 贡献代码

+ 安装依赖

  ```
  npm i 
  ```
+ 启动开发服务器

  ```
  npm run dev
  ```
  
  或执行 `npm run server` 将在本地运行静态服务器，可见效果

