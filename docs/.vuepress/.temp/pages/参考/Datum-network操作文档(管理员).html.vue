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
<li>在Chrome中打开部署的管理台地址，进入datum-network管理台首页；点击【Metamask】按钮，在跳出的弹窗中，点击【切换网络】按钮，将网络切换至PlatON开发网络。</li>
</ol>
<p><img src="/network-img/切换网络.png" alt="切换网络"></p>
<ol start="2">
<li>切换至PlatON开发网络后，选择一个连接账号。</li>
</ol>
<p><img src="/network-img/选择钱包.png" alt="选择钱包"></p>
<ol start="3">
<li>确认连接后，点击【签名】按钮，完成签名后既能进入管理台页面。</li>
</ol>
<p><img src="/network-img/钱包登录签名.png" alt="钱包登录签名"></p>
<h2 id="用户初始化" tabindex="-1"><a class="header-anchor" href="#用户初始化" aria-hidden="true">#</a> 用户初始化</h2>
<ol>
<li>
<h4 id="申请身份标识" tabindex="-1"><a class="header-anchor" href="#申请身份标识" aria-hidden="true">#</a> 申请身份标识</h4>
</li>
</ol>
<p>部署后第一个登录管理台的用户可以对节点进行初始化设置，该用户将成为管理员用户。</p>
<p>（1）设置机构识别名称（用于在网络展示）、设置机构头像、填写机构描述。</p>
<p><img src="/network-img/设置机构名称.png" alt="设置机构名称"></p>
<p><img src="/network-img/设置机构头像与描述.png" alt="设置机构头像与描述"></p>
<p>（2）注册入网，完成初始化设置。</p>
<p>初始化设置成功后，系统会自动生成一个内置钱包地址，该钱包地址用于支付计算任务执行时消耗的手续费。</p>
<p><img src="/network-img/注册入网.png" alt="注册入网"></p>
<ol start="2">
<li>
<h4 id="用户中心-仅管理员可见" tabindex="-1"><a class="header-anchor" href="#用户中心-仅管理员可见" aria-hidden="true">#</a> 用户中心（仅管理员可见）</h4>
</li>
</ol>
<p>管理员在完成初始化设置后，可点击右上角登录账户，可以查看该节点的相关信息。包括：网络连接状态、节点地址信息、修改管理地址、查看内置钱包地址和余额。</p>
<p>（1）机构信息。</p>
<p><img src="/network-img/用户中心-主页.png" alt="用户中心-主页"></p>
<p>（2）网络连接状态。</p>
<p><img src="/network-img/用户中心-网络身份.png" alt="用户中心-网络身份"></p>
<p>（3）修改管理员、查看内置钱包信息。</p>
<p><img src="/network-img/用户中心-修改管理员.png" alt="用户中心-修改管理员"></p>
<h2 id="管理台概况" tabindex="-1"><a class="header-anchor" href="#管理台概况" aria-hidden="true">#</a> 管理台概况</h2>
<p>展示连接节点的系统资源情况，包括CPU、内存、带宽及消耗情况；以及该节点执行的任务情况，包括数据发布量、计算任务概况。</p>
<p><img src="/network-img/系统概况.png" alt="系统概况"></p>
<h2 id="节点管理-仅管理员可见" tabindex="-1"><a class="header-anchor" href="#节点管理-仅管理员可见" aria-hidden="true">#</a> 节点管理（仅管理员可见）</h2>
<ol>
<li>
<h4 id="引导节点管理" tabindex="-1"><a class="header-anchor" href="#引导节点管理" aria-hidden="true">#</a> <strong>引导节点管理</strong></h4>
</li>
</ol>
<p>Datum-network新加入的节点需要通过连接一个引导节点才能被网络其他参与方发现。</p>
<p>用户进行节点初始化注册时，系统默认为新加入节点关联网络初始种子节点（默认引导节点）。后续如用户需要更换连接的引导节点，可通过【节点管理】-【引导节点管理】进行更新维护。</p>
<p>（1）引导节点管理页面。</p>
<p>点击【节点管理】-【引导节点管理】进入管理页面。</p>
<p><img src="/network-img/引导节点管理.png" alt="引导节点管理"></p>
<p>（1）添加或删除引导节点。</p>
<p>点击【添加引导节点】按钮，输入引导节点ID，即可添加新的引导节点。</p>
<p>用户可以按需对已添加的引导节点进行【删除】操作。</p>
<p><img src="/network-img/添加引导节点.png" alt="添加引导节点"></p>
<ol start="2">
<li>
<h4 id="存储资源管理" tabindex="-1"><a class="header-anchor" href="#存储资源管理" aria-hidden="true">#</a> 存储资源管理</h4>
</li>
</ol>
<p>如用户需要作为数据提供方，通过本地服务发布元数据和数据资产凭证，需要在管理台中先添加“存储资源”，作为管理原始数据、发布元数据的路径。</p>
<p>点击【节点管理】-【存储资源管理】进入管理页面。</p>
<p><img src="/network-img/存储资源管理.png" alt="存储资源管理"></p>
<ol start="3">
<li>
<h4 id="计算资源管理" tabindex="-1"><a class="header-anchor" href="#计算资源管理" aria-hidden="true">#</a> 计算资源管理</h4>
</li>
</ol>
<p>如用户需要作为算力提供方，为隐私计算网络提供算力资源，需要在管理台中配置“计算资源”。</p>
<p>点击【节点管理】-【计算资源管理】进入资源管理页面。</p>
<p>计算资源默认状态为“未启用”，用户可通过【操作】栏下的按钮对其进行启用、停用、重命名等设置。</p>
<p>计算资源启用后，网络参与方在发起隐私计算任务时，系统会按照算力匹配情况进行调度。</p>
<p><img src="/network-img/计算资源管理.png" alt="计算资源管理"></p>
<img src="/network-img/启动算力.png" alt="启动算力" style="zoom: 61%;" />
<h2 id="我的数据" tabindex="-1"><a class="header-anchor" href="#我的数据" aria-hidden="true">#</a> 我的数据</h2>
<p>对用户需要资产化的原始数据进行管理，包括添加提取元数据（可对外发布展示的数据信息）、发布数据资产凭证。</p>
<p><strong>【数据添加】</strong></p>
<p>（1）点击【我的数据】-【数据添加】进入添加数据、提取元数据页面。</p>
<p><img src="/network-img/数据添加-1.png" alt="数据添加-1"></p>
<p>（2）从本地选择需要使用的数据文件，系统暂时只支持CSV格式。选择文件后点击【导入文件】按钮，系统将自动读取原始数据中包含的“字段信息”和“格式类型”，统称为元数据。用户可以修改读取的元数据信息，并选择“是否对外可见”。</p>
<p><img src="/network-img/数据添加-2.png" alt="数据添加-2"></p>
<p>（3）用户完成基本信息填写、确定字段信息后，点击页面下方的【提交】按钮，即可将该元数据上传至此网络节点，并进入【数据管理】模块。</p>
<p><strong>【数据管理】</strong></p>
<p>用户可以通过【我的数据】-【数据管理】进入元数据发布、发布数据管理页面。</p>
<p>通过【数据添加】新增的元数据状态默认为“未发布”，点击【发布数据】后该元数据会发布至Datum-platform的数据市场被其他参与方发现，同时状态变更为“已发布”。</p>
<p>点击【撤回】可撤回已发的元数据信息，状态由“已发布数据”变为“未发布数据”。</p>
<p>点击【查看】可查看元数据详情。</p>
<p>点击【下载】可将上传至该节点的数据下载至本地。</p>
<p>点击【另存为新数据】以发布的元数据为基础，向数据节点添加一份新数据，可以修改元数据展示信息后再发布。</p>
<p>点击【发布数据凭证】可以该数据为基础，发行数据资产（Data Token）。</p>
<p><img src="/network-img/数据管理.png" alt="数据管理"></p>
<p><strong>【发布数据凭证】</strong></p>
<p>（1）点击【我的数据】-【发布数据凭证】进入凭证种类选择、基本信息合数量设置页面。</p>
<p>​		也可在【数据管理】页面中点击“发布数据凭证”按钮进入该页面。</p>
<p><img src="/network-img/发布数据凭证.png" alt="发布数据凭证"></p>
<p>（2）选择发布凭证种类，“无属性数据凭证”为ERC-20资产，“有属性数据凭证”为NFT资产。</p>
<p>​	此版本仅支持“无属性数据凭证”。</p>
<p><img src="/network-img/选择元数据.png" alt="选择元数据"></p>
<p>（3）选择需要发行数据资产的数据后，进入信息设置页面，需要设置凭证名称与符号、总发行量、描述信息。</p>
<p>​		“凭证名称”，在Datum-platform数据市场展示中显示。</p>
<p>​		“符号”，在Dex上作为该资产的代号。</p>
<p>​		“总发行量”，可被其他用户购买的总量，每个凭证代表了该数据的一次使用权。</p>
<p>​		信息录入后点击【发布凭证】按钮，需要Metamask钱包对该交易签名确认，完成资产凭证的铸造。</p>
<p><img src="/network-img/Metamask签名确认-1.png" alt="Metamask签名确认-1"></p>
<p>（4）数据资产凭证铸造完成后，需要对其设置初始发行价，并以向Dex添加流动性的方式完成初始发行。</p>
<p>​		数据资产价格以LAT作为参照交易对。</p>
<img src="/network-img/设置兑换价格.png" alt="设置兑换价格" style="zoom:61%;" />
<p>（5）设置完数据资产凭证初始价格后，点击【上架数据市场】按钮，需要Metamask钱包先授权访问该资产，再对该交易签名确认，完成向Dex添加该资产的流动性。</p>
<img src="/network-img/Metamask签名确认-2.png" alt="Metamask签名确认-2" style="zoom:61%;" />
<img src="/network-img/Metamask签名确认-3.png" alt="Metamask签名确认-3" style="zoom:61%;" />
<h2 id="我的凭证" tabindex="-1"><a class="header-anchor" href="#我的凭证" aria-hidden="true">#</a> 我的凭证</h2>
<p><strong>【无属性数据凭证】</strong></p>
<ol>
<li>
<p>点击【我的凭证】-【无属性数据凭证】查看、管理已发布的数据资产凭证。</p>
<p>在【已定价的凭证】页面，显示已经定价并向Dex添加流动性的资产凭证信息，其中“合约地址”用于在Metamask钱包中添加该资产代币，点击“查看”可直接跳转至Dex平台。</p>
<p>在【未定价的凭证】页面，显示已铸造但为设置初始价格的资产凭证信息，可点击“设置价格”对其进行定价并添加流动性。</p>
</li>
</ol>
<p><img src="/network-img/无属性数据凭证列表.png" alt="无属性数据凭证列表"></p>
<ol start="2">
<li>已定价并添加流动性的资产凭证，可在Dex（https://test.dipoleswap.exchange/）中查看。</li>
</ol>
<p>​	（1）先确认导入该资产。</p>
<p><img src="/network-img/导入流动性.jpeg" alt="导入流动性"></p>
<p>​	（2）在Dex中的Swap页面即可查看到添加的资产情况，也可以通过Swap进行该资产凭证的购买。</p>
<p><img src="/network-img/查看流动性资产.jpeg" alt="查看流动性资产"></p>
<h2 id="计算任务-仅管理员可见" tabindex="-1"><a class="header-anchor" href="#计算任务-仅管理员可见" aria-hidden="true">#</a> 计算任务（仅管理员可见）</h2>
<p>管理员可查看本节点参与执行的隐私计算任务情况。</p>
<p>点击【计算任务】进入计算任务列表页，展示所有执行的任务情况。</p>
<p><img src="/network-img/计算任务列表.png" alt="计算任务列表"></p>
<p>选择任意一个计算任务，点击【查看任务详情】按钮，进入任务详情页面。</p>
<p><img src="/network-img/计算任务详情.png" alt="计算任务详情"></p>
<p>选择任意一个计算任务，点击【查看任务日志】按钮，进入任务日志页面。</p>
<p><img src="/network-img/任务日志.png" alt="任务日志"></p>
</div></template>


