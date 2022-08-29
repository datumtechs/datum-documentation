<template><div><h1 id="datum-network操作帮助文档-管理员版" tabindex="-1"><a class="header-anchor" href="#datum-network操作帮助文档-管理员版" aria-hidden="true">#</a> Datum-network操作帮助文档（管理员版）</h1>
<p>[TOC]</p>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>Datum-network是基于隐私AI底层能力构建的分布式隐私计算网络。</p>
<p>Datum-network管理台面向数据提供方、算力提供方提供了一个可对原始数据、算力资源进行统一管理的门户界面。</p>
<p>用户可以选择在本地部署Datum-network节点并接入网络，对于数据提供方可以使自身数据能够在更加可靠的本地环境中进行管理，对于算力提供方可以提供算力分享帮助网络提高计算性能并获得收益。</p>
<p>节点部署方式参见：https://github.com/datumtechs/datum-network-deploy/tree/ansible_v0.4.0</p>
<p>为方便体验，提供5套数据集可供发布使用，下载路径为：</p>
<ul>
<li>金融：http://testdownload.datumtechs.com/datum/dataset/Finance.zip</li>
<li>媒体广告：http://testdownload.datumtechs.com/datum/dataset/MediaAdvertising.zip</li>
<li>医疗保健：http://testdownload.datumtechs.com/datum/dataset/Medicalhealth.zip</li>
<li>公共服务：http://testdownload.datumtechs.com/datum/dataset/Publicservice.zip</li>
<li>运输：http://testdownload.datumtechs.com/datum/dataset/Transportation.zip</li>
</ul>
<p>测试Token领取地址：https://faucet.platon.network/faucet/</p>
<h2 id="管理台登录" tabindex="-1"><a class="header-anchor" href="#管理台登录" aria-hidden="true">#</a> 管理台登录</h2>
<p>用户完成节点部署后，需要登录Datum-platform完成入网设置。</p>
<p>管理台通过MetaMask区块链钱包可直接登录，无需额外注册。</p>
<ol>
<li>
<p>在Chrome中打开部署的管理台地址，进入datum-network管理台首页；点击【Metamask】按钮，在跳出的弹窗中，点击【切换网络】按钮，将网络切换至PlatON开发网络。</p>
<p><img src="/network-user-img/切换网络.png" alt="切换网络"></p>
</li>
<li>
<p>切换至PlatON开发网络后，选择一个连接账号。</p>
<p><img src="/network-user-img/选择钱包.png" alt="选择钱包"></p>
</li>
<li>
<p>确认连接后，点击【签名】按钮，完成签名后既能进入管理台页面。</p>
<p><img src="/network-user-img/钱包登录签名.png" alt="钱包登录签名"></p>
</li>
</ol>
<h2 id="管理台概况" tabindex="-1"><a class="header-anchor" href="#管理台概况" aria-hidden="true">#</a> 管理台概况</h2>
<p>展示连接节点的系统资源情况，包括CPU、内存、带宽及消耗情况；以及该节点执行的任务情况，包括数据发布量、计算任务概况。</p>
<img src="/network-user-img/系统概况.png" alt="系统概况" style="zoom:60%;" />
<h2 id="我的数据" tabindex="-1"><a class="header-anchor" href="#我的数据" aria-hidden="true">#</a> 我的数据</h2>
<p>对用户需要资产化的原始数据进行管理，包括添加提取元数据（可对外发布展示的数据信息）、发布数据资产凭证。</p>
<p><strong>【数据添加】</strong></p>
<p>（1）点击【我的数据】-【数据添加】进入添加数据、提取元数据页面。</p>
<p><img src="/network-user-img/添加数据.png" alt="添加数据"></p>
<p>（2）从本地选择需要使用的数据文件，系统暂时只支持CSV格式。选择文件后点击【导入文件】按钮，系统将自动读取原始数据中包含的“字段信息”和“格式类型”，统称为元数据。用户可以修改读取的元数据信息，并选择“是否对外可见”。</p>
<p><img src="/network-user-img/添加数据-2.png" alt="添加数据-2"></p>
<p>（3）用户完成基本信息填写、确定字段信息后，点击页面下方的【提交】按钮，即可将该元数据上传至此网络节点，并进入【数据管理】模块。</p>
<p><strong>【数据管理】</strong></p>
<p>用户可以通过【我的数据】-【数据管理】进入元数据发布、发布数据管理页面。</p>
<p><img src="/network-user-img/数据管理.png" alt="数据管理"></p>
<p>通过【数据添加】新增的元数据状态默认为“未发布”，点击【发布数据】后该元数据会发布至Datum-platform的数据市场被其他参与方发现，同时状态变更为“已发布”。</p>
<p>点击【撤回】可撤回已发的元数据信息，状态由“已发布数据”变为“未发布数据”。</p>
<p>点击【查看】可查看元数据详情。</p>
<p>点击【下载】可将上传至该节点的数据下载至本地。</p>
<p>点击【另存为新数据】以发布的元数据为基础，向数据节点添加一份新数据，可以修改元数据展示信息后再发布。</p>
<p>点击【发布数据凭证】可以该数据为基础，发行数据资产（Data Token）。</p>
<p><img src="/network-user-img/数据管理-2.png" alt="数据管理-2"></p>
<p><strong>【发布数据凭证】</strong></p>
<p>（1）点击【我的数据】-【发布数据凭证】进入凭证种类选择、基本信息合数量设置页面。</p>
<p>​		也可在【数据管理】页面中点击“发布数据凭证”按钮进入该页面。</p>
<p><img src="/network-user-img/发布凭证.png" alt="发布凭证"></p>
<p>（2）选择发布凭证种类，“无属性数据凭证”为ERC-20资产，“有属性数据凭证”为NFT资产。</p>
<p>​	此版本仅支持“无属性数据凭证”。</p>
<p><img src="/network-user-img/选择元数据.png" alt="选择元数据"></p>
<p>（3）选择需要发行数据资产的数据后，进入信息设置页面，需要设置凭证名称与符号、总发行量、描述信息。</p>
<p>​		“凭证名称”，在Datum-platform数据市场展示中显示。</p>
<p>​		“符号”，在Dex上作为该资产的代号。</p>
<p>​		“总发行量”，可被其他用户购买的总量，每个凭证代表了该数据的一次使用权。</p>
<p>​		信息录入后点击【发布凭证】按钮，需要Metamask钱包对该交易签名确认，完成资产凭证的铸造。</p>
<p><img src="/network-user-img/Metamask签名确认-1.png" alt="Metamask签名确认-1"></p>
<p>（4）数据资产凭证铸造完成后，需要对其设置初始发行价，并以向Dex添加流动性的方式完成初始发行。</p>
<p>​		数据资产价格以LAT作为参照交易对。</p>
<p><img src="/network-user-img/设置兑换价格.png" alt="设置兑换价格"></p>
<p>（5）设置完数据资产凭证初始价格后，点击【上架数据市场】按钮，需要Metamask钱包先授权访问该资产，再对该交易签名确认，完成向Dex添加该资产的流动性。</p>
<p><img src="/network-user-img/Metamask签名确认-2.png" alt="Metamask签名确认-2"></p>
<p><img src="/network-user-img/Metamask签名确认-3.png" alt="Metamask签名确认-3"></p>
<h2 id="我的凭证" tabindex="-1"><a class="header-anchor" href="#我的凭证" aria-hidden="true">#</a> 我的凭证</h2>
<p><strong>【无属性数据凭证】</strong></p>
<ol>
<li>
<p>点击【我的凭证】-【无属性数据凭证】查看、管理已发布的数据资产凭证。</p>
<p>在【已定价的凭证】页面，显示已经定价并向Dex添加流动性的资产凭证信息，其中“合约地址”用于在Metamask钱包中添加该资产代币，点击“查看”可直接跳转至Dex平台。</p>
<p>在【未定价的凭证】页面，显示已铸造但为设置初始价格的资产凭证信息，可点击“设置价格”对其进行定价并添加流动性。</p>
<p><img src="/network-user-img/无属性数据凭证列表.png" alt="无属性数据凭证列表"></p>
</li>
<li>
<p>已定价并添加流动性的资产凭证，可在Dex（https://test.dipoleswap.exchange/）中查看。</p>
</li>
</ol>
<p>​	（1）先确认导入该资产。</p>
<img src="/network-user-img/导入流动性.png" alt="导入流动性" style="zoom:39%;" />
<p>​	（2）在Dex中的Swap页面即可查看到添加的资产情况，也可以通过Swap进行该资产凭证的购买。</p>
<img src="/network-user-img/查看流动性.png" alt="查看流动性" style="zoom:40%;" />
</div></template>


