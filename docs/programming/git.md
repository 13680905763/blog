# how to use git

## concept

### 集中式版本控制

CVS 和 SVN 都是是属于集中式版本控制系统

1. 单一的**集中管理的服务器**，保存所有文件的修订版本；
2. 开发人员通过客户端连接到这台服务器，取出最新的文件或者提交更新；

- 相较于老式的本地管理来说，每个人都可以在一定程度上看到项目中的
  其他人正在做些什么。
- 有一个核心的问题：中央服务器不能出现故障：
  1. 如果宕机一小时，那么在这一小时内，谁都无法提
     交更新，也就无法协同工作；
  2. 如果中心数据库所在的磁盘发生损坏，又没有做恰
     当备份，毫无疑问你将丢失所有数据；

### 分布式版本控制

- 客户端并不只提取最新版本的文件快照， 而是把代码仓库完整地镜像下
  来，包括完整的历史记录；
- 任何一处协同工作用的服务器发生故障，事后都可以用任何
  一个镜像出来的本地仓库恢复；
- 因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份；

## Bash – CMD – GUI

- Git Bash 是基于 CMD 的，在 CMD 的基础上增添一些新的命令与功能；
- Git CMD 命令行提示符（CMD）是 Windows 操作系统上的命令行解释程序
- Git GUI 提供了一个图形用户界面来运行 git 命令；

## config

### username usereamil

- 每一个 Git 提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改；
- 如果使用了 --global 选项，那么该命令只需要运行一次，之后无论你在该系统上做任何事情，Git 都会使用那些信息；

```git
git config --global user.name 'ZhangYuHua'
git config --global user.email '177748749@qq.com'
```

检测当前配置信息

```git
git config --list
```

### alias

如果不想每次都输入完整的 Git 命令，可以通过 git config 文件来轻松地为每一个命令设置一个别名。

```git
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commmit
git config --global alias.st status
```

## init

1. 初始化仓库 git init
2. 从远程克隆仓库 git clone

## 文件的状态

在 git 仓库中会对文件划分不同的状态

- 为跟踪：默认情况下，Git 仓库下的文件没有添加到 Git 仓库管理中，我们需要通过 add 命令来操作；
- 已跟踪：添加到 Git 仓库管理的文件处于已跟踪状态，Git 可以对其进行各种跟踪管理；
  - staged：暂缓区中的文件状态；
  - Unmodified：commit 命令，可以将 staged 中文件提交到 Git 仓库
  - Modified：修改了某个文件后，会处于 Modified 状态；
