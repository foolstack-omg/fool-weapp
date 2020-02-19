
Page({
    data: {
        cursorWidth: 0,
        intervalId: null,
        titles: ['全部', '直播', '好货', '每日生鲜', '笑一笑'],
        current: 0,
        scrollLeft: 0,
        transition: 0,
    },
    onLoad() {
        // console.log(this.data.titles.length)
        const query = wx.createSelectorQuery()
        query.select('#cursor').boundingClientRect((rect) => {
            this.data.cursorWidth = rect.width
        }).exec()
    },
    onReady() {

    },
    swiperChange(e) {
        // console.log(e.detail.current)
        this.setData({
            current: e.detail.current
        })
        let current = e.detail.current

        let min = (current + 1 - 4) * this.data.cursorWidth;
        let max = (current + 1 - 4 + 3) * this.data.cursorWidth;

        if(this.data.scrollLeft <= min ) {
            this.setData({
                scrollLeft: min
            })
        }
        if(this.data.scrollLeft >= max) {
            this.setData({
                scrollLeft: max,
            })
        }

    },
    navScroll(e) {
        this.data.scrollLeft = e.detail.scrollLeft
    },
    clickNav(e) {
        this.setData({
            current: e.currentTarget.dataset.index
        })
    }
})
