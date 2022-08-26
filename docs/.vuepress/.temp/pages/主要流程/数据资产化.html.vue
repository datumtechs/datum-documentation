<template><div><p>数据资产化是以NFT的形式，将原始数据打包固定成一类特殊的资产，通过NFT的形式实现对资产的权利确认、交易使用、收益获得。</p>
<h3 id="支持的数据资产化模式" tabindex="-1"><a class="header-anchor" href="#支持的数据资产化模式" aria-hidden="true">#</a> 支持的数据资产化模式</h3>
<ul>
<li>发行NFT-721数据资产</li>
</ul>
<h4 id="完成nft合约设置" tabindex="-1"><a class="header-anchor" href="#完成nft合约设置" aria-hidden="true">#</a> 完成NFT合约设置</h4>
<p>调用API获取标准NFT-721合约模板，用户可在已传输的原始数据中选择固定数据资源，设置Data NFT资产。用户可以在一个NFT合约中管理多个原始数据，或者通过不同的NFT合约区分管理不同的原始数据。</p>
<p>接口说明（API）</p>
<h4 id="完成nft合约部署" tabindex="-1"><a class="header-anchor" href="#完成nft合约部署" aria-hidden="true">#</a> 完成NFT合约部署</h4>
<p>NFT合约设置完成后，需要选择区块链进行发布方能生效。目前可对接的公有链有以太坊、Platon，也支持对接联盟链。</p>
<p>接口说明（API）</p>
<p>若用户希望将已部署的NFT合约与已发布的元数据进行关联，则可通过如下方式实现。</p>
<p>接口说明（API）</p>
<h4 id="查看已发布的nft合约" tabindex="-1"><a class="header-anchor" href="#查看已发布的nft合约" aria-hidden="true">#</a> 查看已发布的NFT合约</h4>
<p>选择对应的NFT合约，查看设置的信息、属性。</p>
<p>接口说明（API）</p>
<h4 id="铸造data-nft-token" tabindex="-1"><a class="header-anchor" href="#铸造data-nft-token" aria-hidden="true">#</a> 铸造Data NFT Token</h4>
<p>用户能够基于已发布的NFT合约，铸造不同属性的Data NFT token并设置数量，来完成对不同原始数据的资产化操作。如果用户的NFT合约包含了多个原始数据，可以铸造不同名称的Data NFT Token进行区分。有关数据资产的分享、交易、使用都将以Data NFT Token作为凭证实现操作。</p>
<p>接口说明（API）</p>
<h4 id="data-nft-token属性设置" tabindex="-1"><a class="header-anchor" href="#data-nft-token属性设置" aria-hidden="true">#</a> Data NFT Token属性设置</h4>
<p>Data NFT Token支持添加、修改、管理各类属性，属性可用户定义该Token的使用权限及使用方式。</p>
<p>具体分为：</p>
<p>所有权属性设置。管理Data NFT Token交易买卖后的持有对象，所有权属性的变更意味着持有人的变更。</p>
<p>接口说明（API）</p>
<p>使用方式属性设置。管理Data NFT Token交易后能够按次数、按期限访问该Token对应的原始数据。</p>
<p>接口说明（API）</p>
<p>使用权限属性设置。管理Data NFT Token交易后能够查看、下载该Token对应的原始数据或元数据权限。</p>
<p>接口说明（API）</p>
<p>其他属性设置。管理Data NFT Token对应的原始数据存储路径、或其他用户希望让合作方看到的信息。</p>
<p>接口说明（API）</p>
<h4 id="销毁data-nft-token" tabindex="-1"><a class="header-anchor" href="#销毁data-nft-token" aria-hidden="true">#</a> 销毁Data NFT Token</h4>
<p>用户可以自行销毁已经铸造的未被交易使用的Data NFT Token。</p>
<p>接口说明（API）</p>
</div></template>


