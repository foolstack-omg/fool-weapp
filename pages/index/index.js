//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },

    onLoad: function () {
        console.log(wx.getSystemInfoSync().pixelRatio)
        var context = wx.createCanvasContext('canvas')


    },
    onCancasError(e) {
        console.log('onCanvasError:', e)
    }


})
