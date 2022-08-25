<template><div><h1 id="隐私标签查询" tabindex="-1"><a class="header-anchor" href="#隐私标签查询" aria-hidden="true">#</a> 隐私标签查询</h1>
<p><strong>主要功能</strong></p>
<p>在查询方不泄露查询的内容，且被查询方不泄露交集以外的数据的前提下，查询方能获取双方数据的交集及交集对应的标签数据。它使用基于标签的隐私求交集技术（Labeled Private Set Intersection），支持DH和HE两种算法实现。</p>
<p><strong>常用场景</strong></p>
<p>数据集特征补充，数据集缺省值补齐。</p>
<p><strong>接口说明（API）</strong></p>
<ul>
<li>
<p>接口名称：runLabeledPSITask</p>
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
        <span class="token property">"key_column"</span><span class="token operator">:</span> <span class="token string">"id_col"</span><span class="token punctuation">,</span>
        <span class="token property">"selected_columns"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"col1"</span><span class="token punctuation">,</span> <span class="token string">"col2"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<td>algo_type</td>
<td>string</td>
<td>使用的算法的类型，支持DH，HE</td>
<td>Y</td>
</tr>
<tr>
<td>requester</td>
<td>json</td>
<td>查询方信息</td>
<td>Y</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>组织名称</td>
<td>Y</td>
</tr>
<tr>
<td>data_path</td>
<td>string</td>
<td>数据所在路径</td>
<td>Y</td>
</tr>
<tr>
<td>data_type</td>
<td>string</td>
<td>数据的格式</td>
<td>Y</td>
</tr>
<tr>
<td>key_column</td>
<td>string</td>
<td>所需操作的列</td>
<td>Y</td>
</tr>
<tr>
<td>provider</td>
<td>json</td>
<td>被查询方信息</td>
<td>Y</td>
</tr>
<tr>
<td>selected_columns</td>
<td>list</td>
<td>所需查询的label列名</td>
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
</ul>
</div></template>


