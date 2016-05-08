## 前端应用开始工具
这是一个种子，前端项目起始于此。搭建好的初始项目架构。

工具基于 webpack + gulp + bower，使用 React 框架开发，暂有两条分支，`react` 分支为react架构，可用于一般项目。`react_redux` 分支集成了 redux 库，可以使用redux数据流。每个分支都有一些demo可供参考。

## 安装

#### 准备

有些库可能需要在线编译，如果您是linux系统，请安装 make、gcc、g++
```shell
//centos
sudo yum install -y make gcc gcc-c++

// ubuntu
sudo apt-get install -y make gcc g++
```

如果是Windows系统，请安装 visual studio 2013 版本或以上，并安装 python2.7；

#### 工具
需要一些全局工具

* gulp ，构建工具
* concurrently 并行运行多条任务

所以，需要全局安装两个库

```
npm i -g gulp concurrently
```

#### 开始安装

建议使用 node 5.0 版本，安装依赖库
```
npm i
```
如果您正确的安装了准备阶段的工具，那您安装应该很顺利

#### 配置文件
当安装好了之后，请将 local.js.example 命令为 local.js ，这是项目的配置文件，用于在不同的环境中使用不同配置。

## 使用

### 开发
在开发阶段，执行命令
```
npm start
```
该命令会启动一个支持实时预览的 web 服务器，并且会在每次修改代码后使用 `eslint`执行代码质量检查，让您的代码直线提升质量。

### 打包
要打包项目，执行命令
```
npm run build
```
打包后的文件在根目录的 `build` 文件夹，资源文件存放于`resource`目录，所有字体文件存放于 `build/resource/font/`目录，所有图片文件存放于`build/resource/img`目录

## 模拟接口 mock server
开发中需要用到模拟数据，mock可以模拟 api 接口并返回 随机产生的模拟数据

#### 启动
当执行 `npm run dev`时，会将mock server同时启动，mockserver监听3001端口。
如果希望单独启动，执行：
```
npm run mock
```

## 关于bower
bower 是一个可选的工具，是一个不怎么推荐使用的，安装一个包时，尽量选择使用 npm 安装，如果npm 源实在没有，再使用 bower 安装，bower安装的包会存放在 `app/src/vendor`目录

## 关于 redux
redux 是一个管理状态的库，非常符合react的工作方式，所以 redux + react的工作方式是能很方便的处理那些复杂的业务逻辑；可在 `react_redux`分支去初始化。



#### 启用开发者工具


## 相关资源

* airbnb 编码规范：https://github.com/airbnb/javascript
* redux : https://github.com/rackt/redux
