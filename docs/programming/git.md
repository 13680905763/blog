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

1. Untracked:未跟踪, 此文件在文件夹中, 但并没有加入到 git 库, 不参与版本控制. 通过 git add 状态变为 Staged
2. Staged: 暂存状态.
   - 执行 git commit 则将修改同步到库中, 文件为 Unmodified 状态
   - 执行 git reset HEAD filename 取消暂存, 文件状态为 Modified
3. Unmodified：文件已经入库, 库中的文件和本地文件又变为一致.
   - 如果它被修改, 而变为 Modified.
   - 执行 git rm 移出版本库, 则成为 Untracked 文件
4. Modified：文件已修改, 仅仅是修改, 并没有进行其他的操作.
   - 执行 git add 可进入暂存 staged 状态,
   - 执行 git checkout（从库中取出文件, 覆盖当前修改） 则丢弃修改过, 返回到 Unmodified 状态

![status](/img/programming/git/status.jpg)

### 检测文件的状态

```git
git status
git status --short
git status -s
```

## git 忽略文件

有些文件我们无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。

- 通常都是些自动生成的文件，比如依赖文件，日志文件，或者编译过程中创建
  的临时文件等；
- 我们可以创建一个名为 **.gitignore** 的文件，列出要忽略的文件的模
  式；

## git add

文件添加到暂存区

- 跟踪新文件
- 跟踪已修改的文件

```git
 git add xx.js
```

- 将所有的文件添加到暂存区

```git
 git add .
```

## git commit

暂存区已经准备就绪，可以提交了

```git
git commit –m "提交信息"
```

add 跟 commit 一起使用

```git
git commit -a -m "提交信息"
```

### commit Object

在进行提交操作时，Git 会保存一个提交对象（commit object）：

- 该提交对象会包含一个指向暂存内容快照的指针(校验和)；
- 该提交对象还包含了作者的姓名和邮箱、提交时输入的信息以及指向它的父对象的指针；
  - 首次提交产生的提交对象没有父对象，普通提交操作产生的提交对象有一个父对象；
  - 而由多个分支合并产生的提交对象有多个父对象；

![commit1](/img/programming/git/commit1.jpg)
![commit2](/img/programming/git/commit2.jpg)
![commit3](/img/programming/git/commit3.jpg)

```git
git cat-file -t 文件名（二进制，前几位就行）// 看文件类型
git cat-file -p 文件名 // 看文件内容
```

![cat-file](/img/programming/git/cat-file.jpg)

## git 校验和

Git 中所有的数据在存储前都计算校验和，然后以 校验和 来引用。

- Git 用以计算校验和的机制叫做 SHA-1 散列（hash，哈希）；
- 这是一个由 40 个十六进制字符（0-9 和 a-f）组成的字符串，基于 Git 中文件的内容或目录结构计算出来；

## git log

要查看一下所有的历史提交记录。

```git
git log //列出每个提交的 SHA-1 校验和、作者的名字和电子邮件地址、提交时间以及提交说明
git log --pretty=oneline // 只显示哈希值和提交说明
git log --pretty=oneline --graph // 可以看merge
```

## git reset

版本回退
HEAD 是当前分支引用的指针，它总是指向该分支上的最后一次提交；
![HEAD](/img/programming/git/head.jpg)
通过 HEAD 来改变 Git 目前的版本指向：

- 上一个版本就是 HEAD^，上上一个版本就是 HEAD^^；
- 如果是上 1000 个版本，我们可以使用 HEAD~1000；
- 我们可以可以指定某一个 commit id；

```git
git reset --hard HEAD^
git reset --hard HEAD~1000
git reset --hard 2d44982
```

## 远程仓库

多人开发中我们会将管理的代码共享到远程仓库中；

对于私有的仓库我们想要进行操作，远程仓库会对我们的身份进行验证：

1. 基于 HTTP 的凭证存储（Credential Storage）；
2. 基于 SSH 的密钥；

### 凭证

HTTP 协议是无状态的连接，所以每一个连接都需要用户名和密码：

- 如果每次都这样操作，那么会非常麻烦；
- 幸运的是，Git 拥有一个凭证系统来处理这个事情；

### SSH 密钥

Secure Shell（安全外壳协议，简称 SSH）是一种加密的网络传输协议，可在不安全的网络中为网络服务提供安全的传输环境。
SSH 以非对称加密实现身份验证。

