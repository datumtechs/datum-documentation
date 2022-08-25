<template><div><p>数据可信分享包括数据查看和下载功能；其中根据数据提供方设置的NFT的权限属性不同，拥有不同的查看权限，分为：元数据查看和原数据查看；主要api和sdk有：</p>
<h3 id="nft属性设置" tabindex="-1"><a class="header-anchor" href="#nft属性设置" aria-hidden="true">#</a> NFT属性设置</h3>
<h4 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述" aria-hidden="true">#</a> 功能描述</h4>
<p>数据提供方通过调用NFT属性设置API接口，可以设置NFT的属性，如：</p>
<ul>
<li>授权访问属性
<ul>
<li>原数据查看权限属性</li>
<li>原数据下载权限属性</li>
</ul>
</li>
<li>原数据文件存储路径属性</li>
<li>.....</li>
</ul>
<h4 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>当数据提供方发行的某个NFT且未转移到其他用户时，如果需要对此NFT的属性进行修改或扩展，如修改访问权限，修改原文件存储路径等，可调用此API进行设置；</li>
</ul>
<h4 id="接口说明-api" tabindex="-1"><a class="header-anchor" href="#接口说明-api" aria-hidden="true">#</a> 接口说明（API）</h4>
<ul>
<li>
<p>接口名称：setNFTProperty</p>
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
<td>property</td>
<td>string</td>
<td>NFT属性描述，json格式</td>
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
        <span class="token property">"transaction_hash"</span><span class="token operator">:</span> <span class="token string">"0xxxxxxxxxxxxxxxxxxxx"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"set NFT Property success"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--request</span> POST <span class="token punctuation">\</span>
     <span class="token parameter variable">--url</span> <span class="token string">'https://datum.io/api/v2/$contract_address/setNFTProperty?	    chainId=$chainId&amp;tokenid=$tokenid&amp;property=$property'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Accept: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Content-Type: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'X-API-Key: test'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="所有权转移" tabindex="-1"><a class="header-anchor" href="#所有权转移" aria-hidden="true">#</a> 所有权转移</h3>
<h4 id="功能描述-1" tabindex="-1"><a class="header-anchor" href="#功能描述-1" aria-hidden="true">#</a> 功能描述</h4>
<p>用户通过调用所有权转移API接口，可以给指定的其他用户赋予数据的所有权；拥有数据所有权的用户可以对数据进行查看或下载操作。</p>
<h4 id="使用场景-1" tabindex="-1"><a class="header-anchor" href="#使用场景-1" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>数据使用方和数据提供方线下达成协商时，数据提供方可通过调用此API将数据对应的NFT转发给数据使用方，让其获得所有权。</li>
</ul>
<h4 id="接口说明-api-1" tabindex="-1"><a class="header-anchor" href="#接口说明-api-1" aria-hidden="true">#</a> 接口说明（API）</h4>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        transaction_hash<span class="token operator">:</span> <span class="token string">"0xxxxxxxxxxxxxxxxxxxx"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"pass NFT Ownership success."</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--request</span> POST <span class="token punctuation">\</span>
     <span class="token parameter variable">--url</span> <span class="token string">'https://datum.io/api/v2/$contract_address/passOwnership?	    chainId=$chainId&amp;tokenid=$tokenid&amp;to_address=$to_address'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Accept: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Content-Type: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'X-API-Key: test'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="元数据查看" tabindex="-1"><a class="header-anchor" href="#元数据查看" aria-hidden="true">#</a> 元数据查看</h3>
