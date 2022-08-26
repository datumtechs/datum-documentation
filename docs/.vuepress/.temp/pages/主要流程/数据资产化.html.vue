<template><div><h1 id="数据资产化" tabindex="-1"><a class="header-anchor" href="#数据资产化" aria-hidden="true">#</a> 数据资产化</h1>
<p>数据资产化是以NFT的形式，将原始数据打包固定成一类特殊的资产，通过NFT的形式实现对资产的权利确认、交易使用、收益获得。</p>
<h2 id="支持的数据资产化模式" tabindex="-1"><a class="header-anchor" href="#支持的数据资产化模式" aria-hidden="true">#</a> 支持的数据资产化模式</h2>
<ul>
<li>发行NFT-721数据资产</li>
<li>NFT属性设置：设置NFT的权限等属性</li>
</ul>
<h3 id="获取nft合约模板信息" tabindex="-1"><a class="header-anchor" href="#获取nft合约模板信息" aria-hidden="true">#</a> 获取NFT合约模板信息</h3>
<p>为了方便用户一键式发布数据资产，Datum内置了一些列的NFT合约模板，基于NFT合约模板的基础上用户也可拓展合约属性做到自定义部署数据资产。</p>
<h4 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>用户在发布数据资产时进行NFT合约部署使用到的Datum内置NFT合约模板可能不能完全满足用户的某些特殊场景，此时用户需要基于NFT模板进行自定义拓展。</li>
</ul>
<h4 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述" aria-hidden="true">#</a> 功能描述</h4>
<ul>
<li>获取Datum内置的NFT合约模板。</li>
</ul>
<h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h4>
<ul>
<li>
<p>接口名称：<code v-pre>queryNFTContractTempleteList</code></p>
</li>
<li>
<p>请求方式: <code v-pre>GET</code></p>
</li>
<li>
<p>请求数据类型: 无</p>
</li>
<li>
<p>响应数据类型: <code v-pre>*/*</code></p>
</li>
<li>
<p>请求参数：</p>
</li>
</ul>
<p>无</p>
<ul>
<li>响应状态:</li>
</ul>
<table>
<thead>
<tr>
<th>状态码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>OK</td>
</tr>
<tr>
<td>201</td>
<td>Created</td>
</tr>
<tr>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>403</td>
<td>Forbidden</td>
</tr>
<tr>
<td>404</td>
<td>Not Found</td>
</tr>
</tbody>
</table>
<ul>
<li>响应参数:</li>
</ul>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
<th>是否必填</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>int</td>
<td>响应码</td>
<td>Y</td>
</tr>
<tr>
<td>result</td>
<td>jsonArray</td>
<td>Datum内置的NFT合约模板列表</td>
<td>Y</td>
</tr>
<tr>
<td>templeteId</td>
<td>int</td>
<td>Datum内置的NFT合约模板Id</td>
<td>Y</td>
</tr>
<tr>
<td>templeteType</td>
<td>int</td>
<td>Datum内置的NFT合约模板的合约类型</td>
<td>Y</td>
</tr>
<tr>
<td>templeteContent</td>
<td>string</td>
<td>Datum内置的NFT合约模板的合约内容</td>
<td>Y</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>响应描述</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>响应示例:</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
      <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"templeteId"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"templeteType"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"templeteContent"</span><span class="token operator">:</span> <span class="token string">"{xxx}"</span> 
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"OK"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--location</span> <span class="token parameter variable">--request</span> GET <span class="token string">'https://datum.io/api/v2/dataAsset/queryNFTContractTempleteList'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="完成nft合约部署" tabindex="-1"><a class="header-anchor" href="#完成nft合约部署" aria-hidden="true">#</a> 完成NFT合约部署</h3>
<p>调用API获取标准NFT-721合约模板，用户可在已传输的原始数据中选择固定数据资源，设置Data NFT资产。用户可以在一个NFT合约中管理多个原始数据，或者通过不同的NFT合约区分管理不同的原始数据。NFT合约设置完成后，需要选择区块链进行发布方能生效。目前可对接的公有链有以太坊、PlatON，也支持对接联盟链。</p>
<h4 id="使用场景-1" tabindex="-1"><a class="header-anchor" href="#使用场景-1" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>用户使用Datum内置NFT合约模板关联到响应的元数据信息进行合约部署，进而做到将用户的原始数据在Web3中的流动价值资产化。</li>
</ul>
<h4 id="功能描述-1" tabindex="-1"><a class="header-anchor" href="#功能描述-1" aria-hidden="true">#</a> 功能描述</h4>
<ul>
<li>使用Datum内置NFT合约模板关联元数据发布NFT。</li>
</ul>
<h4 id="如何使用-1" tabindex="-1"><a class="header-anchor" href="#如何使用-1" aria-hidden="true">#</a> 如何使用</h4>
<ul>
<li>
<p>接口名称：<code v-pre>deployNFT</code></p>
</li>
<li>
<p>请求方式: <code v-pre>POST</code></p>
</li>
<li>
<p>请求数据类型: <code v-pre>application/json</code></p>
</li>
<li>
<p>响应数据类型: <code v-pre>*/*</code></p>
</li>
<li>
<p>请求参数：</p>
</li>
</ul>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
<th>是否必填</th>
</tr>
</thead>
<tbody>
<tr>
<td>metadataId</td>
<td>string</td>
<td>元数据Id</td>
<td>Y</td>
</tr>
<tr>
<td>templeteId</td>
<td>string</td>
<td>NFT合约内容</td>
<td>Y</td>
</tr>
<tr>
<td>option</td>
<td>string</td>
<td>用户自定义的属性选项</td>
<td>Y</td>
</tr>
<tr>
<td>desc</td>
<td>string</td>
<td>部署描述</td>
<td>Y</td>
</tr>
<tr>
<td>user</td>
<td>string</td>
<td>用户信息</td>
<td>Y</td>
</tr>
<tr>
<td>userType</td>
<td>int</td>
<td>用户类型</td>
<td>Y</td>
</tr>
<tr>
<td>sign</td>
<td>string</td>
<td>元数据的消息签名</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>请求参数示例：</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
      <span class="token property">"metadataId"</span><span class="token operator">:</span> <span class="token string">"metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"</span><span class="token punctuation">,</span>
      <span class="token property">"templeteId"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"option"</span><span class="token operator">:</span> <span class="token string">"{XXx}"</span><span class="token punctuation">,</span>
      <span class="token property">"desc"</span><span class="token operator">:</span> <span class="token string">"第一个合约"</span><span class="token punctuation">,</span>
      <span class="token property">"user"</span><span class="token operator">:</span> <span class="token string">"0x7e336d121679e9d741ab771992d5f32286f60d4a"</span><span class="token punctuation">,</span>
      <span class="token property">"userType"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"sign"</span><span class="token operator">:</span> <span class="token string">"77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>响应状态:</li>