- 例如其中一种方法是使用自动生成的公钥-私钥对来简单地加密网络连接，随后使用密码认证进行登录；
- 另一种方法是人工生成一对公钥和私钥，通过生成的密钥进行认证，这样就可以在不输入密码的情况下登录；
- 公钥需要放在待访问的电脑之中，而对应的私钥需要由用户自行保管；

如果我们以 SSH 的方式访问 Git 仓库，那么就需要生产对应的公钥和私钥

```git
ssh-keygen -t ed25519 -C “your email"
```

### 管理远程服务器

查看远程仓库

```git
git remote
git remote -v
```

添加远程仓库

```git
git remote add <shortname> <url>
git remote add origin https://github.com/13680905763/blog.git
```

重命名远程仓库

```git
git remote rename origin 666
```

移除远程仓库

```git
git remote remove origin
```

### 本地分支的上游分支（跟踪分支）

本地的主分支是 master，远程的主分支是 main

当我们在本地进行 git pull（git pull = git fetch + git merge） 时

(git fetch 从远程获取新数据，到 git)提示我们当前分支没有 track 的分支

![notrack](/img/programming/git/notrack.jpg)

我们设置本地 master 分支跟踪远程 main 分支

```git
git branch --set-upstream-to=origin/main
```

![set-upstream-to](/img/programming/git/set-upstream-to.jpg)

继续 git pull

(git merge 合并从远程拿到的新数据到当前分支，更新目录)提示我们拒绝合并不相干的历史

![拒绝合并不相干历史](/img/programming/git/拒绝合并不相干历史.jpg)

我们可以通过--allow-unrelated-histories 选项来允许合并两个不相关的历史；

```git
git merge allow-unrelated-histories
```

![allow-unrelated-histories](/img/programming/git/allow-unrelated-histories.jpg)

### 远程仓库的交互

- 从远程仓库 clone 代码
- 将代码 push 到远程仓库：将本地仓库的代码推送到远程仓库中；
- 从远程仓库 fetch 代码：从远程仓库获取最新的代码
- 获取到代码后默认并没有合并到本地仓库，我们需要通过 merge 来合并；
- 从远程仓库 pull 代码：上面的两次操作有点繁琐，我们可以通过一个命令来操作

## 合并冲突

文件冲突时，需要合并

## tag

对于重大的版本我们常常会打上一个标签，以表示它的重要性：

- Git 可以给仓库历史中的某一个提交打上标签；
- 比较有代表性的是人们会使用这个功能来标记发布结点（ v1.0 、 v2.0 等等）；

创建标签：

- Git 支持两种标签：轻量标签（lightweight）与附注标签（annotated）；
- 附注标签：通过-a 选项，并且通过-m 添加额外信息；

```git
git tag v1.0
git tag -a v1.0 -m '附注标签'
```

默认情况下，git push 不会传送标签到远程仓库服务器上。

- 在创建标签后你必推送标签到远程仓库，其他人从仓库中克隆或拉取时也能得到标签；

```git
git push origin v1.0
git push origin --tags // 推送所有标签
```

删除标签

```git
git tag -d v1.0 // 删除本地标签
git push origin --delete v1.0 //删除远程标签
```

检出标签

- 查看某个标签所指向的文件版本，可以使用 git checkout 命令；
- 通常我们在检出 tag 的时候还会创建一个对应的分支（修复 bug）；

```git
git checkout v1.0
```

## branch

### master 分支

Git 的分支，其实本质上是指向 commit object 的可变指针。

- Git 的默认分支名字是 master，在多次提交操作之后，master 分支始终指向最新的提交

Git 的 master 分支并不是一个特殊分支。

- 它就跟其它分支完全没有区别；
- 之所以几乎每一个仓库都有 master 分支，是因为 git init 命令默认创建它，并且大多数人都懒得去改动它；

![master](/img/programming/git/master.jpg)

### 创建分支

Git 是怎么创建新分支的呢？

- 很简单，它只是为你创建了一个可以移动的新的指针；
  - 比如，创建一个 testing 分支， 你需要使用 git branch 命令：

![test-branch](/img/programming/git/test-branch.jpg)

- 那么，Git 又是怎么知道当前在哪一个分支上呢？
  - 也很简单，它也是通过一个名为 HEAD 的特殊指针；

