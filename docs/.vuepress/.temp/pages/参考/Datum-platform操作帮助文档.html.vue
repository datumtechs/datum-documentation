<template><div><h1 id="datum-platform操作帮助文档" tabindex="-1"><a class="header-anchor" href="#datum-platform操作帮助文档" aria-hidden="true">#</a> Datum-platform操作帮助文档</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>Datum-platform是用户可以按需购买数据资产使用权、选择Datum-network计算节点、发起计算任务的平台。</p>
<p>平台体验地址：https://testmarkets.datumtechs.com</p>
<h2 id="平台登录" tabindex="-1"><a class="header-anchor" href="#平台登录" aria-hidden="true">#</a> 平台登录</h2>
<p>用户通过MetaMask区块链钱包可直接登录，无需额外注册。</p>
<ol>
<li>在Chrome中打开平台体验地址，点击【Metamask】按钮，在跳出的弹窗中，点击【切换网络】按钮，将网络切换至PlatON开发网络。</li>
</ol>
<p><img src="/platform-img/1-切换网络.png" alt="1-切换网络"></p>
<ol start="2">
<li>切换至PlatON开发网络后，选择一个连接账号。</li>
</ol>
<p><img src="/platform-img/2-连接账号.png" alt="2-连接账号"></p>
<ol start="3">
<li>确认连接后，点击【签名】按钮，完成签名后就可登录平台。</li>
</ol>
<p><img src="/platform-img/3-账号签名.png" alt="3-账号签名"></p>
<h2 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能" aria-hidden="true">#</a> 主要功能</h2>
<ol>
<li>
<h4 id="网络节点" tabindex="-1"><a class="header-anchor" href="#网络节点" aria-hidden="true">#</a> <strong>网络节点</strong></h4>
</li>
</ol>
<p>（1）展示Datum-network中可参与隐私计算任务的节点信息。</p>
<p><img src="/platform-img/4-网络节点.png" alt="4-网络节点"></p>
<p>（2）点击任意一个节点详情，可查看通过该节点发布的元数据，和执行的计算任务信息。</p>
<p><img src="/platform-img/5-节点数据详情.png" alt="5-节点数据详情"></p>
<p><img src="/platform-img/6-节点任务详情.png" alt="6-节点任务详情"></p>
<ol start="2">
<li>
<h4 id="数据市场" tabindex="-1"><a class="header-anchor" href="#数据市场" aria-hidden="true">#</a> <strong>数据市场</strong></h4>
</li>
</ol>
<p>展示全网发布的数据资产凭证信息，及其价格，并能通过点击【购买】按钮跳转至Dex完成该凭证的购买。</p>
<p><img src="/platform-img/7-数据市场.png" alt="7-数据市场"></p>
<ol start="3">
<li>
<h4 id="计算服务" tabindex="-1"><a class="header-anchor" href="#计算服务" aria-hidden="true">#</a> <strong>计算服务</strong></h4>
</li>
</ol>
<p>发起各类计算任务的入口，支持多方数据的隐私计算，与非隐私的AI计算。用户可以通过选择不同的算法模板实现计算需求。</p>
<p><img src="/platform-img/8-计算服务.png" alt="8-计算服务"></p>
<ol start="4">
<li>
<h4 id="计算任务" tabindex="-1"><a class="header-anchor" href="#计算任务" aria-hidden="true">#</a> <strong>计算任务</strong></h4>
</li>
</ol>
<p>查看已发起的计算任务情况，包括基本信息、计算参与方、任务事件详情。</p>
<p><img src="/platform-img/9-计算任务列表.png" alt="9-计算任务列表"></p>
<p><img src="/platform-img/10-计算任务详情.png" alt="10-计算任务详情"></p>
<h2 id="数据资产凭证购买与计算流程" tabindex="-1"><a class="header-anchor" href="#数据资产凭证购买与计算流程" aria-hidden="true">#</a> 数据资产凭证购买与计算流程</h2>
<ol>
<li>
<h4 id="网络节点管理" tabindex="-1"><a class="header-anchor" href="#网络节点管理" aria-hidden="true">#</a> <strong>网络节点管理</strong></h4>
</li>
</ol>
<p>（1）点击右上角【账户信息】-【网络节点管理】进入网络节点管理页面。</p>
<p>网络节点管理默认展示官方发布的Datum-network可开放连接的节点，用户可以任意选择此页面展示的节点执行隐私计任务。</p>
<p><img src="/platform-img/11-账户信息.png" alt="11-账户信息"></p>
<p>（2）用户也可手动添加其它已知的节点做为隐私计算任务执行方。</p>
<p><img src="/platform-img/12-添加节点信息.png" alt="12-添加节点信息"></p>
<ol start="2">
<li>
<h4 id="数据资产凭证购买" tabindex="-1"><a class="header-anchor" href="#数据资产凭证购买" aria-hidden="true">#</a> <strong>数据资产凭证购买</strong></h4>
</li>
</ol>
<p>（1）点击【数据市场】，选择需要使用的数据资产。</p>
<p><img src="/platform-img/13-数据市场列表.png" alt="13-数据市场列表"></p>
<p>（2）点击【查看数据】，可以查看该数据的基本信息、元数据，及参与的计算任务。</p>
<p><img src="/platform-img/14-元数据信息.png" alt="14-元数据信息"></p>
<p>（3）点击【购买】，跳转至Dex（https://test.dipoleswap.exchange/）页面。每次计算需要消耗一个数据资产凭证，可按照计算需求购买对应数量的凭证。</p>
<p><img src="/platform-img/15-购买元数据.png" alt="15-购买元数据"></p>
<p>（4）购买成功后，已购买的数据资产凭证会在【我的数据】页面展示。</p>
<p><img src="/platform-img/16-已购买数据列表.png" alt="16-已购买数据列表"></p>
<ol start="3">
<li>
<h4 id="计算节点与使用凭证授权" tabindex="-1"><a class="header-anchor" href="#计算节点与使用凭证授权" aria-hidden="true">#</a> <strong>计算节点与使用凭证授权</strong></h4>
</li>
</ol>
<p>（1）计算节点授权</p>
<p>授权节点有权在计算任务执行中操作用户已授权的数据资产凭证。</p>
<p>点击【我的授权】-【节点授权】，可以选择此页面展示的任意节点添加至白名单，授权需要调用Metamask钱包对该交易签名确认。</p>
<p><img src="/platform-img/17-节点授权.png" alt="17-节点授权"></p>
<p>（2）使用凭证授权</p>
<p>① 手续费凭证授权，授权节点可在计算任务执行中扣除的手续费总额度。</p>
<p>点击【我的授权】-【凭证授权】，输入手续费凭证授权数量，该凭证以WLAT计量。如没有WLAT，可点击“购买”按钮跳转至Dex进行购买。</p>
<p><img src="/platform-img/18-凭证授权.png" alt="18-凭证授权"></p>
<p>② 数据凭证授权，授权节点可在计算任务执行中扣除的数据资产凭证总额度。</p>
<p>点击【我的授权】-【凭证授权】，选择需要参与计算的数据资产凭证，并设置授权数量。该数量可控制节点在执行中最大扣除的数额。</p>
<p><img src="/platform-img/19-授权凭证数量.png" alt="19-授权凭证数量"></p>
<ol start="4">
<li>
<h4 id="新建计算工作流" tabindex="-1"><a class="header-anchor" href="#新建计算工作流" aria-hidden="true">#</a> 新建计算工作流</h4>
</li>
</ol>
<p>（1）选择隐私计算算法</p>
<p>点击【新建工作流】，或者点击【计算服务】选择需要应用的隐私计算算法。</p>
<p><img src="/platform-img/20-新建工作流.png" alt="20-新建工作流"></p>
<p>（2）选择参与计算的数据</p>
<p>“选择任务发起方”，需为已授权的网络节点。需要注意的是，如果发起一个PSI（隐私集合求交）任务，任务发起方必须为拥有数据的一方。</p>
<p>“选择数据”，需为已购买的数据资产凭证，且参与计算的2个数据不能由同一节点发布。</p>
<p><img src="/platform-img/21-选择已购买数据.png" alt="21-选择已购买数据"></p>
<p>（3）选择计算环境</p>
<p>在引导模式下平台默认配置计算所需的最低资源要求，“最长运行时长”可按需填写。</p>
<p><img src="/platform-img/22-设置计算环境.png" alt="22-设置计算环境"></p>
<p>（4）选择计算结果接收方</p>
<p>选择计算完成后结果保存在哪个网络节点，可按需选择一方或保存至两方。</p>
<p><img src="/platform-img/23-设置结果接收方.png" alt="23-设置结果接收方"></p>
<p>点击【保存，并返回】后，计算任务工作流创建完成。</p>
<ol start="5">
<li>
<h4 id="启动计算任务" tabindex="-1"><a class="header-anchor" href="#启动计算任务" aria-hidden="true">#</a> 启动计算任务</h4>
</li>
</ol>
<p>（1）点击【我的工作流】进入工作流管理页面。</p>
<p><img src="/platform-img/24-启动任务.png" alt="24-启动任务"></p>
<p>（2）选择任意一个工作流，点击【运行记录】按钮，可对该工作流内容进行编辑、启动或暂停计算任务。</p>
<p>点击【启动】按钮后，平台将校验参与计算的数据资产凭证是否已足额授权、任务发起方是否为已授权节点，如果存在授权异常将会报错提示，工作流无法启动执行。</p>
<p><img src="/platform-img/25-运行记录.png" alt="25-运行记录"></p>
<p>（3）工作流启动后，可点击【查看详情】/【查看任务结果】按钮确认计算任务执行情况。</p>
<p><img src="/platform-img/26-查看运算结果.png" alt="26-查看运算结果"></p>
<p>隐私计算任务执行完成后，计算结果将会输出在选定的节点路径下，可通过登录该路径获取结果文件。</p>
<h2 id="隐私计算模式介绍" tabindex="-1"><a class="header-anchor" href="#隐私计算模式介绍" aria-hidden="true">#</a> 隐私计算模式介绍</h2>
<ol>
<li>
<h4 id="引导模式" tabindex="-1"><a class="header-anchor" href="#引导模式" aria-hidden="true">#</a> 引导模式</h4>
</li>
</ol>
<p>按照不同计算类型，提供标准的算法设置模板，用户在【计算服务】/【新建工作流】中发起计算任务时，默认为引导模式。</p>
<p><img src="/platform-img/27-引导模式.png" alt="27-引导模式"></p>
<ol start="2">
<li>
<h4 id="专家模式" tabindex="-1"><a class="header-anchor" href="#专家模式" aria-hidden="true">#</a> 专家模式</h4>
</li>
</ol>
<p>对专业用户，提供查看算法代码、支持对部分算法变量值进行修改的计算模式。</p>
<p>在【新建工作流页面】页面，点击【切换专家模式】即可实现。</p>
<p><img src="/platform-img/28-专家模式.png" alt="28-专家模式"></p>
</div></template>


