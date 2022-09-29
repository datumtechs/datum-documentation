import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import config from '../env'

const isProd = process.env.VITE_ENV === 'prod'


export default {
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '让数据流动起来',
            head: [
                [
                    'link', { rel: 'icon', href: isProd ? '/img/favicon.svg' : '/datum-documentation/img/favicon.svg' }
                    // 'link', { rel: 'icon', href: '/datum-documentation/img/favicon.svg' } //  github page
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
    base: isProd ? '/' : '/datum-documentation/', ///datum-documentation
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
        sidebar: {
            '/': [
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
                            // @ts-ignore
                            collapsible: true,
                        },
                        {
                            text: '数据安全上链',
                            link: '/功能介绍/数据安全上链.md',
                            collapsible: true,
                            children: [
                                {
                                    text: '支持的传输和存管模式',
                                    link: '/功能介绍/数据安全上链.md/#支持的传输和存管模式',
                                },
                                {
                                    text: '数据安全上链存管原理',
                                    link: '/功能介绍/数据安全上链.md/#数据安全上链存管原理',
                                },
                                {
                                    text: '元数据发布',
                                    link: '/功能介绍/数据安全上链.md/#元数据发布',
                                },
                                {
                                    text: '发布元数据原理',
                                    link: '/功能介绍/数据安全上链.md/#发布元数据原理',
                                },
                            ]
                        },
                        {
                            text: '数据资产化',
                            link: '/功能介绍/数据资产化.md',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Tokenization',
                                    link: '/功能介绍/数据资产化.md/#tokenization',
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
                                    text: '支持的数据安全交易模式',
                                    link: '/功能介绍/数据安全交易.md/#支持的数据安全交易模式',
                                },
                                {
                                    text: '使用流程',
                                    link: '/功能介绍/数据安全交易.md/#使用流程',
                                }
                            ]
                        },
                        {
                            text: '数据预言机',
                            link: '/功能介绍/数据预言机.md',
                            collapsible: true,
                            children: [
                                {
                                    text: '数据预言机的使用场景',
                                    link: '/功能介绍/数据预言机.md/#数据预言机的使用场景',
                                },
                                {
                                    text: '数据预言机的功能',
                                    link: '/功能介绍/数据预言机.md/#数据预言机的功能',
                                },
                                {
                                    text: '数据预言机原理',
                                    link: '/功能介绍/数据预言机.md/#数据预言机原理',
                                },
                            ]
                        },
                        {
                            text: '数据安全计算',
                            link: '/功能介绍/数据安全计算.md',
                            collapsible: true,
                            children: [
                                {
                                    text: '密文外包计算',
                                    link: '/功能介绍/数据安全计算.md/#密文外包计算',
                                },
                                {
                                    text: '联合查询统计',
                                    link: '/功能介绍/数据安全计算.md/#联合查询统计',
                                },
                                {
                                    text: '联合机器学习',
                                    link: '/功能介绍/数据安全计算.md/#联合机器学习',
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
                                    text: '数据安全上链',
                                    link: '/API说明/数据安全上链.md/#数据安全上链',
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
                                            text: '发布数据hash',
                                            link: '/API说明/数据安全上链.md/#发布数据hash',
                                        },
                                    ]
                                },
                                {
                                    text: '数据一致性校验',
                                    link: '/API说明/数据安全上链.md/#数据一致性校验',
                                    children: [
                                        {
                                            text: '根据数据hash校验数据一致性',
                                            link: '/API说明/数据安全上链.md/#根据数据hash校验数据一致性',
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            text: '数据资产化',
                            link: '/API说明/数据资产化.md',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Tokenization',
                                    link: '/API说明/数据资产化.md/#tokenization',
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
                                    text: '密文外包计算',
                                    link: '/API说明/数据安全计算.md/#密文外包计算',
                                },
                                {
                                    text: '联合查询统计',
                                    link: '/API说明/数据安全计算.md/#联合查询统计',
                                    children: [
                                        {
                                            text: '联合匹配',
                                            link: '/API说明/数据安全计算.md/#联合匹配',
                                        },
                                        {
                                            text: '联合查询',
                                            link: '/API说明/数据安全计算.md/#联合查询',
                                        },
                                        {
                                            text: '联合统计分析',
                                            link: '/API说明/数据安全计算.md/#联合统计分析',
                                        },
                                    ]
                                },
                                {
                                    text: '联合机器学习',
                                    link: '/API说明/数据安全计算.md/#联合机器学习',
                                    children: [
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
                            link: '/参考/Datum-network操作帮助文档(管理员).md',
                        },
                        {
                            text: 'Datum-network操作帮助文档(用户)',
                            link: '/参考/Datum-network操作帮助文档(用户版).md',
                        },
                        {
                            text: 'Datum-platform操作帮助文档',
                            link: '/参考/datum-platform操作帮助文档.md',
                        },
                    ],
                } ],
            '/en/': [
                {
                    // @ts-ignore
                    text: 'Introduction',
                    link: '/en/',
                    children: []
                }, {
                    // @ts-ignore
                    text: 'Functions',
                    link: '',
                    children: [
                        // SidebarItem
                        {
                            text: 'GettingStarted',
                            link: '/en/FunctionIntroduction/GettingStarted.md',
                            collapsible: true,
                        },
                        {
                            text: 'Transfer Data On Chain',
                            link: '/en/FunctionIntroduction/TransferDataOnChain.md',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Main Functions',
                                    link: '/en/FunctionIntroduction/TransferDataOnChain.md/#main-functions',
                                },
                                {
                                    text: 'Framework',
                                    link: '/en/FunctionIntroduction/TransferDataOnChain.md/#framework',
                                },
                                {
                                    text: 'Publish Metadata',
                                    link: '/en/FunctionIntroduction/TransferDataOnChain.md/#publish-metadata',
                                },
                                {
                                    text: 'How it works',
                                    link: '/en/FunctionIntroduction/TransferDataOnChain.md/#how-it-works',
                                },
                            ]
                        },
                        {
                            text: 'Data Tokenization',
                            link: '/en/FunctionIntroduction/DataTokenization.md',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Tokenization',
                                    link: '/en/FunctionIntroduction/DataTokenization.md/#tokenization',
                                },
                                {
                                    text: 'NFT',
                                    link: '/en/FunctionIntroduction/DataTokenization.md/#nft',
                                },
                                {
                                    text: 'List Token on Exchanges',
                                    link: '/en/FunctionIntroduction/DataTokenization.md/#list-token-on-exchanges',
                                },
                            ]
                        },
                        {
                            text: 'Reliable Data Transaction',
                            link: '/en/FunctionIntroduction/ReliableDataTransaction.md',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Supported Data Security Transaction Modes',
                                    link: '/en/FunctionIntroduction/ReliableDataTransaction.md/#supported-data-security-transaction-modes',
                                },
                                {
                                    text: 'Usage Process',
                                    link: '/en/FunctionIntroduction/ReliableDataTransaction.md/#usage-process',
                                }
                            ]
                        },
                        {
                            text: 'Data Oracle',
                            link: '/en/FunctionIntroduction/DataOracle.md',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Application Scenarios',
                                    link: '/en/FunctionIntroduction/DataOracle.md/#application-scenarios',
                                },
                                {
                                    text: 'Functions',
                                    link: '/en/FunctionIntroduction/DataOracle.md/#functions',
                                },
                                {
                                    text: 'How Data Oracle Works',
                                    link: '/en/FunctionIntroduction/DataOracle.md/#how-data-oracle-works',
                                },
                            ]
                        },
                        {
                            text: 'Secure Data Computation',
                            link: '/en/FunctionIntroduction/SecureDataComputation.md',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Outsourcing Computation',
                                    link: '/en/FunctionIntroduction/SecureDataComputation.md/#outsourcing-computation',
                                },
                                {
                                    text: 'Data Cooperation',
                                    link: '/en/FunctionIntroduction/SecureDataComputation.md/#data-cooperation',
                                },
                                {
                                    text: 'Federated Machine Learning',
                                    link: '/en/FunctionIntroduction/SecureDataComputation.md/#federated-machine-learning',
                                },
                            ]
                        },
                    ],
                },
                {
                    // @ts-ignore
                    text: 'APIs',
                    link: '',
                    children: [
                        // SidebarItem
                        {
                            text: 'Transfer Data On Chain',
                            link: '/en/APIDescription/TransferDataOnChain.md',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Main Functions',
                                    link: '/en/APIDescription/TransferDataOnChain.md/#main-functions',
                                    children: [
                                        {
                                            text: 'Cloud Transmission and Storage',
                                            link: '/en/APIDescription/TransferDataOnChain.md/#cloud-transmission-and-storage',
                                        },
                                        {
                                            text: 'IPFS Transmission and Storage',
                                            link: '/en/APIDescription/TransferDataOnChain.md/#ipfs-transmission-and-storage',
                                        },
                                        {
                                            text: 'Blockchain Transmission and Storage',
                                            link: '/en/APIDescription/TransferDataOnChain.md/#blockchain-transmission-and-storage',
                                        },
                                    ]
                                },
                                {
                                    text: 'Transfer Data On Chain',
                                    link: '/en/APIDescription/TransferDataOnChain.md/#transfer-data-on-chain',
                                    children: [
                                        {
                                            text: 'Extract Metadata',
                                            link: '/en/APIDescription/TransferDataOnChain.md/#extract-metadata',
                                        },
                                        {
                                            text: 'Publish Metadata',
                                            link: '/en/APIDescription/TransferDataOnChain.md/#publish-metadata',
                                        },
                                        {
                                            text: 'Publish Data Hash',
                                            link: '/en/APIDescription/TransferDataOnChain.md/#publish-data-hash',
                                        },
                                    ]
                                },
                                {
                                    text: 'Verification of Data Consistency',
                                    link: '/en/APIDescription/TransferDataOnChain.md/#verification-of-data-consistency',
                                    children: [
                                        {
                                            text: 'Verification of Data Consistency Based on Data Hash',
                                            link: '/en/APIDescription/TransferDataOnChain.md/#verification-of-data-consistency-based-on-data-hash',
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            text: 'Data Tokenization',
                            link: '/en/APIDescription/DataTokenization.md',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Tokenization',
                                    link: '/en/APIDescription/DataTokenization.md/#tokenization',
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
                                    link: '/en/APIDescription/DataTokenization.md/#nft',
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
                                    text: 'List Token on Exchanges',
                                    link: '/en/APIDescription/DataTokenization.md/#list-token-on-exchanges'
                                }
                            ]
                        },
                        {
                            text: 'Reliable Data Transaction',
                            link: '/en/APIDescription/ReliableDataTransaction.md',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Authorized Access Based on Token Properties',
                                    link: '/en/APIDescription/ReliableDataTransaction.md/#authorized-access-based-on-token-properties',
                                    children: [
                                        {
                                            text: 'View Metadata',
                                            link: '/en/APIDescription/ReliableDataTransaction.md/#view-metadata',
                                        },
                                        {
                                            text: 'View Raw Data',
                                            link: '/en/APIDescription/ReliableDataTransaction.md/#view-raw-data',
                                        },
                                    ]
                                },
                                {
                                    text: 'Secure Sharing Based on Token Properties',
                                    link: '/en/APIDescription/ReliableDataTransaction.md/#secure-sharing-based-on-token-properties',
                                    children: [
                                        {
                                            text: 'Transfer Ownership',
                                            link: '/en/APIDescription/ReliableDataTransaction.md/#transfer-ownership',
                                        },
                                        {
                                            text: 'Transfer Usage Rights',
                                            link: '/en/APIDescription/ReliableDataTransaction.md/#transfer-usage-rights',
                                        },
                                    ]
                                },
                                {
                                    text: 'Settlement Operations After Token Usage',
                                    link: '/en/APIDescription/ReliableDataTransaction.md/#settlement-operations-after-token-usage',
                                    children: [
                                        {
                                            text: 'Usage Confirmation',
                                            link: '/en/APIDescription/ReliableDataTransaction.md/#usage-confirmation',
                                        },
                                        {
                                            text: 'Destroy or Freeze Token After Usage',
                                            link: '/en/APIDescription/ReliableDataTransaction.md/#destroy-or-freeze-token-after-usage',
                                        },
                                    ]
                                }
                            ]

                        },
                        {
                            text: 'Data Oracle ',
                            link: '/en/APIDescription/DataOracle.md',
                            children: [
                            ]
                        },
                        {
                            text: 'Secure Data Computation',
                            link: '/en/APIDescription/SecureDataComputation.md',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Outsourcing Computation',
                                    link: '/en/APIDescription/SecureDataComputation.md/#outsourcing-computation',
                                },
                                {
                                    text: 'Data Cooperation',
                                    link: '/en/APIDescription/SecureDataComputation.md/#data-cooperation',
                                    children: [
                                        {
                                            text: 'Joint Match',
                                            link: '/en/APIDescription/SecureDataComputation.md/#joint-match',
                                        },
                                        {
                                            text: 'Joint Query',
                                            link: '/en/APIDescription/SecureDataComputation.md/#joint-query',
                                        },
                                        {
                                            text: 'Joint Statistical Analysis',
                                            link: '/en/APIDescription/SecureDataComputation.md/#joint-statistical-analysis',
                                        },
                                    ]
                                },
                                {
                                    text: 'Federated Machine Learning',
                                    link: '/en/APIDescription/SecureDataComputation.md/#federated-machine-learning',
                                    children: [
                                        {
                                            text: 'Federated Model Training',
                                            link: '/en/APIDescription/SecureDataComputation.md/#federated-model-training',
                                        },
                                        {
                                            text: 'Federated Model Prediction',
                                            link: '/en/APIDescription/SecureDataComputation.md/#federated-model-prediction',
                                        },
                                    ]
                                },
                            ]
                        },
                    ],
                },
                {
                    // @ts-ignore
                    text: 'Reference',
                    link: '',
                    children: [
                        {
                            text: 'The Privacy-preserving AI Framework Rosetta',
                            link: '/en/Reference/ThePrivacy-preservingAIFrameworkRosetta.md',
                        }

                    ],

                }, {
                    // @ts-ignore
                    text: 'Experience',
                    link: '',
                    children: [
                        {
                            text: 'Datum-network Help Document(for Admins)',
                            link: '/en/Reference/Datum-network-Help-Document(Admins).md',
                        },
                        {
                            text: 'Datum-network Help Document (for Users)',
                            link: '/en/Reference/Datum-network-Help-Document(Users).md',
                        },
                        {
                            text: 'Datum-platform Help Document',
                            link: '/en/Reference/Datum-platform-Help-Document.md',
                        },
                    ],
                }
            ]
        },
        navbar: [
            // NavbarItem
            {
                text: 'Home',
                link: process.env.VITE_ENV === 'sit' ? config.test.home : config.production.home,// HOME 地址
            },
        ],
    }),
}
