# 前端 code lint 和代码风格最佳实践

1. 安装 ESLint

```shell
yarn add eslint --dev
```

2. 初始化 ESLint 配置

```shell
yarn run eslint --init
```

配置文件

```javascript
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
}
```

3. 安装 Prettier

```shell
yarn add --dev --exact prettier
# 如果需要配置文件（如果需要忽略文件，则创建一个 .prettierignore 文件）
echo {}> .prettierrc.json
```

4. 设置编辑器

