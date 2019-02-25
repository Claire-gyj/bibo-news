# bibo-知乎日报

> 用知乎日报开放的API，仿写的一个web app

## 遇到的主要问题

### 一、跨域请求资源
修改webpack配置，在config文件夹下的index.js文件内设置proxyTable。
```
proxyTable: {
      '/api': {
        // 测试环境
        target: 'http://news-at.zhihu.com/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }

```

### 二、动态路由组件复用时不更新
当某个场景中vue-router从/post-page/a，跳转到/post-page/b。然后我们惊人的发现，页面跳转后数据竟然没更新？！原因是vue-router"智能地"发现这是同一个组件，然后它就决定要复用这个组件，所以你在created函数里写的方法压根就没执行。通常的解决方案是监听$route的变化来初始化数据，如下：

```
data() {
  return {
    loading: false,
    error: null,
    post: null
  }
},
watch: {
  '$route': {        // 使用watch来监控是否是同一个路由
    handler: 'resetData',
    immediate: true
  }
},
methods: {
  resetData() {
    this.loading = false
    this.error = null
    this.post = null
    this.getPost(this.$route.params.id)
  },
  getPost(id){ }
}
```
