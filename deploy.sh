# 确保脚本抛出遇到的错误
set -e

# 打包生成静态文件
yarn docs:build
printf "打包成功\n"

# 进入打包好的文件夹
cd docs/.vuepress/dist

# 写入域名 EOF是结束符标识
# cat > CNAME << EOF
# 1024bibi.com
# EOF

# 静态页面上传
# 创建git的本地仓库，提交修改
git init
# ??
git checkout -b dist
git add -A
git commit -m 'deploy'
printf "本地提交成功\n"
# 覆盖式地将本地仓库发布至github，因为发布不需要保留历史记录
# 格式为：git push -f git@github.com:'用户名'/'仓库名'.git master
git push -f https://github.com/webVueBlog/learn-web.git dist

printf "dist目录上传成功\n"