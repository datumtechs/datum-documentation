<template><div><h1 id="数据可信交易及授权" tabindex="-1"><a class="header-anchor" href="#数据可信交易及授权" aria-hidden="true">#</a> 数据可信交易及授权</h1>
<h3 id="元数据查看" tabindex="-1"><a class="header-anchor" href="#元数据查看" aria-hidden="true">#</a> 元数据查看</h3>
<p>用户可以先通过查看已发布的元数据确定原始数据情况，判断是否需要购买对应的Data Token; 用户可调用元数据查看API接口，在链上或数据服务平台上发起查询，此调用过程不需要鉴权。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：getMetaData</p>
</li>
<li>
<p>参数说明</p>
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
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;token_address&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x8df91a59b8610990004987ac6ad8b6e70779ee97&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;token_id&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;1&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;owner_of&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;contract_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;ERC721&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;datum&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;symbol&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;FZAI1&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;file_hash&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x.....................&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;storage_method&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;hosting/Unmanaged&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;permission_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;ownership/use&quot;</span><span style="color: #F8F8F2">, </span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;metadata&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;{</span></span>
<span class="line"><span style="color: #CFCFC2">        	&quot;</span><span style="color: #F44747">name</span><span style="color: #CFCFC2">&quot;: &quot;</span><span style="color: #F44747">datum</span><span style="color: #CFCFC2">&quot;, </span></span>
<span class="line"><span style="color: #CFCFC2">        	&quot;</span><span style="color: #F44747">description</span><span style="color: #CFCFC2">&quot;: &quot;</span><span style="color: #F44747">this</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">is</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">datum</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">metadata</span><span style="color: #CFCFC2">&quot;, </span></span>
<span class="line"><span style="color: #CFCFC2">        	&quot;</span><span style="color: #F44747">data_size</span><span style="color: #CFCFC2">&quot;: 100, </span></span>
<span class="line"><span style="color: #CFCFC2">            &quot;</span><span style="color: #F44747">columns</span><span style="color: #CFCFC2">&quot;: 2, </span></span>
<span class="line"><span style="color: #CFCFC2">            &quot;</span><span style="color: #F44747">rows</span><span style="color: #CFCFC2">&quot;: 10, </span></span>
<span class="line"><span style="color: #CFCFC2">            &quot;</span><span style="color: #F44747">cols_desc</span><span style="color: #CFCFC2">&quot;: [</span></span>
<span class="line"><span style="color: #CFCFC2">                {&quot;</span><span style="color: #F44747">col_name</span><span style="color: #CFCFC2">&quot;: &quot;</span><span style="color: #F44747">col</span><span style="color: #AE81FF">1</span><span style="color: #CFCFC2">&quot;, &quot;</span><span style="color: #F44747">col_desc</span><span style="color: #CFCFC2">&quot;: &quot;</span><span style="color: #F44747">this</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">is</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">col</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">desc</span><span style="color: #CFCFC2">&quot;},</span></span>
<span class="line"><span style="color: #CFCFC2">                {&quot;</span><span style="color: #F44747">col_name</span><span style="color: #CFCFC2">&quot;: &quot;</span><span style="color: #F44747">col</span><span style="color: #AE81FF">2</span><span style="color: #CFCFC2">&quot;, &quot;</span><span style="color: #F44747">col_desc</span><span style="color: #CFCFC2">&quot;: &quot;</span><span style="color: #F44747">this</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">is</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">col</span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">desc</span><span style="color: #CFCFC2">&quot;}</span></span>
<span class="line"><span style="color: #CFCFC2">			]</span></span>
<span class="line"><span style="color: #CFCFC2">		}&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;get MetaData success.&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --request POST \</span></span>
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/$contract_address/getMetaData?chainId=$chainId&amp;tokenid=$tokenid&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="所有权转移" tabindex="-1"><a class="header-anchor" href="#所有权转移" aria-hidden="true">#</a> 所有权转移</h3>
<p>用户在确定需要某个数据资产后，与提供方达成数据资产交易买卖后，数据提供方可通过调用此API改变Data Token的所有权属性，将该Data Token转移给购买用户。获得所有权的用户可以凭该Token访问、查看、下载对应的原始数据。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：transferOwnership</p>
</li>
<li>
<p>参数说明</p>
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
<td>to_address</td>
<td>address</td>
<td>数据使用方地址</td>
<td>Y</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #F44747">transaction_hash</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0xxxxxxxxxxxxxxxxxxxx&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">    },</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;transfer NFT Ownership success.&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --request POST \</span></span>
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/$contract_address/transferOwnership?chainId=$chainId&amp;tokenid=$tokenid&amp;to_address=$to_address&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="使用权转移" tabindex="-1"><a class="header-anchor" href="#使用权转移" aria-hidden="true">#</a> 使用权转移</h3>
<p>用户在确定需要某个数据资产后，出于业务需求和资金考虑，只需要进行单次或一定期限内的查询或计算使用，在与提供方达成数据资产交易后，数据提供方可通过调用此API改变Data Token的使用方式属性，将该Data Token提供给购买用户。获得使用权的用户可以凭该Token访问、查看、在限定范围内计算或使用对应的原始数据，该原始数据可能是明文或者以隐私计算的方式提供使用。</p>
<h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h4>
<ul>
<li>
<p>接口名称：transferUsageRights</p>
</li>
<li>
<p>参数说明</p>
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
<td>to_address</td>
<td>address</td>
<td>数据使用方地址</td>
<td>Y</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #F44747">transaction_hash</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0xxxxxxxxxxxxxxxxxxxx&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">    },</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;transfer NFT Usage Rights success.&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --request POST \</span></span>
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/$contract_address/transferUsageRights?chainId=$chainId&amp;tokenid=$tokenid&amp;to_address=$to_address&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="数据资产使用权限验证" tabindex="-1"><a class="header-anchor" href="#数据资产使用权限验证" aria-hidden="true">#</a> 数据资产使用权限验证</h3>
<p>数据持有方可调用此API验证数据使用方持有的Data Token对应的数据资产使用权限。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：verifyAccess</p>
</li>
<li>
<p>参数说明</p>
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
<td>operate</td>
<td>elem</td>
<td>1: 查看，2:下载</td>
<td>Y</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;token_address&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x8df91a59b8610990004987ac6ad8b6e70779ee97&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;token_id&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;1&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;owner_of&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;contract_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;ERC721&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;datum&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;symbol&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;FZAI1&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;operate&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;view/download&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;Validation of access rights succeeded.&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --request POST \</span></span>
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/$contract_address/verifyAccess?chainId=$chainId&amp;tokenid=$tokenid&amp;operate=$operate&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="查看原始数据" tabindex="-1"><a class="header-anchor" href="#查看原始数据" aria-hidden="true">#</a> 查看原始数据</h3>
<p>用户可以根据权限查看Data NFT对应的原始数据。</p>
<p><strong>主要功能</strong></p>
<p>用户通过拥有查看权限的Data Token调用原始数据查看API接口，鉴权通过后，可以查看对应的原数据信息。对于托管存储方式的密文数据，需要先获得<a href="#%E8%AE%BF%E9%97%AE%E6%98%8E%E6%96%87%E6%95%B0%E6%8D%AE%E5%89%8D%E6%82%AC">访问明文数据权限</a>，否则不能查看到明文数据。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：getRawData</p>
</li>
<li>
<p>参数说明</p>
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
<td>publicKey</td>
<td>string</td>
<td>用户公钥，原数据使用托管方式存储时需要传此参数；如已经授权，则不可以不传此参数</td>
<td>N</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;token_address&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x8df91a59b8610990004987ac6ad8b6e70779ee97&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;token_id&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;1&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;owner_of&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;contract_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;ERC721&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;datum&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;symbol&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;FZAI1&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;file_hash&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x.....................&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;storage_method&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;hosting/Unmanaged&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;permission_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;ownership/use&quot;</span><span style="color: #F8F8F2">, </span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;metadata&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;{</span></span>
<span class="line"><span style="color: #CFCFC2">        	&quot;</span><span style="color: #F44747">name</span><span style="color: #CFCFC2">&quot;: &quot;</span><span style="color: #F44747">datum</span><span style="color: #CFCFC2">&quot;, </span></span>
<span class="line"><span style="color: #CFCFC2">        	&quot;</span><span style="color: #F44747">description</span><span style="color: #CFCFC2">&quot;: &quot;</span><span style="color: #F44747">this</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">is</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">datum</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">metadata</span><span style="color: #CFCFC2">&quot;, </span></span>
<span class="line"><span style="color: #CFCFC2">        	&quot;</span><span style="color: #F44747">file_type</span><span style="color: #CFCFC2">&quot;: &quot;</span><span style="color: #F44747">csv</span><span style="color: #CFCFC2">&quot;,</span></span>
<span class="line"><span style="color: #CFCFC2">        	&quot;</span><span style="color: #F44747">data_size</span><span style="color: #CFCFC2">&quot;: 100, </span></span>
<span class="line"><span style="color: #CFCFC2">            &quot;</span><span style="color: #F44747">columns</span><span style="color: #CFCFC2">&quot;: 2, </span></span>
<span class="line"><span style="color: #CFCFC2">            &quot;</span><span style="color: #F44747">rows</span><span style="color: #CFCFC2">&quot;: 10, </span></span>
<span class="line"><span style="color: #CFCFC2">            &quot;</span><span style="color: #F44747">cols_desc</span><span style="color: #CFCFC2">&quot;: [</span></span>
<span class="line"><span style="color: #CFCFC2">                {&quot;</span><span style="color: #F44747">col_name</span><span style="color: #CFCFC2">&quot;: &quot;</span><span style="color: #F44747">col</span><span style="color: #AE81FF">1</span><span style="color: #CFCFC2">&quot;, &quot;</span><span style="color: #F44747">col_desc</span><span style="color: #CFCFC2">&quot;: &quot;</span><span style="color: #F44747">this</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">is</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">col</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">desc</span><span style="color: #CFCFC2">&quot;},</span></span>
<span class="line"><span style="color: #CFCFC2">                {&quot;</span><span style="color: #F44747">col_name</span><span style="color: #CFCFC2">&quot;: &quot;</span><span style="color: #F44747">col</span><span style="color: #AE81FF">2</span><span style="color: #CFCFC2">&quot;, &quot;</span><span style="color: #F44747">col_desc</span><span style="color: #CFCFC2">&quot;: &quot;</span><span style="color: #F44747">this</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">is</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">col</span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">desc</span><span style="color: #CFCFC2">&quot;}</span></span>
<span class="line"><span style="color: #CFCFC2">			]</span></span>
<span class="line"><span style="color: #CFCFC2">		}&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;content&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;this is data content.&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;get data success.&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --request POST \</span></span>
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/$contract_address/getRawData?chainId=$chainId&amp;tokenid=$tokenid&amp;publicKey=$publicKey&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="下载原始数据" tabindex="-1"><a class="header-anchor" href="#下载原始数据" aria-hidden="true">#</a> 下载原始数据</h3>
<p>用户可以根据权限下载Data NFT对应的原始数据。</p>
<p><strong>功能描述</strong></p>
<p>用户通过拥有下载权限的Data Token调用数据下载API接口，鉴权通过后，可以下载对应的原石数据；对于托管存储方式的密文数据，下载前需要先获得<a href="#%E8%AE%BF%E9%97%AE%E6%98%8E%E6%96%87%E6%95%B0%E6%8D%AE%E6%9D%83%E9%99%90">访问明文数据权限</a>，否则不能下载明文数据。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：downloadData</p>
</li>
<li>
<p>参数说明</p>
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
<td>publicKey</td>
<td>string</td>
<td>用户公钥，原数据使用托管方式存储时需要传此参数；如已经授权，则不可以不传此参数</td>
<td>N</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;token_address&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x8df91a59b8610990004987ac6ad8b6e70779ee97&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;token_id&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;1&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;owner_of&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;contract_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;ERC721&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;datum&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;symbol&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;FZAI1&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;file_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;file_hash&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x.....................&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;storage_method&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;hosting/Unmanaged&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;permission_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;ownership/use&quot;</span><span style="color: #F8F8F2">,        </span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;metadata&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;{</span></span>
<span class="line"><span style="color: #CFCFC2">        	&quot;</span><span style="color: #F44747">name</span><span style="color: #CFCFC2">&quot;: &quot;</span><span style="color: #F44747">datum</span><span style="color: #CFCFC2">&quot;, </span></span>
<span class="line"><span style="color: #CFCFC2">        	&quot;</span><span style="color: #F44747">description</span><span style="color: #CFCFC2">&quot;: &quot;</span><span style="color: #F44747">this</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">is</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">datum</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">metadata</span><span style="color: #CFCFC2">&quot;, </span></span>
<span class="line"><span style="color: #CFCFC2">        	&quot;</span><span style="color: #F44747">data_size</span><span style="color: #CFCFC2">&quot;: 100, </span></span>
<span class="line"><span style="color: #CFCFC2">            &quot;</span><span style="color: #F44747">columns</span><span style="color: #CFCFC2">&quot;: 2, </span></span>
<span class="line"><span style="color: #CFCFC2">            &quot;</span><span style="color: #F44747">rows</span><span style="color: #CFCFC2">&quot;: 10, </span></span>
<span class="line"><span style="color: #CFCFC2">            &quot;</span><span style="color: #F44747">cols_desc</span><span style="color: #CFCFC2">&quot;: [</span></span>
<span class="line"><span style="color: #CFCFC2">                {&quot;</span><span style="color: #F44747">col_name</span><span style="color: #CFCFC2">&quot;: &quot;</span><span style="color: #F44747">col</span><span style="color: #AE81FF">1</span><span style="color: #CFCFC2">&quot;, &quot;</span><span style="color: #F44747">col_desc</span><span style="color: #CFCFC2">&quot;: &quot;</span><span style="color: #F44747">this</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">is</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">col</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">desc</span><span style="color: #CFCFC2">&quot;},</span></span>
<span class="line"><span style="color: #CFCFC2">                {&quot;</span><span style="color: #F44747">col_name</span><span style="color: #CFCFC2">&quot;: &quot;</span><span style="color: #F44747">col</span><span style="color: #AE81FF">2</span><span style="color: #CFCFC2">&quot;, &quot;</span><span style="color: #F44747">col_desc</span><span style="color: #CFCFC2">&quot;: &quot;</span><span style="color: #F44747">this</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">is</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">col</span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2"> </span><span style="color: #F44747">desc</span><span style="color: #CFCFC2">&quot;}</span></span>
<span class="line"><span style="color: #CFCFC2">			]</span></span>
<span class="line"><span style="color: #CFCFC2">		}&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;file_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/file.csv&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;download data file success.&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --request POST \</span></span>
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/$contract_address/downloadData?chainId=$chainId&amp;tokenid=$tokenid&amp;publicKey=$publicKey&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="代理重加密服务" tabindex="-1"><a class="header-anchor" href="#代理重加密服务" aria-hidden="true">#</a> 代理重加密服务</h3>
<p>Datum提供原始数据基于代理重加密算法的可信托管服务，确保原始数据在存托使用和鉴权时全程保持密文状态，且在确认使用方访问权限后提供对应查看密钥。</p>
<h4 id="重加密密钥生成" tabindex="-1"><a class="header-anchor" href="#重加密密钥生成" aria-hidden="true">#</a> 重加密密钥生成</h4>
<p>数据使用方申请<a href="#%E6%8E%88%E6%9D%83%E8%AE%BF%E9%97%AE">授权访问</a>时，数据提供方在接收到请求后，会调用api服务生成重加密密钥。</p>
<p><strong>功能描述</strong></p>
<p>数据提供方使用自己的私钥和数据提供方的公钥生成代理重加密密钥，然后将此重加密密钥发送给托管服务；托管服务使用重加密密钥不能解密数据。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：genReEncryptKey</p>
</li>
<li>
<p>参数说明</p>
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
<td>privateKey</td>
<td>string</td>
<td>数据提供方私钥</td>
<td>Y</td>
</tr>
<tr>
<td>publicKey</td>
<td>string</td>
<td>数据使用方公钥</td>
<td>Y</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;Re-EncryptKey&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;.............&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">    },</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;Generate re-encryption key succeeded.&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --request POST \</span></span>
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/$contract_address/genReEncryptKey?privateKey=$privateKey&amp;publicKey=$publicKey&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="加密密钥转换" tabindex="-1"><a class="header-anchor" href="#加密密钥转换" aria-hidden="true">#</a> 加密密钥转换</h4>
<p>当用户持有Data Token申请密文数据查看或下载鉴权时，需调用此api向托管方申请实现加密密钥转换。</p>
<p><strong>功能描述</strong></p>
<p>托管服务使用代理重加密密钥对加密的数据进行密钥转换，生成数据使用方私钥可以解密的密文。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：convertEncryptkey</p>
</li>
<li>
<p>参数说明</p>
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
<td>reEncryptKey</td>
<td>string</td>
<td>代理重加密密钥</td>
<td>Y</td>
</tr>
<tr>
<td>CPKa</td>
<td>string</td>
<td>使用数据提供方公钥对数据加密后的数据</td>
<td>Y</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;CPKb&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;...........&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">    },</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;Convert encryption keys succeeded.&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --request POST \</span></span>
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/$contract_address/convertEncryptkey?reEncryptKey=$reEncryptKey&amp;CPKa=$CPKa&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="授权访问明文数据" tabindex="-1"><a class="header-anchor" href="#授权访问明文数据" aria-hidden="true">#</a> 授权访问明文数据</h4>
<p>数据使用方持有的Data Token对应的原始数据以密文形式托管时，在申请访问使用前，需使用持有的Data Token和公钥调用此API接口，申请授权访问明文数据。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：authAccessToRawData</p>
</li>
<li>
<p>参数说明</p>
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
<td>publicKey</td>
<td>string</td>
<td>用户公钥，原数据使用托管方式存储时需要传此参数；如已经授权，则不可以不传此参数</td>
<td>N</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;token_address&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x8df91a59b8610990004987ac6ad8b6e70779ee97&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;token_id&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;1&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;owner_of&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;contract_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;ERC721&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;datum&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;symbol&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;FZAI1&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;storage_method&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;hosting/Unmanaged&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;Authorization to access plaintext data succeeded.&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --request POST \</span></span>
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/$contract_address/downloadData?chainId=$chainId&amp;tokenid=$tokenid&amp;publicKey=$publicKey&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="访问明文数据权限验证" tabindex="-1"><a class="header-anchor" href="#访问明文数据权限验证" aria-hidden="true">#</a> 访问明文数据权限验证</h4>
<p>用户需要访问的数据是以密文形式存储在Datum提供的存托渠道中时，可以调用此API验证是否有明文访问权限；</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：verifyAccessRawData</p>
</li>
<li>
<p>参数说明</p>
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
<td>publicKey</td>
<td>string</td>
<td>用户公钥，原数据使用托管方式存储时需要传此参数；如已经授权，则不可以不传此参数</td>
<td>N</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;token_address&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x8df91a59b8610990004987ac6ad8b6e70779ee97&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;token_id&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;1&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;owner_of&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;contract_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;ERC721&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;datum&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;symbol&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;FZAI1&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;storage_method&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;hosting/Unmanaged&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;publicKey&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x.......................&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;Verifying access to plaintext data is successful.&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --request POST \</span></span>
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/$contract_address/verifyAccessRawData?chainId=$chainId&amp;tokenid=$tokenid&amp;publicKey=$publicKey&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="数据一致性验证" tabindex="-1"><a class="header-anchor" href="#数据一致性验证" aria-hidden="true">#</a> 数据一致性验证</h3>
<p>为了保证用户下载的数据和数据提供方提供的数据是一致的，用户在下载完数据之后可以进行一致性的验证；同时用户也可以在使用原始数据文件时，调用API验证一致性。</p>
<ul>
<li>数据下载完成之后，用户可以调用此API验证数据的一致性（内部调用）。</li>
<li>使用数据文件之前，调用此API验证数据文件的一致性（外部调用）。</li>
</ul>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：verifyDataIntegrity</p>
</li>
<li>
<p>参数说明</p>
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
<td>path</td>
<td>string</td>
<td>数据文件路径</td>
<td>N</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;token_address&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x8df91a59b8610990004987ac6ad8b6e70779ee97&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;token_id&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;1&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;owner_of&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;contract_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;ERC721&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;datum&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;symbol&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;FZAI1&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;file_hash&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x.....................&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;storage_method&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;hosting/Unmanaged&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;publicKey&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x.......................&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;Verify data consistency is successful.&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --request POST \</span></span>
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/$contract_address/verifyDataIntegrity?chainId=$chainId&amp;tokenid=$tokenid&amp;path=$path&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>