</ul>
<table>
<thead>
<tr>
<th>状态码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>OK</td>
</tr>
<tr>
<td>201</td>
<td>Created</td>
</tr>
<tr>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>403</td>
<td>Forbidden</td>
</tr>
<tr>
<td>404</td>
<td>Not Found</td>
</tr>
</tbody>
</table>
<ul>
<li>响应参数:</li>
</ul>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
<th>是否必填</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>int</td>
<td>响应码</td>
<td>Y</td>
</tr>
<tr>
<td>result</td>
<td>json</td>
<td>返回信息</td>
<td>Y</td>
</tr>
<tr>
<td>txHash</td>
<td>string</td>
<td>部署合约的交易Hash</td>
<td>Y</td>
</tr>
<tr>
<td>contractAddress</td>
<td>string</td>
<td>合约地址</td>
<td>Y</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>响应描述</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>响应示例:</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
      <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"txHash"</span><span class="token operator">:</span> <span class="token string">"0xdadad...454545"</span><span class="token punctuation">,</span>
        <span class="token property">"contractAddress"</span><span class="token operator">:</span> <span class="token string">"0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"OK"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--location</span> <span class="token parameter variable">--request</span> POST <span class="token string">'https://datum.io/api/v2/dataAsset/deployNFT'</span> <span class="token punctuation">\</span>
