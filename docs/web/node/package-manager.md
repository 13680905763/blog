# package-manager

## overview

包管理工具 npm (Node Package Manager)，也就是 Node 包管理器；
[npm 管理的包存放在](https://www.npmjs.com/)

## npm

### npm 的配置文件

#### package.json

配置文件会记录着你项目的名称、版本号、项目描述、项目所依赖的其他库的信息和依赖库的版本号等

获取方式

1. 手动从零创建项目，npm init –y（所有信息使用默认的）
2. 通过脚手架创建项目，脚手架会帮助我们生成 package.json，并且里面有相关的配置

常见配置文件
![常见配置](/img/web/node/package-manager/常见配置.jpg)

必须填写的属性：name、version

- name 是项目的名称；
- version 是当前项目的版本号；
- description 是描述信息，很多时候是作为项目的基本描述；
- author 是作者相关信息（发布时用到）；
- license 是开源协议（发布时用到）；

private 属性：

- private 属性记录当前的项目是否是私有的；
- 当值为 true 时，npm 是不能发布它的，这是防止私有项目或模块发布出去的方式；

main 属性：

- 设置程序的入口。

scripts 属性

- scripts 属性用于配置一些脚本命令，以键值对的形式存在；
- 配置后我们可以通过 npm run 命令的 key 来执行这个命令；
- npm start 和 npm run start 的区别是什么？
  - 它们是等价的；
  - 对于常用的 start、 test、stop、restart 可以省略掉 run 直接通过 npm start 等方式运行；

dependencies 属性

- dependencies 属性是指定无论开发环境还是生成环境都需要依赖的包；
- 通常是我们项目实际开发用到的一些库模块 vue、vuex、vue-router、react、react-dom、axios 等等；

devDependencies 属性

- 一些包在生成环境是不需要的，比如 webpack、babel 等；
- 这个时候我们会通过 npm install webpack --save-dev，将它安装到 devDependencies 属性中；

peerDependencies 属性

- 还有一种项目依赖关系是对等依赖，也就是你依赖的一个包，它必须是以另外一个宿主包为前提的；
- 比如 element-plus 是依赖于 vue3 的，ant design 是依赖于 react、react-dom；

#### package-lock.json

- lockfileVersion：lock 文件的版本；
- requires：使用 requires 来跟踪模块的依赖关系；
- dependencies：项目的依赖
  - 当前项目依赖 axios，但是 axios 依赖 follow-redireacts；
  - axios 中的属性如下： - version 表示实际安装的 axios 的版本； - resolved 用来记录下载的地址，registry 仓库中的位置； - requires/dependencies 记录当前模块的依赖； - integrity 用来从缓存中获取索引，再通过索引去获取压缩包文件；

![lock](/img/web/node/package-manager/lock.jpg)

### 依赖的版本管理 npm 的包通常需要遵从 semver 版本规范

- [semver](https://semver.org/lang/zh-CN/)
- [npm semver](https://docs.npmjs.com/misc/semver)

Semver 版本规范是 X.Y.Z：

- X 主版本号（major）：当你做了不兼容的 API 修改（可能不兼容之前的版本）；
- Y 次版本号（minor）：当你做了向下兼容的功能性新增（新功能增加，但是兼容之前的版本）；
- Z 修订号（patch）：当你做了向下兼容的问题修正（没有新功能，修复了之前版本的 bug）；

^和~的区别

- x.y.z：表示一个明确的版本号；
- ^x.y.z：表示 x 是保持不变的，y 和 z 永远安装最新的版本；
- ~x.y.z：表示 x 和 y 保持不变的，z 永远安装最新的版本；

### npm install 命令

安装 npm 包分两种情况：

- 全局安装（global install）： npm install webpack -g;
- 局部安装（local install）： npm install webpack

1. 全局安装
   - 全局安装是直接将某个包安装到全局：
   - 通常使用 npm 全局安装的包都是一些工具包：yarn、webpack 等；
   - 并不是类似于 axios、express、koa 等库文件；
   - 所以全局安装了之后并不能让我们在所有的项目中使用 axios 等库；
2. 局部安装 开发时依赖和生产时依赖：

```node
# 默认安装开发和生产依赖
npm install axios
npm i axios
# 开发依赖
npm install webpack --save-dev
npm install webpack -D
npm i webpack –D
# 根据package.json中的依赖包
npm install
```

### npm install 原理

![install](/img/web/node/package-manager/install.jpg)

### npm 其他命令

```node
// 卸载某个依赖包
npm uninstall package
npm uninstall package --save-dev
npm uninstall package -D
// 强制重新build 安装依赖
npm rebuild
// 清除缓存
npm cache clean
```

[查看更多命令](https://docs.npmjs.com/cli-documentation/cli)

### 发布包

```node
npm login // 登录
// 修改package.json
npm publish // 发布
npm unpublish // 删除
npm deprecate // 让包过期
```

## yarn 工具

- yarn 是由 Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具；
- yarn 是为了弥补 早期 npm 的一些缺陷而出现的；
- 早期的 npm 存在很多的缺陷，比如安装依赖速度很慢（没缓存）、版本依赖混乱（重复安装依赖包）等等一系列的问题；
- 虽然从 npm5 版本开始，进行了很多的升级和改进，但是依然很多人喜欢使用 yarn；

## cnpm 工具

淘宝镜像 registry 仓库

```node
// 查看npm镜像
npm config get registry
// 设置npm的镜像
npm config set registry https://registry.npm.taobao.org

// 用cnpm改镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm config get registry # https://r.npm.taobao.org/
```

## npx

- npx 是 npm5.2 之后自带的一个命令。
  比较常见的是使用它来调用项目中的某个模块的指令。
- 我们以 yarn 为例：
  - 全局安装的是 yarn1.0，项目安装的是 yarn2.0
  - 如果我在终端执行 yarn --version 会是 yarn1.0，在当前目录下找不到 yarn 时，就会去全局找，并且执行命令；

### 局部命令的执行

- 在终端中使用如下命令（在项目根目录下）

```node
./node_modules/.bin/yarn --version
```

- 修改 package.json 中的 scripts

```json
"scripts": {
"yarnV": "yarn --version"
}
```

- 使用 npx

```node
npx yarn --version
```

npx 的原理非常简单，它会到当前目录的 node_modules/.bin 目录下查找对应的命令

## pnpm

![pnpm](/img/web/node/package-manager/pnpm.jpg)

### 硬链接和软链接

- 硬链接（hard link）：是电脑文件系统中的多个文件平等地共享同一个文件存储单元；删除一个文件名字后，还可以用其它名字继续访问该文件；
- 软链接（符号链接 soft link、Symbolic link）：软链接是一类特殊的文件；其包含有一条以绝对路径或者相对路径的形式指向其它文件或者目录的引用；（就是快捷方式）

![link](/img/web/node/package-manager/link.jpg)

```node
 mklink /H foo_hard.js foo.js
 mklink foo_soft.js foo.js
```

![link-test](/img/web/node/package-manager/link-test.jpg)

### pnpm 特点

- 使用 npm 或 Yarn 时，如果你有 100 个项目，并且所有项目都有一个相同的依赖包，那么， 你在硬盘上就需要保存 100 份该相同依赖包的副本。
- 使用 pnpm 时，依赖包将被 存放在一个统一的位置，
  - 如果你对同一依赖包使用相同的版本，那么磁盘上只有这个依赖包的一份文件；
  - 如果你对同一依赖包需要使用不同的版本，则仅有 版本之间不同的文件会被存储起来；
  - 所有文件都保存在硬盘上的统一的位置：
    - 当安装软件包时， 其包含的所有文件都会硬链接到此位置，而不会占用额外的硬盘空间；
    - 这让你可以在项目之间方便地共享相同版本的 依赖包；

### pnpm 创建非扁平的 node_modules 目录

- 当使用 npm 或 Yarn Classic 安装依赖包时，所有软件包都将被提升到 node_modules 的根目录下。其结果是，源码可以访问 本不属于当前项目所设定的依赖包；

![pnpm-node_modules](/img/web/node/package-manager/pnpm-node_modules.jpg)

### pnpm 安装使用

```node
npm install -g pnpm

pnpm add <pkg> // 安装
pnpm remove <pkg> // 删除
pnpm <cmd> // 运行
pnpm store path // 获取当前活跃
pnpm store prune // 从store中删除当前未被引用的包来释放store的空间

```

[更多指令](https://pnpm.io/zh/)
