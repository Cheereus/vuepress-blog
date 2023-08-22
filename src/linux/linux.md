---
title: Linux 常用命令
date: 2023-08-22
comment: false
editLink: false
category:
  - Linux
tag:
  - Linux
---

常用的一些 Linux 命令

<!-- more -->

### ssh 操作

```shell
# 生成新的 ssk key
ssh-keygen -t rsa -C "fanwei@sensetime.com"
```

### 文件操作

```shell
# 远程复制文件
scp -P 端口 -r localfolder user@hostname:remotefolder

# 远程删除文件
ssh -t user@hostname "rm -rf" remotefolder "exit"
```

### Git 操作

```shell
# git 配置, 不加 --global 即为在当前目录设置
git config user.name "fanwei"
git config user.email "fanwei@sensetime.com"

# 查看远程分支
git branch -a

# 查看本地分支
git branch

# 创建 test 分支
git branch test

# 把test分支推到远程分支
git push origin test

# 切换到远程分支
git checkout -b 本地分支名 origin/远程分支名

# 合并远端 master 到b
git merge origin/master

# 更新test分支
git pull origin test

# commit
git commit -m "message"

# add & commit
git commit -a -m "message"
```

### 定时命令

```shell
# 修改定时命令
crontab -e
# 查看定时命令列表
crontab -l
```

### Jenkins 踩坑

需要依赖：

- Java
- Daemonize
- Git

Jenkins 自动打包构建：

- Github 需要配置 auth token
- 博客仓库需要配置 webhook
- Jenkins 需要外网访问地址，可以使用`ngrok` 或`frp` 实现，有自己的外网服务器则使用`frp` 更好

### 邮件发送

首先要安装 `mailx`

```shell
yum install mailx -y
```

使用 `echo` 增加邮件内容

```shell
echo "邮件内容" | mail -s "邮件标题" 接收人@qq.com
```

### frp 命令

```shell
# 进入 frp 目录下
cd frp

# 后台启动服务端
nohup ./frps -c ./frps.ini &

# 后台启动客户端
nohup ./frpc -c ./frpc.ini &
```

### Vim 命令

### 普通模式

```shell
# 前往行末
$ # 即 shift+4

# 删除整行
dd

# 普通模式下
# 查找
/
# 下一个结果
n
# 上一个结果
N 即 shift+n
```

### 压缩及解压缩

```shell
# 把 mydata 目录压缩为 mydata.zip
zip -r mydata.zip mydata
```

### tmux 命令

```shell
# 查看当前 tmux 会话
tmux ls
# 或
tmux list-session

# 接入会话
tmux attach -t 0
# 或
tmux attach -t <session-name>
```

### lrzsz 传输文件

```shell
# 安装
yum install lrzsz

# 上传
rz -e

# 下载
sz filename
```

### 快速生成文件

```shell
dd if=/dev/zero of=10GBfile bs=4k count=10240 # 其中 bs*count 即为文件大小dd if=/dev/zero of=1GBfile bs=1M count=1024
```
