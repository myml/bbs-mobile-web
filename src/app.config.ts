export default defineAppConfig({
  pages: ["pages/index/index", "pages/thread/thread", "pages/account/account"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  plugins: {
    captcha: {
      version: "1.3.0",
      provider: "wxb7c8f9ea9ceb4663",
    },
  },
});
