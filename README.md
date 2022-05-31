##### WeUI组件库
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