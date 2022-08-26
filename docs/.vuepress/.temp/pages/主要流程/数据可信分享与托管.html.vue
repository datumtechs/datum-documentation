<template><div><h1 id="数据可信分享与托管" tabindex="-1"><a class="header-anchor" href="#数据可信分享与托管" aria-hidden="true">#</a> 数据可信分享与托管</h1>
<p>数据可信分享与托管模块提供了一系列API服务，为许多dapp和web3服务提供支持。</p>
<h3 id="为什么使用数据可信分享与托管" tabindex="-1"><a class="header-anchor" href="#为什么使用数据可信分享与托管" aria-hidden="true">#</a> 为什么使用数据可信分享与托管?</h3>
<p>数据可信分享与托管服务可以帮助用户更方便，安全，快速的加入datum网络，因为：</p>
<ul>
<li>使用此模块的api可以方便用户对数据进行鉴权访问；</li>
<li>使用此模块的api可以实现用户对数据进行完整性验证；</li>
<li>使用此模块的api可以实现对托管数据的安全分享；</li>
</ul>
<h3 id="数据可信分享与托管提供什么" tabindex="-1"><a class="header-anchor" href="#数据可信分享与托管提供什么" aria-hidden="true">#</a> 数据可信分享与托管提供什么？</h3>
<ul>
<li>所有权转移 - 将原数据对应的NFT所有权转移给指定用户</li>
<li>元数据查看 - 查看NFT对应的元数据</li>
<li>原数据查看 - 查看NFT对应的原数据</li>
<li>原数据下载 - 下载NFT对应的原数据</li>
<li>授权访问明文数据 - 授权用户访问托管存储的明文数据</li>
<li>访问权限验证 - 访问数据时验证持有NFT的权限</li>
<li>访问明文数据权限验证 -  访问托管数据时验证是否有访问明文数据的权限</li>
<li>数据完整性验证 - 下载原数据后，进行完整性验证</li>
</ul>
<h3 id="数据可信分享与托管支持哪些链" tabindex="-1"><a class="header-anchor" href="#数据可信分享与托管支持哪些链" aria-hidden="true">#</a> 数据可信分享与托管支持哪些链？</h3>
<ul>
<li>PlatON</li>
<li>Ethereum</li>
<li>IPFS</li>
<li>....</li>
</ul>
<h2 id="数据可信分享" tabindex="-1"><a class="header-anchor" href="#数据可信分享" aria-hidden="true">#</a> 数据可信分享</h2>
<p>数据可信分享包括数据查看和下载功能；其中根据数据提供方设置的NFT的权限属性不同，拥有不同的查看权限，分为：元数据查看和原数据查看；主要api和sdk有：</p>
<h3 id="所有权转移" tabindex="-1"><a class="header-anchor" href="#所有权转移" aria-hidden="true">#</a> 所有权转移</h3>
<h4 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>数据使用方和数据提供方线下达成协商时，数据提供方可通过调用此API将数据对应的NFT转发给数据使用方，让其获得所有权。</li>
</ul>
<h4 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述" aria-hidden="true">#</a> 功能描述</h4>
<p>用户通过调用所有权转移API接口，可以给指定的其他用户赋予数据的所有权；拥有数据所有权的用户可以对数据进行查看或下载操作。</p>
<h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h4>
<ul>
<li>
<p>接口名称：passOwnership</p>
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
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;pass NFT Ownership success.&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">curl --request POST \</span></span>
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;https://datum.io/api/v2/$contract_address/passOwnership?	    chainId=$chainId&amp;tokenid=$tokenid&amp;to_address=$to_address&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="元数据查看" tabindex="-1"><a class="header-anchor" href="#元数据查看" aria-hidden="true">#</a> 元数据查看</h3>
<h4 id="使用场景-1" tabindex="-1"><a class="header-anchor" href="#使用场景-1" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>数据使用方在获得原数据对应的NFT之前，可以调用此API查询对应元数据，然后判断出NFT对应的原数据是否是用户需要的；</li>
</ul>
<h4 id="功能描述-1" tabindex="-1"><a class="header-anchor" href="#功能描述-1" aria-hidden="true">#</a> 功能描述</h4>
<p>用户通过调用元数据查看API接口，在链上查询对应的元数据信息；此调用过程不需要鉴权。</p>
<h4 id="如何使用-1" tabindex="-1"><a class="header-anchor" href="#如何使用-1" aria-hidden="true">#</a> 如何使用</h4>
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
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;https://datum.io/api/v2/$contract_address/getMetaData?	     	chainId=$chainId&amp;tokenid=$tokenid&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="原数据查看" tabindex="-1"><a class="header-anchor" href="#原数据查看" aria-hidden="true">#</a> 原数据查看</h3>
<h4 id="使用场景-2" tabindex="-1"><a class="header-anchor" href="#使用场景-2" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>用户可以根据持有的NFT查看对应的原数据。</li>
</ul>
<h4 id="功能描述-2" tabindex="-1"><a class="header-anchor" href="#功能描述-2" aria-hidden="true">#</a> 功能描述</h4>
<p>用户通过拥有查看权限的NFT调用原数据查看API接口，鉴权通过后，可以查看对应的原数据信息；对于托管存储方式的数据因为是加密的，所以需要先进行<a href="#%E6%8E%88%E6%9D%83%E8%AE%BF%E9%97%AE%E6%98%8E%E6%96%87%E6%95%B0%E6%8D%AE">授权访问明文数据</a>，否则不能查看到明文数据。</p>
<h4 id="如何使用-2" tabindex="-1"><a class="header-anchor" href="#如何使用-2" aria-hidden="true">#</a> 如何使用</h4>
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
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;https://datum.io/api/v2/$contract_address/getRawData?	    chainId=$chainId&amp;tokenid=$tokenid&amp;publicKey=$publicKey&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="原数据下载" tabindex="-1"><a class="header-anchor" href="#原数据下载" aria-hidden="true">#</a> 原数据下载</h3>
<h4 id="使用场景-3" tabindex="-1"><a class="header-anchor" href="#使用场景-3" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>用户可以根据持有的NFT下载对应的原数据。</li>
</ul>
<h4 id="功能描述-3" tabindex="-1"><a class="header-anchor" href="#功能描述-3" aria-hidden="true">#</a> 功能描述</h4>
<p>用户通过拥有下载权限的NFT调用数据下载API接口，鉴权通过后，可以下载对应的原数据；对于托管存储方式的数据因为是加密的，所以下载前需要先进行<a href="#%E6%8E%88%E6%9D%83%E8%AE%BF%E9%97%AE%E6%98%8E%E6%96%87%E6%95%B0%E6%8D%AE">授权访问明文数据</a>，否则不能下载明文数据。</p>
<h4 id="如何使用-3" tabindex="-1"><a class="header-anchor" href="#如何使用-3" aria-hidden="true">#</a> 如何使用</h4>
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
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;https://datum.io/api/v2/$contract_address/downloadData?	    chainId=$chainId&amp;tokenid=$tokenid&amp;publicKey=$publicKey&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="数据可信托管" tabindex="-1"><a class="header-anchor" href="#数据可信托管" aria-hidden="true">#</a> 数据可信托管</h2>
<p>由于数据拥有者对托管方并不完全信任，不能将解密密文的密钥发送给托管方，由托管方来解密并分享出去。数据拥有者自己下载密文解密后，再用数据接收方的公钥加密并分享，无疑给数据拥有者带来很大的麻烦，同时也失去了数据共享的意义。代理重加密可以在不泄漏数据拥有者解密密钥的情况下，实现密文数据共享；datum官网的托管方式存储数据即使用的是<strong>代理重加密算法</strong>。数据使用方通过调用datum官网或其他第三方上由datum提供的api或sdk服务，即可查看或下载明文数据；其中涉及的API如下：</p>
<ul>
<li>授权访问</li>
<li>访问权限验证</li>
<li>访问明文权限验证</li>
</ul>
<h3 id="授权访问" tabindex="-1"><a class="header-anchor" href="#授权访问" aria-hidden="true">#</a> 授权访问</h3>
<h4 id="使用场景-4" tabindex="-1"><a class="header-anchor" href="#使用场景-4" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>数据使用托管方式存储在datum官网或其他第三方时，数据使用方调用此API申请授权访问明文数据。</li>
</ul>
<h4 id="功能描述-4" tabindex="-1"><a class="header-anchor" href="#功能描述-4" aria-hidden="true">#</a> 功能描述</h4>
<p>存储在datum官网或其他第三方的数据是加密的，数据使用方通过持有的NFT可以查看或下载托管在调用datum官网或其他第三方的密文数据，而这并没有意义，因此提供了此API，数据使用方通过持有的NFT和自己的公钥调用此API接口，鉴权通过并授权成功后，数据使用方即可拥有查看或下载明文数据的权限，并获得代理重加密过程中的解密密钥，数据使用方通过此密钥即可解密密文数据。</p>
<h4 id="如何使用-4" tabindex="-1"><a class="header-anchor" href="#如何使用-4" aria-hidden="true">#</a> 如何使用</h4>
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
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;https://datum.io/api/v2/$contract_address/downloadData?	    chainId=$chainId&amp;tokenid=$tokenid&amp;publicKey=$publicKey&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="访问权限验证" tabindex="-1"><a class="header-anchor" href="#访问权限验证" aria-hidden="true">#</a> 访问权限验证</h3>
<h4 id="使用场景-5" tabindex="-1"><a class="header-anchor" href="#使用场景-5" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>数据使用方在访问数据之前，调用此API接口可以验证是否有数据访问权限；</li>
</ul>
<h4 id="功能描述-5" tabindex="-1"><a class="header-anchor" href="#功能描述-5" aria-hidden="true">#</a> 功能描述</h4>
<p>验证用户是否有数据查看或者下载等访问权限；</p>
<h4 id="如何使用-5" tabindex="-1"><a class="header-anchor" href="#如何使用-5" aria-hidden="true">#</a> 如何使用</h4>
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
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;https://datum.io/api/v2/$contract_address/verifyAccess?	    chainId=$chainId&amp;tokenid=$tokenid&amp;operate=$operate&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="访问明文数据权限验证" tabindex="-1"><a class="header-anchor" href="#访问明文数据权限验证" aria-hidden="true">#</a> 访问明文数据权限验证</h3>
<h4 id="使用场景-6" tabindex="-1"><a class="header-anchor" href="#使用场景-6" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>用户需要访问的数据是使用托管方式存储在datum官网或其他第三方时，可以调用此API验证是否有明文访问权限；</li>
</ul>
<h4 id="功能描述-6" tabindex="-1"><a class="header-anchor" href="#功能描述-6" aria-hidden="true">#</a> 功能描述</h4>
<p>数据使用托管方式存储在datum官网或其他第三方时，用户通过拥有的NFT调用明文权限验证API接口，验证自己是否有明文访问数据权限，如果没有需要进行<a href="#%E6%8E%88%E6%9D%83%E8%AE%BF%E9%97%AE%E6%98%8E%E6%96%87%E6%95%B0%E6%8D%AE">授权访问明文数据</a>操作；</p>
<h4 id="如何使用-6" tabindex="-1"><a class="header-anchor" href="#如何使用-6" aria-hidden="true">#</a> 如何使用</h4>
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
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;https://datum.io/api/v2/$contract_address/verifyAccessRawData?	    chainId=$chainId&amp;tokenid=$tokenid&amp;publicKey=$publicKey&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="数据一致性验证" tabindex="-1"><a class="header-anchor" href="#数据一致性验证" aria-hidden="true">#</a> 数据一致性验证</h2>
<p>为了保证用户下载的数据和数据提供方提供的数据是一致的，用户在下载完数据之后会进行一致性的验证；同时用户也可以在使用数据文件调用API验证一致性。</p>
<h3 id="下载数据一致性验证" tabindex="-1"><a class="header-anchor" href="#下载数据一致性验证" aria-hidden="true">#</a> 下载数据一致性验证</h3>
<h4 id="使用场景-7" tabindex="-1"><a class="header-anchor" href="#使用场景-7" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>数据下载完成之后，用户可以调用此API验证数据的一致性（内部调用）。</li>
<li>使用数据文件之前，调用此API验证数据文件的一致性（外部调用）。</li>
</ul>
<h4 id="功能描述-7" tabindex="-1"><a class="header-anchor" href="#功能描述-7" aria-hidden="true">#</a> 功能描述</h4>
<p>对数据文件进行验证，确保数据文件和数据提供方提供的数据保持一致；</p>
<h4 id="如何使用-7" tabindex="-1"><a class="header-anchor" href="#如何使用-7" aria-hidden="true">#</a> 如何使用</h4>
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
<span class="line"><span style="color: #F8F8F2">     --url </span><span style="color: #E6DB74">&#39;https://datum.io/api/v2/$contract_address/verifyDataIntegrity?	    chainId=$chainId&amp;tokenid=$tokenid&amp;path=$path&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Accept: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;Content-Type: application/json&#39;</span><span style="color: #F8F8F2"> \</span></span>
<span class="line"><span style="color: #F8F8F2">     --header </span><span style="color: #E6DB74">&#39;X-API-Key: test&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>


