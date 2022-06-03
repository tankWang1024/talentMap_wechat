// components/tank_swiper/tank_swiper.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        swiperBannerList: {
            type: Array,
            value: [{
                id: 0,
                url: ""
            }]
        },
        swiperConfig: {
            type: Object,
            value: {
                interval: "4000",
                height:"400rpx"
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        swiperCenterItem: 0,
    },
    /**
     * 组件的方法列表
     */
    methods: {
        //轮播图滑动时改变居中项
        handleSwiperChange(e) {
            this.setData({
                swiperCenterItem: e.detail.current,
            })
        },
    }
})