//导入日志工具
var logger = require("../../utils/logUtils.js")

//导入腾讯地图api
var QQMapWX = require('../../lib/qqmap-wx-jssdk.js');
var qqmapsdk;

Page({
  data: {
    // 故障车编号
    bikeNo: "",
    // 故障类型数组
    rtypes: []
  },

  onLoad: function (options) {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'EBMBZ-N5FWU-JYOVP-B3LKB-63JCQ-XBFHT'
    });
  },

  onShow: function() {
    logger.log(
      qqmapsdk,
      "/kafka/access",
      {
        etype: 0,
        page: "warn",
      }
    )
  },

  // 勾选故障类型，获取类型值存入checkboxValue
  checkboxChange: function (e) {
    var that = this
    var values = e.detail.value
    console.log(values)
    that.setData({
      rtypes: values
    })
  },

  // 提交到服务器
  formSubmit: function (e) {
    var bikeNo = e.detail.value.bikeNo;
    //报修部件是一个数组
    var rtypes = this.data.rtypes;
    //1.向业务系统发生请求，将车辆状态置位报修

    //2.向日志采服务器记录log
    wx.navigateTo({
      url: '../index/index',
    })
    logger.log(
      qqmapsdk,
      "/kafka/access",
      {
        "etype": 1,
        "page": "warn",
        "bikeNo": bikeNo,
        "rtypes": rtypes
      })
  },
})