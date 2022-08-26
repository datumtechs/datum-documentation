<template><div><p>由于数据拥有者对托管方并不完全信任，不能将解密密文的密钥发送给托管方，由托管方来解密并分享出去。数据拥有者自己下载密文解密后，再用数据接收方的公钥加密并分享，无疑给数据拥有者带来很大的麻烦，同时也失去了数据共享的意义。代理重加密可以在不泄漏数据拥有者解密密钥的情况下，实现密文数据共享；datum官网的托管方式存储数据即使用的是<strong>代理重加密算法</strong>。数据使用方通过调用datum官网或其他第三方上由datum提供的api或sdk服务，即可查看或下载明文数据；其中涉及的API如下：</p>
<ul>
<li>授权访问</li>
<li>访问权限验证</li>
<li>访问明文权限验证</li>
</ul>
<h3 id="授权访问" tabindex="-1"><a class="header-anchor" href="#授权访问" aria-hidden="true">#</a> 授权访问</h3>
<h4 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述" aria-hidden="true">#</a> 功能描述</h4>
<p>存储在datum官网或其他第三方的数据是加密的，数据使用方通过持有的NFT可以查看或下载托管在调用datum官网或其他第三方的密文数据，而这并没有意义，因此提供了此API，数据使用方通过持有的NFT和自己的公钥调用此API接口，鉴权通过并授权成功后，数据使用方即可拥有查看或下载明文数据的权限，并获得代理重加密过程中的解密密钥，数据使用方通过此密钥即可解密密文数据。</p>
<h4 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>数据使用托管方式存储在datum官网或其他第三方时，数据使用方调用此API申请授权访问明文数据。</li>
</ul>
<h4 id="接口说明-api" tabindex="-1"><a class="header-anchor" href="#接口说明-api" aria-hidden="true">#</a> 接口说明（API）</h4>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
	<span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">"token_address"</span><span class="token operator">:</span> <span class="token string">"0x8df91a59b8610990004987ac6ad8b6e70779ee97"</span><span class="token punctuation">,</span>
		<span class="token property">"token_id"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
		<span class="token property">"owner_of"</span><span class="token operator">:</span> <span class="token string">"0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8"</span><span class="token punctuation">,</span>
		<span class="token property">"contract_type"</span><span class="token operator">:</span> <span class="token string">"ERC721"</span><span class="token punctuation">,</span>
		<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"datum"</span><span class="token punctuation">,</span>
		<span class="token property">"symbol"</span><span class="token operator">:</span> <span class="token string">"FZAI1"</span><span class="token punctuation">,</span>
        <span class="token property">"storage_method"</span><span class="token operator">:</span> <span class="token string">"hosting/Unmanaged"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"Authorization to access plaintext data succeeded."</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--request</span> POST <span class="token punctuation">\</span>
     <span class="token parameter variable">--url</span> <span class="token string">'https://datum.io/api/v2/$contract_address/downloadData?	    chainId=$chainId&amp;tokenid=$tokenid&amp;publicKey=$publicKey'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Accept: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Content-Type: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'X-API-Key: test'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="访问权限验证" tabindex="-1"><a class="header-anchor" href="#访问权限验证" aria-hidden="true">#</a> 访问权限验证</h3>
<h4 id="功能描述-1" tabindex="-1"><a class="header-anchor" href="#功能描述-1" aria-hidden="true">#</a> 功能描述</h4>
<p>验证用户是否有数据查看或者下载等访问权限；</p>
<h4 id="使用场景-1" tabindex="-1"><a class="header-anchor" href="#使用场景-1" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>数据使用方在访问数据之前，调用此API接口可以验证是否有数据访问权限；</li>
</ul>
<h4 id="接口说明-api-1" tabindex="-1"><a class="header-anchor" href="#接口说明-api-1" aria-hidden="true">#</a> 接口说明（API）</h4>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
	<span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">"token_address"</span><span class="token operator">:</span> <span class="token string">"0x8df91a59b8610990004987ac6ad8b6e70779ee97"</span><span class="token punctuation">,</span>
		<span class="token property">"token_id"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
		<span class="token property">"owner_of"</span><span class="token operator">:</span> <span class="token string">"0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8"</span><span class="token punctuation">,</span>
		<span class="token property">"contract_type"</span><span class="token operator">:</span> <span class="token string">"ERC721"</span><span class="token punctuation">,</span>
		<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"datum"</span><span class="token punctuation">,</span>
		<span class="token property">"symbol"</span><span class="token operator">:</span> <span class="token string">"FZAI1"</span><span class="token punctuation">,</span>
        <span class="token property">"operate"</span><span class="token operator">:</span> <span class="token string">"view/download"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"Validation of access rights succeeded."</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--request</span> POST <span class="token punctuation">\</span>
     <span class="token parameter variable">--url</span> <span class="token string">'https://datum.io/api/v2/$contract_address/verifyAccess?	    chainId=$chainId&amp;tokenid=$tokenid&amp;operate=$operate'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Accept: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Content-Type: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'X-API-Key: test'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="访问明文数据权限验证" tabindex="-1"><a class="header-anchor" href="#访问明文数据权限验证" aria-hidden="true">#</a> 访问明文数据权限验证</h3>
<h4 id="功能描述-2" tabindex="-1"><a class="header-anchor" href="#功能描述-2" aria-hidden="true">#</a> 功能描述</h4>
<p>数据使用托管方式存储在datum官网或其他第三方时，用户通过拥有的NFT调用明文权限验证API接口，验证自己是否有明文访问数据权限，如果没有需要进行<a href="#%E6%8E%88%E6%9D%83%E8%AE%BF%E9%97%AE%E6%98%8E%E6%96%87%E6%95%B0%E6%8D%AE">授权访问明文数据</a>操作；</p>
<h4 id="使用场景-2" tabindex="-1"><a class="header-anchor" href="#使用场景-2" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>用户需要访问的数据是使用托管方式存储在datum官网或其他第三方时，可以调用此API验证是否有明文访问权限；</li>
</ul>
<h4 id="接口说明-api-2" tabindex="-1"><a class="header-anchor" href="#接口说明-api-2" aria-hidden="true">#</a> 接口说明（API）</h4>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
	<span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">"token_address"</span><span class="token operator">:</span> <span class="token string">"0x8df91a59b8610990004987ac6ad8b6e70779ee97"</span><span class="token punctuation">,</span>
		<span class="token property">"token_id"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
		<span class="token property">"owner_of"</span><span class="token operator">:</span> <span class="token string">"0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8"</span><span class="token punctuation">,</span>
		<span class="token property">"contract_type"</span><span class="token operator">:</span> <span class="token string">"ERC721"</span><span class="token punctuation">,</span>
		<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"datum"</span><span class="token punctuation">,</span>
		<span class="token property">"symbol"</span><span class="token operator">:</span> <span class="token string">"FZAI1"</span><span class="token punctuation">,</span>
        <span class="token property">"storage_method"</span><span class="token operator">:</span> <span class="token string">"hosting/Unmanaged"</span><span class="token punctuation">,</span>
        <span class="token property">"publicKey"</span><span class="token operator">:</span> <span class="token string">"0x......................."</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"Verifying access to plaintext data is successful."</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--request</span> POST <span class="token punctuation">\</span>
     <span class="token parameter variable">--url</span> <span class="token string">'https://datum.io/api/v2/$contract_address/verifyAccessRawData?	    chainId=$chainId&amp;tokenid=$tokenid&amp;publicKey=$publicKey'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Accept: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Content-Type: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'X-API-Key: test'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>


