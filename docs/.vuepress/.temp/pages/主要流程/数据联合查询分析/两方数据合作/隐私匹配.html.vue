<template><div><h1 id="隐私匹配" tabindex="-1"><a class="header-anchor" href="#隐私匹配" aria-hidden="true">#</a> 隐私匹配</h1>
<p>数据合作的两方，一个是查询方，一个是被查询方。</p>
<p><strong>主要功能</strong></p>
<p>查询方与被查询方能计算得到双方数据的交集，但互相不暴露交集以外的数据集的任何信息。它使用隐私求交集技术（Private Set Intersection），支持DH和HE两种算法实现。</p>
<p><strong>常用场景</strong></p>
<p>黑名单查询，白名单查询，通讯录好友发现，联合计算样本对齐。</p>
<p><strong>接口说明（API）</strong></p>
<ul>
<li>
<p>接口名称：runPSITask</p>
</li>
<li>
<p>请求【POST】</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"algo_type"</span><span class="token operator">:</span> <span class="token string">"DH"</span><span class="token punctuation">,</span>
	<span class="token property">"requester"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"orgA"</span><span class="token punctuation">,</span>
        <span class="token property">"data_path"</span><span class="token operator">:</span> <span class="token string">"/path/to/data"</span><span class="token punctuation">,</span>
        <span class="token property">"data_type"</span><span class="token operator">:</span> <span class="token string">"csv"</span><span class="token punctuation">,</span>
        <span class="token property">"key_column"</span><span class="token operator">:</span> <span class="token string">"id_col"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">"provider"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"orgB"</span><span class="token punctuation">,</span>
        <span class="token property">"data_path"</span><span class="token operator">:</span> <span class="token string">"/path/to/data"</span><span class="token punctuation">,</span>
        <span class="token property">"data_type"</span><span class="token operator">:</span> <span class="token string">"csv"</span><span class="token punctuation">,</span>
        <span class="token property">"key_column"</span><span class="token operator">:</span> <span class="token string">"id_col"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">"result_recv_type"</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
<p>| 参数             | 类型   | 说明                         | 是否必须 |
| ---------------- | ------ | ---------------------------- | -------- |
| algo_type        | string | 使用的算法的类型，支持DH，HE | Y        |
| requester        | json   | 查询方信息                   | Y        |
| name             | string | 组织名称                     | Y        |
| data_path        | string | 数据所在路径                 | Y        |
| data_type        | string | 数据的格式                   | Y        |
| key_column       | string | 所需操作的列                 | Y        |
| provider         | json   | 被查询方信息                 | Y        |
| result_recv_type | int    | 结果接收类型，1-单方，2-双方 | Y        |</p>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
	<span class="token property">"result"</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/path/to/result/file"</span><span class="token punctuation">,</span>
		<span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"csv"</span><span class="token punctuation">,</span>
		<span class="token property">"extra"</span><span class="token operator">:</span> <span class="token string">""</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"success"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>int</td>
<td>响应状态，<br />200-成功，400-无效请求，500-服务器内部错误</td>
</tr>
<tr>
<td>result</td>
<td>json</td>
<td>结果信息</td>
</tr>
<tr>
<td>path</td>
<td>string</td>
<td>结果所在路径</td>
</tr>
<tr>
<td>type</td>
<td>string</td>
<td>结果的类型</td>
</tr>
<tr>
<td>extra</td>
<td>string</td>
<td>关于结果的额外信息</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>成功信息或错误的描述</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>接口名称：getDataProviders</p>
</li>
<li>
<p>请求【GET】</p>
<p>无</p>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
	<span class="token property">"result"</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token property">"data_providers"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"orgA"</span><span class="token punctuation">,</span> <span class="token string">"orgB"</span><span class="token punctuation">,</span> <span class="token string">"orgC"</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"success"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>int</td>
<td>响应状态，200-成功，400-无效请求，500-服务器内部错误</td>
</tr>
<tr>
<td>result</td>
<td>json</td>
<td>结果信息</td>
</tr>
<tr>
<td>data_providers</td>
<td>list</td>
<td>所有数据提供方组织名称</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>成功信息或错误的描述</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>接口名称：getDataPath</p>
</li>
<li>
<p>请求【GET】</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
<th>是否必须</th>
</tr>
</thead>
<tbody>
<tr>
<td>data_provider</td>
<td>string</td>
<td>数据提供方组织名称</td>
<td>Y</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
	<span class="token property">"result"</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token property">"data_path"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"/path/to/data1"</span><span class="token punctuation">,</span> <span class="token string">"/path/to/data2"</span><span class="token punctuation">,</span> <span class="token string">"/path/to/data3"</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"success"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>int</td>
<td>响应状态，200-成功，400-无效请求，500-服务器内部错误</td>
</tr>
<tr>
<td>result</td>
<td>json</td>
<td>结果信息</td>
</tr>
<tr>
<td>data_path</td>
<td>string</td>
<td>数据所在路径</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>成功信息或错误的描述</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>接口名称：getMetaData</p>
</li>
<li>
<p>请求【GET】</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
<th>是否必须</th>
</tr>
</thead>
<tbody>
<tr>
<td>data_provider</td>
<td>string</td>
<td>数据提供方组织名称</td>
<td>Y</td>
</tr>
<tr>
<td>data_path</td>
<td>string</td>
<td>数据所在路径</td>
<td>Y</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
	<span class="token property">"result"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"data_type"</span><span class="token operator">:</span> <span class="token string">"csv"</span><span class="token punctuation">,</span>
        <span class="token property">"rows_num"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">"columns_num"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">"columns_name"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"col1"</span><span class="token punctuation">,</span> <span class="token string">"col2"</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"success"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>int</td>
<td>响应状态，200-成功，400-无效请求，500-服务器内部错误</td>
</tr>
<tr>
<td>result</td>
<td>json</td>
<td>结果信息</td>
</tr>
<tr>
<td>data_type</td>
<td>string</td>
<td>数据的格式</td>
</tr>
<tr>
<td>rows_num</td>
<td>int</td>
<td>数据表的行数</td>
</tr>
<tr>
<td>columns_num</td>
<td>int</td>
<td>数据表的列数</td>
</tr>
<tr>
<td>columns_name</td>
<td>list</td>
<td>数据表的所有列名</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>成功信息或错误的描述</td>
</tr>
</tbody>
</table>
</li>
</ul>
</div></template>


