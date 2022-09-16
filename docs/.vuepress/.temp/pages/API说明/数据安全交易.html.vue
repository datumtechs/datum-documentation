<template><div><h1 id="数据安全交易api说明" tabindex="-1"><a class="header-anchor" href="#数据安全交易api说明" aria-hidden="true">#</a> 数据安全交易API说明</h1>
<h2 id="基于token属性的鉴权访问" tabindex="-1"><a class="header-anchor" href="#基于token属性的鉴权访问" aria-hidden="true">#</a> 基于Token属性的鉴权访问</h2>
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
<h3 id="原始数据查看" tabindex="-1"><a class="header-anchor" href="#原始数据查看" aria-hidden="true">#</a> 原始数据查看</h3>
<p>用户可以根据权限查看Data NFT对应的原始数据。</p>
<p><strong>主要功能</strong></p>
<p>用户通过拥有查看权限的Data Token调用原始数据查看API接口，鉴权通过后，可以查看对应的原数据信息。对于托管存储方式的密文数据，需要先<a href="#%E7%94%B3%E8%AF%B7%E8%AE%BF%E9%97%AE%E6%98%8E%E6%96%87%E6%95%B0%E6%8D%AE%E6%9D%83%E9%99%90">申请访问明文数据权限</a>，否则不能查看到明文数据。</p>
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
<h2 id="基于token属性的安全分享" tabindex="-1"><a class="header-anchor" href="#基于token属性的安全分享" aria-hidden="true">#</a> 基于Token属性的安全分享</h2>
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
<p><strong>如何使用</strong></p>
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
<h3 id="原始数据下载" tabindex="-1"><a class="header-anchor" href="#原始数据下载" aria-hidden="true">#</a> 原始数据下载</h3>
<p>用户可以根据权限下载Data NFT对应的原始数据。</p>
<p><strong>功能描述</strong></p>
<p>用户通过拥有下载权限的Data Token调用数据下载API接口，鉴权通过后，可以下载对应的原石数据；对于托管存储方式的密文数据，下载前需要先<a href="#%E7%94%B3%E8%AF%B7%E8%AE%BF%E9%97%AE%E6%98%8E%E6%96%87%E6%95%B0%E6%8D%AE%E6%9D%83%E9%99%90">申请访问明文数据权限</a>，否则不能下载明文数据。</p>
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
<h3 id="申请访问明文数据权限" tabindex="-1"><a class="header-anchor" href="#申请访问明文数据权限" aria-hidden="true">#</a> 申请访问明文数据权限</h3>
<p>数据使用方持有的Data Token对应的原始数据以密文形式托管时，需使用持有的Data Token和公钥调用此API接口，申请授权访问明文数据权限。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：RequestAccessToRawData</p>
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
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/$contract_address/RequestAccessToRawData?chainId=$chainId&amp;tokenid=$tokenid&amp;publicKey=$publicKey&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="访问明文数据权限验证" tabindex="-1"><a class="header-anchor" href="#访问明文数据权限验证" aria-hidden="true">#</a> 访问明文数据权限验证</h3>
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
<h2 id="token使用后的结算处理" tabindex="-1"><a class="header-anchor" href="#token使用后的结算处理" aria-hidden="true">#</a> Token使用后的结算处理</h2>
<p>用户在使用Token完成对数据的操作后，服务会进行确认Token的使用，然后修改Token的操作属性并上链，如：修改使用后的Token的操作次数，或设置为冻结/销毁状态，此类属性都将作为是否有操作权限的判定标准。</p>
<h3 id="确认使用" tabindex="-1"><a class="header-anchor" href="#确认使用" aria-hidden="true">#</a> 确认使用</h3>
<p>用户在使用Token发起操作时，如原数据下载，服务记录并确认Token的使用情况。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：confirmToUse</p>
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
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;storage_method&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;hosting/Unmanaged&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;publicKey&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x.......................&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;Token confirm to use.&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --request POST \</span></span>
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/$contract_address/confirmToUse?chainId=$chainId&amp;tokenid=$tokenid&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="使用后冻结-销毁" tabindex="-1"><a class="header-anchor" href="#使用后冻结-销毁" aria-hidden="true">#</a> 使用后冻结/销毁</h3>
<p>用户在使用Token完成操作后，如原数据下载，服务通过修改Token的操作属性来冻结/销毁被使用的Token。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：destroyOrFreezeToken</p>
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
<td>option</td>
<td>uint8</td>
<td>修改操作状态，0:冻结；1:销毁</td>
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
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;storage_method&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;hosting/Unmanaged&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;publicKey&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x.......................&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;Token confirm to use.&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --request POST \</span></span>
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;http://datumtechs.com/api/v2/$contract_address/destroyOrFreezeToken?chainId=$chainId&amp;tokenid=$tokenid&amp;option=$option&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>


