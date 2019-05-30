var dateUtil = require("./util.js")


function log(qqMapSDK, logUrl, data) {

  var openid = getApp().globalData.openid
  //获取经纬度
  //获取省市区
  //获取用户基本信息
  //获取当前的经纬度
  wx.getLocation({
    success: function (res) {
      var log = res.longitude;
      var lat = res.latitude;
      //调用腾讯地图的API
      qqMapSDK.reverseGeocoder({
        location: {
          latitude: lat,
          longitude: log
        },
        success: function (res) {
          var province = res.result.address_component.province;
          var city = res.result.address_component.city;
          var district = res.result.address_component.district;

          data["time"] = dateUtil.formatTime(new Date());
          data["openid"] = openid;
          data["longitude"] = log;
          data["latitude"] = lat;
          data["province"] = province;
          data["city"] = city;
          data["district"] = district;

          //向日志服务器发送请求
          wx.request({
            url: "http://localhost:8080/" + logUrl,
            method: 'POST',
            data: data,
            success: function (res) {
              //console.log(res)
            }
          })

        }
      });
    },
  })



}

module.exports = {
  log
}