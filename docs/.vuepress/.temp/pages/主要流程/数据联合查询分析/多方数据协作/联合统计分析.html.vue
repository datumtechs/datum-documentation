<template><div><h1 id="联合统计分析" tabindex="-1"><a class="header-anchor" href="#联合统计分析" aria-hidden="true">#</a> 联合统计分析</h1>
<p>多方数据协作的场景，不仅支持两方数据协作，也支持三方及三方以上的数据协作。</p>
<p><strong>主要功能</strong></p>
<p>在保证所有数据提供方不泄露各自敏感数据的前提下，对数据提供方的数据完成联合统计分析。提供两种方式：常用统计公式（如求和、求平均、求方差、合格投资人发现等），自定义统计公式。</p>
<p><strong>接口说明（API）</strong></p>
<ul>
<li>
<p>接口名称：runModelTrainTask</p>
</li>
<li>
<p>请求【POST】</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"data_providers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"orgA"</span><span class="token punctuation">,</span>
			<span class="token property">"data_path"</span><span class="token operator">:</span> <span class="token string">"/path/to/data"</span><span class="token punctuation">,</span>
			<span class="token property">"data_type"</span><span class="token operator">:</span> <span class="token string">"csv"</span><span class="token punctuation">,</span>
			<span class="token property">"key_column"</span><span class="token operator">:</span> <span class="token string">"id_col"</span><span class="token punctuation">,</span>
            <span class="token property">"data_alias"</span><span class="token operator">:</span> <span class="token string">"df1"</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"orgB"</span><span class="token punctuation">,</span>
			<span class="token property">"data_path"</span><span class="token operator">:</span> <span class="token string">"/path/to/data"</span><span class="token punctuation">,</span>
			<span class="token property">"data_type"</span><span class="token operator">:</span> <span class="token string">"csv"</span><span class="token punctuation">,</span>
			<span class="token property">"key_column"</span><span class="token operator">:</span> <span class="token string">"id_col"</span><span class="token punctuation">,</span>
            <span class="token property">"data_alias"</span><span class="token operator">:</span> <span class="token string">"df2"</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">"result_receivers"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"orgA"</span><span class="token punctuation">,</span> <span class="token string">"orgB"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">"method"</span><span class="token operator">:</span> <span class="token string">"custom"</span><span class="token punctuation">,</span>
    <span class="token property">"expression"</span><span class="token operator">:</span> <span class="token string">"df1.unit_price * df2.units"</span><span class="token punctuation">,</span>
    <span class="token property">"result_alias"</span><span class="token operator">:</span> <span class="token string">"total_value"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<td>数据提供方的信息</td>
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
<td>data_alias</td>
<td>string</td>
<td>为数据取的别名</td>
<td>N</td>
</tr>
<tr>
<td>key_column</td>
<td>string</td>
<td>所需操作的列</td>
<td>Y</td>
</tr>
<tr>
<td>result_receivers</td>
<td>list</td>
<td>接收方列表</td>
<td>Y</td>
</tr>
<tr>
<td>method</td>
<td>string</td>
<td>联合统计方法，目前支持:<br />sum, avg, var, is_investor_accredited, <br />自定义公式custom 等</td>
<td>Y</td>
</tr>
<tr>
<td>expression</td>
<td>string</td>
<td>计算表达式，当method字段取值custom时使用</td>
<td>N</td>
</tr>
<tr>
<td>result_alias</td>
<td>string</td>
<td>为结果取的别名</td>
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


