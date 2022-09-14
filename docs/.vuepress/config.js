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
                                text: '获取NFT合约模板',
                                link: '/功能介绍/数据资产化.md/#获取nft合约模板',
                            },
                            {
                                text: '完成NFT合约部署',
                                link: '/功能介绍/数据资产化.md/#完成nft合约部署',
                            },
                            {
                                text: '查看已发布的NFT合约',
                                link: '/功能介绍/数据资产化.md/#查看已发布的nft合约',
                            },
                            {
                                text: '铸造Data Token',
                                link: '/功能介绍/数据资产化.md/#铸造data-token',
                            },
                            {
                                text: '销毁Data Token',
                                link: '/功能介绍/数据资产化.md/#销毁data-token',
                            },
                            {
                                text: 'Data Token属性设置',
                                link: '/功能介绍/数据资产化.md/#data-token属性设置',
                            },
                            {
                                text: '查看Data Token信息',
                                link: '/功能介绍/数据资产化.md/#查看data-token信息',
                            },
                        ]
                    },
                    {
                        text: '数据安全交易',
                        link: '/功能介绍/数据安全交易.md',
                        collapsible: true,
                        children: [
                            {
                                text: '原理描述',
                                link: '/功能介绍/数据安全交易.md/#原理描述',
                            },
                            {
                                text: '使用流程',
                                link: '/功能介绍/数据安全交易.md/#使用流程',
                            },
                            {
                                text: '元数据查看',
                                link: '/功能介绍/数据安全交易.md/#元数据查看',
                            },
                            {
                                text: '所有权转移',
                                link: '/功能介绍/数据安全交易.md/#所有权转移',
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
                                text: '获取NFT合约模板',
                                link: '/API说明/数据资产化.md/#获取nft合约模板',
                            },
                            {
                                text: '完成NFT合约部署',
                                link: '/API说明/数据资产化.md/#完成nft合约部署',
                            },
                            {
                                text: '查看已发布的NFT合约',
                                link: '/API说明/数据资产化.md/#查看已发布的nft合约',
                            },
                            {
                                text: '铸造Data Token',
                                link: '/API说明/数据资产化.md/#铸造data-token',
                            },
                            {
                                text: '销毁Data Token',
                                link: '/API说明/数据资产化.md/#销毁data-token',
                            },
                            {
                                text: 'Data Token属性设置',
                                link: '/API说明/数据资产化.md/#data-token属性设置',
                            },
                            {
                                text: '查看Data Token信息',
                                link: '/API说明/数据资产化.md/#查看data-token信息',
                            },
                        ]
                    },
                    {
                        text: '数据安全交易',
                        link: '/API说明/数据安全交易.md',
                        collapsible: true,
                        children: [
                            {
                                text: '原理描述',
                                link: '/API说明/数据安全交易.md/#原理描述',
                            },
                            {
                                text: '使用流程',
                                link: '/API说明/数据安全交易.md/#使用流程',
                            },
                            {
                                text: '元数据查看',
                                link: '/API说明/数据安全交易.md/#元数据查看',
                            },
                            {
                                text: '所有权转移',
                                link: '/API说明/数据安全交易.md/#所有权转移',
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