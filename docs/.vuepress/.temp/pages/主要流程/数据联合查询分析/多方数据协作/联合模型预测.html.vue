<template><div><h1 id="联合模型预测" tabindex="-1"><a class="header-anchor" href="#联合模型预测" aria-hidden="true">#</a> 联合模型预测</h1>
<p><strong>主要功能</strong></p>
<p>在保证所有数据提供方不泄露各自敏感数据的前提下，完成联合模型预测。支持算法：逻辑回归、线性回归、DNN、XGBoost等。</p>
<p><strong>接口说明（API）</strong></p>
<ul>
<li>
<p>接口名称：runModelPredictTask</p>
</li>
<li>
<p>请求【POST】</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"data_providers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"orgA"</span><span class="token punctuation">,</span>
			<span class="token property">"data_path"</span><span class="token operator">:</span> <span class="token string">"/path/to/data"</span><span class="token punctuation">,</span>
			<span class="token property">"data_type"</span><span class="token operator">:</span> <span class="token string">"csv"</span><span class="token punctuation">,</span>
            <span class="token property">"key_column"</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span> 
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"orgB"</span><span class="token punctuation">,</span>
			<span class="token property">"data_path"</span><span class="token operator">:</span> <span class="token string">"/path/to/data"</span><span class="token punctuation">,</span>
			<span class="token property">"data_type"</span><span class="token operator">:</span> <span class="token string">"csv"</span><span class="token punctuation">,</span>
            <span class="token property">"key_column"</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span> 
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">"result_receivers"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"orgA"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"params"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">"threshold"</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<td>data_providers</td>
<td>list</td>
<td>所有数据提供方信息</td>
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
<td>数据格式</td>
<td>Y</td>
</tr>
<tr>
<td>key_column</td>
<td>string</td>
<td>索引列，用于对齐</td>
<td>N</td>
</tr>
<tr>
<td>result_receivers</td>
<td>list</td>
<td>接收方列表</td>
<td>Y</td>
</tr>
<tr>
<td>params</td>
<td>json</td>
<td>参数</td>
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


