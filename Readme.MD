# Github Blog

[![Circle CI](https://img.shields.io/circleci/project/eyasliu/eyasliu.github.io/master.svg)](https://circleci.com/gh/eyasliu/eyasliu.github.io)

this is a single page application base Github API and Github Pages to generate a Blog Site, no other backend server. The posts come from assign your repo of issues

**demo: http://euasweb.com**

# Usage

[简体中文](https://github.com/eyasliu/eyasliu.github.io/blob/master/README-zh.MD)

+ clone this repo

```
git clone https://github.com/eyasliu/eyasliu.github.io.git
```

+ install dependencies

```
npm i
```

+ change file `/config/config.client.js` to assign your blog issues in repo
+ build project 

```
npm run build
```
+ change `CNAME` file to your domain, if you don't have domain, delete it
+ push code to repo `{username}.github.io` (if not exits, create it)