<span class="token parameter variable">--header</span> <span class="token string">'Content-Type: application/json'</span> <span class="token punctuation">\</span>
--data-raw <span class="token string">'{
      "metadataId": "metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646",
      "templeteId": 1,
      "option": "{XXx}",
      "desc": "第一个合约",
      "user": "0x7e336d121679e9d741ab771992d5f32286f60d4a",
      "userType": 1,
      "sign": "77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c"
}'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看已发布的nft合约" tabindex="-1"><a class="header-anchor" href="#查看已发布的nft合约" aria-hidden="true">#</a> 查看已发布的NFT合约</h3>
<p>选择对应的NFT合约，查看设置的信息、属性。</p>
<h4 id="使用场景-2" tabindex="-1"><a class="header-anchor" href="#使用场景-2" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>用户在对数据资产的NFT合约部署后，想查看合约的详情时。</li>
</ul>
<h4 id="功能描述-2" tabindex="-1"><a class="header-anchor" href="#功能描述-2" aria-hidden="true">#</a> 功能描述</h4>
<ul>
<li>获取部署好的NFT合约信息。</li>
</ul>
<h4 id="如何使用-2" tabindex="-1"><a class="header-anchor" href="#如何使用-2" aria-hidden="true">#</a> 如何使用</h4>
<ul>
<li>
<p>接口名称：<code v-pre>queryNFTContractDeployList</code></p>
</li>
<li>
<p>请求方式: <code v-pre>GET</code></p>
</li>
<li>
<p>请求数据类型: 无</p>
</li>
<li>
<p>响应数据类型: <code v-pre>*/*</code></p>
</li>
<li>
<p>请求参数：</p>
</li>
</ul>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
<th>是否必填</th>
</tr>
</thead>
<tbody>
<tr>
<td>userType</td>
<td>int</td>
<td>用户类型</td>
<td>Y</td>
</tr>
<tr>
<td>user</td>
<td>string</td>
<td>用户信息</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>响应状态:</li>
</ul>
<table>
<thead>
<tr>
<th>状态码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>OK</td>
</tr>
<tr>
<td>201</td>
<td>Created</td>
</tr>
<tr>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>403</td>
<td>Forbidden</td>
</tr>
<tr>
<td>404</td>
<td>Not Found</td>
</tr>
</tbody>
</table>
<ul>
<li>响应参数:</li>
</ul>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
<th>是否必填</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>int</td>
<td>响应码</td>
<td>Y</td>
</tr>
<tr>
<td>result</td>
<td>jsonArray</td>
<td>用户部署好的NFT合约列表</td>
<td>Y</td>
</tr>
<tr>
<td>templeteId</td>
<td>int</td>
<td>NFT合约部署时使用的Datum内置合约模板Id</td>
<td>Y</td>
</tr>
<tr>
<td>metadataId</td>
<td>string</td>
<td>NFT合约关联的元数据Id</td>
<td>Y</td>
</tr>
<tr>
<td>contractContent</td>
<td></td>
<td>NFT合约内容</td>
<td>Y</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>响应描述</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>响应示例:</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
      <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"templeteId"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"metadataId"</span><span class="token operator">:</span> <span class="token string">"metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"</span><span class="token punctuation">,</span>
            <span class="token property">"contractContent"</span><span class="token operator">:</span> <span class="token string">"{xxx}"</span> 
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"OK"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--location</span> <span class="token parameter variable">--request</span> GET <span class="token string">'https://datum.io/api/v2/dataAsset/queryNFTContractDeployList?userType=1&amp;user="0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="铸造data-nft-token" tabindex="-1"><a class="header-anchor" href="#铸造data-nft-token" aria-hidden="true">#</a> 铸造Data NFT Token</h3>
<p>用户能够基于已发布的NFT合约，铸造不同属性的Data NFT token并设置数量，来完成对不同原始数据的资产化操作。如果用户的NFT合约包含了多个原始数据，可以铸造不同名称的Data NFT Token进行区分。有关数据资产的分享、交易、使用都将以Data NFT Token作为凭证实现操作。</p>
<h3 id="使用场景-3" tabindex="-1"><a class="header-anchor" href="#使用场景-3" aria-hidden="true">#</a> 使用场景</h3>
<ul>
<li>当数据提供方发行的某个NFT且未转移到其他用户时，如果需要对此NFT的属性进行修改或扩展，如修改访问权限，修改原文件存储路径等，可调用此API进行设置。</li>
</ul>
<h3 id="功能描述-3" tabindex="-1"><a class="header-anchor" href="#功能描述-3" aria-hidden="true">#</a> 功能描述</h3>
<ul>
<li>用户铸造新的NFT Token</li>
</ul>
<h3 id="如何使用-3" tabindex="-1"><a class="header-anchor" href="#如何使用-3" aria-hidden="true">#</a> 如何使用</h3>
<ul>
<li>
<p>接口名称：<code v-pre>mintNFTToken</code></p>
</li>
<li>
<p>请求方式: <code v-pre>POST</code></p>
</li>
<li>
<p>请求数据类型: <code v-pre>application/json</code></p>
</li>
<li>
<p>响应数据类型: <code v-pre>*/*</code></p>
</li>
<li>
<p>请求参数：</p>
</li>
</ul>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
<th>是否必填</th>
</tr>
</thead>
<tbody>
<tr>
<td>contractAddress</td>
<td>address</td>
<td>NFT合约地址</td>
<td>Y</td>
</tr>
<tr>
<td>chainId</td>
<td>uint32</td>
<td>链id，默认为1，表示ethereum主网</td>
<td>N</td>
</tr>
<tr>
<td>property</td>
<td>string</td>
<td>NFT属性描述，json格式</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>响应状态:</li>
</ul>
<table>
<thead>
<tr>
<th>状态码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>OK</td>
</tr>
<tr>
<td>201</td>
<td>Created</td>
</tr>
<tr>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>403</td>
<td>Forbidden</td>
</tr>
<tr>
<td>404</td>
<td>Not Found</td>
</tr>
</tbody>
</table>
<ul>
<li>响应参数:</li>
</ul>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
<th>是否必填</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>int</td>
<td>响应码</td>
<td>Y</td>
</tr>
<tr>
<td>result</td>
<td>jsonArray</td>
<td>用户部署好的NFT合约列表</td>
<td>Y</td>
</tr>
<tr>
<td>transactionHash</td>
<td>string</td>
<td>交易Hash</td>
<td>Y</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>响应描述</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>响应示例:</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"transactionHash"</span><span class="token operator">:</span> <span class="token string">"0xxxxxxxxxxxxxxxxxxxx"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"OK"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--request</span> POST <span class="token punctuation">\</span>
     <span class="token parameter variable">--url</span> <span class="token string">'https://datum.io/api/v2/dataAsset/mintNFTToken?contractAddress="0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"&amp;chainId=$chainId&amp;property=$property'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Accept: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Content-Type: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'X-API-Key: test'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="销毁data-nft-token" tabindex="-1"><a class="header-anchor" href="#销毁data-nft-token" aria-hidden="true">#</a> 销毁Data NFT Token</h3>
