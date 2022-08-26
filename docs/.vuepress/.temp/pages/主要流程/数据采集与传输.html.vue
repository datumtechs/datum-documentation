<template><div><h1 id="数据采集与传输" tabindex="-1"><a class="header-anchor" href="#数据采集与传输" aria-hidden="true">#</a> 数据采集与传输</h1>
<p>数据从web2进入web3的起点，是能够被合理的采集和传输到web3能够触达的环境中。Datum将提供一系列服务API，使用户能以合适的方式采集并传输数据。Datum将作为服务商为用户解决数据采集与传输环节的各类解决方案，包括：数据对接、数据上传、数据存储管理。并作为可信任的托管服务商，使得用户能够方便的实现web3模式下的数据资产化、数据检索、数据使用服务。用户拥有对数据的完全掌控，可以按需选择适用的API。</p>
<h2 id="支持的传输模式" tabindex="-1"><a class="header-anchor" href="#支持的传输模式" aria-hidden="true">#</a> 支持的传输模式</h2>
<ul>
<li>云服务传输，数据集中托管</li>
<li>IPFS传输，数据分布式管理</li>
<li>区块链传输，数据共识管理</li>
</ul>
<h3 id="云服务传输" tabindex="-1"><a class="header-anchor" href="#云服务传输" aria-hidden="true">#</a> 云服务传输</h3>
<p>Datum提供多种云服务资源，用户可注册后上传原始数据。</p>
<h4 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>将自己本地的原始数据上传到Datum，并选择Datum提供的云服务器托管原始数据。</li>
</ul>
<h4 id="功能描述" tabindex="-1"><a class="header-anchor" href="#功能描述" aria-hidden="true">#</a> 功能描述</h4>
<ul>
<li>将用户的原始数据到由Datum提供的云服务器上托管，使得用户的原始数据通过Datum接入Web3方便后续对数据进行资产化、数据检索、数据使用等服务。</li>
</ul>
<h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h4>
<ul>
<li>
<p>接口名称：<code v-pre>uploadData</code></p>
</li>
<li>
<p>请求方式: <code v-pre>POST</code></p>
</li>
<li>
<p>请求数据类型: <code v-pre>multipart/form-data</code></p>
</li>
<li>
<p>响应数据类型: <code v-pre>*/*</code></p>
</li>
<li>
<p>请求参数：</p>
</li>
</ul>
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
<td>file</td>
<td>string</td>
<td>文件</td>
<td>Y</td>
</tr>
<tr>
<td>storageType</td>
<td>int</td>
<td>存储方式(0： 本地存储； 1： 云存储； 2： IPFS存储； 3： 区块链存储)</td>
<td>Y</td>
</tr>
<tr>
<td>storageOption</td>
<td>string</td>
<td>json格式的字符串表示存储方式的选项，和storageType搭配使用<a href="#storageOption%E5%80%BC%E8%AF%B4%E6%98%8E">查看</a></td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>响应状态:</li>
</ul>
<table>
<thead>
<tr>
<th>状态码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>OK</td>
</tr>
<tr>
<td>201</td>
<td>Created</td>
</tr>
<tr>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>403</td>
<td>Forbidden</td>
</tr>
<tr>
<td>404</td>
<td>Not Found</td>
</tr>
</tbody>
</table>
<ul>
<li>响应参数:</li>
</ul>
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
<td>status</td>
<td>int</td>
<td>响应码</td>
<td>Y</td>
</tr>
<tr>
<td>result</td>
<td>json</td>
<td>上传后的摘要信息</td>
<td>Y</td>
</tr>
<tr>
<td>originId</td>
<td>string</td>
<td>上传后的原始数据的originId,代表该原始数据在Datum中的唯一标识</td>
<td>Y</td>
</tr>
<tr>
<td>hash</td>
<td>string</td>
<td>上传后的原始数据内容Hash</td>
<td>Y</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>响应描述</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>响应示例:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #ECEFF4">{</span></span>
<span class="line"><span style="color: #D8DEE9FF">    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">status</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">200</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">result</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">{</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">originId</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">0xdadad...454545</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">hash</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #D8DEE9FF">    </span><span style="color: #ECEFF4">},</span></span>
<span class="line"><span style="color: #D8DEE9FF">    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">msg</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">OK</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #ECEFF4">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用示例</p>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">curl </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">https://datum.io/api/v2/data/uploadData</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     -H </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">Accept: application/json, text/plain, */*</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     -H </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">Accept-Language: zh-CN,zh;q=0.9</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     -H </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">Connection: keep-alive</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     -H </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryml6aYqp5NPR1V6C9</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     -H </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">Origin: http://datum.io</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     --data-raw </span><span style="color: #ECEFF4">$&#39;</span><span style="color: #A3BE8C">------WebKitFormBoundaryml6aYqp5NPR1V6C9</span><span style="color: #EBCB8B">\r\n</span><span style="color: #A3BE8C">Content-Disposition: form-data; name=&quot;file&quot;; filename=&quot;服务清单.xlsx&quot;</span><span style="color: #EBCB8B">\r\n</span><span style="color: #A3BE8C">Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</span><span style="color: #EBCB8B">\r\n\r</span><span style="color: #A3BE8C">   </span><span style="color: #EBCB8B">\n\r\n</span><span style="color: #A3BE8C">------WebKitFormBoundaryml6aYqp5NPR1V6C9</span><span style="color: #EBCB8B">\r\n</span><span style="color: #A3BE8C">Content-Disposition: form-data; name=&quot;storageType&quot;</span><span style="color: #EBCB8B">\r\n\r\n</span><span style="color: #A3BE8C">1</span><span style="color: #EBCB8B">\r\n</span><span style="color: #A3BE8C">------WebKitFormBoundaryml6aYqp5NPR1V6C9</span><span style="color: #EBCB8B">\r\n</span><span style="color: #A3BE8C">Content-Disposition: form-data;name=&quot;storageOption&quot;</span><span style="color: #EBCB8B">\r\n\r\n</span><span style="color: #A3BE8C">&quot;{</span><span style="color: #EBCB8B">\\</span><span style="color: #A3BE8C">&quot;cloudType</span><span style="color: #EBCB8B">\\</span><span style="color: #A3BE8C">&quot;: 0}&quot;</span><span style="color: #EBCB8B">\r\n</span><span style="color: #A3BE8C">------WebKitFormBoundaryml6aYqp5NPR1V6C9--</span><span style="color: #EBCB8B">\r\n</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     --compressed \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     --insecure</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ipfs传输" tabindex="-1"><a class="header-anchor" href="#ipfs传输" aria-hidden="true">#</a> IPFS传输</h3>
<p>Datum对接分布式存储服务，用户可选择将原始数据传输至IPFS实现分布式管理。</p>
<h4 id="使用场景-1" tabindex="-1"><a class="header-anchor" href="#使用场景-1" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>将自己本地的原始数据上传到Datum，由Datum统一托管到IPFS。</li>
</ul>
<h4 id="功能描述-1" tabindex="-1"><a class="header-anchor" href="#功能描述-1" aria-hidden="true">#</a> 功能描述</h4>
<ul>
<li>将用户的原始数据由Datum托管到IPFS上存储，使得用户的原始数据通过Datum接入Web3方便后续对数据进行资产化、数据检索、数据使用等服务。</li>
</ul>
<h4 id="如何使用-1" tabindex="-1"><a class="header-anchor" href="#如何使用-1" aria-hidden="true">#</a> 如何使用</h4>
<ul>
<li>
<p>接口名称：<code v-pre>uploadData</code></p>
</li>
<li>
<p>请求方式: <code v-pre>POST</code></p>
</li>
<li>
<p>请求数据类型: <code v-pre>multipart/form-data</code></p>
</li>
<li>
<p>响应数据类型: <code v-pre>*/*</code></p>
</li>
<li>
<p>请求参数：</p>
</li>
</ul>
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
<td>file</td>
<td>string</td>
<td>文件</td>
<td>Y</td>
</tr>
<tr>
<td>storageType</td>
<td>int</td>
<td>存储方式(0： 本地存储； 1： 云存储； 2： IPFS存储； 3： 区块链存储)</td>
<td>Y</td>
</tr>
<tr>
<td>storageOption</td>
<td>string</td>
<td>json格式的字符串表示存储方式的选项，和storageType搭配使用<a href="#storageOption%E5%80%BC%E8%AF%B4%E6%98%8E">查看</a></td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>响应状态:</li>
</ul>
<table>
<thead>
<tr>
<th>状态码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>OK</td>
</tr>
<tr>
<td>201</td>
<td>Created</td>
</tr>
<tr>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>403</td>
<td>Forbidden</td>
</tr>
<tr>
<td>404</td>
<td>Not Found</td>
</tr>
</tbody>
</table>
<ul>
<li>响应参数:</li>
</ul>
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
<td>status</td>
<td>int</td>
<td>响应码</td>
<td>Y</td>
</tr>
<tr>
<td>result</td>
<td>json</td>
<td>上传后的摘要信息</td>
<td>Y</td>
</tr>
<tr>
<td>originId</td>
<td>string</td>
<td>上传后的原始数据的originId,代表该原始数据在Datum中的唯一标识</td>
<td>Y</td>
</tr>
<tr>
<td>hash</td>
<td>string</td>
<td>上传后的原始数据内容Hash</td>
<td>Y</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>响应描述</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>响应示例:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #ECEFF4">{</span></span>
<span class="line"><span style="color: #D8DEE9FF">    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">status</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">200</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">result</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">{</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">originId</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">0xdadad...454545</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">hash</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #D8DEE9FF">    </span><span style="color: #ECEFF4">},</span></span>
<span class="line"><span style="color: #D8DEE9FF">    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">msg</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">OK</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #ECEFF4">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用示例</p>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">curl </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">https://datum.io/api/v2/data/uploadData</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     -H </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">Accept: application/json, text/plain, */*</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     -H </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">Accept-Language: zh-CN,zh;q=0.9</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     -H </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">Connection: keep-alive</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     -H </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryml6aYqp5NPR1V6C9</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     -H </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">Origin: http://datum.io</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     --data-raw </span><span style="color: #ECEFF4">$&#39;</span><span style="color: #A3BE8C">------WebKitFormBoundaryml6aYqp5NPR1V6C9</span><span style="color: #EBCB8B">\r\n</span><span style="color: #A3BE8C">Content-Disposition: form-data; name=&quot;file&quot;; filename=&quot;服务清单.xlsx&quot;</span><span style="color: #EBCB8B">\r\n</span><span style="color: #A3BE8C">Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</span><span style="color: #EBCB8B">\r\n\r</span><span style="color: #A3BE8C">   </span><span style="color: #EBCB8B">\n\r\n</span><span style="color: #A3BE8C">------WebKitFormBoundaryml6aYqp5NPR1V6C9</span><span style="color: #EBCB8B">\r\n</span><span style="color: #A3BE8C">Content-Disposition: form-data; name=&quot;storageType&quot;</span><span style="color: #EBCB8B">\r\n\r\n</span><span style="color: #A3BE8C">2</span><span style="color: #EBCB8B">\r\n</span><span style="color: #A3BE8C">------WebKitFormBoundaryml6aYqp5NPR1V6C9</span><span style="color: #EBCB8B">\r\n</span><span style="color: #A3BE8C">Content-Disposition: form-data;name=&quot;storageOption&quot;</span><span style="color: #EBCB8B">\r\n\r\n</span><span style="color: #A3BE8C">&quot;&quot;</span><span style="color: #EBCB8B">\r\n</span><span style="color: #A3BE8C">------WebKitFormBoundaryml6aYqp5NPR1V6C9--</span><span style="color: #EBCB8B">\r\n</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     --compressed \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     --insecure</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="区块链传输" tabindex="-1"><a class="header-anchor" href="#区块链传输" aria-hidden="true">#</a> 区块链传输</h3>
<p>Datum提供联盟链、公有链对接服务，用户可将原始数据直接传输上链。 区块链链支持，以太坊、PlatON等。</p>
<h4 id="使用场景-2" tabindex="-1"><a class="header-anchor" href="#使用场景-2" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>将自己本地的原始数据上传到Datum，由Datum统一托管到Datum所对接的区块链中存储。</li>
</ul>
<h4 id="功能描述-2" tabindex="-1"><a class="header-anchor" href="#功能描述-2" aria-hidden="true">#</a> 功能描述</h4>
<ul>
<li>将用户的原始数据由Datum托管到所支持的区块链中存储，使得用户的原始数据通过Datum接入Web3方便后续对数据进行资产化、数据检索、数据使用等服务。</li>
</ul>
<h4 id="如何使用-2" tabindex="-1"><a class="header-anchor" href="#如何使用-2" aria-hidden="true">#</a> 如何使用</h4>
<ul>
<li>
<p>接口名称：<code v-pre>uploadData</code></p>
</li>
<li>
<p>请求方式: <code v-pre>POST</code></p>
</li>
<li>
<p>请求数据类型: <code v-pre>multipart/form-data</code></p>
</li>
<li>
<p>响应数据类型: <code v-pre>*/*</code></p>
</li>
<li>
<p>请求参数：</p>
</li>
</ul>
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
<td>file</td>
<td>string</td>
<td>文件</td>
<td>Y</td>
</tr>
<tr>
<td>storageType</td>
<td>int</td>
<td>存储方式(0： 本地存储； 1： 云存储； 2： IPFS存储； 3： 区块链存储)</td>
<td>Y</td>
</tr>
<tr>
<td>storageOption</td>
<td>string</td>
<td>json格式的字符串表示存储方式的选项，和storageType搭配使用<a href="#storageOption%E5%80%BC%E8%AF%B4%E6%98%8E">查看</a></td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>响应状态:</li>
</ul>
<table>
<thead>
<tr>
<th>状态码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>OK</td>
</tr>
<tr>
<td>201</td>
<td>Created</td>
</tr>
<tr>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>403</td>
<td>Forbidden</td>
</tr>
<tr>
<td>404</td>
<td>Not Found</td>
</tr>
</tbody>
</table>
<ul>
<li>响应参数:</li>
</ul>
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
<td>status</td>
<td>int</td>
<td>响应码</td>
<td>Y</td>
</tr>
<tr>
<td>result</td>
<td>json</td>
<td>上传后的摘要信息</td>
<td>Y</td>
</tr>
<tr>
<td>originId</td>
<td>string</td>
<td>上传后的原始数据的originId,代表该原始数据在Datum中的唯一标识</td>
<td>Y</td>
</tr>
<tr>
<td>hash</td>
<td>string</td>
<td>上传后的原始数据内容Hash</td>
<td>Y</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>响应描述</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>响应示例:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #ECEFF4">{</span></span>
<span class="line"><span style="color: #D8DEE9FF">    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">status</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">200</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">result</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">{</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">originId</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">0xdadad...454545</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">hash</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #D8DEE9FF">    </span><span style="color: #ECEFF4">},</span></span>
<span class="line"><span style="color: #D8DEE9FF">    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">msg</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">OK</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #ECEFF4">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用示例</p>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">curl </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">https://datum.io/api/v2/data/uploadData</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     -H </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">Accept: application/json, text/plain, */*</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     -H </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">Accept-Language: zh-CN,zh;q=0.9</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     -H </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">Connection: keep-alive</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     -H </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryml6aYqp5NPR1V6C9</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     -H </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">Origin: http://datum.io</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     --data-raw </span><span style="color: #ECEFF4">$&#39;</span><span style="color: #A3BE8C">------WebKitFormBoundaryml6aYqp5NPR1V6C9</span><span style="color: #EBCB8B">\r\n</span><span style="color: #A3BE8C">Content-Disposition: form-data; name=&quot;file&quot;; filename=&quot;服务清单.xlsx&quot;</span><span style="color: #EBCB8B">\r\n</span><span style="color: #A3BE8C">Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</span><span style="color: #EBCB8B">\r\n\r</span><span style="color: #A3BE8C">   </span><span style="color: #EBCB8B">\n\r\n</span><span style="color: #A3BE8C">------WebKitFormBoundaryml6aYqp5NPR1V6C9</span><span style="color: #EBCB8B">\r\n</span><span style="color: #A3BE8C">Content-Disposition: form-data; name=&quot;storageType&quot;</span><span style="color: #EBCB8B">\r\n\r\n</span><span style="color: #A3BE8C">3</span><span style="color: #EBCB8B">\r\n</span><span style="color: #A3BE8C">------WebKitFormBoundaryml6aYqp5NPR1V6C9</span><span style="color: #EBCB8B">\r\n</span><span style="color: #A3BE8C">Content-Disposition: form-data;name=&quot;storageOption&quot;</span><span style="color: #EBCB8B">\r\n\r\n</span><span style="color: #A3BE8C">&quot;{</span><span style="color: #EBCB8B">\\</span><span style="color: #A3BE8C">&quot;chainType</span><span style="color: #EBCB8B">\\</span><span style="color: #A3BE8C">&quot;: 1}&quot;</span><span style="color: #EBCB8B">\r\n</span><span style="color: #A3BE8C">------WebKitFormBoundaryml6aYqp5NPR1V6C9--</span><span style="color: #EBCB8B">\r\n</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     --compressed \</span></span>
<span class="line"><span style="color: #D8DEE9FF">     --insecure</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据发布方式" tabindex="-1"><a class="header-anchor" href="#数据发布方式" aria-hidden="true">#</a> 数据发布方式</h2>
<p>在原始数据传输完成后，为了能实现web3生态下的数据服务能力，使得用户托管在Datum的原始数据能被生态应用方检索到，用户需要发布元数据信息。</p>
<h3 id="拉回原始数据的未发布元数据信息" tabindex="-1"><a class="header-anchor" href="#拉回原始数据的未发布元数据信息" aria-hidden="true">#</a> 拉回原始数据的未发布元数据信息</h3>
<p>原始数据对于用户来说是极其宝贵的资产，一般除了用户个人意愿之外是不会向外暴露其中详细内容的，即便是托管到Datum上的原始数据也是一样，为了方便应用方能够在检索到原始数据之前对原始数据的一些特性有所了解，那么需要将原始数据的特征描述进行数据化。元数据就是对原始数据的特征描述信息的数据，一般描述了原始数据的大小、文件类型、使用场景等等特征。</p>
<h4 id="使用场景-3" tabindex="-1"><a class="header-anchor" href="#使用场景-3" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>用户上传到Datum的原始数据都会由Datum默认抽取其中特征信息打包成未发布的元数据，用户可以通过直接操作元数据来使得对应的原始数据在Web3中提现流行价值。</li>
</ul>
<h4 id="功能描述-3" tabindex="-1"><a class="header-anchor" href="#功能描述-3" aria-hidden="true">#</a> 功能描述</h4>
<ul>
<li>获取被托管在Datum中的原始数据对应的未发布元数据信息，进而方便用户进一步完善对原始数据的描述。</li>
</ul>
<h4 id="如何使用-3" tabindex="-1"><a class="header-anchor" href="#如何使用-3" aria-hidden="true">#</a> 如何使用</h4>
<ul>
<li>
<p>接口名称：<code v-pre>queryLocalMetadata</code></p>
</li>
<li>
<p>请求方式: <code v-pre>GET</code></p>
</li>
<li>
<p>请求数据类型: 无</p>
</li>
<li>
<p>响应数据类型: <code v-pre>*/*</code></p>
</li>
<li>
<p>请求参数：</p>
</li>
</ul>
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
<td>originId</td>
<td>string</td>
<td>用户将原始数据托管到Datum时返回的originId (即： 原始数据在Datum中的唯一标识)</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>响应状态:</li>
</ul>
<table>
<thead>
<tr>
<th>状态码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>OK</td>
</tr>
<tr>
<td>201</td>
<td>Created</td>
</tr>
<tr>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>403</td>
<td>Forbidden</td>
</tr>
<tr>
<td>404</td>
<td>Not Found</td>
</tr>
</tbody>
</table>
<ul>
<li>响应参数:</li>
</ul>
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
<td>status</td>
<td>int</td>
<td>响应码</td>
<td>Y</td>
</tr>
<tr>
<td>result</td>
<td>json</td>
<td>原始数据对应的未发布元数据信息</td>
<td>Y</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>响应描述</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>响应示例:</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #ECEFF4">{</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">status</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">200</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">result</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">{</span></span>
<span class="line"><span style="color: #D8DEE9FF">            </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">owner</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">{</span></span>
<span class="line"><span style="color: #D8DEE9FF">                </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">nodeName</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">new_org152</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">nodeId</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">3188983b115ee29a09fc4798e4944cbb82636bd202d4d4611bde1cc347c7790c62186e91d55584b62c967f7466db97211238f81da52aa3db94d203e1d30043bb</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">identityId</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">did:pid:lat18vpuxh97dh52y6kr5csacuj9qv2c7qaem5ax8d</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">identityType</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">0</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">dataStatus</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">0</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">status</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">0</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">updateAt</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">0</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">imageUrl</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">details</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">credential</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">nonce</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">0</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #D8DEE9FF">            </span><span style="color: #ECEFF4">},</span></span>
<span class="line"><span style="color: #D8DEE9FF">            </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">information</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">{</span></span>
<span class="line"><span style="color: #D8DEE9FF">                    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">metadataId</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">metadataName</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">bank_predict_partyA</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">metadataType</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">1</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">dataHash</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">desc</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">bank_predict_partyA</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">locationType</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">1</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">dataType</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">1</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">industry</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">1</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">state</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">2</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">publishAt</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">1660803893000</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">updateAt</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">1660803893000</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">nonce</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">5</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">metadataOption</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">metadataColumns</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:[{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:1,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">CLIENT_ID</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:2,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">DEFAULT</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:3,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">HOUSING</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:4,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">LOAN</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:5,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">CONTACT</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:6,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">CAMPAIGN</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:7,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">PDAYS</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:8,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">PREVIOUS</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:9,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">EURIBOR3M</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:10,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_APR</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:11,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_AUG</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:12,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_DEC</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:13,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_JUL</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:14,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_JUN</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:15,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_MAR</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:16,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_MAY</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:17,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_NOV</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:18,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_OCT</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:19,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_SEP</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:20,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">DAY_OF_WEEK_FRI</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:21,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">DAY_OF_WEEK_MON</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:22,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">DAY_OF_WEEK_THU</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:23,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">DAY_OF_WEEK_TUE</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:24,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">DAY_OF_WEEK_WED</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:25,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">POUTCOME_FAILURE</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:26,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">POUTCOME_NONEXISTENT</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:27,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">POUTCOME_SUCCESS</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">}],</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">columns</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:27,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">rows</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:7925,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">consumeOptions</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:[],</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">dataPath</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">/home/user1/data/data_root/bank_predict_partyA_20220818-062409.csv</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">condition</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:3,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">originId</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">07ac869b639a4a810caa3d23cc1a3872109b0258f8da9ff13046f9fbee048c21</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:609112,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">consumeTypes</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:[],</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">hasTitle</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:true}</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">user</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">0x7e336d121679e9d741ab771992d5f32286f60d4a</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">userType</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">1</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">                    </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">sign</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;&quot;</span></span>
<span class="line"><span style="color: #D8DEE9FF">            </span><span style="color: #ECEFF4">}</span></span>
<span class="line"><span style="color: #D8DEE9FF">        </span><span style="color: #ECEFF4">},</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">msg</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">OK</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #ECEFF4">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">curl --location --request GET </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">https://datum.io/api/v2/metadata/queryLocalMetadata?originId=0xdadad...454545</span><span style="color: #ECEFF4">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="发布元数据" tabindex="-1"><a class="header-anchor" href="#发布元数据" aria-hidden="true">#</a> 发布元数据</h3>
<p>对托管到Datum上的原始数据进行元数据的发布，方便被原始数据的应用方检索到对应的原始数据。 目前发布元数据从更为安全的角度除了支持将用户托管到Datum的原始数据进行元数据发布外，还支持用户引用自己本地的原始数据直接发布元数据。故分为（a）、对托管的原始数据发布元数据；（b）、引用本地原始数据发布元数据。</p>
<h4 id="a-对托管的原始数据发布元数据" tabindex="-1"><a class="header-anchor" href="#a-对托管的原始数据发布元数据" aria-hidden="true">#</a> <strong>（a）对托管的原始数据发布元数据</strong></h4>
<h4 id="使用场景-4" tabindex="-1"><a class="header-anchor" href="#使用场景-4" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>引用托管到Datum的原始数据发起对原始数据信息进行描述的数据，即原始数据的元数据我们称之为元数据，元数据被发布后将会出现在数据市场中，方便应用方检索到与元数据对应的原始数据的描述，元数据包含了原始数据的基础特征及应用场景等描述，进而使得原始数据能在Web3中流动。</li>
</ul>
<h4 id="功能描述-4" tabindex="-1"><a class="header-anchor" href="#功能描述-4" aria-hidden="true">#</a> 功能描述</h4>
<ul>
<li>引用托管到Datum的原始数据发起元数据，使得自己的原始数据的描述信息能在Web3中流动。</li>
</ul>
<h4 id="如何使用-4" tabindex="-1"><a class="header-anchor" href="#如何使用-4" aria-hidden="true">#</a> 如何使用</h4>
<ul>
<li>
<p>接口名称：<code v-pre>publishMetadata</code></p>
</li>
<li>
<p>请求方式: <code v-pre>POST</code></p>
</li>
<li>
<p>请求数据类型: <code v-pre>application/json</code></p>
</li>
<li>
<p>响应数据类型: <code v-pre>*/*</code></p>
</li>
<li>
<p>请求参数：</p>
</li>
</ul>
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
<td>metadataId</td>
<td>string</td>
<td>元数据Id</td>
<td>Y</td>
</tr>
<tr>
<td>metadataName</td>
<td>string</td>
<td>元数据名称</td>
<td>Y</td>
</tr>
<tr>
<td>metadataType</td>
<td>int</td>
<td>元数据类型</td>
<td>Y</td>
</tr>
<tr>
<td>dataHash</td>
<td>string</td>
<td>原始数据内容Hash</td>
<td>Y</td>
</tr>
<tr>
<td>desc</td>
<td>string</td>
<td>数据描述</td>
<td>Y</td>
</tr>
<tr>
<td>locationType</td>
<td>int</td>
<td>原始数据存储的方式</td>
<td>Y</td>
</tr>
<tr>
<td>dataType</td>
<td>int</td>
<td>原始数据的类型</td>
<td>Y</td>
</tr>
<tr>
<td>industry</td>
<td>string</td>
<td>数据适用行业</td>
<td>Y</td>
</tr>
<tr>
<td>state</td>
<td>int</td>
<td>元数据状态</td>
<td>Y</td>
</tr>
<tr>
<td>metadataOption</td>
<td>stirng</td>
<td>元数据的选项信息json字符串</td>
<td>Y</td>
</tr>
<tr>
<td>user</td>
<td>string</td>
<td>用户信息</td>
<td>Y</td>
</tr>
<tr>
<td>userType</td>
<td>int</td>
<td>用户类型</td>
<td>Y</td>
</tr>
<tr>
<td>sign</td>
<td>string</td>
<td>元数据的消息签名</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>请求参数示例：</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #ECEFF4">{</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">metadataId</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">metadataName</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">bank_predict_partyA</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">metadataType</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">1</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">dataHash</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">desc</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">bank_predict_partyA</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">locationType</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">1</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">dataType</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">1</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">industry</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">1</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">state</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">2</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">metadataOption</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">metadataColumns</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:[{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:1,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">CLIENT_ID</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:2,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">DEFAULT</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:3,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">HOUSING</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:4,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">LOAN</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:5,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">CONTACT</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:6,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">CAMPAIGN</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:7,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">PDAYS</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:8,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">PREVIOUS</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:9,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">EURIBOR3M</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:10,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_APR</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:11,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_AUG</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:12,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_DEC</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:13,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_JUL</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:14,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_JUN</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:15,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_MAR</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:16,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_MAY</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:17,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_NOV</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:18,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_OCT</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:19,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_SEP</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:20,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">DAY_OF_WEEK_FRI</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:21,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">DAY_OF_WEEK_MON</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:22,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">DAY_OF_WEEK_THU</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:23,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">DAY_OF_WEEK_TUE</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:24,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">DAY_OF_WEEK_WED</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:25,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">POUTCOME_FAILURE</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:26,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">POUTCOME_NONEXISTENT</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:27,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">POUTCOME_SUCCESS</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">}],</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">columns</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:27,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">rows</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:7925,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">consumeOptions</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:[],</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">dataPath</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">/home/user1/data/data_root/bank_predict_partyA_20220818-062409.csv</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">condition</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:3,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">originId</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">07ac869b639a4a810caa3d23cc1a3872109b0258f8da9ff13046f9fbee048c21</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:609112,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">consumeTypes</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:[],</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">hasTitle</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:true}</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">user</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">0x7e336d121679e9d741ab771992d5f32286f60d4a</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">userType</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">1</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">sign</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #ECEFF4">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>响应状态:</li>
</ul>
<table>
<thead>
<tr>
<th>状态码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>OK</td>
</tr>
<tr>
<td>201</td>
<td>Created</td>
</tr>
<tr>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>403</td>
<td>Forbidden</td>
</tr>
<tr>
<td>404</td>
<td>Not Found</td>
</tr>
</tbody>
</table>
<ul>
<li>响应参数:</li>
</ul>
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
<td>status</td>
<td>int</td>
<td>响应码</td>
<td>Y</td>
</tr>
<tr>
<td>result</td>
<td>json</td>
<td>返回信息</td>
<td>Y</td>
</tr>
<tr>
<td>originId</td>
<td>string</td>
<td>上传后的原始数据的originId,代表该原始数据在Datum中的唯一标识</td>
<td>Y</td>
</tr>
<tr>
<td>metadataId</td>
<td>string</td>
<td>发布后的元数据Id</td>
<td>Y</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>响应描述</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>响应示例:</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #ECEFF4">{</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">status</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">200</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">result</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">{</span></span>
<span class="line"><span style="color: #D8DEE9FF">        </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">originId</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">0xdadad...454545</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">        </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">metadataId</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">},</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">msg</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">OK</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #ECEFF4">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">curl --location --request POST </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">https://datum.io/api/v2/metadat/publishMetadata</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">--header </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">Content-Type: application/json</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">--data-raw </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">{</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;metadataId&quot;: &quot;metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646&quot;,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;metadataName&quot;: &quot;bank_predict_partyA&quot;,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;metadataType&quot;: 1,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;dataHash&quot;: &quot;295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87&quot;,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;desc&quot;: &quot;bank_predict_partyA&quot;,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;locationType&quot;: 1,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;dataType&quot;: 1,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;industry&quot;: &quot;1&quot;,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;state&quot;: 2,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;metadataOption&quot;: &quot;{\&quot;metadataColumns\&quot;:[{\&quot;index\&quot;:1,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;CLIENT_ID\&quot;},{\&quot;index\&quot;:2,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;DEFAULT\&quot;},{\&quot;index\&quot;:3,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;HOUSING\&quot;},{\&quot;index\&quot;:4,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;LOAN\&quot;},{\&quot;index\&quot;:5,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;CONTACT\&quot;},{\&quot;index\&quot;:6,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;CAMPAIGN\&quot;},{\&quot;index\&quot;:7,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;PDAYS\&quot;},{\&quot;index\&quot;:8,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;PREVIOUS\&quot;},{\&quot;index\&quot;:9,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;EURIBOR3M\&quot;},{\&quot;index\&quot;:10,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_APR\&quot;},{\&quot;index\&quot;:11,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_AUG\&quot;},{\&quot;index\&quot;:12,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_DEC\&quot;},{\&quot;index\&quot;:13,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_JUL\&quot;},{\&quot;index\&quot;:14,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_JUN\&quot;},{\&quot;index\&quot;:15,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_MAR\&quot;},{\&quot;index\&quot;:16,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_MAY\&quot;},{\&quot;index\&quot;:17,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_NOV\&quot;},{\&quot;index\&quot;:18,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_OCT\&quot;},{\&quot;index\&quot;:19,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_SEP\&quot;},{\&quot;index\&quot;:20,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;DAY_OF_WEEK_FRI\&quot;},{\&quot;index\&quot;:21,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;DAY_OF_WEEK_MON\&quot;},{\&quot;index\&quot;:22,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;DAY_OF_WEEK_THU\&quot;},{\&quot;index\&quot;:23,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;DAY_OF_WEEK_TUE\&quot;},{\&quot;index\&quot;:24,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;DAY_OF_WEEK_WED\&quot;},{\&quot;index\&quot;:25,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;POUTCOME_FAILURE\&quot;},{\&quot;index\&quot;:26,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;POUTCOME_NONEXISTENT\&quot;},{\&quot;index\&quot;:27,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;POUTCOME_SUCCESS\&quot;}],\&quot;columns\&quot;:27,\&quot;rows\&quot;:7925,\&quot;consumeOptions\&quot;:[],\&quot;dataPath\&quot;:\&quot;/home/user1/data/data_root/bank_predict_partyA_20220818-062409.csv\&quot;,\&quot;condition\&quot;:3,\&quot;originId\&quot;:\&quot;07ac869b639a4a810caa3d23cc1a3872109b0258f8da9ff13046f9fbee048c21\&quot;,\&quot;size\&quot;:609112,\&quot;consumeTypes\&quot;:[],\&quot;hasTitle\&quot;:true}&quot;,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;user&quot;: &quot;0x7e336d121679e9d741ab771992d5f32286f60d4a&quot;,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;userType&quot;: 1,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;sign&quot;: &quot;77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c&quot;</span></span>
<span class="line"><span style="color: #A3BE8C">}</span><span style="color: #ECEFF4">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="b-引用本地原始数据发布元数据" tabindex="-1"><a class="header-anchor" href="#b-引用本地原始数据发布元数据" aria-hidden="true">#</a> <strong>（b）引用本地原始数据发布元数据</strong></h4>
<h4 id="使用场景-5" tabindex="-1"><a class="header-anchor" href="#使用场景-5" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>引用用户自行存储在本地的原始数据信息进行描述的数据，即原始数据的元数据我们称之为元数据，元数据被发布后将会出现在数据市场中，方便应用方检索到与元数据对应的原始数据的描述，元数据包含了原始数据的基础特征及应用场景等描述，进而使得原始数据能在Web3中流动。</li>
</ul>
<h4 id="功能描述-5" tabindex="-1"><a class="header-anchor" href="#功能描述-5" aria-hidden="true">#</a> 功能描述</h4>
<ul>
<li>引用用户自行存储在本地的原始数据发起元数据，使得自己的原始数据的描述信息能在Web3中流动。</li>
</ul>
<h4 id="如何使用-5" tabindex="-1"><a class="header-anchor" href="#如何使用-5" aria-hidden="true">#</a> 如何使用</h4>
<ul>
<li>
<p>接口名称：<code v-pre>publishMetadataWithLocalDdata</code></p>
</li>
<li>
<p>请求方式: <code v-pre>POST</code></p>
</li>
<li>
<p>请求数据类型: <code v-pre>application/json</code></p>
</li>
<li>
<p>响应数据类型: <code v-pre>*/*</code></p>
</li>
<li>
<p>请求参数：</p>
</li>
</ul>
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
<td>metadataId</td>
<td>string</td>
<td>元数据Id</td>
<td>Y</td>
</tr>
<tr>
<td>metadataName</td>
<td>string</td>
<td>元数据名称</td>
<td>Y</td>
</tr>
<tr>
<td>metadataType</td>
<td>int</td>
<td>元数据类型</td>
<td>Y</td>
</tr>
<tr>
<td>dataHash</td>
<td>string</td>
<td>原始数据内容Hash</td>
<td>Y</td>
</tr>
<tr>
<td>desc</td>
<td>string</td>
<td>数据描述</td>
<td>Y</td>
</tr>
<tr>
<td>locationType</td>
<td>int</td>
<td>原始数据存储的方式</td>
<td>Y</td>
</tr>
<tr>
<td>dataType</td>
<td>int</td>
<td>原始数据的类型</td>
<td>Y</td>
</tr>
<tr>
<td>industry</td>
<td>string</td>
<td>数据适用行业</td>
<td>Y</td>
</tr>
<tr>
<td>state</td>
<td>int</td>
<td>元数据状态</td>
<td>Y</td>
</tr>
<tr>
<td>metadataOption</td>
<td>stirng</td>
<td>元数据的选项信息json字符串</td>
<td>Y</td>
</tr>
<tr>
<td>user</td>
<td>string</td>
<td>用户信息</td>
<td>Y</td>
</tr>
<tr>
<td>userType</td>
<td>int</td>
<td>用户类型</td>
<td>Y</td>
</tr>
<tr>
<td>sign</td>
<td>string</td>
<td>元数据的消息签名</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>请求参数示例：</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #ECEFF4">{</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">metadataId</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">metadataName</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">bank_predict_partyA</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">metadataType</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">1</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">dataHash</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">desc</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">bank_predict_partyA</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">locationType</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">1</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">dataType</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">1</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">industry</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">1</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">state</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">2</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">metadataOption</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">metadataColumns</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:[{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:1,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">CLIENT_ID</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:2,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">DEFAULT</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:3,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">HOUSING</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:4,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">LOAN</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:5,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">CONTACT</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:6,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">CAMPAIGN</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:7,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">PDAYS</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:8,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">PREVIOUS</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:9,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">EURIBOR3M</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:10,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_APR</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:11,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_AUG</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:12,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_DEC</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:13,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_JUL</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:14,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_JUN</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:15,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_MAR</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:16,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_MAY</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:17,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_NOV</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:18,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_OCT</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:19,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">MONTH_SEP</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:20,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">DAY_OF_WEEK_FRI</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:21,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">DAY_OF_WEEK_MON</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:22,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">DAY_OF_WEEK_THU</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:23,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">DAY_OF_WEEK_TUE</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:24,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">DAY_OF_WEEK_WED</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:25,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">POUTCOME_FAILURE</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:26,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">POUTCOME_NONEXISTENT</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">},{</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">index</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:27,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">type</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">string</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:0,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">name</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">POUTCOME_SUCCESS</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">}],</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">columns</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:27,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">rows</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:7925,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">consumeOptions</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:[],</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">dataPath</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">/home/user1/data/data_root/bank_predict_partyA_20220818-062409.csv</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">condition</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:3,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">originId</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">07ac869b639a4a810caa3d23cc1a3872109b0258f8da9ff13046f9fbee048c21</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">size</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:609112,</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">consumeTypes</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:[],</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">hasTitle</span><span style="color: #EBCB8B">\&quot;</span><span style="color: #A3BE8C">:true}</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">user</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">0x7e336d121679e9d741ab771992d5f32286f60d4a</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">userType</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">1</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">sign</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #ECEFF4">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>响应状态:</li>
</ul>
<table>
<thead>
<tr>
<th>状态码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>OK</td>
</tr>
<tr>
<td>201</td>
<td>Created</td>
</tr>
<tr>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>403</td>
<td>Forbidden</td>
</tr>
<tr>
<td>404</td>
<td>Not Found</td>
</tr>
</tbody>
</table>
<ul>
<li>响应参数:</li>
</ul>
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
<td>status</td>
<td>int</td>
<td>响应码</td>
<td>Y</td>
</tr>
<tr>
<td>result</td>
<td>json</td>
<td>返回信息</td>
<td>Y</td>
</tr>
<tr>
<td>originId</td>
<td>string</td>
<td>上传后的原始数据的originId,代表该原始数据在Datum中的唯一标识</td>
<td>Y</td>
</tr>
<tr>
<td>metadataId</td>
<td>string</td>
<td>发布后的元数据Id</td>
<td>Y</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>响应描述</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>响应示例:</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #ECEFF4">{</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">status</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">200</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">result</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">{</span></span>
<span class="line"><span style="color: #D8DEE9FF">        </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">originId</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">0xdadad...454545</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">        </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">metadataId</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">},</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">msg</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">OK</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #ECEFF4">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">curl --location --request POST </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">https://datum.io/api/v2/metadat/publishMetadataWithLocalDdata</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">--header </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">Content-Type: application/json</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">--data-raw </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">{</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;metadataId&quot;: &quot;metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646&quot;,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;metadataName&quot;: &quot;bank_predict_partyA&quot;,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;metadataType&quot;: 1,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;dataHash&quot;: &quot;295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87&quot;,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;desc&quot;: &quot;bank_predict_partyA&quot;,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;locationType&quot;: 1,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;dataType&quot;: 1,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;industry&quot;: &quot;1&quot;,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;state&quot;: 2,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;metadataOption&quot;: &quot;{\&quot;metadataColumns\&quot;:[{\&quot;index\&quot;:1,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;CLIENT_ID\&quot;},{\&quot;index\&quot;:2,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;DEFAULT\&quot;},{\&quot;index\&quot;:3,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;HOUSING\&quot;},{\&quot;index\&quot;:4,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;LOAN\&quot;},{\&quot;index\&quot;:5,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;CONTACT\&quot;},{\&quot;index\&quot;:6,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;CAMPAIGN\&quot;},{\&quot;index\&quot;:7,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;PDAYS\&quot;},{\&quot;index\&quot;:8,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;PREVIOUS\&quot;},{\&quot;index\&quot;:9,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;EURIBOR3M\&quot;},{\&quot;index\&quot;:10,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_APR\&quot;},{\&quot;index\&quot;:11,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_AUG\&quot;},{\&quot;index\&quot;:12,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_DEC\&quot;},{\&quot;index\&quot;:13,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_JUL\&quot;},{\&quot;index\&quot;:14,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_JUN\&quot;},{\&quot;index\&quot;:15,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_MAR\&quot;},{\&quot;index\&quot;:16,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_MAY\&quot;},{\&quot;index\&quot;:17,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_NOV\&quot;},{\&quot;index\&quot;:18,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_OCT\&quot;},{\&quot;index\&quot;:19,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;MONTH_SEP\&quot;},{\&quot;index\&quot;:20,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;DAY_OF_WEEK_FRI\&quot;},{\&quot;index\&quot;:21,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;DAY_OF_WEEK_MON\&quot;},{\&quot;index\&quot;:22,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;DAY_OF_WEEK_THU\&quot;},{\&quot;index\&quot;:23,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;DAY_OF_WEEK_TUE\&quot;},{\&quot;index\&quot;:24,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;DAY_OF_WEEK_WED\&quot;},{\&quot;index\&quot;:25,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;POUTCOME_FAILURE\&quot;},{\&quot;index\&quot;:26,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;POUTCOME_NONEXISTENT\&quot;},{\&quot;index\&quot;:27,\&quot;type\&quot;:\&quot;string\&quot;,\&quot;size\&quot;:0,\&quot;name\&quot;:\&quot;POUTCOME_SUCCESS\&quot;}],\&quot;columns\&quot;:27,\&quot;rows\&quot;:7925,\&quot;consumeOptions\&quot;:[],\&quot;dataPath\&quot;:\&quot;/home/user1/data/data_root/bank_predict_partyA_20220818-062409.csv\&quot;,\&quot;condition\&quot;:3,\&quot;originId\&quot;:\&quot;07ac869b639a4a810caa3d23cc1a3872109b0258f8da9ff13046f9fbee048c21\&quot;,\&quot;size\&quot;:609112,\&quot;consumeTypes\&quot;:[],\&quot;hasTitle\&quot;:true}&quot;,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;user&quot;: &quot;0x7e336d121679e9d741ab771992d5f32286f60d4a&quot;,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;userType&quot;: 1,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;sign&quot;: &quot;77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c&quot;</span></span>
<span class="line"><span style="color: #A3BE8C">}</span><span style="color: #ECEFF4">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发布数据hash" tabindex="-1"><a class="header-anchor" href="#发布数据hash" aria-hidden="true">#</a> 发布数据Hash</h3>
<p>在某些场景下，用户出于业务需求需要发布原始数据Hash。</p>
<h4 id="使用场景-6" tabindex="-1"><a class="header-anchor" href="#使用场景-6" aria-hidden="true">#</a> 使用场景</h4>
<ul>
<li>用户在某些时候并不想将自己的原始数据暴露对外，也不想将原始数据提供给外部适用，仅仅是想对自己的原始数据不可篡改做一次证明，此时用户可以将原始数据的Hash通过Datum发布到Web3中。</li>
</ul>
<h4 id="功能描述-6" tabindex="-1"><a class="header-anchor" href="#功能描述-6" aria-hidden="true">#</a> 功能描述</h4>
<ul>
<li>引用用户自己的原始数据内容Hash，发布到Web3中。</li>
</ul>
<h4 id="如何使用-6" tabindex="-1"><a class="header-anchor" href="#如何使用-6" aria-hidden="true">#</a> 如何使用</h4>
<ul>
<li>
<p>接口名称：<code v-pre>publishDataHash</code></p>
</li>
<li>
<p>请求方式: <code v-pre>POST</code></p>
</li>
<li>
<p>请求数据类型: <code v-pre>application/json</code></p>
</li>
<li>
<p>响应数据类型: <code v-pre>*/*</code></p>
</li>
<li>
<p>请求参数：</p>
</li>
</ul>
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
<td>dataHash</td>
<td>string</td>
<td>原始数据内容Hash</td>
<td>Y</td>
</tr>
<tr>
<td>desc</td>
<td>string</td>
<td>数据描述</td>
<td>Y</td>
</tr>
<tr>
<td>user</td>
<td>string</td>
<td>用户信息</td>
<td>Y</td>
</tr>
<tr>
<td>userType</td>
<td>int</td>
<td>用户类型</td>
<td>Y</td>
</tr>
<tr>
<td>sign</td>
<td>string</td>
<td>元数据的消息签名</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>请求参数示例：</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #ECEFF4">{</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">dataHash</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">desc</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">bank_predict_partyA</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">user</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">0x7e336d121679e9d741ab771992d5f32286f60d4a</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">userType</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">1</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">sign</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #ECEFF4">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>响应状态:</li>
</ul>
<table>
<thead>
<tr>
<th>状态码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>OK</td>
</tr>
<tr>
<td>201</td>
<td>Created</td>
</tr>
<tr>
<td>401</td>
<td>Unauthorized</td>
</tr>
<tr>
<td>403</td>
<td>Forbidden</td>
</tr>
<tr>
<td>404</td>
<td>Not Found</td>
</tr>
</tbody>
</table>
<ul>
<li>响应参数:</li>
</ul>
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
<td>status</td>
<td>int</td>
<td>响应码</td>
<td>Y</td>
</tr>
<tr>
<td>result</td>
<td>json</td>
<td>返回信息</td>
<td>Y</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>响应描述</td>
<td>Y</td>
</tr>
</tbody>
</table>
<ul>
<li>响应示例:</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #ECEFF4">{</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">status</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #B48EAD">200</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">result</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;&quot;</span><span style="color: #ECEFF4">,</span></span>
<span class="line"><span style="color: #D8DEE9FF">      </span><span style="color: #ECEFF4">&quot;</span><span style="color: #8FBCBB">msg</span><span style="color: #ECEFF4">&quot;</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">OK</span><span style="color: #ECEFF4">&quot;</span></span>
<span class="line"><span style="color: #ECEFF4">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">curl --location --request POST </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">https://datum.io/api/v2/metadat/publishDataHash</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">--header </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">Content-Type: application/json</span><span style="color: #ECEFF4">&#39;</span><span style="color: #D8DEE9FF"> \</span></span>
<span class="line"><span style="color: #D8DEE9FF">--data-raw </span><span style="color: #ECEFF4">&#39;</span><span style="color: #A3BE8C">{</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;dataHash&quot;: &quot;295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87&quot;,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;desc&quot;: &quot;bank_predict_partyA&quot;,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;user&quot;: &quot;0x7e336d121679e9d741ab771992d5f32286f60d4a&quot;,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;userType&quot;: 1,</span></span>
<span class="line"><span style="color: #A3BE8C">      &quot;sign&quot;: &quot;77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c&quot;</span></span>
<span class="line"><span style="color: #A3BE8C">}</span><span style="color: #ECEFF4">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>补充</strong></p>
<h4 id="storageoption值说明" tabindex="-1"><a class="header-anchor" href="#storageoption值说明" aria-hidden="true">#</a> <span id="storageOption值说明"> storageOption值说明： </span></h4>
<ul>
<li>
<p>storageType： 0</p>
</li>
<li>
<p>storageOption：</p>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #d8dee9ff">&quot;&quot;</span></span>
<span class="line"><span style="color: #d8dee9ff"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>storageType： 1</p>
</li>
<li>
<p>storageOption：</p>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #d8dee9ff">&quot;{</span></span>
<span class="line"><span style="color: #d8dee9ff">    &quot;cloudType&quot;: 0    // 0: 使用Datum默认的方式存储； 1: 使用Datum提供的阿里云存储； 2: 使用Datum提供的腾讯云存储；...</span></span>
<span class="line"><span style="color: #d8dee9ff">  }&quot;</span></span>
<span class="line"><span style="color: #d8dee9ff"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>storageType： 2</p>
</li>
<li>
<p>storageOption：</p>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #d8dee9ff">&quot;&quot;</span></span>
<span class="line"><span style="color: #d8dee9ff"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>storageType： 3</p>
</li>
<li>
<p>storageOption：</p>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #d8dee9ff">&quot;{</span></span>
<span class="line"><span style="color: #d8dee9ff">    &quot;chainType&quot;: 0 // 0: 使用Alaya存储； 1: 使用PlatON存储； 2: 使用Etheruem存储；...</span></span>
<span class="line"><span style="color: #d8dee9ff">  }&quot;</span></span>
<span class="line"><span style="color: #d8dee9ff"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