<h4 id="功能描述-2" tabindex="-1"><a class="header-anchor" href="#功能描述-2" aria-hidden="true">#</a> 功能描述</h4>
<p>用户通过调用元数据查看API接口，在链上查询对应的元数据信息；此调用过程不需要鉴权。</p>
<h4 id="使用场景-2" tabindex="-1"><a class="header-anchor" href="#使用场景-2" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>数据使用方在获得原数据对应的NFT之前，可以调用此API查询对应元数据，然后判断出NFT对应的原数据是否是用户需要的；</li>
</ul>
<h4 id="接口说明-api-2" tabindex="-1"><a class="header-anchor" href="#接口说明-api-2" aria-hidden="true">#</a> 接口说明（API）</h4>
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
		<span class="token property">"metadata"</span><span class="token operator">:</span> "<span class="token punctuation">{</span>
        	<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"datum"</span><span class="token punctuation">,</span> 
        	<span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"this is datum metadata"</span><span class="token punctuation">,</span> 
        	<span class="token property">"data_size"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> 
            <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> 
            <span class="token property">"rows"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> 
            <span class="token property">"cols_desc"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span><span class="token property">"col_name"</span><span class="token operator">:</span> <span class="token string">"col1"</span><span class="token punctuation">,</span> <span class="token property">"col_desc"</span><span class="token operator">:</span> <span class="token string">"this is col1 desc"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span><span class="token property">"col_name"</span><span class="token operator">:</span> <span class="token string">"col2"</span><span class="token punctuation">,</span> <span class="token property">"col_desc"</span><span class="token operator">:</span> <span class="token string">"this is col2 desc"</span><span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>"
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"get MetaData success."</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--request</span> POST <span class="token punctuation">\</span>
     <span class="token parameter variable">--url</span> <span class="token string">'https://datum.io/api/v2/$contract_address/getMetaData?	     	chainId=$chainId&amp;tokenid=$tokenid'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Accept: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Content-Type: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'X-API-Key: test'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="原数据查看" tabindex="-1"><a class="header-anchor" href="#原数据查看" aria-hidden="true">#</a> 原数据查看</h3>
<h4 id="功能描述-3" tabindex="-1"><a class="header-anchor" href="#功能描述-3" aria-hidden="true">#</a> 功能描述</h4>
<p>用户通过拥有查看权限的NFT调用原数据查看API接口，鉴权通过后，可以查看对应的原数据信息；对于托管存储方式的数据因为是加密的，所以需要先进行<a href="#%E6%8E%88%E6%9D%83%E8%AE%BF%E9%97%AE%E6%98%8E%E6%96%87%E6%95%B0%E6%8D%AE">授权访问明文数据</a>，否则不能查看到明文数据。</p>
<h4 id="使用场景-3" tabindex="-1"><a class="header-anchor" href="#使用场景-3" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>用户可以根据持有的NFT查看对应的原数据。</li>
</ul>
<h4 id="接口说明-api-3" tabindex="-1"><a class="header-anchor" href="#接口说明-api-3" aria-hidden="true">#</a> 接口说明（API）</h4>
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
		<span class="token property">"metadata"</span><span class="token operator">:</span> "<span class="token punctuation">{</span>
        	<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"datum"</span><span class="token punctuation">,</span> 
        	<span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"this is datum metadata"</span><span class="token punctuation">,</span> 
        	<span class="token property">"file_type"</span><span class="token operator">:</span> <span class="token string">"csv"</span><span class="token punctuation">,</span>
        	<span class="token property">"data_size"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> 
            <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> 
            <span class="token property">"rows"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> 
            <span class="token property">"cols_desc"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span><span class="token property">"col_name"</span><span class="token operator">:</span> <span class="token string">"col1"</span><span class="token punctuation">,</span> <span class="token property">"col_desc"</span><span class="token operator">:</span> <span class="token string">"this is col1 desc"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span><span class="token property">"col_name"</span><span class="token operator">:</span> <span class="token string">"col2"</span><span class="token punctuation">,</span> <span class="token property">"col_desc"</span><span class="token operator">:</span> <span class="token string">"this is col2 desc"</span><span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>"<span class="token punctuation">,</span>
		<span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"this is data content."</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"get data success."</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--request</span> POST <span class="token punctuation">\</span>
     <span class="token parameter variable">--url</span> <span class="token string">'https://datum.io/api/v2/$contract_address/getRawData?	    chainId=$chainId&amp;tokenid=$tokenid&amp;publicKey=$publicKey'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Accept: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Content-Type: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'X-API-Key: test'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="原数据下载" tabindex="-1"><a class="header-anchor" href="#原数据下载" aria-hidden="true">#</a> 原数据下载</h3>
