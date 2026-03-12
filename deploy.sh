#!/bin/bash

set -e

echo "================== 开始部署 OpenClawShare =================="

# 1. 拉取代码
echo "拉取最新代码..."
git pull origin $(git branch --show-current)

# 2. 清理旧依赖和缓存
echo "清理旧依赖和缓存..."
rm -rf node_modules package-lock.json pnpm-lock.yaml
npm cache clean --force

# 3. 设置国内镜像，提高 pnpm/npm 安装速度
echo "设置 npm 国内镜像..."
npm config set registry https://registry.npmmirror.com

# 4. 安装固定版本 Docusaurus v2 依赖
echo "安装 Docusaurus v2 依赖..."
pnpm install @docusaurus/core@2.3.0 \
             @docusaurus/plugin-content-blog@2.3.0 \
             @docusaurus/theme-classic@2.3.0 \
             @docusaurus/preset-classic@2.3.0 \
             @docusaurus/types@2.3.0

# 5. 安装其他项目依赖
echo "安装其他依赖..."
pnpm install

# 6. 构建项目
echo "开始构建..."
BASE_URL=/ npm run build

# 7. 移动到 nginx 目录
NGINX_DIR="/var/www/trainlobster.com"
BACKUP_DIR="/usr/share/nginx/trainlobster_backup_$(date +%Y%m%d_%H%M%S)"

echo "部署静态文件到 nginx..."
rm -rf "$NGINX_DIR"/*
cp -r build/* "$NGINX_DIR/"

# 8. 重启 nginx
echo "重启 nginx..."
nginx -s reload

echo "================== 部署完成 =================="
