---
title: Ceph 入门
date: 2023-08-22
comment: false
editLink: false
category:
  - 对象存储
tag:
  - OSS
  - Ceph
---

常用的 Ceph，Rados 及 awscli 的命令

<!-- more -->

### radosgw-admin 基本命令（rgw）

```bash
# 创建用户
radosgw-admin user create --uid="xxxx" --display_name="xxxx"
# 查询用户
radosgw-admin user info --display_name="xxxx"
# 删除用户
radosgw-admin user rm --uid="xxxx"
# 删除用户和与他相关的桶及内容
radosgw-admin user rm --uid="xxxx" --purge-data
# 设置quota
radosgw-admin quota enable --uid="xxxx" --quota-scope=user --max-size=1073741824
```

### awscli 基本命令（s3cmd 类似）

```bash
# 查看默认账号下的桶列表
aws s3 ls
# 创建桶
aws s3 mb s3://$bucket_name
# 查看桶内文件
aws s3 ls s3://$bucket_name
# 上传文件
aws s3 cp $local_path s3://$remote_path
# 下载文件
aws s3 cp $local_path s3://$remote_path
# 删除桶
aws s3 rb s3://$bucket_name
# 强制删除非空桶
aws s3 rb s3://$bucket_name --force
# 删除文件
aws s3 rm s3://$remote_path
# 删除目录
aws s3 rm s3://$remote_path --recursive
```

### awscli 多账号配置

在 `~/.aws/credentials` 文件中添加配置各个账号的 AK & SK，例如：

```yaml
[default]
aws_access_key_id = admin
aws_secret_access_key = admin
[user2]
aws_access_key_id = xxx
aws_secret_access_key = xxxxxx
```

在执行 awscli 命令时，在命令最后加上 `--profile username` 即可

配置中的 default 项即为不带 `profile` 参数时的默认值