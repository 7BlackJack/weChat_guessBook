"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  (_easycom_uni_icons2 + _easycom_uni_row2 + _easycom_uni_notice_bar2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
const _easycom_uni_notice_bar = () => "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_row + _easycom_uni_notice_bar)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const token = common_vendor.computed$1(() => common_vendor.index.getStorageSync("token"));
    const userProfileList = common_vendor.ref([]);
    const userInfo = common_vendor.ref({});
    const messageCount = common_vendor.ref(0);
    const userLikeCount = common_vendor.ref(0);
    const ageDateDiff = common_vendor.ref(0);
    const setUserInfo = async () => {
      await common_vendor.index.getUserProfile({
        desc: "\u7528\u4E8E\u83B7\u53D6\u7528\u6237\u4FE1\u606F(Wexin)",
        success: (res) => {
          console.log(res);
          userInfo.value = res.userInfo;
          console.log(userInfo);
          common_vendor.index.setStorageSync("token", res.signature);
        },
        fail: (err) => {
          console.log(err);
          wx.showToast({
            title: "\u83B7\u53D6\u5931\u8D25",
            icon: "error",
            duration: 2e3
          });
        }
      });
    };
    const getUserInfo = () => {
      common_vendor.pn.callFunction({
        name: "userInfo",
        data: {
          api: "getUserInfo",
          token: token.value
        }
      }).then((res) => {
        console.log(res);
        userInfo.value = res.result;
        getMessageCount(userInfo.value._id);
        getUserLikeCount(userInfo.value._id);
        getAgeDateDiff(userInfo.value._id);
        common_vendor.index.hideLoading();
        console.log(res.result);
      }).catch((err) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          title: "\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25",
          icon: "error"
        });
      });
    };
    const db = common_vendor.pn.database();
    const getMessageCount = (val) => {
      db.collection("message").where(`userId == "${val}"`).groupBy("userId").groupField("sum(1) as messageCount").get().then((res) => {
        const msResult = res.result.data[0];
        messageCount.value = msResult.messageCount;
        console.log(messageCount.value);
      });
    };
    const getUserLikeCount = (val) => {
      db.collection("message").where(`userId == "${val}"`).groupBy("userId").groupField("sum(likeNumber) as userLikeCount").get().then((res) => {
        const msResult = res.result.data[0];
        userLikeCount.value = msResult.userLikeCount;
        console.log(userLikeCount.value);
      });
    };
    const getAgeDateDiff = (val) => {
      db.collection("user").where(`_id == "${val}"`).get().then((res) => {
        const msResult = res.result.data[0];
        const creatAt = common_vendor.dayjs(msResult.createdAt).format("YYYY-MM-DD HH:mm:ss");
        ageDateDiff.value = common_vendor.dayjs().diff(common_vendor.dayjs(creatAt), "day");
        console.log(ageDateDiff.value);
      });
    };
    common_vendor.onLoad(() => {
      common_vendor.index.showLoading({
        title: "\u9875\u9762\u52A0\u8F7Ding"
      });
      getUserInfo();
    });
    common_vendor.watch(() => userProfileList.value, () => {
      common_vendor.pn.callFunction({
        name: "userInfo",
        data: {
          api: "updateUserInfo",
          nickName: userProfileList.value.nickName,
          avatarUrl: userProfileList.value.avatarUrl,
          token: token.value
        }
      }).then((res) => {
        common_vendor.index.showLoading();
        console.log("\u4FEE\u6539\u4FE1\u606F\u6210\u529F", res);
        getUserInfo();
      });
    }, {
      deep: true
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          type: "gear",
          size: "20"
        }),
        b: common_vendor.o(($event) => setUserInfo()),
        c: common_vendor.unref(token) && userInfo.value.avatarUrl
      }, common_vendor.unref(token) && userInfo.value.avatarUrl ? {
        d: userInfo.value.avatarUrl,
        e: common_vendor.o(($event) => setUserInfo())
      } : {}, {
        f: common_vendor.unref(token) && userInfo.value.nickName
      }, common_vendor.unref(token) && userInfo.value.nickName ? {
        g: common_vendor.t(userInfo.value.nickName)
      } : {}, {
        h: common_vendor.p({
          color: "#004dfc",
          type: "calendar",
          size: "24"
        }),
        i: common_vendor.t(ageDateDiff.value),
        j: common_vendor.p({
          color: "#00ba9d",
          type: "medal",
          size: "24"
        }),
        k: common_vendor.p({
          color: "#715fc2",
          type: "chat",
          size: "24"
        }),
        l: common_vendor.t(messageCount.value),
        m: common_vendor.p({
          color: "#ff562d",
          type: "star",
          size: "24"
        }),
        n: common_vendor.t(userLikeCount.value),
        o: common_vendor.p({
          color: "#ff562d",
          type: "redo-filled",
          size: "28"
        }),
        p: common_vendor.p({
          ["open-type"]: "share"
        }),
        q: common_vendor.p({
          color: "#ff562d",
          type: "weixin",
          size: "28"
        }),
        r: common_vendor.p({
          ["open-type"]: "contact"
        }),
        s: common_vendor.p({
          speed: "50",
          showIcon: true,
          scrollable: true,
          single: true,
          text: "\u5728\u8FD9\u91CC\u53EF\u4EE5\u5199\u4E0B\u4EFB\u4F55\u4F60\u60F3\u8BF4\u7684"
        }),
        t: common_vendor.p({
          text: "\r\n            \u5728\u8FD9\u91CC\uFF0C\u4F60\u53EF\u4EE5\u968F\u5FC3\u6240\u6B32\uFF0C\u7545\u6240\u6B32\u8A00\r\n            \u8BB0\u5F55\u4F60\u751F\u6D3B\u7684\u70B9\u70B9\u6EF4\u6EF4\r\n            \u7559\u4E0B\u4F60\u7684\u60F3\u6CD5\uFF0C\u8BA9\u522B\u4EBA\u770B\u5230\r\n            \u770B\u5230\u522B\u4EBA\u7684\u7559\u8A00\uFF0C\u7ED9\u4F60\u4E2D\u610F\u7684\u7559\u8A00\u70B9\u8D5E\uFF0C\u5BFB\u627E\u77E5\u5DF1\r\n            \u4F60\u53EF\u4EE5\u770B\u5230\u4F60\u7684\u7559\u8A00\u65F6\u95F4\uFF0C\u56DE\u5473\u4F60\u53D1\u5E03\u7559\u8A00\u65F6\u7684\u5FC3\u60C5"
        })
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u684C\u9762\u6587\u4EF6/test/weChat-guessBook/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
