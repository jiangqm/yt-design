
包管理：pnpm
相较于npm的优势： pnpm 使用一种称为 "快照链接" 的方法来管理依赖。它在一个全局的 "pnpm-store" 中存储所有的包，不同项目之间可以共享已安装的包。这样可以减少磁盘空间占用，并加快安装速度。
代码规范：eslint + prettier + husky
a. eslint: 代码检查
pnpm i eslint eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
npx eslint --init

b. prettier：代码格式化
pnpm i prettier eslint-config-prettier eslint-plugin-prettier -D
配置文件
module.exports = {
    tabWidth: 2,
    semi: false, // 未尾分号, default:  true
    singleQuote: false, // 单引号 default: false
    trailingComma: "none", // 未尾分号 default: es5    all | none | es5
    arrowParens: "avoid", // default: always
    proseWrap: "never",
    endOfLine: "auto" // default lf
};


c. husky：提交规范
pnpm i husky lint-staged -D
npx husky install

npx husky add .husky/pre-commit 'npx lint-staged'
创建配置 .lintstagedrc 控制文件检查范围
{
    "*.{js,ts,tsx}": "eslint --cache --fix"
}

单元测试：Vitest
文档系统：Vitepress 

组件库基础框架： vite+react+ts+swc
pnpm create vite
