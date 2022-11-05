<template>
    <view class="app-main">

        <view class="app-profile-box">
            <view class="app-setting" @click="setUserInfo()">
                <uni-icons type="gear" size="20"></uni-icons>
            </view>
            <image width="150rpx" height="150rpx" v-if="token&&userInfo.avatarUrl" :src="userInfo.avatarUrl"
                @click="setUserInfo()"></image>
            <image v-else class="logo-img"
                src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f7df76d0-0735-45ba-bd49-e366b3796e28/e89dbb99-fcd8-4182-ad73-82395d85bb9f.png">
            </image>
            <view class="app-profile-box-name">
                <!-- 登录状态 -->
                <text class="uer-name" v-if="token&&userInfo.nickName">{{userInfo.nickName}}</text>
                <text class="uer-name" v-else>匿名用户</text>
            </view>

        </view>

        <view class="app-activity-box">
            <view class="activity-info-boxes">
                <view class="activity-info-box time">
                    <view class="info-icon-wrapper">
                        <uni-icons color="#004dfc" type="calendar" size="24"></uni-icons>
                    </view>
                    <view class="info-text-wrapper">
                        <text class="info-text-upper">{{ageDateDiff}}天</text>
                        <text class="info-text-bottom">留言Age</text>
                    </view>
                </view>
                <view class="activity-info-box atendee">
                    <view class="info-icon-wrapper">
                        <uni-icons color="#00ba9d" type="medal" size="24"></uni-icons>
                    </view>
                    <view class="info-text-wrapper">
                        <text class="info-text-upper">0个</text>
                        <text class="info-text-bottom">金币Coin</text>
                    </view>
                </view>
                <view class="activity-info-box meeting">
                    <view class="info-icon-wrapper">
                        <uni-icons color="#715fc2" type="chat" size="24"></uni-icons>
                    </view>
                    <view class="info-text-wrapper">
                        <text class="info-text-upper">{{messageCount}}条</text>
                        <text class="info-text-bottom">留言Message</text>
                    </view>
                </view>
                <view class="activity-info-box reject">
                    <view class="info-icon-wrapper">
                        <uni-icons color="#ff562d" type="star" size="24"></uni-icons>
                    </view>
                    <view class="info-text-wrapper">
                        <text class="info-text-upper">{{userLikeCount}}赞</text>
                        <text class="info-text-bottom">获赞Likes</text>
                    </view>
                </view>
            </view>
        </view>

        <view class="activity-info-boxes">

            <uni-row class="activity-info-box" open-type="share">
                <uni-icons color="#ff562d" type="redo-filled" size="28"></uni-icons>
                <text class="text">分享给好友</text>
            </uni-row>
            <uni-row class="activity-info-box" open-type="contact">
                <uni-icons color="#ff562d" type="weixin" size="28"></uni-icons>
                <text class="text">在线客服</text>
            </uni-row>

        </view>

        <!--  helper标题栏 -->
        <uni-notice-bar class="notice" speed=50 showIcon scrollable single text="在这里可以写下任何你想说的">
        </uni-notice-bar>

        <uni-notice-bar text="
            在这里，你可以随心所欲，畅所欲言
            记录你生活的点点滴滴
            留下你的想法，让别人看到
            看到别人的留言，给你中意的留言点赞，寻找知己
            你可以看到你的留言时间，回味你发布留言时的心情">
        </uni-notice-bar>



    </view>
</template>

<script setup>
    import {
        computed,
        customRef,
        ref,
        watch
    } from 'vue'
    import {
        onLoad
    } from '@dcloudio/uni-app'
    import dayjs from 'dayjs'

    const token = computed(() => uni.getStorageSync('token'))
    const userProfileList = ref([])
    const userInfo = ref({})
    const messageCount = ref(0)
    const userLikeCount = ref(0)
    const ageDateDiff = ref(0)


    const setUserInfo = async () => {
        await uni.getUserProfile({
            desc: '用于获取用户信息(Wexin)', // 这个参数是必须的  声明获取用户个人信息后的用途
            success: res => {
                // 用户信息
                console.log(res);
                // console.log(token);
                userInfo.value = res.userInfo
                console.log(userInfo);
                uni.setStorageSync('token', res.signature);
                // console.log(token);
            },
            fail: err => {
                console.log(err)
                wx.showToast({
                    title: "获取失败",
                    icon: "error",
                    duration: 2000,
                });
            }
        })
    }



    const getUserInfo = () => {
        uniCloud.callFunction({
            name: 'userInfo',
            data: {
                api: 'getUserInfo',
                token: token.value
            }
        }).then(res => {
            console.log(res);
            userInfo.value = res.result
            getMessageCount(userInfo.value._id)
            getUserLikeCount(userInfo.value._id)
            getAgeDateDiff(userInfo.value._id)
            uni.hideLoading()
            console.log(res.result)
        }).catch(err => {
            uni.hideLoading()
            uni.showToast({
                title: '获取用户信息失败',
                icon: 'error'
            })
        })
    }
    //查询用户发表评论数
    const db = uniCloud.database()
    const getMessageCount = (val) => {
        db.collection('message').where(`userId == "${val}"`)
            .groupBy('userId')
            .groupField('sum(1) as messageCount')
            .get()
            .then(res => {
                const msResult = res.result.data[0]
                messageCount.value = msResult.messageCount
                console.log(messageCount.value)
            })
    }
    //查询客户获得的点赞数
    const getUserLikeCount = (val) => {
        db.collection('message').where(`userId == "${val}"`)
            .groupBy('userId')
            .groupField('sum(likeNumber) as userLikeCount')
            .get()
            .then(res => {
                const msResult = res.result.data[0]
                userLikeCount.value = msResult.userLikeCount
                console.log(userLikeCount.value)
            })
    }

    //查询用户注册天数
    const getAgeDateDiff = (val) => {
        db.collection('user').where(`_id == "${val}"`).get()
            .then(res => {
                const msResult = res.result.data[0]
                const creatAt = dayjs(msResult.createdAt).format('YYYY-MM-DD HH:mm:ss')
                ageDateDiff.value = dayjs().diff(dayjs(creatAt), 'day')
                console.log(ageDateDiff.value)
            })
    }


    //页面加载时...
    onLoad(() => {
        uni.showLoading({
            title: "页面加载ing"
        })
        // console.log(uni.getStorageSync('token'));
        getUserInfo()
    })

    watch(() => userProfileList.value, () => {
        uniCloud.callFunction({
            name: 'userInfo',
            data: {
                api: 'updateUserInfo',
                nickName: userProfileList.value.nickName,
                avatarUrl: userProfileList.value.avatarUrl,
                token: token.value
            }
        }).then(res => {
            uni.showLoading()
            console.log('修改信息成功', res)
            getUserInfo()

        })
    }, {
        deep: true
    })
</script>

<style lang="scss">
    @import url("@/src/style/style.scss");
</style>
