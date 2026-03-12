#!/bin/bash

set -e

echo "开始部署..."

# 1. 拉取代码
echo "拉取最新代码..."
git pull origin $(git branch --show-current)

 # 2. 构建
echo "开始构建..."
BASE_URL=/ npm run build

# 3. 移动到 nginx 目录
NGINX_DIR="/var/www/trainlobster.com"
BACKUP_DIR="/usr/share/nginx/trainlobster_backup_$(date +%Y%m%d_%H%M%S)"

echo "部署静态文件到 nginx..."
rm -rf "$NGINX_DIR"/*
cp -r build/* "$NGINX_DIR/"

# 4. 重启 nginx
echo "重启 nginx..."
nginx -s reload

echo "部署完成！"
