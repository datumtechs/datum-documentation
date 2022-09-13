#### 文档关联侧边菜单

- 1. 打开根目录下的 /docs/.vuepress/config.js
- 2. 找到输出对象下的theme字段中的sidebar数组, 在此可增加删除菜单栏内容
  - 2.1 基本构成
  - {
  -    text: '简介', // 侧面展示名称
       link: '/',   // 跳转连接
       children: [] // 通过添加children增加子集内容
  - }
  - 2.2 多层配置 
   ```
            {
                // @ts-ignore
                text: '简介', // 并列一级菜单文字
                link: '/',
                children: []
            }, {
                // @ts-ignore
                text: '主要流程', // 并列一级菜单文字
                link: '',
                children: [
                    {
                        text: '开始准备',
                        link: '/主要流程/开始准备.md',
                    },
                    {
                        text: '数据安全存管',
                        link: '/主要流程/数据安全存管.md',
                        collapsible: true, // 菜单是否可以展开内容
                        children: [
                            {
                                text: '支持的传输和存管模式',
                                link: '/主要流程/数据安全存管.md/#支持的传输和存管模式',
                                children: [
                                    {
                                        text: '云服务传输和存管',
                                        link: '/主要流程/数据安全存管.md/#云服务传输和存管',
                                    },
                                    {
                                        text: 'IPFS传输和存管',
                                        link: '/主要流程/数据安全存管.md/#ipfs传输和存管',
                                    },
                                    {
                                        text: '区块链传输和存管',
                                        link: '/主要流程/数据安全存管.md/#区块链传输和存管',
                                    },
                                ]
                            },
                        ]
                    }]
            }
   ```
   - 2.2 跳转路径说明
   - 中文为中文路径, 出现英文必须改成小写:例如: Datum-network应写为datum-network, 否则无法跳转
   - 具体跳转某一锚点, 可将鼠标放置在目标锚点出(#号处),则左下方会出现具体路径, 以该路径为准 
   - 子集菜单可定位到同一页面上
   