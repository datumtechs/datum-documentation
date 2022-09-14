<template><div><p>为了保证用户下载的数据和数据提供方提供的数据是一致的，用户在下载完数据之后会进行一致性的验证；同时用户也可以在使用数据文件调用API验证一致性。</p>
<h3 id="下载数据一致性验证" tabindex="-1"><a class="header-anchor" href="#下载数据一致性验证" aria-hidden="true">#</a> 下载数据一致性验证</h3>
<h4 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述" aria-hidden="true">#</a> 功能描述</h4>
<p>对下载的数据进行验证，确保下载数据的一致性；</p>
<h4 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>数据下载完成之后，用户可以调用此API验证数据的一致性（内部调用）。</li>
<li>使用数据文件之前，调用此API验证数据文件的一致性（外部调用）。</li>
</ul>
<h4 id="接口说明-api" tabindex="-1"><a class="header-anchor" href="#接口说明-api" aria-hidden="true">#</a> 接口说明（API）</h4>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
	<span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">"token_address"</span><span class="token operator">:</span> <span class="token string">"0x8df91a59b8610990004987ac6ad8b6e70779ee97"</span><span class="token punctuation">,</span>
		<span class="token property">"token_id"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
		<span class="token property">"owner_of"</span><span class="token operator">:</span> <span class="token string">"0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8"</span><span class="token punctuation">,</span>
		<span class="token property">"contract_type"</span><span class="token operator">:</span> <span class="token string">"ERC721"</span><span class="token punctuation">,</span>
		<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"datum"</span><span class="token punctuation">,</span>
		<span class="token property">"symbol"</span><span class="token operator">:</span> <span class="token string">"FZAI1"</span><span class="token punctuation">,</span>
        <span class="token property">"file_hash"</span><span class="token operator">:</span> <span class="token string">"0x....................."</span><span class="token punctuation">,</span>
        <span class="token property">"storage_method"</span><span class="token operator">:</span> <span class="token string">"hosting/Unmanaged"</span><span class="token punctuation">,</span>
        <span class="token property">"publicKey"</span><span class="token operator">:</span> <span class="token string">"0x......................."</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"Verify data consistency is successful."</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--request</span> POST <span class="token punctuation">\</span>
     <span class="token parameter variable">--url</span> <span class="token string">'https://datum.io/api/v2/$contract_address/verifyDataIntegrity?	    chainId=$chainId&amp;tokenid=$tokenid&amp;path=$path'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Accept: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Content-Type: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'X-API-Key: test'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>


