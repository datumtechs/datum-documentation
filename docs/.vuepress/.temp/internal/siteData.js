export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/img/favicon.svg\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"\",\"head\":\"\",\"description\":\"datum-documentation [chinese]\"},\"/en/\":{\"lang\":\"en\",\"title\":\"english\",\"head\":\"\",\"description\":\"datum-documentation [english]\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
