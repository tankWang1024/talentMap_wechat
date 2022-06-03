##### WeUI组件库 abort
通过 useExtendedLib 扩展库的方式引入 WeUI，不占用小程序的包体积。
```text
1. 在 app.json 中添加如下配置：
"useExtendedLib": {
    "weui": true
},
2. 在页面的 JSON 文件中引入要使用的 WeUI 组件
{
  "usingComponents": {
    "mp-dialog": "weui-miniprogram/dialog/dialog"
  }
}
3. 在页面中使用 weui
<view class="container">
  <mp-dialog title="test" show="{{true}}" bindbuttontap="tapDialogButton" buttons="{{[{text: '取消'}, {text: '确认'}]}}">
    <view>test content</view>
  </mp-dialog>
</view>
```
WeUI官方文档写的太差，缺少示例，换组件库。
##### 自定义tabbar
```
app.js globaldata定义 tabbarList， tabChange跳转
在tabbar页面 使用mp-tabbar组件，并引入globaldata中的tabbarlist和tabChange
<mp-tabbar ext-class="foot-tabbar" style="position:fixed;bottom:0;width:100%;left:0;right:0;" list="{{list}}" bindchange="tabChange" current="1"></mp-tabbar>
```
##### Lin UI组件库
官网 https://doc.mini.talelin.com/start/
组件按需引入：lin-ui/组件名