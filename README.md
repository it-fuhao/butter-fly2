# butter-fly3


todo

安装butter-fly的时候，如果项目没有安装vant，应该自动把vant也装上才行


vant样式文件还是得全量引入

组件构建产物dist，需要业务项目引入，现在是引入的src/index.vue，需要区分开发和生产环境，开发环境使用withInstall，生产环境使用dist产物