<h4 id="功能描述-4" tabindex="-1"><a class="header-anchor" href="#功能描述-4" aria-hidden="true">#</a> 功能描述</h4>
<p>用户通过拥有下载权限的NFT调用数据下载API接口，鉴权通过后，可以下载对应的原数据；对于托管存储方式的数据因为是加密的，所以下载前需要先进行<a href="#%E6%8E%88%E6%9D%83%E8%AE%BF%E9%97%AE%E6%98%8E%E6%96%87%E6%95%B0%E6%8D%AE">授权访问明文数据</a>，否则不能下载明文数据。</p>
<h4 id="使用场景-4" tabindex="-1"><a class="header-anchor" href="#使用场景-4" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>用户可以根据持有的NFT下载对应的原数据。</li>
</ul>
<h4 id="接口说明-api-4" tabindex="-1"><a class="header-anchor" href="#接口说明-api-4" aria-hidden="true">#</a> 接口说明（API）</h4>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
	<span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">"token_address"</span><span class="token operator">:</span> <span class="token string">"0x8df91a59b8610990004987ac6ad8b6e70779ee97"</span><span class="token punctuation">,</span>
		<span class="token property">"token_id"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
		<span class="token property">"owner_of"</span><span class="token operator">:</span> <span class="token string">"0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8"</span><span class="token punctuation">,</span>
		<span class="token property">"contract_type"</span><span class="token operator">:</span> <span class="token string">"ERC721"</span><span class="token punctuation">,</span>
		<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"datum"</span><span class="token punctuation">,</span>
		<span class="token property">"symbol"</span><span class="token operator">:</span> <span class="token string">"FZAI1"</span><span class="token punctuation">,</span>
        <span class="token property">"file_type"</span><span class="token operator">:</span> <span class="token string">"csv"</span><span class="token punctuation">,</span>
        <span class="token property">"file_hash"</span><span class="token operator">:</span> <span class="token string">"0x....................."</span><span class="token punctuation">,</span>
        <span class="token property">"storage_method"</span><span class="token operator">:</span> <span class="token string">"hosting/Unmanaged"</span><span class="token punctuation">,</span>        
		<span class="token property">"metadata"</span><span class="token operator">:</span> "<span class="token punctuation">{</span>
        	<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"datum"</span><span class="token punctuation">,</span> 
        	<span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"this is datum metadata"</span><span class="token punctuation">,</span> 
        	<span class="token property">"data_size"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> 
            <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> 
            <span class="token property">"rows"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> 
            <span class="token property">"cols_desc"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span><span class="token property">"col_name"</span><span class="token operator">:</span> <span class="token string">"col1"</span><span class="token punctuation">,</span> <span class="token property">"col_desc"</span><span class="token operator">:</span> <span class="token string">"this is col1 desc"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span><span class="token property">"col_name"</span><span class="token operator">:</span> <span class="token string">"col2"</span><span class="token punctuation">,</span> <span class="token property">"col_desc"</span><span class="token operator">:</span> <span class="token string">"this is col2 desc"</span><span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>"<span class="token punctuation">,</span>
		<span class="token property">"file_path"</span><span class="token operator">:</span> <span class="token string">"/path/file.csv"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"download data file success."</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--request</span> POST <span class="token punctuation">\</span>
     <span class="token parameter variable">--url</span> <span class="token string">'https://datum.io/api/v2/$contract_address/downloadData?	    chainId=$chainId&amp;tokenid=$tokenid&amp;publicKey=$publicKey'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Accept: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'Content-Type: application/json'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--header</span> <span class="token string">'X-API-Key: test'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>


