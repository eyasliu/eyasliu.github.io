# Github Blog

[![Circle CI](https://img.shields.io/circleci/project/eyasliu/eyasliu.github.io/master.svg)](https://circleci.com/gh/eyasliu/eyasliu.github.io)

this is a single page application base Github API and Github Pages to generate a Blog Site, no other backend server. The posts come from assign your repo of issues

**demo: http://eyasweb.com **

# Usage

[简体中文](https://github.com/eyasliu/eyasliu.github.io/blob/master/README-zh.md)

+ clone this repo
  ```
  git clone https://github.com/eyasliu/eyasliu.github.io.git
  ```
+ change root folder file `config.js` to assign your blog issues in repo
+ push code to repo `{username}.github.io` (if not exits, create it)

# Contributing

 + install dependencies
   ```
   npm i
   ```
 + enable webpack dev server
   ```
   npm run build
   ```
  or running an static server ti preview
   ```
   npm run server
   ```
