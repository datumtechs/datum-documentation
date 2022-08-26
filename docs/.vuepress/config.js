import { defaultTheme } from '@vuepress/theme-default'
export default {
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '',
            head: '',
            description: '11111111111'
        },
        '/en/': {
            lang: 'en',
            title: 'english',
            head: '',
            description: '22222222222'
        }

    },
    lang: 'zh-CN',
    base: '/',
    head: [
        [
            'link', { rel: 'icon', href: '/img/favicon.svg' }
        ]
    ],
    title: '',
    description: '',
    theme: defaultTheme({
        // 在这里进行配置
        // Public 文件路径
        logo: '/img/datum.png',
        locales: {
            '/': {
                selectLanguageName: '简体中文',
            },
            '/en/': {
                selectLanguageName: 'English',
            },
        },
        sidebarDepth: 3,
        sidebar: [
            // SidebarItem
            {
                // @ts-ignore
                text: '简介',
                link: '/',
                children: []
                // children: [
                //     // SidebarItem
                //     {
                //         text: 'Datum简介',
                //         link: '#Datum简介',
                //     },
                //     {
                //         text: '功能划分',
                //         link: '#功能划分',
                //     },
                // ],
            }, {
                // @ts-ignore
                text: '主要流程',
                link: '',
                children: [
                    // SidebarItem
                    {
                        text: 'Getting Started',
                        link: '/主要流程/GettingStarted.md',
                    },
                    {
                        text: '数据采集与传输',
                        link: '/主要流程/数据采集与传输.md',
                        collapsible: true,
                        children: [
                            {
                                text: '本地存储',
                                link: '/主要流程/数据采集与传输.md/#本地存储',
                            },
                            {
                                text: '云存储',
                                link: '/主要流程/数据采集与传输.md/#云存储',
                            },
                            {
                                text: '区块链存储',
                                link: '/主要流程/数据采集与传输.md/#区块链存储',
                            },
                        ]
                    },
                    {
                        text: '数据资产化',
                        link: '/主要流程/数据资产化.md',
                        collapsible: true,
                        children: [
                            {
                                text: '数据资产NFT',
                                link: '/主要流程/数据资产化.md/#数据资产NFT',
                            },
                            {
                                text: 'NFT发行',
                                link: '/主要流程/数据资产化.md/#数据市场',
                            },
                            {
                                text: '自定义属性',
                                link: '/主要流程/数据资产化.md/#自定义属性',
                            },
                        ]
                    },
                    {
                        text: '数据可信分享与托管',
                        link: '/主要流程/数据可信分享与托管.md',
                        collapsible: true,
                        children: [
                            {
                                text: '可信数据分享',
                                link: '/主要流程/数据可信分享与托管.md/#数据可信分享',
                            },
                            {
                                text: '可信数据托管',
                                link: '/主要流程/数据可信分享与托管.md/#数据可信托管',
                            },
                            {
                                text: '数据一致性验证',
                                link: '/主要流程/数据可信分享与托管.md/#数据一致性验证',
                            },
                        ]
                    },
                    {
                        text: '数据联合查询分析',
                        link: '/主要流程/数据联合查询分析.md',
                        collapsible: true,
                        children: [
                            {
                                text: '两方数据合作',
                                link: '/主要流程/数据联合查询分析.md/#两方数据合作',
                                children: [
                                    {
                                        text: '隐私标签查询',
                                        link: '/主要流程/数据联合查询分析.md/#隐私标签查询',
                                    },
                                    {
                                        text: '隐私SQL查询',
                                        link: '/主要流程/数据联合查询分析.md/#隐私SQL查询',
                                    },
                                ]
                            },
                            {
                                text: '多方数据协作',
                                link: '/主要流程/数据联合查询分析.md/#多方数据协作',
                                children: [
                                    {
                                        text: '联合统计分析',
                                        link: '/主要流程/数据联合查询分析.md/#联合统计分析',
                                    },
                                    {
                                        text: '联合模型训练',
                                        link: '/主要流程/数据联合查询分析.md/#联合模型训练',
                                    },
                                    {
                                        text: '联合模型预测',
                                        link: '/主要流程/数据联合查询分析.md/#联合模型预测',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        text: '数据服务资产化',
                        link: '/主要流程/数据服务资产化.md',
                        children: [

                        ]
                    },
                ],
            }, {
                // @ts-ignore
                text: '参考',
                link: '',
                children: [
                    {
                        text: '隐私AI框架Rosetta',
                        link: '/参考/隐私AI框架Rosetta.md',
                        children: []
                    },
                ],
            }
        ],
        navbar: [
            // NavbarItem
            {
                text: 'Home',
                link: '/home',
            },
            // NavbarGroup
            {
                text: 'produces',
                children: [ '/group/foo.md', '/group/bar.md' ],
            },
        ],
        // URL
    }),
}