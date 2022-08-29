<template><div><h1 id="数据联合查询分析" tabindex="-1"><a class="header-anchor" href="#数据联合查询分析" aria-hidden="true">#</a> 数据联合查询分析</h1>
<p>数据联合查询分析是Datum基于隐私增强技术面向两方、多方用户之间提供数据联合查询分析服务，解决传统数据共享的风险和担忧，为数据协作、数据流动提供技术服务能力支撑。Datum提供基于数据隐私保护的联合查询、联合统计分析、联合模型训练和预测的不同API供用户调用，通过集成PSI、MPC、HE等不同隐私增强技术，使用户无需过多了解不同的密码算法实现细节，降低了使用门槛。</p>
<p><strong>本部分API支持的联合计算能力</strong></p>
<ul>
<li>
<p>两方数据合作</p>
<ul>
<li>隐私匹配</li>
<li>隐私标签查询</li>
<li>隐私SQL查询</li>
</ul>
</li>
<li>
<p>多方数据协作</p>
<ul>
<li>联合统计分析</li>
<li>联合模型训练</li>
<li>联合模型预测</li>
</ul>
</li>
</ul>
<p><strong>本部分API使用的隐私增强技术</strong></p>
<ul>
<li>隐私集合求交（<a href="https://en.wikipedia.org/wiki/Private_set_intersection" target="_blank" rel="noopener noreferrer">Private Set Intersection<ExternalLinkIcon/></a>, PSI），是指持有原始数据的两方能够计算得到双方数据的交集，但互相不暴露交集以外的原始数据集中任何信息。它支持DH（Diffie-Hellman）和HE（同态加密）两种算法实现。</li>
<li>隐私标签查询，它使用基于标签的隐私求交集技术（Labeled Private Set Intersection），在查询方不泄露查询的内容，且被查询方不泄露交集以外的数据的前提下，查询方能获取双方数据的交集及交集对应的标签数据。它支持DH（Diffie-Hellman）和HE（同态加密）两种算法实现。</li>
<li>安全多方计算（<a href="https://en.wikipedia.org/wiki/Secure_multi-party_computation" target="_blank" rel="noopener noreferrer">Secure Multi-Party Computation<ExternalLinkIcon/></a>,  MPC），一组互不信任的参与方在保护各自数据隐私的前提下，共同完成对某约定函数的计算，并得到正确的计算结果。它要求每个参与方除自身数据（和计算结果）外，不能得到其他参与方的预期泄露之外的私有信息。</li>
<li>同态加密（<a href="https://en.wikipedia.org/wiki/Homomorphic_encryption" target="_blank" rel="noopener noreferrer">Homomorphic Encryption<ExternalLinkIcon/></a>,  HE），是一种特殊的加密方法，它允许用户在加密之后的密文上直接进行特定形式的代数运算，其计算结果解密后正好与明文的计算结果是一致的。</li>
<li><RouterLink to="/%E5%8F%82%E8%80%83/%E9%9A%90%E7%A7%81AI%E6%A1%86%E6%9E%B6Rosetta.html">隐私AI框架Rosetta</RouterLink>，是基于Tensorflow的隐私AI框架，承载和结合AI、隐私AI和区块链三种典型的技术，大大降低了AI开发者的门槛，让AI开发者在对隐私AI技术没有深入了解的情况下，只需要改动两三行代码即可实现将现有AI代码转换为具备数据隐私保护功能的程序。</li>
</ul>
<h2 id="两方数据合作" tabindex="-1"><a class="header-anchor" href="#两方数据合作" aria-hidden="true">#</a> 两方数据合作</h2>
<h3 id="隐私匹配" tabindex="-1"><a class="header-anchor" href="#隐私匹配" aria-hidden="true">#</a> 隐私匹配</h3>
<p>隐私匹配可用于多种数据应用场景，如相同好友发现、白名单或黑名单用户匹配，联合计算样本对齐等等。</p>
<p><strong>主要功能</strong></p>
<p>支持两方的数据合作，一个是查询方，一个是被查询方。查询方与被查询方能计算得到双方数据的交集，但互相不暴露交集以外的原始数据集中任何信息。它使用隐私求交集技术（Private Set Intersection），支持DH（Diffie-Hellman）和HE（同态加密）两种算法实现。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：runPSITask</p>
</li>
<li>
<p>请求【POST】</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;algo_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;DH&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;requester&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgA&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;key_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;id_col&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;provider&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgB&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;key_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;id_col&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">    },</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result_recv_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">1</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<td>result_recv_type</td>
<td>int</td>
<td>结果接收类型，1-单方，2-双方</td>
<td>Y</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">:{</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/result/file&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;extra&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;success&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">:{</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;data_providers&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;orgA&quot;</span><span style="color: #F8F8F2">, </span><span style="color: #CFCFC2">&quot;orgB&quot;</span><span style="color: #F8F8F2">, </span><span style="color: #CFCFC2">&quot;orgC&quot;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;success&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">:{</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;/path/to/data1&quot;</span><span style="color: #F8F8F2">, </span><span style="color: #CFCFC2">&quot;/path/to/data2&quot;</span><span style="color: #F8F8F2">, </span><span style="color: #CFCFC2">&quot;/path/to/data3&quot;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;success&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">:{</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;rows_num&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">10</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;columns_num&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">5</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;columns_name&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;col1&quot;</span><span style="color: #F8F8F2">, </span><span style="color: #CFCFC2">&quot;col2&quot;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">    },</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;success&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<h3 id="隐私标签查询" tabindex="-1"><a class="header-anchor" href="#隐私标签查询" aria-hidden="true">#</a> 隐私标签查询</h3>
<p>可以匹配两方存在交集的数据，并同时查询匹配数据对应的标签数据。</p>
<p><strong>主要功能</strong></p>
<p>在查询方不泄露查询的内容，且被查询方不泄露交集以外的数据的前提下，查询方能获取双方数据的交集及交集对应的标签数据。它使用基于标签的隐私求交集技术（Labeled Private Set Intersection），支持DH（Diffie-Hellman）和HE（同态加密）两种算法实现。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：runLabeledPSITask</p>
</li>
<li>
<p>请求【POST】</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;algo_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;DH&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;requester&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgA&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;key_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;id_col&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;provider&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgB&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;key_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;id_col&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;selected_columns&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;col1&quot;</span><span style="color: #F8F8F2">, </span><span style="color: #CFCFC2">&quot;col2&quot;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">:{</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/result/file&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;extra&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;success&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<h3 id="隐私sql查询" tabindex="-1"><a class="header-anchor" href="#隐私sql查询" aria-hidden="true">#</a> 隐私SQL查询</h3>
<p><strong>主要功能</strong></p>
<p>在查询方不泄露查询的内容，且被查询方不泄露查询结果以外的数据库数据的前提下，查询方能使用SQL查询语句获得正确的查询结果。它支持基于MPC的隐私查询和基于同态加密(HE)的隐私查询。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：runPrivacySQLTask</p>
</li>
<li>
<p>请求【POST】</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;algo_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;MPC&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;requester&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgA&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;provider&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgB&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">    },</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;sql&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;select sum(col1) from orgB;&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<td>使用的算法类型，支持MPC，HE</td>
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
<td>sql</td>
<td>string</td>
<td>sql语句</td>
<td>Y</td>
</tr>
<tr>
<td>provider</td>
<td>json</td>
<td>被查询方信息</td>
<td>Y</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">:{</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/result/file&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;extra&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;success&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<h2 id="多方数据协作" tabindex="-1"><a class="header-anchor" href="#多方数据协作" aria-hidden="true">#</a> 多方数据协作</h2>
<h3 id="联合统计分析" tabindex="-1"><a class="header-anchor" href="#联合统计分析" aria-hidden="true">#</a> 联合统计分析</h3>
<p>多方数据协作的场景，支持三方及三方以上数据间进行算术运算，使用了隐私AI框架Rosetta。</p>
<p><strong>主要功能</strong></p>
<p>在保证所有数据提供方不泄露各自敏感数据的前提下，对数据提供方的数据完成联合统计分析。提供两种方式：常用统计公式（如求和、求平均、求方差、合格投资人发现等），自定义统计公式。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：runJointStatisticalAnalysisTask</p>
</li>
<li>
<p>请求【POST】</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;data_providers&quot;</span><span style="color: #F8F8F2">: [</span></span>
<span class="line"><span style="color: #F8F8F2">		{</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgA&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;key_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;id_col&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #66D9EF; font-style: italic">&quot;data_alias&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;df1&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">		},</span></span>
<span class="line"><span style="color: #F8F8F2">		{</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgB&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;key_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;id_col&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #66D9EF; font-style: italic">&quot;data_alias&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;df2&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">		}</span></span>
<span class="line"><span style="color: #F8F8F2">	],</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result_receivers&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;orgA&quot;</span><span style="color: #F8F8F2">, </span><span style="color: #CFCFC2">&quot;orgB&quot;</span><span style="color: #F8F8F2">],</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;method&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;custom&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;expression&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;df1.unit_price * df2.units&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;result_alias&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;total_value&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/result/file&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;extra&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;success&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<h3 id="联合模型训练" tabindex="-1"><a class="header-anchor" href="#联合模型训练" aria-hidden="true">#</a> 联合模型训练</h3>
<p><strong>主要功能</strong></p>
<p>在保证所有数据提供方不泄露各自敏感数据的前提下，完成联合模型训练。使用了隐私AI框架Rosetta。支持算法：逻辑回归、线性回归、DNN、XGBoost等。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：runModelTrainTask</p>
</li>
<li>
<p>请求【POST】</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;data_providers&quot;</span><span style="color: #F8F8F2">: [</span></span>
<span class="line"><span style="color: #F8F8F2">		{</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgA&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;label_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;is_good&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #66D9EF; font-style: italic">&quot;key_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;id&quot;</span><span style="color: #F8F8F2">, </span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #66D9EF; font-style: italic">&quot;select_columns&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;col1&quot;</span><span style="color: #F8F8F2">],</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #66D9EF; font-style: italic">&quot;discrete_columns&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;type&quot;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">		},</span></span>
<span class="line"><span style="color: #F8F8F2">		{</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgB&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;label_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;is_good&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #66D9EF; font-style: italic">&quot;key_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;id&quot;</span><span style="color: #F8F8F2">, </span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #66D9EF; font-style: italic">&quot;select_columns&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;col1&quot;</span><span style="color: #F8F8F2">],</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #66D9EF; font-style: italic">&quot;discrete_cols&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;type&quot;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">		}</span></span>
<span class="line"><span style="color: #F8F8F2">	],</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result_receivers&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;orgA&quot;</span><span style="color: #F8F8F2">],</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;hyper_params&quot;</span><span style="color: #F8F8F2">: {</span><span style="color: #66D9EF; font-style: italic">&quot;learning_rate&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">0.00001</span><span style="color: #F8F8F2">, </span><span style="color: #66D9EF; font-style: italic">&quot;loss&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;mse&quot;</span><span style="color: #F8F8F2">},</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;metrics&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;accuracy&quot;</span><span style="color: #F8F8F2">, </span><span style="color: #CFCFC2">&quot;precision&quot;</span><span style="color: #F8F8F2">, </span><span style="color: #CFCFC2">&quot;recall&quot;</span><span style="color: #F8F8F2">],</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;model_config&quot;</span><span style="color: #F8F8F2">: {</span><span style="color: #66D9EF; font-style: italic">&quot;&quot;</span><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<td>label_column</td>
<td>string</td>
<td>作为标签的列</td>
<td>Y</td>
</tr>
<tr>
<td>key_column</td>
<td>string</td>
<td>索引列，用于对齐</td>
<td>N</td>
</tr>
<tr>
<td>select_columns</td>
<td>list</td>
<td>选择用于模型训练的列，默认为所有</td>
<td>N</td>
</tr>
<tr>
<td>discrete_cols</td>
<td>list</td>
<td>离散特征列，用于某些处理，如embedding</td>
<td>N</td>
</tr>
<tr>
<td>result_receivers</td>
<td>list</td>
<td>接收方列表</td>
<td>Y</td>
</tr>
<tr>
<td>hyper_params</td>
<td>string</td>
<td>超参数，和训练方法相关</td>
<td>N</td>
</tr>
<tr>
<td>metrics</td>
<td>list</td>
<td>对模型的度量，默认为loss</td>
<td>N</td>
</tr>
<tr>
<td>model_config</td>
<td>string</td>
<td>描述复杂DNN模型的 json 串</td>
<td>N</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;model_id&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0xd22&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #CFCFC2">&quot;path&quot;</span><span style="color: #F44747">:</span><span style="color: #F8F8F2"> </span><span style="color: #CFCFC2">&quot;/path/to/model&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;bin&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;extra&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #66D9EF; font-style: italic">&quot;metrics&quot;</span><span style="color: #F8F8F2">: {</span><span style="color: #66D9EF; font-style: italic">&quot;accuracy&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">0.95</span><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;success&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<td>model_id</td>
<td>string</td>
<td>模型id</td>
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
<td>metrics</td>
<td>json</td>
<td>各种要求的度量指标</td>
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
<h3 id="联合模型预测" tabindex="-1"><a class="header-anchor" href="#联合模型预测" aria-hidden="true">#</a> 联合模型预测</h3>
<p><strong>主要功能</strong></p>
<p>在保证所有数据提供方不泄露各自敏感数据的前提下，完成联合模型预测。使用了隐私AI框架Rosetta。支持算法：逻辑回归、线性回归、DNN、XGBoost等。</p>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：runModelPredictTask</p>
</li>
<li>
<p>请求【POST】</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;data_providers&quot;</span><span style="color: #F8F8F2">: [</span></span>
<span class="line"><span style="color: #F8F8F2">		{</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgA&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #66D9EF; font-style: italic">&quot;key_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;id&quot;</span><span style="color: #F8F8F2">, </span></span>
<span class="line"><span style="color: #F8F8F2">		},</span></span>
<span class="line"><span style="color: #F8F8F2">		{</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgB&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">            </span><span style="color: #66D9EF; font-style: italic">&quot;key_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;id&quot;</span><span style="color: #F8F8F2">, </span></span>
<span class="line"><span style="color: #F8F8F2">		}</span></span>
<span class="line"><span style="color: #F8F8F2">	],</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result_receivers&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;orgA&quot;</span><span style="color: #F8F8F2">],</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;params&quot;</span><span style="color: #F8F8F2">: {</span><span style="color: #66D9EF; font-style: italic">&quot;threshold&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">0.8</span><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/result/file&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;extra&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;success&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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


