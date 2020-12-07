# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)


## 前端学习小能手 frontEnd-learningExpert
  一个关于前端学习旅程及面试提点的云开发小程序

- 模块
  - 首页-----面经
    1. 轮播图 
      - swiper swiper-item
      - 需从服务端获取需要轮播的六篇面经文章的信息，提取其文章的首张图片与标题并将其显示出来，当点击当前轮播图时跳转到该面经文章（未做）
    2. 公告栏
      - 使用vant中naticeBar组件
      - 当点击公告时，跳转到该公告信息（未做）
    3. 打卡
      - 设置button按钮进行打卡
        - 将星期几、打卡界面的是否显示标志、已打卡界面的是否显示标志存储到本地存储当中 ( wx.setStorage()、wx.getStorage() ) 
        - (1) 未打卡时，显示打卡按钮
            - 通过对本地存储中的weekday数据与获取到的当前weekday进行比较，若两者不相等，则显示打卡界面，不显示已打卡界面
          (2) 当点击按钮打卡时，显示已打卡界面
            - 在点击按钮上绑定点击事件，将打卡界面修改为不显示，将已打卡界面修改为显示状态
            - 使用wx.setStorage()将星期几weekday、打卡界面是否显示标记clock、已打卡界面是否显示标记clocked存储到本地存储中
            - 在onShow生命周期中，调用wx.getStorage()，使得每一次跳到该界面时都会被调用，用户体验性更好，而onLoad()只会加载一次
      - 获取当前的实时日期时间及星期几
        时间会进行实时更新
    4. 面经分类 --- 九宫格
      - html
      - css
      - javascript
      - vue
      - react
      - node
      - 工程化
      - 网络&安全
      - webpack
      - 算法
      - 编程题
      - 设计模式
      - 小程序
      - typeScript
      - docker
      - git 
      - linux
      - go 
      - flutter
      - 其他

  - 时钟/社区
  
  - 个人笔记

  - 我