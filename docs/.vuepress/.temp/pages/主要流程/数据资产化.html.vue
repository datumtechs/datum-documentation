<template><div><h1 id="数据资产化" tabindex="-1"><a class="header-anchor" href="#数据资产化" aria-hidden="true">#</a> 数据资产化</h1>
<p>数据资产化是以NFT的形式，将原始数据打包固定成一类特殊的资产，通过NFT的形式实现对资产的权利确认、交易使用、收益获得。</p>
<p><strong>支持的数据资产化类型</strong></p>
<ul>
<li>发行NFT-721数据资产</li>
<li>设置NFT属性和使用权限</li>
</ul>
<h3 id="获取nft合约模板" tabindex="-1"><a class="header-anchor" href="#获取nft合约模板" aria-hidden="true">#</a> 获取NFT合约模板</h3>
<p>为了方便用户一键发布数据资产，Datum提供一系列NFT合约模板，例如：NFT721合约模板。用户也可在NFT合约模板的基础，通过合约属性的设置，发行自定义数据资产。</p>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: [</span></span>
<span class="line"><span style="color: #F8F8F2">        {</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #66D9EF; font-style: italic">&quot;templeteId&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #66D9EF; font-style: italic">&quot;templeteType&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #66D9EF; font-style: italic">&quot;templeteContent&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;{xxx}&quot;</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F8F8F2">        }</span></span>
<span class="line"><span style="color: #F8F8F2">      ],</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;OK&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --location --request GET </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/dataAsset/queryNFTContractTempleteList&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="完成nft合约部署" tabindex="-1"><a class="header-anchor" href="#完成nft合约部署" aria-hidden="true">#</a> 完成NFT合约部署</h3>
<p>用户在获取NFT合约模板后，可选择关联已传输的原始数据，或者发布的元数据，完成NFT合约部署。用户可以在一个NFT合约中管理多个原始数据，或者通过不同的NFT合约区分管理不同的原始数据。</p>
<p>NFT合约设置完成后，用户需要选择区块链进行发布方能生效。目前可对接的公有链有以太坊、PlatON (默认)，也支持对接联盟链。</p>
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
<td>templeteId</td>
<td>string</td>
<td>NFT合约内容</td>
<td>Y</td>
</tr>
<tr>
<td>option</td>
<td>string</td>
<td>用户自定义的属性选项(json字段，包含已发布的元数据的metadataId或者直接包含原始数据的originId及原始数据的检索路径等信息)</td>
<td>Y</td>
</tr>
<tr>
<td>desc</td>
<td>string</td>
<td>描述信息</td>
<td>N</td>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;templeteId&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;option&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;{XXx}&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;desc&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;第一个合约&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;user&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x7e336d121679e9d741ab771992d5f32286f60d4a&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;userType&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;sign&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;txHash&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0xdadad...454545&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;contractAddress&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">      },</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;OK&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --location --request POST </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/dataAsset/deployNFT&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">--header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">--data-raw </span><span style="color: #E6DB74">&#39;{</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;templeteId&quot;: 1,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;option&quot;: &quot;{XXx}&quot;,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;desc&quot;: &quot;第一个合约&quot;,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;user&quot;: &quot;0x7e336d121679e9d741ab771992d5f32286f60d4a&quot;,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;userType&quot;: 1,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;sign&quot;: &quot;77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c&quot;</span></span>
<span class="line"><span style="color: #E6DB74">}&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看已发布的nft合约" tabindex="-1"><a class="header-anchor" href="#查看已发布的nft合约" aria-hidden="true">#</a> 查看已发布的NFT合约</h3>
<p>用户可选择已部署的NFT合约，查看合约详情。</p>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: [</span></span>
<span class="line"><span style="color: #F8F8F2">        {</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #66D9EF; font-style: italic">&quot;templeteId&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #66D9EF; font-style: italic">&quot;contractContent&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;{xxx}&quot;</span><span style="color: #F8F8F2"> </span></span>
<span class="line"><span style="color: #F8F8F2">        }</span></span>
<span class="line"><span style="color: #F8F8F2">      ],</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;OK&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --location --request GET </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/dataAsset/queryNFTContractDeployList?userType=1&amp;user=&quot;0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646&quot;&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="铸造data-nft-token" tabindex="-1"><a class="header-anchor" href="#铸造data-nft-token" aria-hidden="true">#</a> 铸造Data NFT Token</h3>
<p>用户能够基于已发布的NFT合约，铸造不同属性的Data NFT token并设置数量，来完成对不同原始数据的资产化操作。如果用户的NFT合约包含了多个原始数据，可以铸造不同名称的Data NFT Token进行区分。有关数据资产的分享、交易、使用都将以Data NFT Token作为凭证实现操作。</p>
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
<td>NFT Data Token属性描述，json格式</td>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;transactionHash&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0xxxxxxxxxxxxxxxxxxxx&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">    },</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;OK&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --request POST \</span></span>
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/dataAsset/mintNFTToken?contractAddress=&quot;0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646&quot;&amp;chainId=$chainId&amp;property=$property&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="销毁data-nft-token" tabindex="-1"><a class="header-anchor" href="#销毁data-nft-token" aria-hidden="true">#</a> 销毁Data NFT Token</h3>
<p>用户可以自行销毁已经铸造的未被交易使用的Data NFT Token。</p>
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
<td>NFT Data Token的id</td>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;transactionHash&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0xxxxxxxxxxxxxxxxxxxx&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">    },</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;OK&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --request POST \</span></span>
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/dataAsset/burnNFTToken?contractAddress=&quot;0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646&quot;&amp;chainId=$chainId&amp;tokenid=$tokenid&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="data-nft-token属性设置" tabindex="-1"><a class="header-anchor" href="#data-nft-token属性设置" aria-hidden="true">#</a> Data NFT Token属性设置</h3>
<p>Data NFT Token支持添加、修改、管理各类属性，属性可用户定义该Token的使用权限及使用方式。</p>
<ul>
<li>具体分为：</li>
</ul>
<p>a、所有权属性设置。管理Data NFT Token交易买卖后的持有对象，所有权属性的变更意味着持有人的变更。</p>
<p>b、使用方式属性设置。管理Data NFT Token交易后能够按次数、按期限访问该Token对应的原始数据。</p>
<p>c、使用权限属性设置。管理Data NFT Token交易后能够查看、下载该Token对应的原始数据或元数据权限。</p>
<p>d、其他属性设置。管理Data NFT Token对应的原始数据存储路径、或其他用户希望让合作方看到的信息。</p>
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
<td>NFT Data Token的id</td>
<td>Y</td>
</tr>
<tr>
<td>property</td>
<td>string</td>
<td>NFT Data Token属性描述，json格式</td>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;transactionHash&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0xxxxxxxxxxxxxxxxxxxx&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">    },</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;OK&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --request POST \</span></span>
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/dataAsset/setNFTTokenProperty?contractAddress=&quot;0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646&quot;&amp;chainId=$chainId&amp;tokenid=$tokenid&amp;property=$property&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看已铸造的data-nft-token" tabindex="-1"><a class="header-anchor" href="#查看已铸造的data-nft-token" aria-hidden="true">#</a> 查看已铸造的Data NFT Token</h3>
<p>选择对应的NFT合约，查看用户已经铸造的Data NFT Token 列表。</p>
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
<td>tokenid</td>
<td>string</td>
<td>NFT Data Token的id</td>
<td>Y</td>
</tr>
<tr>
<td>property</td>
<td>string</td>
<td>NFT Data Token属性描述，json格式</td>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: [</span></span>
<span class="line"><span style="color: #F8F8F2">        {</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #66D9EF; font-style: italic">&quot;templeteId&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #66D9EF; font-style: italic">&quot;tokenid&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;#1&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #66D9EF; font-style: italic">&quot;property&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;{xxxxx}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">        }</span></span>
<span class="line"><span style="color: #F8F8F2">      ],</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;OK&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --location --request GET </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/dataAsset/queryNFTTokenList?userType=1&amp;user=&quot;0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646&quot;&amp;contractAddress=&quot;0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646&quot;&amp;chainId=$chainId&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


