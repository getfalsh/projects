

Page({
  data: {
    navData: [
      {
        name: "今日求购",  //文本
        current: 1,    //是否是当前页，0不是  1是
        style: 0,     //样式
        ico: 'icon-qiugouguanli',  //不同图标
        fn: 'gotoCompanyIndex'   //对应处理函数
      }, {
        name: "名片",
        current: 0,
        style: 0,
        ico: 'icon-mingpianjia',
        fn: 'gotobusinessCard'
      }, {
        name: "发布",
        current: 0,
        style: 1,
        ico: '',
        fn: 'gotopublish'
      }, {
        name: "消息",
        current: 0,
        style: 0,
        ico: 'icon-yikeappshouyetubiao35',
        fn: 'gotoMessages'
      }, {
        name: "我的",
        current: 0,
        style: 0,
        ico: 'icon-wode',
        fn: 'bindViewMy'
      },
    ],

  },

})