<p>用户可以自行销毁已经铸造的未被交易使用的Data NFT Token。</p>
<h3 id="使用场景-4" tabindex="-1"><a class="header-anchor" href="#使用场景-4" aria-hidden="true">#</a> 使用场景</h3>
<ul>
<li>用户需要销毁自己铸造的NFT Token时。</li>
</ul>
<h3 id="功能描述-4" tabindex="-1"><a class="header-anchor" href="#功能描述-4" aria-hidden="true">#</a> 功能描述</h3>
<ul>
<li>销毁NFT Token</li>
</ul>
<h3 id="如何使用-4" tabindex="-1"><a class="header-anchor" href="#如何使用-4" aria-hidden="true">#</a> 如何使用</h3>
<ul>
<li>
<p>接口名称：<code v-pre>burnNFTToken</code></p>
</li>
<li>
<p>请求方式: <code v-pre>POST</code></p>
</li>
<li>
<p>请求数据类型: <code v-pre>application/json</code></p>
</li>
<li>
<p>响应数据类型: <code v-pre>*/*</code></p>
</li>
<li>
<p>请求参数：</p>
</li>
</ul>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
<th>是否必填</th>
</tr>
</thead>
<tbody>
<tr>
<td>contractAddress</td>
<td>address</td>
<td>NFT合约地址</td>
<td>Y</td>
</tr>
<tr>
<td>chainId</td>
<td>uint32</td>
<td>链id，默认为1，表示ethereum主网</td>
<td>N</td>
</tr>
<tr>
<td>tokenid</td>
<td>string</td>
<td>NFT的id</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>响应状态:</li>
</ul>
<table>
<thead>
<tr>
<th>状态码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>OK</td>
</tr>
<tr>
<td>201</td>
<td>Created</td>
</tr>
<tr>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>403</td>
<td>Forbidden</td>
</tr>
<tr>
<td>404</td>
<td>Not Found</td>
</tr>
</tbody>
</table>
<ul>
<li>响应参数:</li>
</ul>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
<th>是否必填</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>int</td>
<td>响应码</td>
<td>Y</td>
</tr>
<tr>
<td>result</td>
<td>jsonArray</td>
<td>用户部署好的NFT合约列表</td>
<td>Y</td>
</tr>
<tr>
<td>transactionHash</td>
<td>string</td>
<td>交易Hash</td>
<td>Y</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>响应描述</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>响应示例:</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"transactionHash"</span><span class="token operator">:</span> <span class="token string">"0xxxxxxxxxxxxxxxxxxxx"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"OK"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--request</span> POST <span class="token punctuation">\</span>
     <span class="token parameter variable">--url</span> <span class="token string">'https://datum.io/api/v2/dataAsset/burnNFTToken?contractAddress="0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"&amp;chainId=$chainId&amp;tokenid=$tokenid'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Accept: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Content-Type: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'X-API-Key: test'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="data-nft-token属性设置" tabindex="-1"><a class="header-anchor" href="#data-nft-token属性设置" aria-hidden="true">#</a> Data NFT Token属性设置</h3>
<p>Data NFT Token支持添加、修改、管理各类属性，属性可用户定义该Token的使用权限及使用方式。</p>
<ul>
<li>具体分为：</li>
</ul>
<p>a、所有权属性设置。管理Data NFT Token交易买卖后的持有对象，所有权属性的变更意味着持有人的变更。</p>
<p>b、使用方式属性设置。管理Data NFT Token交易后能够按次数、按期限访问该Token对应的原始数据。</p>
<p>c、使用权限属性设置。管理Data NFT Token交易后能够查看、下载该Token对应的原始数据或元数据权限。</p>
<p>d、其他属性设置。管理Data NFT Token对应的原始数据存储路径、或其他用户希望让合作方看到的信息。</p>
<h3 id="使用场景-5" tabindex="-1"><a class="header-anchor" href="#使用场景-5" aria-hidden="true">#</a> 使用场景</h3>
<ul>
<li>当数据提供方发行的某个NFT且未转移到其他用户时，如果需要对此NFT的属性进行修改或扩展，如修改访问权限，修改原文件存储路径等，可调用此API进行设置。</li>
</ul>
<h3 id="功能描述-5" tabindex="-1"><a class="header-anchor" href="#功能描述-5" aria-hidden="true">#</a> 功能描述</h3>
<p>数据提供方通过调用NFT属性设置API接口，可以设置NFT的属性，如：</p>
<ul>
<li>NFT权限属性
<ul>
<li>所有权权限属性（明文计算）
<ul>
<li>原数据查看权限属性</li>
<li>原数据下载权限属性</li>
</ul>
</li>
<li>使用权权限属性（密文计算）
<ul>
<li>次数</li>
<li>有效期</li>
</ul>
</li>
</ul>
</li>
<li>原数据文件存储路径属性</li>
<li>.....</li>
<li></li>
</ul>
<h3 id="如何使用-5" tabindex="-1"><a class="header-anchor" href="#如何使用-5" aria-hidden="true">#</a> 如何使用</h3>
<ul>
<li>
<p>接口名称：<code v-pre>setNFTTokenProperty</code></p>
</li>
<li>
<p>请求方式: <code v-pre>POST</code></p>
</li>
<li>
<p>请求数据类型: <code v-pre>application/json</code></p>
</li>
<li>
<p>响应数据类型: <code v-pre>*/*</code></p>
</li>
<li>
<p>请求参数：</p>
</li>
</ul>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
<th>是否必填</th>
</tr>
</thead>
<tbody>
<tr>
<td>contractAddress</td>
<td>address</td>
<td>NFT合约地址</td>
<td>Y</td>
</tr>
<tr>
<td>chainId</td>
<td>uint32</td>
<td>链id，默认为1，表示ethereum主网</td>
<td>N</td>
</tr>
<tr>
<td>tokenid</td>
<td>string</td>
<td>NFT的id</td>
<td>Y</td>
</tr>
<tr>
<td>property</td>
<td>string</td>
<td>NFT属性描述，json格式</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>响应状态:</li>
</ul>
<table>
<thead>
<tr>
<th>状态码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>OK</td>
</tr>
<tr>
<td>201</td>
<td>Created</td>
</tr>
<tr>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>403</td>
<td>Forbidden</td>
</tr>
<tr>
<td>404</td>
<td>Not Found</td>
</tr>
</tbody>
</table>
<ul>
<li>响应参数:</li>
</ul>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
<th>是否必填</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>int</td>
<td>响应码</td>
<td>Y</td>
</tr>
<tr>
<td>result</td>
<td>jsonArray</td>
<td>用户部署好的NFT合约列表</td>
<td>Y</td>
</tr>
<tr>
<td>transactionHash</td>
<td>string</td>
<td>交易Hash</td>
<td>Y</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>响应描述</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>响应示例:</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"transactionHash"</span><span class="token operator">:</span> <span class="token string">"0xxxxxxxxxxxxxxxxxxxx"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"OK"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--request</span> POST <span class="token punctuation">\</span>
     <span class="token parameter variable">--url</span> <span class="token string">'https://datum.io/api/v2/dataAsset/setNFTTokenProperty?contractAddress="0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"&amp;chainId=$chainId&amp;tokenid=$tokenid&amp;property=$property'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Accept: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Content-Type: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'X-API-Key: test'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看已铸造的data-nft-token" tabindex="-1"><a class="header-anchor" href="#查看已铸造的data-nft-token" aria-hidden="true">#</a> 查看已铸造的Data NFT Token</h3>
