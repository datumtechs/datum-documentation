export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"Datum\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"Datum\",\"description\":\"页面的描述\"},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Datum简介\",\"slug\":\"datum简介\",\"children\":[]},{\"level\":2,\"title\":\"功能划分\",\"slug\":\"功能划分\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
