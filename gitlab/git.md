--------------------------------------------------------------------------
                                分支操作
--------------------------------------------------------------------------
  1. git branch // 可以查看当前拥有的分支
  2. git checkout 分支名称 // 可以直接跳转到分支
  3. git checkout -b 分支名称 // -b 是创建分支 并进入
  4. git log // 查看推送版本
  5. 如果出现 未清洁树 情况下是因为 已经commit 了 但是还没推送做修改
  6. git stash // 可以将修改的东西暂存起来, 然后再把远程代码拉下来 再push这个暂存的 若add了  也等同于暂存 进行 pull date
  7. git stash pop // 可以将暂存起来的 取出来
  8. git merge 分支名(dev) --squash // 将dev拉下来的代码 合并到当前分支 log版本 只会压成一个 显示
  9. git branch -vv // 查看分支的父分支
  10. git reset --hard origin/dev //强行把dev分支代码覆盖本地, 
  11. git branch -D dev(分支名) 删除本地分支
  12. git push origin --delete dev(分支名) 删除远程分支


--------------------------------------------------------------------------
                                设置密钥ssh
--------------------------------------------------------------------------
  1. cd ~/ssh 切换到密钥
  2. ls 查看本机是否存在密钥, 包含 id_rsa / id_rsa.pub 文件 表示存在密钥
  3. ssh-keygen -t rsa -C 'email@163.com'  生成密钥 => Enter 输入密码
  4. cat ~/ssh/id_rsa.pub 查看公钥
  5. to github or gitlab bind ssh-keygen
  6. ssh -T git@github.com  检验密钥是否在工作

--------------------------------------------------------------------------
                                提示
--------------------------------------------------------------------------
  1. CONFLICT 提示拉取数据有冲突 需要去进行修改
  2. Squash commit -- not updating HEAD
     Automatic merge failed; fix conflicts and then commit the result.
     在合并过程中有更改代码 并且 commit 之后  再远程拉代码下来 合并到本地会报一个
     这样的错
     意思是 : 自动合并部分失败; 需要更改当前的冲突之后 push , 再将代码重新合并一次
     解决合并 就ok

----------------------------------------------------------------------------
                                配置
----------------------------------------------------------------------------
  1. git config --global alias.st status #git st  // 取别名 快捷
     git config --global alias.ck checkout #git co
     git config --global alias.br branch #git br
     git config --global alias.cm commit #git cm


----------------------------------------------------------------------------
                              小程序开发
----------------------------------------------------------------------------
  1. git clone url  #克隆项目
  2. git checkout dev  #切换dev分支开发 master分支为测试环境
  3. git status #查看当前工作区 修改未push的文件
  4. git add . #添加到暂存区
  5. git commit -m '这里写当前代码 开发的一个过程' #打一个版本
  6. git push origin dev #推送代码到 dev分支
  7. git log #查看本地版本