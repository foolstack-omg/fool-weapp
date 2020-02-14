
Component({
    properties: {
        customStyle: {
            type:String,
        },
        // 根据Slot中的元素计算出的ScrollView总宽度 rpx
        scrollViewWidth: {
            type: Number,
            value: 0
        },
        // ScrollView的总高度，调整高度来控制显示行数 rpx
        scrollViewHeight: {
            type: Number,
            value: 0
        },
        // 滚动条的宽度rpx
        scrollBarWidth: {
            type: Number,
            value: 160
        },
        // 滚动条的高度 rpx
        scrollBarHeight: {
            type: Number,
            value: 10
        },
        // 滚动条滑块的宽度 rpx
        scrollBarBlockWidth: {
            type: Number,
            value: 100
        },
        // 滚动条样式
        scrollBarStyle: {
            type: String,
        },
        // 滚动滑块样式
        scrollBarBlockStyle: {
            type: String,
        }

    },
    data: {
        windowWidth: 375, // px
        px2rpxRatio: 0,
        windowWidth2ScrollViewWidthRatio: 0,
        scrollBarBlockLeft: 0,
    },
    lifetimes: {
        attached: function() {
            this.data.windowWidth = wx.getSystemInfoSync().windowWidth

            this.setData({
                px2rpxRatio: Number(750 / this.data.windowWidth).toFixed(3)
            })
            console.log('px2rpxRatio', this.data.px2rpxRatio)
            this.setData({
                windowWidth2ScrollViewWidthRatio: Number(this.data.windowWidth * this.data.px2rpxRatio / this.data.scrollViewWidth).toFixed(3)
            })
            let scrollBarBlockWidth =  Number(this.data.scrollBarWidth * this.data.windowWidth2ScrollViewWidthRatio).toFixed()
            if(scrollBarBlockWidth >= this.data.scrollBarWidth) {
                scrollBarBlockWidth = this.data.scrollBarWidth
            }
            this.setData({
                scrollBarBlockWidth: scrollBarBlockWidth
            })

        },

    },
})