```git
git checkout testing
```

![head-branch](/img/programming/git/head-branch.jpg)

### 分支提交

如果我们切换分支，并在这个分支上提交

![test-commit](/img/programming/git/test-commit.jpg)

切回 master 开发

![checkout-master](/img/programming/git/checkout-master.jpg)
![master-commit](/img/programming/git/master-commit.jpg)

```git
git checkout -b <newbranch> // 创建分支并切换分支
```

### 为什么使用分支

让我们来看一个简单的分支新建与分支合并的例子，实际工作中你可能会用到类似的工作流。

- 开发某个项目，在默认分支 master 上进行开发；
- 实现项目的功能需求，不断提交；
- 并且在一个大的版本完成时，发布版本，打上一个 tag v1.0.0；

继续开发后续的新功能，突然线上 v1.0 出现了 bug 需要紧急修补

- 切换到 tag v1.0.0 的版本，并且创建一个分支 hotfix；

![hotfix](/img/programming/git/hotfix.jpg)

分支上开发、修复 bug：

- 我们可以在创建的 hotfix 分支上继续开发工作或者修复 bug；
- 当完成要做的工作后，重新打上一个新的 tag v1.0.1；

切换回 master 分支，但是这个时候 master 分支也需要修复刚刚的 bug：

- 所以我们需要将 master 分支和 hotfix 分支进行合并；

![merge-hotfix](/img/programming/git/merge-hotfix.jpg)

### 查看和删除分支

```git
git branch // 查看当前所有分支
git branch -v // 同时查看最后一次提交
git branch --merge // 查看所有合并到当前分支的分支
git branch -d hotfix // 删除当前分支
git branch -D hotfix // 强制删除某一分支
```

### 远程分支

远程分支是也是一种分支结构：

- 以 \<remote>/\<branch> 的形式命名的；
  - 如果我们刚刚 clone 下来代码，分支的结构如下：
  - 如果其他人修改了代码，那么远程分支结构如下：
- 你需要通过 fetch 来获取最新的远程分支提交信息；

![remote-branch](/img/programming/git/remote-branch.jpg)

- 推送分支到远程

```git
git push <remote> <branch>
```

- 跟踪远程分支
  - 当克隆一个仓库时，它通常会自动地创建一个跟踪 origin/master 的 master 分支；
  - 如果你愿意的话可以设置其他的跟踪分支
  - 如果你尝试检出的分支 (a) 不存在且 (b) 刚好只有一个名字与之匹配的远程分支，那么 Git 就会为你创建一个跟踪分支；

```git
git checkout --track <remote>/<branch> // 跟踪其他分支
git checkout <branch>
```

- 删除远程分支

```git
git push origin --delete <branch>
```

## git flow（git 工作流）

由于 Git 上分支的使用的便捷性，产生了很多 Git 的工作流：

- 也就是说，在整个项目开发周期的不同阶段，你可以同时拥有多个开放的分支；
- 你可以定期地把某些主题分支合并入其他分支中；

比较常见的 git flow

![git-flow](/img/programming/git/git-flow.jpg)

## Git rebase

Git 中整合来自不同分支的修改主要有两种方法：merge 以及 rebase。

- merge 用于记录 git 的所有历史，那么分支的历史错综复杂，也全部记录下来；
- rebase 用于简化历史记录，将两个分支的历史简化，整个历史更加简洁；

rebase 有一条黄金法则：永远不要在主分支上使用 rebase

- 如果在 main 上面使用 rebase，会造成大量的提交历史在 main 分支中不同；
- 而多人开发时，其他人依然在原来的 main 中，对于提交历史来说会有很大的变化；

![rebase](/img/programming/git/rebase.jpg)

- 在上面的图例中，你可以提取在 C4 中引入的补丁和修改，然后在 C3 的基础上应用一次；
- 在 Git 中，这种操作就叫做 变基（rebase）；
- 你可以使用 rebase 命令将提交到某一分支上的所有修改都移至另一分支上，就好像“重新播放”一样；
- rebase 这个单词如何理解呢？
  - 我们可以将其理解成改变当前分支的 base；
  - 比如在分支 experiment 上执行 rebase master，那么可以改变 experiment 的 base 为 master

```git
git checkout experiment
git rebase master
```

## Git 常见命令速查表

![git-commands](/img/programming/git/git-commands.jpg)
