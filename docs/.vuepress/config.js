import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import config from '../env'

export default {
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '让数据流动起来',
            head: [
                [
                    'link', { rel: 'icon', href: '/img/favicon.svg' }
                ]
            ],
            description: 'datum-documentation [chinese]'
        },
        '/en/': {
            lang: 'en',
            title: 'Let the data flow',
            head: [
                [
                    'link', { rel: 'icon', href: '/img/favicon.svg' }
                ]
            ],
            description: 'datum-documentation [english]'
        },
    },
    dest: "public",
    plugins: [
        backToTopPlugin(),
        nprogressPlugin(),
        externalLinkIconPlugin({
            // 配置项
        }),
        shikiPlugin({
            // 配置项
            theme: 'monokai'
        }),
        docsearchPlugin({
            // TODO search appId
            apiKey: '<API_KEY>',
            indexName: '<INDEX_NAME>',
            locales: {
                '/en': {
                    placeholder: 'Search Documentation',
                    translations: {
                        button: {
                            buttonText: 'Search Documentation',
                        },
                    },
                },
                '/': {
                    placeholder: '搜索文档',
                    translations: {
                        button: {
                            buttonText: '搜索文档',
                        },
                    },
                },
            },
            appId: ''
        }),
    ],
    lang: 'zh-CN',
    base: '/',
    theme: defaultTheme({
        // 在这里进行配置
        // Public 文件路径
        editLink: false,
        logo: '/img/datum.png',
        contributors: false,
        lastUpdated: false,
        locales: {
            '/': {
                selectLanguageName: '简体中文',
            },
            '/en/': {
                selectLanguageName: 'English',
            },
        },
        repo: 'https://github.com/datumtechs',// REPO 地址
        sidebarDepth: 3,
        sidebar: [
            // SidebarItem
            {
                // @ts-ignore
                text: '简介',
                link: '/',
                children: []
            }, {
                // @ts-ignore
                text: '功能介绍',
                link: '',
                children: [
                    // SidebarItem
                    {
                        text: '开始准备',
                        link: '/功能介绍/开始准备.md',
                    },
                    {
                        text: '数据安全上链',
                        link: '/功能介绍/数据安全上链.md',
                        collapsible: true,
                        children: [
                            {
                                text: '支持的传输和存管模式',
                                link: '/功能介绍/数据安全上链.md/#支持的传输和存管模式',
                                children: [
                                    {
                                        text: '云服务传输和存管',
                                        link: '/功能介绍/数据安全上链.md/#云服务传输和存管',
                                    },
                                    {
                                        text: 'IPFS传输和存管',
                                        link: '/功能介绍/数据安全上链.md/#ipfs传输和存管',
                                    },
                                    {
                                        text: '区块链传输和存管',
                                        link: '/功能介绍/数据安全上链.md/#区块链传输和存管',
                                    },
                                ]
                            },
                            {
                                text: '元数据发布',
                                link: '/功能介绍/数据安全上链.md/#元数据发布',
                                children: [
                                    {
                                        text: '提取元数据',
                                        link: '/功能介绍/数据安全上链.md/#提取元数据',
                                    },
                                    {
                                        text: '发布元数据',
                                        link: '/功能介绍/数据安全上链.md/#发布元数据',
                                    },
                                    {
                                        text: '发布数据Hash',
                                        link: '/功能介绍/数据安全上链.md/#发布数据Hash',
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        text: '数据资产化',
                        link: '/功能介绍/数据资产化.md',
                        collapsible: true,
                        children: [
                            {
                                text: 'Token',
                                link: '/功能介绍/数据资产化.md/#token',
                            },
                            {
                                text: 'NFT',
                                link: '/功能介绍/数据资产化.md/#nft',
                            },
                            {
                                text: '交易所上架',
                                link: '/功能介绍/数据资产化.md/#交易所上架',
                            },
                        ]
                    },
                    {
                        text: '数据安全交易',
                        link: '/功能介绍/数据安全交易.md',
                        collapsible: true,
                        children: [
                            {
                                text: '基于Token属性的鉴权访问',
                                link: '/功能介绍/数据安全交易.md/#基于token属性的鉴权访问',
                            },
                            {
                                text: '基于Token属性的安全分享',
                                link: '/功能介绍/数据安全交易.md/#基于token属性的安全分享',
                            },
                            {
                                text: 'Token使用后的结算处理',
                                link: '/功能介绍/数据安全交易.md/#token使用后的结算处理',
                            }
                        ]
                    },
                    {
                        text: '数据预言机',
                        link: '/功能介绍/数据预言机.md',
                        children: [
                        ]
                    },
                    {
                        text: '数据安全计算',
                        link: '/功能介绍/数据安全计算.md',
                        collapsible: true,
                        children: [
                            {
                                text: '两方数据合作',
                                link: '/功能介绍/数据安全计算.md/#两方数据合作',
                                children: [
                                    {
                                        text: '隐私匹配',
                                        link: '/功能介绍/数据安全计算.md/#隐私匹配',
                                    },
                                    {
                                        text: '隐私标签查询',
                                        link: '/功能介绍/数据安全计算.md/#隐私标签查询',
                                    },
                                    {
                                        text: '隐私SQL查询',
                                        link: '/功能介绍/数据安全计算.md/#隐私sql查询',
                                    },
                                ]
                            },
                            {
                                text: '多方数据协作',
                                link: '/功能介绍/数据安全计算.md/#多方数据协作',
                                children: [
                                    {
                                        text: '联合统计分析',
                                        link: '/功能介绍/数据安全计算.md/#联合统计分析',
                                    },
                                    {
                                        text: '联合模型训练',
                                        link: '/功能介绍/数据安全计算.md/#联合模型训练',
                                    },
                                    {
                                        text: '联合模型预测',
                                        link: '/功能介绍/数据安全计算.md/#联合模型预测',
                                    },
                                ]
                            },
                        ]
                    },
                ],
            }, 
            {
                // @ts-ignore
                text: 'API说明',
                link: '',
                children: [
                    // SidebarItem
                    {
                        text: '数据安全上链',
                        link: '/API说明/数据安全上链.md',
                        collapsible: true,
                        children: [
                            {
                                text: '支持的传输和存管模式',
                                link: '/API说明/数据安全上链.md/#支持的传输和存管模式',
                                children: [
                                    {
                                        text: '云服务传输和存管',
                                        link: '/API说明/数据安全上链.md/#云服务传输和存管',
                                    },
                                    {
                                        text: 'IPFS传输和存管',
                                        link: '/API说明/数据安全上链.md/#ipfs传输和存管',
                                    },
                                    {
                                        text: '区块链传输和存管',
                                        link: '/API说明/数据安全上链.md/#区块链传输和存管',
                                    },
                                ]
                            },
                            {
                                text: '元数据发布',
                                link: '/API说明/数据安全上链.md/#元数据发布',
                                children: [
                                    {
                                        text: '提取元数据',
                                        link: '/API说明/数据安全上链.md/#提取元数据',
                                    },
                                    {
                                        text: '发布元数据',
                                        link: '/API说明/数据安全上链.md/#发布元数据',
                                    },
                                    {
                                        text: '发布数据Hash',
                                        link: '/API说明/数据安全上链.md/#发布数据Hash',
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        text: '数据资产化',
                        link: '/API说明/数据资产化.md',
                        collapsible: true,
                        children: [
                            {
                                text: 'Token',
                                link: '/API说明/数据资产化.md/#token',
                                // children: [
                                //     {
                                //         text: '获取合约模板',
                                //         link: '/API说明/数据资产化.md/#获取合约模板',
                                //     },
                                //     {
                                //         text: '部署合约',
                                //         link: '/API说明/数据资产化.md/#部署合约',
                                //     },
                                //     {
                                //         text: '关联原始数据和元数据',
                                //         link: '/API说明/数据资产化.md/#关联原始数据和元数据',
                                //     },
                                //     {
                                //         text: '铸造Token',
                                //         link: '/API说明/数据资产化.md/#铸造token',
                                //     },
                                //     {
                                //         text: '销毁Token',
                                //         link: '/API说明/数据资产化.md/#销毁token',
                                //     },
                                // ]
                            },
                            {
                                text: 'NFT',
                                link: '/API说明/数据资产化.md/#nft',
                                // children: [
                                //     {
                                //         text: '获取合约模板',
                                //         link: '/API说明/数据资产化.md/#获取合约模板',
                                //     },
                                //     {
                                //         text: '部署合约',
                                //         link: '/API说明/数据资产化.md/#部署合约',
                                //     },
                                //     {
                                //         text: '关联原始数据和元数据',
                                //         link: '/API说明/数据资产化.md/#关联原始数据和元数据',
                                //     },
                                //     {
                                //         text: '铸造Token',
                                //         link: '/API说明/数据资产化.md/#铸造token',
                                //     },
                                //     {
                                //         text: '销毁Token',
                                //         link: '/API说明/数据资产化.md/#销毁token',
                                //     },
                                // ]
                            },
                            {
                                text: '交易所上架',
                                link: '/API说明/数据资产化.md/#交易所上架'
                            }
                        ]
                    },
                    {
                        text: '数据安全交易',
                        link: '/API说明/数据安全交易.md',
                        collapsible: true,
                        children: [
                            {
                                text: '基于Token属性的鉴权访问',
                                link: '/API说明/数据安全交易.md/#基于token属性的鉴权访问',
                                children: [
                                    {
                                        text: '元数据查看',
                                        link: '/API说明/数据安全交易.md/#元数据查看',
                                    },
                                    {
                                        text: '原始数据查看',
                                        link: '/API说明/数据安全交易.md/#原始数据查看',
                                    },
                                ]
                            },
                            {
                                text: '基于Token属性的安全分享',
                                link: '/API说明/数据安全交易.md/#基于token属性的安全分享',
                                children: [
                                    {
                                        text: '所有权转移',
                                        link: '/API说明/数据安全交易.md/#所有权转移',
                                    },
                                    {
                                        text: '原始数据下载',
                                        link: '/API说明/数据安全交易.md/#原始数据下载',
                                    },  
                                ]
                            },
                            {
                                text: 'Token使用后的结算处理',
                                link: '/API说明/数据安全交易.md/#token使用后的结算处理',
                                children: [
                                    {
                                        text: '确认使用',
                                        link: '/API说明/数据安全交易.md/#确认使用',
                                    },
                                    {
                                        text: '使用后冻结/销毁',
                                        link: '/API说明/数据安全交易.md/#使用后冻结-销毁',
                                    },  
                                ]
                            }
                        ]

                    },
                    {
                        text: '数据预言机',
                        link: '/API说明/数据预言机.md',
                        children: [
                        ]
                    },
                    {
                        text: '数据安全计算',
                        link: '/API说明/数据安全计算.md',
                        collapsible: true,
                        children: [
                            {
                                text: '两方数据合作',
                                link: '/API说明/数据安全计算.md/#两方数据合作',
                                children: [
                                    {
                                        text: '隐私匹配',
                                        link: '/API说明/数据安全计算.md/#隐私匹配',
                                    },
                                    {
                                        text: '隐私标签查询',
                                        link: '/API说明/数据安全计算.md/#隐私标签查询',
                                    },
                                    {
                                        text: '隐私SQL查询',
                                        link: '/API说明/数据安全计算.md/#隐私sql查询',
                                    },
                                ]
                            },
                            {
                                text: '多方数据协作',
                                link: '/API说明/数据安全计算.md/#多方数据协作',
                                children: [
                                    {
                                        text: '联合统计分析',
                                        link: '/API说明/数据安全计算.md/#联合统计分析',
                                    },
                                    {
                                        text: '联合模型训练',
                                        link: '/API说明/数据安全计算.md/#联合模型训练',
                                    },
                                    {
                                        text: '联合模型预测',
                                        link: '/API说明/数据安全计算.md/#联合模型预测',
                                    },
                                ]
                            },
                        ]
                    },
                ],
            },
            {
                // @ts-ignore
                text: '参考',
                link: '',
                children: [
                    {
                        text: '隐私AI框架Rosetta',
                        link: '/参考/隐私AI框架rosetta.md',
                    }

                ],

            }, {
                // @ts-ignore
                text: '体验环境',
                link: '',
                children: [
                    {
                        text: 'Datum-network操作帮助文档(管理员)',
                        link: '/参考/datum-network操作文档(管理员).md',
                    },
                    {
                        text: 'Datum-network操作帮助文档(用户)',
                        link: '/参考/datum-network操作文档(用户).md',
                    },
                    {
                        text: 'Datum-platform操作帮助文档',
                        link: '/参考/datum-platform操作帮助文档.md',
                    },
                ],
            }
        ],
        navbar: [
            // NavbarItem
            {
                text: 'Home',
                link: process.env.VITE_ENV === 'sit' ? config.test.home : config.production.home,// HOME 地址
            },
            // NavbarGroup
            // {
            //     text: 'produces',
            //     children: [ '/group/foo.md', '/group/bar.md' ],
            // },
        ],
    }),
}