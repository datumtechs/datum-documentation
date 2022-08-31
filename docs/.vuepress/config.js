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
                        text: '开始准备',
                        link: '/主要流程/开始准备.md',
                    },
                    {
                        text: '数据安全存管',
                        link: '/主要流程/数据安全存管.md',
                        collapsible: true,
                        children: [
                            {
                                text: '云服务传输',
                                link: '/主要流程/数据安全存管.md/#云服务传输',
                            },
                            {
                                text: 'IPFS传输',
                                link: '/主要流程/数据安全存管.md/#ipfs传输',
                            },
                            {
                                text: '区块链传输',
                                link: '/主要流程/数据安全存管.md/#区块链传输',
                            },
                            {
                                text: '发布元数据',
                                link: '/主要流程/数据安全存管.md/#发布元数据',
                            },
                            {
                                text: '发布数据Hash',
                                link: '/主要流程/数据安全存管.md/#发布数据hash',
                            },
                        ]
                    },
                    {
                        text: '数据资产发行',
                        link: '/主要流程/数据资产发行.md',
                        collapsible: true,
                        children: [
                            {
                                text: '获取NFT合约模板',
                                link: '/主要流程/数据资产发行.md/#获取nft合约模板',
                            },
                            {
                                text: '完成NFT合约部署',
                                link: '/主要流程/数据资产发行.md/#完成nft合约部署',
                            },
                            {
                                text: '查看已发布的NFT合约',
                                link: '/主要流程/数据资产发行.md/#查看已发布的nft合约',
                            },
                            {
                                text: '铸造Data NFT Token',
                                link: '/主要流程/数据资产发行.md/#铸造data-nft-token',
                            },
                            {
                                text: '销毁Data NFT Token',
                                link: '/主要流程/数据资产发行.md/#销毁data-nft-token',
                            },
                            {
                                text: 'Data NFT Token属性设置',
                                link: '/主要流程/数据资产发行.md/#data-nft-token属性设置',
                            },
                            {
                                text: '查看已铸造的Data NFT Token',
                                link: '/主要流程/数据资产发行.md/#查看已铸造的data-nft-token',
                            },
                        ]
                    },
                    {
                        text: '数据可信交易与托管',
                        link: '/主要流程/数据可信交易与托管.md',
                        collapsible: true,
                        children: [
                            {
                                text: '可信数据分享',
                                link: '/主要流程/数据可信交易与托管.md/#数据可信分享',
                            },
                            {
                                text: '可信数据托管',
                                link: '/主要流程/数据可信交易与托管.md/#数据可信托管',
                            },
                            {
                                text: '数据一致性验证',
                                link: '/主要流程/数据可信交易与托管.md/#数据一致性验证',
                            },
                        ]
                    },
                    {
                        text: '数据联合查询计算',
                        link: '/主要流程/数据联合查询计算.md',
                        collapsible: true,
                        children: [
                            {
                                text: '两方数据合作',
                                link: '/主要流程/数据联合查询计算.md/#两方数据合作',
                                children: [
                                    {
                                        text: '隐私匹配',
                                        link: '/主要流程/数据联合查询计算.md/#隐私匹配',
                                    },
                                    {
                                        text: '隐私标签查询',
                                        link: '/主要流程/数据联合查询计算.md/#隐私标签查询',
                                    },
                                    {
                                        text: '隐私SQL查询',
                                        link: '/主要流程/数据联合查询计算.md/#隐私sql查询',
                                    },
                                ]
                            },
                            {
                                text: '多方数据协作',
                                link: '/主要流程/数据联合查询计算.md/#多方数据协作',
                                children: [
                                    {
                                        text: '联合统计分析',
                                        link: '/主要流程/数据联合查询计算.md/#联合统计分析',
                                    },
                                    {
                                        text: '联合模型训练',
                                        link: '/主要流程/数据联合查询计算.md/#联合模型训练',
                                    },
                                    {
                                        text: '联合模型预测',
                                        link: '/主要流程/数据联合查询计算.md/#联合模型预测',
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