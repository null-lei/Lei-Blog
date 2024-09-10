
//解决typescript中引入vue文件报错问题
declare module "*.vue" {
    import Vue from 'vue'
    export default Vue
  }