# 前端 code lint 和代码风格实践

## 环境准备
确保计算机已经安装 <br />
1. vscode
2. 安装Node环境和eslint,prettier扩展
3. 创建空文件夹,作为示例
4. 初始化: npm init -y

## 初始化Eslint配置并且集成Airbnb配置

1. 安装 ESLint

```shell
yarn add eslint --dev
```

2. 初始化 ESLint 配置

```shell
yarn run eslint --init 依次点击回车
```
3. 安装airbnb配置
```shell
npm i eslint-config-airbnb-base -D
```
4. 修改.eslintrc.js
  - 在"extends"中追加"airbnb-base"


## 安装 Prettier

```shell
yarn add --dev --exact prettier
# 如果需要配置文件（如果需要忽略文件，则创建一个 .prettierignore 文件）
echo {}> .prettierrc.js
```

4. 设置编辑器

## 安装husky lint-staged

```shell
npm i lint-staged husky -D
npm set-script prepare "husky install"
npm run prepare
npx husky add .husky/pre-commit "npx lint-staged"
```

- 根目录创建 .lintstagedrc.json

## 安装提交信息依赖

```shell
npm i commitlint @commitlint/config-conventional -D
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

## 安装辅助提交依赖
```shell
npm i commitizen cz-conventional-changelog -D
npm set-script commit "git-cz"
```

## 自定义提交规范
```shell
npm i -D commitlint-config-cz  cz-customizable
```

## CHANGELOG
```shell
npm i -D conventional-changelog-cli
```

- 新增.cz-config.js配置
- package.json中, 将原来commit配置,变更为自定义配置
```json
 "config": {
        "commitizen": {
            "path": "node_modules/cz-customizable"
        }
    }
```

