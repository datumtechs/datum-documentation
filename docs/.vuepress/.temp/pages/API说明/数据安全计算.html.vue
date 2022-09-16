<template><div><h1 id="数据安全计算api说明" tabindex="-1"><a class="header-anchor" href="#数据安全计算api说明" aria-hidden="true">#</a> 数据安全计算API说明</h1>
<h2 id="密文外包计算" tabindex="-1"><a class="header-anchor" href="#密文外包计算" aria-hidden="true">#</a> 密文外包计算</h2>
<p><strong>主要功能</strong></p>
<p>通过同态加密技术把加密后数据委托给第三方去算，拿到密态结果再解密原结果。整个过程第三方不能获得原数据。</p>
<p>应用有如云计算、匿名投票系统、密文检索与匿名访问等。</p>
<p><strong>使用流程</strong></p>
<ol>
<li>生成公私钥对 genHEKeyPair</li>
<li>以公钥加密数据 HEEncrypt</li>
<li>同态计算 HECalc</li>
<li>以私钥解密 HEDecrypt</li>
</ol>
<p><strong>如何使用</strong></p>
<ul>
<li>
<p>接口名称：genHEKeyPair</p>
</li>
<li>
<p>说明：辅助函数，通常由结果方调用，他保持私钥，发布公钥及其它公有信息</p>
</li>
<li>
<p>请求【POST】</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #F44747">”params</span><span style="color: #66D9EF; font-style: italic">&quot;: {</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">        &quot;</span><span style="color: #F44747">scheme</span><span style="color: #66D9EF; font-style: italic">&quot;: &quot;</span><span style="color: #F44747">ckks</span><span style="color: #66D9EF; font-style: italic">&quot;,</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">        ...</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">    }</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<td>params</td>
<td>json</td>
<td>同态加密算法使用的参数，具体于特定的库</td>
<td>Y</td>
</tr>
<tr>
<td>scheme</td>
<td>string</td>
<td>采用的方案</td>
<td>N</td>
</tr>
<tr>
<td>...</td>
<td>string</td>
<td>其它参数</td>
<td>N</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">:{</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;pub_key&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0xABCD&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;priv_key&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0xDEAD&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;success&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<td>pub_key</td>
<td>string</td>
<td>公钥</td>
</tr>
<tr>
<td>priv_key</td>
<td>string</td>
<td>私钥</td>
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
<p>接口名称：HEEncrypt</p>
</li>
<li>
<p>说明：辅助函数，对数据进行加密，由数据提供方调用</p>
</li>
<li>
<p>请求【POST】</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;pub_key&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0xABCD&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;data&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;your data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;params&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #F44747">...</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<td>pub_key</td>
<td>string</td>
<td>公钥，从结果方获得的</td>
<td>Y</td>
</tr>
<tr>
<td>data</td>
<td>string</td>
<td>待加密的数据</td>
<td>Y</td>
</tr>
<tr>
<td>params</td>
<td>json</td>
<td>同态加密算法使用的其它参数</td>
<td>N</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">:{</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;ciphertext&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0x178C&quot;</span></span>
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
<td>响应状态，<br />200-成功，400-无效请求，500-服务器内部错误</td>
</tr>
<tr>
<td>result</td>
<td>json</td>
<td>结果信息</td>
</tr>
<tr>
<td>ciphertext</td>
<td>string</td>
<td>密文</td>
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
<p>接口名称：HECalc</p>
</li>
<li>
<p>说明：同态计算请求，通常由结果方发起</p>
</li>
<li>
<p>请求【POST】</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;pub_key&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0xABCD&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;formula&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;sum()&quot;</span><span style="color: #F8F8F2">,   </span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;params&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #F44747">...</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<td>pub_key</td>
<td>string</td>
<td>公钥，从结果方获得的</td>
<td>Y</td>
</tr>
<tr>
<td>data_path</td>
<td>string</td>
<td>密态数据所在路径</td>
<td>Y</td>
</tr>
<tr>
<td>formula</td>
<td>string</td>
<td>计算公式，如求和，乘法等</td>
<td>Y</td>
</tr>
<tr>
<td>params</td>
<td>json</td>
<td>同态加密算法使用的其它参数</td>
<td>N</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">:{</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;ciphertext&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0xDA7A&quot;</span></span>
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
<td>响应状态，<br />200-成功，400-无效请求，500-服务器内部错误</td>
</tr>
<tr>
<td>result</td>
<td>json</td>
<td>结果信息</td>
</tr>
<tr>
<td>ciphertext</td>
<td>string</td>
<td>密文结果</td>
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
<p>接口名称：HEDecrypt</p>
</li>
<li>
<p>说明：辅助函数，由结果方调用，因为他才有保持私钥</p>
</li>
<li>
<p>请求【POST】</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;priv_key&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0xDEAD&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;data&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;ciphered result data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;params&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">        </span><span style="color: #F44747">...</span></span>
<span class="line"><span style="color: #F8F8F2">    }</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<td>priv_key</td>
<td>string</td>
<td>私钥</td>
<td>Y</td>
</tr>
<tr>
<td>data</td>
<td>string</td>
<td>由同态计算方返回的密态结果</td>
<td>Y</td>
</tr>
<tr>
<td>params</td>
<td>json</td>
<td>同态加密算法使用的其它参数</td>
<td>N</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>响应</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #272822"><code><span class="line"><span style="color: #F8F8F2">{</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">:{</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;value&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">8</span></span>
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
<td>响应状态，<br />200-成功，400-无效请求，500-服务器内部错误</td>
</tr>
<tr>
<td>result</td>
<td>json</td>
<td>结果信息</td>
</tr>
<tr>
<td>value</td>
<td>number</td>
<td>解密后的结果</td>
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
<h2 id="联合查询统计" tabindex="-1"><a class="header-anchor" href="#联合查询统计" aria-hidden="true">#</a> 联合查询统计</h2>
<h3 id="联合匹配" tabindex="-1"><a class="header-anchor" href="#联合匹配" aria-hidden="true">#</a> 联合匹配</h3>
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
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgA&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;key_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;id_col&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;provider&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgB&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;key_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;id_col&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
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
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;rows_num&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">10</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;columns_num&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">5</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;columns_name&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;col1&quot;</span><span style="color: #F8F8F2">, </span><span style="color: #CFCFC2">&quot;col2&quot;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">&quot;msg&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;success&quot;</span></span>
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
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgA&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;key_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;id_col&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;provider&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgB&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;key_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;id_col&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;selected_columns&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;col1&quot;</span><span style="color: #F8F8F2">, </span><span style="color: #CFCFC2">&quot;col2&quot;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">  }</span></span>
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
<h3 id="联合查询" tabindex="-1"><a class="header-anchor" href="#联合查询" aria-hidden="true">#</a> 联合查询</h3>
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
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgA&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">	},</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;provider&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgB&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">  	</span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">  },</span></span>
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
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #66D9EF; font-style: italic">&quot;data_alias&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;df1&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">		},</span></span>
<span class="line"><span style="color: #F8F8F2">		{</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgB&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;key_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;id_col&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #66D9EF; font-style: italic">&quot;data_alias&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;df2&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">		}</span></span>
<span class="line"><span style="color: #F8F8F2">	],</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result_receivers&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;orgA&quot;</span><span style="color: #F8F8F2">, </span><span style="color: #CFCFC2">&quot;orgB&quot;</span><span style="color: #F8F8F2">],</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;method&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;custom&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">&quot;expression&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;df1.unit_price * df2.units&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">&quot;result_alias&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;total_value&quot;</span></span>
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
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/result/file&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;extra&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;&quot;</span></span>
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
<h2 id="联合机器学习" tabindex="-1"><a class="header-anchor" href="#联合机器学习" aria-hidden="true">#</a> 联合机器学习</h2>
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
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;key_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;id&quot;</span><span style="color: #F8F8F2">, </span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;select_columns&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;col1&quot;</span><span style="color: #F8F8F2">],</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;discrete_columns&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;type&quot;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">		},</span></span>
<span class="line"><span style="color: #F8F8F2">		{</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgB&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;label_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;is_good&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;key_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;id&quot;</span><span style="color: #F8F8F2">, </span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;select_columns&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;col1&quot;</span><span style="color: #F8F8F2">],</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;discrete_cols&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;type&quot;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">		}</span></span>
<span class="line"><span style="color: #F8F8F2">	],</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result_receivers&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;orgA&quot;</span><span style="color: #F8F8F2">],</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;algorithm&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;dnn&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;hyper_params&quot;</span><span style="color: #F8F8F2">: {</span><span style="color: #66D9EF; font-style: italic">&quot;learning_rate&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">0.00001</span><span style="color: #F8F8F2">, </span><span style="color: #66D9EF; font-style: italic">&quot;loss&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;mse&quot;</span><span style="color: #F8F8F2">},</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;metrics&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;accuracy&quot;</span><span style="color: #F8F8F2">, </span><span style="color: #CFCFC2">&quot;precision&quot;</span><span style="color: #F8F8F2">, </span><span style="color: #CFCFC2">&quot;recall&quot;</span><span style="color: #F8F8F2">],</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;model_config&quot;</span><span style="color: #F8F8F2">: {</span><span style="color: #66D9EF; font-style: italic">&quot;&quot;</span><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<td>algorithm</td>
<td>string</td>
<td>训练算法</td>
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
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result&quot;</span><span style="color: #F8F8F2">: {</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;model_id&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0xd22&quot;</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #CFCFC2">&quot;path&quot;</span><span style="color: #F44747">:</span><span style="color: #F8F8F2"> </span><span style="color: #CFCFC2">&quot;/path/to/model&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;bin&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">		</span><span style="color: #66D9EF; font-style: italic">&quot;extra&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">      </span><span style="color: #66D9EF; font-style: italic">&quot;metrics&quot;</span><span style="color: #F8F8F2">: {</span><span style="color: #66D9EF; font-style: italic">&quot;accuracy&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">0.95</span><span style="color: #F8F8F2">}</span></span>
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
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #66D9EF; font-style: italic">&quot;key_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;id&quot;</span><span style="color: #F8F8F2">, </span></span>
<span class="line"><span style="color: #F8F8F2">		},</span></span>
<span class="line"><span style="color: #F8F8F2">		{</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;name&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;orgB&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;data_path&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;/path/to/data&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">			</span><span style="color: #66D9EF; font-style: italic">&quot;data_type&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;csv&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">          </span><span style="color: #66D9EF; font-style: italic">&quot;key_column&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;id&quot;</span><span style="color: #F8F8F2">, </span></span>
<span class="line"><span style="color: #F8F8F2">		}</span></span>
<span class="line"><span style="color: #F8F8F2">	],</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #66D9EF; font-style: italic">&quot;result_receivers&quot;</span><span style="color: #F8F8F2">: [</span><span style="color: #CFCFC2">&quot;orgA&quot;</span><span style="color: #F8F8F2">],</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;model_id&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #CFCFC2">&quot;0xd22&quot;</span><span style="color: #F8F8F2">,</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF; font-style: italic">&quot;params&quot;</span><span style="color: #F8F8F2">: {</span><span style="color: #66D9EF; font-style: italic">&quot;threshold&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">0.8</span><span style="color: #F8F8F2">}</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p>
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
<td>model_id</td>
<td>string</td>
<td>模型id</td>
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
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">&quot;status&quot;</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">200</span><span style="color: #F8F8F2">,</span></span>
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


