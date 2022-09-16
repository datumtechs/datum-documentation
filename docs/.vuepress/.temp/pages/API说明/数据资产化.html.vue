<template><div><h1 id="数据资产化api说明" tabindex="-1"><a class="header-anchor" href="#数据资产化api说明" aria-hidden="true">#</a> 数据资产化API说明</h1>
<p>数据资产发行是以NFT的形式，将原始数据打包固定成一类特殊的资产，通过NFT的形式实现对资产的权利确认、交易使用、收益获得。</p>
<h2 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> Token</h2>
<p>Datum官网服务数据资产化支持ERC20代币标准；数据资产化流程包括：获取合约模板，部署合约，关联原始数据（地址）/对应元数据（已发布），铸造Token，销毁Token。</p>
<h3 id="获取合约模板" tabindex="-1"><a class="header-anchor" href="#获取合约模板" aria-hidden="true">#</a> 获取合约模板</h3>
<p>通过调用api可以获取合约模板，合约模板遵循ERC20代币标准，该标准中包含了固定的接口和事件，如：铸造Token，销毁Token等。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：<code v-pre>queryTokenContractTempleteList</code></p>
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
<td>Datum内置的Token合约模板列表</td>
<td>Y</td>
</tr>
<tr>
<td>templeteId</td>
<td>int</td>
<td>Datum内置的Token合约模板Id</td>
<td>Y</td>
</tr>
<tr>
<td>templeteType</td>
<td>int</td>
<td>Datum内置的Token合约模板的合约类型</td>
<td>Y</td>
</tr>
<tr>
<td>templeteContent</td>
<td>string</td>
<td>Datum内置的Token合约模板的合约内容</td>
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
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --location --request GET </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/dataAsset/queryTokenContractTempleteList&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="部署合约" tabindex="-1"><a class="header-anchor" href="#部署合约" aria-hidden="true">#</a> 部署合约</h3>
<p>数据提供方使用自己的钱包将获取的合约模板部署到指定的链，如：PlatON (默认)，Ethereum等，部署成功后返回合约地址。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：<code v-pre>deployToken</code></p>
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
<td>合约模板ID</td>
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
</tbody>
</table>
<ul>
<li>请求参数示例：</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;templeteId&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;user&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x7e336d121679e9d741ab771992d5f32286f60d4a&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;userType&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">1</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<span class="line"><span style="color: #E6DB74">      &quot;user&quot;: &quot;0x7e336d121679e9d741ab771992d5f32286f60d4a&quot;,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;userType&quot;: 1,</span></span>
<span class="line"><span style="color: #E6DB74">    }&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关联原始数据和元数据" tabindex="-1"><a class="header-anchor" href="#关联原始数据和元数据" aria-hidden="true">#</a> 关联原始数据和元数据</h3>
<p>合约部署成功后，需要将合约地址和对应的原始数据与元数据关联起来，原始数据是指安全上链后返回的地址，元数据是已发布的；不同的原始数据由不同的合约进行管理。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：<code v-pre>tokenCorrelateData</code></p>
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
<td>合约地址</td>
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
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;contractAddress&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x....&quot;</span><span style="color: #F8F8F2">,</span></span>
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
<td>关联原始数据和元数据的交易Hash</td>
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
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;txHash&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0xdadad...454545&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">     },</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;OK&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --location --request POST </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/dataAsset/tokenCorrelateData&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">--header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">--data-raw </span><span style="color: #E6DB74">&#39;{</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;templeteId&quot;: 1,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;option&quot;: &quot;{XXx}&quot;,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;desc&quot;: &quot;第一个合约&quot;,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;user&quot;: &quot;0x7e336d121679e9d741ab771992d5f32286f60d4a&quot;,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;userType&quot;: 1,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;sign&quot;: &quot;77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c&quot;</span></span>
<span class="line"><span style="color: #E6DB74">}&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="铸造token" tabindex="-1"><a class="header-anchor" href="#铸造token" aria-hidden="true">#</a> 铸造Token</h3>
<p>合约地址和对应的原始数据与元数据关联后，数据提供方则可以开始铸造Token，铸造好的Token即可在Dex上进行流通。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：<code v-pre>mintToken</code></p>
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
<td>Token合约地址</td>
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
<td>Data Token属性描述，json格式</td>
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
<td>用户部署好的Token合约列表</td>
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
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/dataAsset/mintToken?contractAddress=&quot;0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646&quot;&amp;chainId=$chainId&amp;property=$property&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="销毁token" tabindex="-1"><a class="header-anchor" href="#销毁token" aria-hidden="true">#</a> 销毁Token</h3>
<p>用户可以自行销毁已经铸造的且未被交易使用的Data Token；或当用户持有的Token被使用后，如：下载原数据后，则需要被销毁；被销毁的Token即不可再被使用。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：<code v-pre>burnToken</code></p>
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
<td>Token合约地址</td>
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
<td>Data Token的id</td>
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
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/dataAsset/burnToken?contractAddress=&quot;0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646&quot;&amp;chainId=$chainId&amp;tokenid=$tokenid&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nft" tabindex="-1"><a class="header-anchor" href="#nft" aria-hidden="true">#</a> NFT</h2>
<p>Datum官网服务数据资产化还支持兼容ERC721、ERC1155的Data NFT协议；数据资产化流程包括：获取合约模板，部署合约，关联原始数据（地址）/对应元数据（已发布），铸造Token，销毁Token。</p>
<h3 id="获取合约模板-1" tabindex="-1"><a class="header-anchor" href="#获取合约模板-1" aria-hidden="true">#</a> 获取合约模板</h3>
<p>通过调用api可以获取合约模板，合约模板兼容ERC721、ERC1155的Data NFT协议，该标准中包含了固定的接口和事件，如：铸造Token，销毁Token等。</p>
<p><strong>如何使用</strong></p>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="部署合约-1" tabindex="-1"><a class="header-anchor" href="#部署合约-1" aria-hidden="true">#</a> 部署合约</h3>
<p>数据提供方使用自己的钱包将获取的合约模板部署到指定的链，如：PlatON，Ethereum等，部署成功后返回合约地址。</p>
<p><strong>如何使用</strong></p>
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
<td>合约模板ID</td>
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
</tbody>
</table>
<ul>
<li>请求参数示例：</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;templeteId&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;user&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x7e336d121679e9d741ab771992d5f32286f60d4a&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;userType&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">1</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<span class="line"><span style="color: #E6DB74">      &quot;user&quot;: &quot;0x7e336d121679e9d741ab771992d5f32286f60d4a&quot;,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;userType&quot;: 1,</span></span>
<span class="line"><span style="color: #E6DB74">    }&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关联原始数据和元数据-1" tabindex="-1"><a class="header-anchor" href="#关联原始数据和元数据-1" aria-hidden="true">#</a> 关联原始数据和元数据</h3>
<p>合约部署成功后，需要将合约地址和对应的原始数据与元数据关联起来，原始数据是指安全上链后返回的地址，元数据是已发布的；不同的原始数据由不同的合约进行管理。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：<code v-pre>nftCorrelateData</code></p>
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
<td>合约地址</td>
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
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;contractAddress&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x....&quot;</span><span style="color: #F8F8F2">,</span></span>
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
<td>关联原始数据和元数据的交易Hash</td>
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
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;txHash&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0xdadad...454545&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">     },</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;OK&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --location --request POST </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/dataAsset/nftCorrelateData&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">--header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">--data-raw </span><span style="color: #E6DB74">&#39;{</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;templeteId&quot;: 1,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;option&quot;: &quot;{XXx}&quot;,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;desc&quot;: &quot;第一个合约&quot;,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;user&quot;: &quot;0x7e336d121679e9d741ab771992d5f32286f60d4a&quot;,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;userType&quot;: 1,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;sign&quot;: &quot;77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c&quot;</span></span>
<span class="line"><span style="color: #E6DB74">}&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="铸造token-1" tabindex="-1"><a class="header-anchor" href="#铸造token-1" aria-hidden="true">#</a> 铸造Token</h3>
<p>合约地址和对应的原始数据与元数据关联后，数据提供方则可以开始铸造Token，铸造好的Token即可在NFT交易所上进行流通。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：<code v-pre>mintNFT</code></p>
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
<td>Data Token属性描述，json格式</td>
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
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/dataAsset/mintNFT?contractAddress=&quot;0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646&quot;&amp;chainId=$chainId&amp;property=$property&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="销毁token-1" tabindex="-1"><a class="header-anchor" href="#销毁token-1" aria-hidden="true">#</a> 销毁Token</h3>
<p>用户可以自行销毁已经铸造的且未被交易使用的Data Token；或用户持有的Token被使用后，如：下载原数据后，则需要被销毁；被销毁的Token即不可再被使用。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：<code v-pre>burnNFT</code></p>
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
<td>Data Token的id</td>
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
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/dataAsset/burnNFT?contractAddress=&quot;0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646&quot;&amp;chainId=$chainId&amp;tokenid=$tokenid&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="交易所上架" tabindex="-1"><a class="header-anchor" href="#交易所上架" aria-hidden="true">#</a> 交易所上架</h2>
<p>为了方便用户一键发布数据资产，Datum提供了可自动上架到DEX或NFT交易平台的api接口，通过调用此api接口，可以将对应的token自动上架到DEX交易所，将NFT上架到NFT交易平台。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：<code v-pre>exchangeListing</code></p>
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
<td>contract_address</td>
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
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --location --request POST </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/dataAsset/exchangeListing&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">--header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">--data-raw </span><span style="color: #E6DB74">&#39;{</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;templeteId&quot;: 1,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;option&quot;: &quot;{XXx}&quot;,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;desc&quot;: &quot;第一个合约&quot;,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;user&quot;: &quot;0x7e336d121679e9d741ab771992d5f32286f60d4a&quot;,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;userType&quot;: 1,</span></span>
<span class="line"><span style="color: #E6DB74">      &quot;sign&quot;: &quot;77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c&quot;</span></span>
<span class="line"><span style="color: #E6DB74">}&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