<p>选择对应的NFT合约，查看用户已经铸造的Data NFT Token 列表。</p>
<h4 id="使用场景-6" tabindex="-1"><a class="header-anchor" href="#使用场景-6" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>用户查看合已经铸造的Data NFT Token信息时。</li>
</ul>
<h4 id="功能描述-6" tabindex="-1"><a class="header-anchor" href="#功能描述-6" aria-hidden="true">#</a> 功能描述</h4>
<ul>
<li>获取已经铸造的Data NFT Token信息。</li>
</ul>
<h4 id="如何使用-6" tabindex="-1"><a class="header-anchor" href="#如何使用-6" aria-hidden="true">#</a> 如何使用</h4>
<ul>
<li>
<p>接口名称：<code v-pre>queryNFTTokenList</code></p>
</li>
<li>
<p>请求方式: <code v-pre>GET</code></p>
</li>
<li>
<p>请求数据类型: 无</p>
</li>
<li>
<p>响应数据类型: <code v-pre>*/*</code></p>
</li>
<li>
<p>请求参数：</p>
</li>
</ul>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
<th>是否必填</th>
</tr>
</thead>
<tbody>
<tr>
<td>userType</td>
<td>int</td>
<td>用户类型</td>
<td>Y</td>
</tr>
<tr>
<td>user</td>
<td>string</td>
<td>用户信息</td>
<td>Y</td>
</tr>
<tr>
<td>contractAddress</td>
<td>address</td>
<td>NFT合约地址</td>
<td>Y</td>
</tr>
<tr>
<td>chainId</td>
<td>uint32</td>
<td>链id，默认为1，表示ethereum主网</td>
<td>N</td>
</tr>
</tbody>
</table>
<ul>
<li>响应状态:</li>
</ul>
<table>
<thead>
<tr>
<th>状态码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>OK</td>
</tr>
<tr>
<td>201</td>
<td>Created</td>
</tr>
<tr>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>403</td>
<td>Forbidden</td>
</tr>
<tr>
<td>404</td>
<td>Not Found</td>
</tr>
</tbody>
</table>
<ul>
<li>响应参数:</li>
</ul>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
<th>是否必填</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>int</td>
<td>响应码</td>
<td>Y</td>
</tr>
<tr>
<td>result</td>
<td>jsonArray</td>
<td>用户部署好的NFT合约列表</td>
<td>Y</td>
</tr>
<tr>
<td>templeteId</td>
<td>int</td>
<td>NFT合约部署时使用的Datum内置合约模板Id</td>
<td>Y</td>
</tr>
<tr>
<td>metadataId</td>
<td>string</td>
<td>NFT合约关联的元数据Id</td>
<td>Y</td>
</tr>
<tr>
<td>contractContent</td>
<td></td>
<td>NFT合约内容</td>
<td>Y</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>响应描述</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>响应示例:</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
      <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"templeteId"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"metadataId"</span><span class="token operator">:</span> <span class="token string">"metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"</span><span class="token punctuation">,</span>
            <span class="token property">"contractContent"</span><span class="token operator">:</span> <span class="token string">"{xxx}"</span> 
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"OK"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--location</span> <span class="token parameter variable">--request</span> GET <span class="token string">'https://datum.io/api/v2/dataAsset/queryNFTTokenList?userType=1&amp;user="0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"&amp;contractAddress="0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"&amp;chainId=$chainId'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


