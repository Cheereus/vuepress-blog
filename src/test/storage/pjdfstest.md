---
title: 文件系统测试套件 pjd fstest 用法
date: 2023-08-22
comment: false
editLink: false
category:
  - 测试开发
tag:
  - 测试工具
  - 文件存储
  - Linux
---

pjd fstest是一套简化版的文件系统POSIX兼容性测试套件，它可以工作在FreeBSD, Solaris, Linux上用于测试UFS, ZFS, ext3, XFS and the NTFS-3G等文件系统。

<!-- more -->

fstest目前有3601个回归测试用例，测试的系统调用覆盖chmod, chown, link, mkdir, mkfifo, open, rename, rmdir, symlink, truncate, unlink。

下载与安装

```shell
git clone https://github.com/pjd/pjdfstest.git
cd pjdfstest
autoreconf -ifs
./configure
make pjdfstest
```

测试时需要 `root` 权限

```shell
# 切换到要测试的路径
cd /mnt/afs
# 运行测试
prove -rv /path/to/pjdfstest/tests
# pjdfstest/tests 目录下有大量测例, 酌情选取运行
```
