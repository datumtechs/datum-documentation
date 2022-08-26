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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"originId"</span><span class="token operator">:</span> <span class="token string">"0xdadad...454545"</span><span class="token punctuation">,</span>
      <span class="token property">"hash"</span><span class="token operator">:</span> <span class="token string">"295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"OK"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用示例</p>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">'https://datum.io/api/v2/data/uploadData'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">-H</span> <span class="token string">'Accept: application/json, text/plain, */*'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">-H</span> <span class="token string">'Accept-Language: zh-CN,zh;q=0.9'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">-H</span> <span class="token string">'Connection: keep-alive'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">-H</span> <span class="token string">'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryml6aYqp5NPR1V6C9'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">-H</span> <span class="token string">'Origin: http://datum.io'</span> <span class="token punctuation">\</span>
     --data-raw <span class="token string">$'------WebKitFormBoundaryml6aYqp5NPR1V6C9<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>Content-Disposition: form-data; name="file"; filename="服务清单.xlsx"<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span><span class="token entity" title="\r">\r</span>   <span class="token entity" title="\n">\n</span><span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>------WebKitFormBoundaryml6aYqp5NPR1V6C9<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>Content-Disposition: form-data; name="storageType"<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span><span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>1<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>------WebKitFormBoundaryml6aYqp5NPR1V6C9<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>Content-Disposition: form-data;name="storageOption"<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span><span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>"{<span class="token entity" title="\\">\\</span>"cloudType<span class="token entity" title="\\">\\</span>": 0}"<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>------WebKitFormBoundaryml6aYqp5NPR1V6C9--<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--compressed</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--insecure</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ipfs传输" tabindex="-1"><a class="header-anchor" href="#ipfs传输" aria-hidden="true">#</a> IPFS传输</h3>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"originId"</span><span class="token operator">:</span> <span class="token string">"0xdadad...454545"</span><span class="token punctuation">,</span>
      <span class="token property">"hash"</span><span class="token operator">:</span> <span class="token string">"295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"OK"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用示例</p>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">'https://datum.io/api/v2/data/uploadData'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">-H</span> <span class="token string">'Accept: application/json, text/plain, */*'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">-H</span> <span class="token string">'Accept-Language: zh-CN,zh;q=0.9'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">-H</span> <span class="token string">'Connection: keep-alive'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">-H</span> <span class="token string">'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryml6aYqp5NPR1V6C9'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">-H</span> <span class="token string">'Origin: http://datum.io'</span> <span class="token punctuation">\</span>
     --data-raw <span class="token string">$'------WebKitFormBoundaryml6aYqp5NPR1V6C9<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>Content-Disposition: form-data; name="file"; filename="服务清单.xlsx"<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span><span class="token entity" title="\r">\r</span>   <span class="token entity" title="\n">\n</span><span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>------WebKitFormBoundaryml6aYqp5NPR1V6C9<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>Content-Disposition: form-data; name="storageType"<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span><span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>2<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>------WebKitFormBoundaryml6aYqp5NPR1V6C9<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>Content-Disposition: form-data;name="storageOption"<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span><span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>""<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>------WebKitFormBoundaryml6aYqp5NPR1V6C9--<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--compressed</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--insecure</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="区块链传输" tabindex="-1"><a class="header-anchor" href="#区块链传输" aria-hidden="true">#</a> 区块链传输</h3>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"originId"</span><span class="token operator">:</span> <span class="token string">"0xdadad...454545"</span><span class="token punctuation">,</span>
      <span class="token property">"hash"</span><span class="token operator">:</span> <span class="token string">"295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"OK"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用示例</p>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">'https://datum.io/api/v2/data/uploadData'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">-H</span> <span class="token string">'Accept: application/json, text/plain, */*'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">-H</span> <span class="token string">'Accept-Language: zh-CN,zh;q=0.9'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">-H</span> <span class="token string">'Connection: keep-alive'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">-H</span> <span class="token string">'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryml6aYqp5NPR1V6C9'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">-H</span> <span class="token string">'Origin: http://datum.io'</span> <span class="token punctuation">\</span>
     --data-raw <span class="token string">$'------WebKitFormBoundaryml6aYqp5NPR1V6C9<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>Content-Disposition: form-data; name="file"; filename="服务清单.xlsx"<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span><span class="token entity" title="\r">\r</span>   <span class="token entity" title="\n">\n</span><span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>------WebKitFormBoundaryml6aYqp5NPR1V6C9<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>Content-Disposition: form-data; name="storageType"<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span><span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>3<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>------WebKitFormBoundaryml6aYqp5NPR1V6C9<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>Content-Disposition: form-data;name="storageOption"<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span><span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>"{<span class="token entity" title="\\">\\</span>"chainType<span class="token entity" title="\\">\\</span>": 1}"<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>------WebKitFormBoundaryml6aYqp5NPR1V6C9--<span class="token entity" title="\r">\r</span><span class="token entity" title="\n">\n</span>'</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--compressed</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">--insecure</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据发布方式" tabindex="-1"><a class="header-anchor" href="#数据发布方式" aria-hidden="true">#</a> 数据发布方式</h2>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
      <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"owner"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"nodeName"</span><span class="token operator">:</span> <span class="token string">"new_org152"</span><span class="token punctuation">,</span>
                <span class="token property">"nodeId"</span><span class="token operator">:</span> <span class="token string">"3188983b115ee29a09fc4798e4944cbb82636bd202d4d4611bde1cc347c7790c62186e91d55584b62c967f7466db97211238f81da52aa3db94d203e1d30043bb"</span><span class="token punctuation">,</span>
                <span class="token property">"identityId"</span><span class="token operator">:</span> <span class="token string">"did:pid:lat18vpuxh97dh52y6kr5csacuj9qv2c7qaem5ax8d"</span><span class="token punctuation">,</span>
                <span class="token property">"identityType"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">"dataStatus"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">"updateAt"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
                <span class="token property">"imageUrl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                <span class="token property">"details"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                <span class="token property">"credential"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                <span class="token property">"nonce"</span><span class="token operator">:</span> <span class="token string">"0"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"information"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"metadataId"</span><span class="token operator">:</span> <span class="token string">"metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"</span><span class="token punctuation">,</span>
                    <span class="token property">"metadataName"</span><span class="token operator">:</span> <span class="token string">"bank_predict_partyA"</span><span class="token punctuation">,</span>
                    <span class="token property">"metadataType"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"dataHash"</span><span class="token operator">:</span> <span class="token string">"295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87"</span><span class="token punctuation">,</span>
                    <span class="token property">"desc"</span><span class="token operator">:</span> <span class="token string">"bank_predict_partyA"</span><span class="token punctuation">,</span>
                    <span class="token property">"locationType"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"dataType"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"industry"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
                    <span class="token property">"state"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">"publishAt"</span><span class="token operator">:</span> <span class="token string">"1660803893000"</span><span class="token punctuation">,</span>
                    <span class="token property">"updateAt"</span><span class="token operator">:</span> <span class="token string">"1660803893000"</span><span class="token punctuation">,</span>
                    <span class="token property">"nonce"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span>
                    <span class="token property">"metadataOption"</span><span class="token operator">:</span> <span class="token string">"{\"metadataColumns\":[{\"index\":1,\"type\":\"string\",\"size\":0,\"name\":\"CLIENT_ID\"},{\"index\":2,\"type\":\"string\",\"size\":0,\"name\":\"DEFAULT\"},{\"index\":3,\"type\":\"string\",\"size\":0,\"name\":\"HOUSING\"},{\"index\":4,\"type\":\"string\",\"size\":0,\"name\":\"LOAN\"},{\"index\":5,\"type\":\"string\",\"size\":0,\"name\":\"CONTACT\"},{\"index\":6,\"type\":\"string\",\"size\":0,\"name\":\"CAMPAIGN\"},{\"index\":7,\"type\":\"string\",\"size\":0,\"name\":\"PDAYS\"},{\"index\":8,\"type\":\"string\",\"size\":0,\"name\":\"PREVIOUS\"},{\"index\":9,\"type\":\"string\",\"size\":0,\"name\":\"EURIBOR3M\"},{\"index\":10,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_APR\"},{\"index\":11,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_AUG\"},{\"index\":12,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_DEC\"},{\"index\":13,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUL\"},{\"index\":14,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUN\"},{\"index\":15,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAR\"},{\"index\":16,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAY\"},{\"index\":17,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_NOV\"},{\"index\":18,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_OCT\"},{\"index\":19,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_SEP\"},{\"index\":20,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_FRI\"},{\"index\":21,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_MON\"},{\"index\":22,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_THU\"},{\"index\":23,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_TUE\"},{\"index\":24,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_WED\"},{\"index\":25,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_FAILURE\"},{\"index\":26,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_NONEXISTENT\"},{\"index\":27,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_SUCCESS\"}],\"columns\":27,\"rows\":7925,\"consumeOptions\":[],\"dataPath\":\"/home/user1/data/data_root/bank_predict_partyA_20220818-062409.csv\",\"condition\":3,\"originId\":\"07ac869b639a4a810caa3d23cc1a3872109b0258f8da9ff13046f9fbee048c21\",\"size\":609112,\"consumeTypes\":[],\"hasTitle\":true}"</span><span class="token punctuation">,</span>
                    <span class="token property">"user"</span><span class="token operator">:</span> <span class="token string">"0x7e336d121679e9d741ab771992d5f32286f60d4a"</span><span class="token punctuation">,</span>
                    <span class="token property">"userType"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">"sign"</span><span class="token operator">:</span> <span class="token string">""</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"OK"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--location</span> <span class="token parameter variable">--request</span> GET <span class="token string">'https://datum.io/api/v2/metadata/queryLocalMetadata?originId=0xdadad...454545'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="发布元数据" tabindex="-1"><a class="header-anchor" href="#发布元数据" aria-hidden="true">#</a> 发布元数据</h3>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
      <span class="token property">"metadataId"</span><span class="token operator">:</span> <span class="token string">"metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"</span><span class="token punctuation">,</span>
      <span class="token property">"metadataName"</span><span class="token operator">:</span> <span class="token string">"bank_predict_partyA"</span><span class="token punctuation">,</span>
      <span class="token property">"metadataType"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"dataHash"</span><span class="token operator">:</span> <span class="token string">"295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87"</span><span class="token punctuation">,</span>
      <span class="token property">"desc"</span><span class="token operator">:</span> <span class="token string">"bank_predict_partyA"</span><span class="token punctuation">,</span>
      <span class="token property">"locationType"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"dataType"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"industry"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
      <span class="token property">"state"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">"metadataOption"</span><span class="token operator">:</span> <span class="token string">"{\"metadataColumns\":[{\"index\":1,\"type\":\"string\",\"size\":0,\"name\":\"CLIENT_ID\"},{\"index\":2,\"type\":\"string\",\"size\":0,\"name\":\"DEFAULT\"},{\"index\":3,\"type\":\"string\",\"size\":0,\"name\":\"HOUSING\"},{\"index\":4,\"type\":\"string\",\"size\":0,\"name\":\"LOAN\"},{\"index\":5,\"type\":\"string\",\"size\":0,\"name\":\"CONTACT\"},{\"index\":6,\"type\":\"string\",\"size\":0,\"name\":\"CAMPAIGN\"},{\"index\":7,\"type\":\"string\",\"size\":0,\"name\":\"PDAYS\"},{\"index\":8,\"type\":\"string\",\"size\":0,\"name\":\"PREVIOUS\"},{\"index\":9,\"type\":\"string\",\"size\":0,\"name\":\"EURIBOR3M\"},{\"index\":10,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_APR\"},{\"index\":11,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_AUG\"},{\"index\":12,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_DEC\"},{\"index\":13,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUL\"},{\"index\":14,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUN\"},{\"index\":15,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAR\"},{\"index\":16,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAY\"},{\"index\":17,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_NOV\"},{\"index\":18,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_OCT\"},{\"index\":19,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_SEP\"},{\"index\":20,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_FRI\"},{\"index\":21,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_MON\"},{\"index\":22,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_THU\"},{\"index\":23,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_TUE\"},{\"index\":24,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_WED\"},{\"index\":25,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_FAILURE\"},{\"index\":26,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_NONEXISTENT\"},{\"index\":27,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_SUCCESS\"}],\"columns\":27,\"rows\":7925,\"consumeOptions\":[],\"dataPath\":\"/home/user1/data/data_root/bank_predict_partyA_20220818-062409.csv\",\"condition\":3,\"originId\":\"07ac869b639a4a810caa3d23cc1a3872109b0258f8da9ff13046f9fbee048c21\",\"size\":609112,\"consumeTypes\":[],\"hasTitle\":true}"</span><span class="token punctuation">,</span>
      <span class="token property">"user"</span><span class="token operator">:</span> <span class="token string">"0x7e336d121679e9d741ab771992d5f32286f60d4a"</span><span class="token punctuation">,</span>
      <span class="token property">"userType"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"sign"</span><span class="token operator">:</span> <span class="token string">"77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
      <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"originId"</span><span class="token operator">:</span> <span class="token string">"0xdadad...454545"</span><span class="token punctuation">,</span>
        <span class="token property">"metadataId"</span><span class="token operator">:</span> <span class="token string">"metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"OK"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--location</span> <span class="token parameter variable">--request</span> POST <span class="token string">'https://datum.io/api/v2/metadat/publishMetadata'</span> <span class="token punctuation">\</span>
<span class="token parameter variable">--header</span> <span class="token string">'Content-Type: application/json'</span> <span class="token punctuation">\</span>
--data-raw <span class="token string">'{
      "metadataId": "metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646",
      "metadataName": "bank_predict_partyA",
      "metadataType": 1,
      "dataHash": "295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87",
      "desc": "bank_predict_partyA",
      "locationType": 1,
      "dataType": 1,
      "industry": "1",
      "state": 2,
      "metadataOption": "{\"metadataColumns\":[{\"index\":1,\"type\":\"string\",\"size\":0,\"name\":\"CLIENT_ID\"},{\"index\":2,\"type\":\"string\",\"size\":0,\"name\":\"DEFAULT\"},{\"index\":3,\"type\":\"string\",\"size\":0,\"name\":\"HOUSING\"},{\"index\":4,\"type\":\"string\",\"size\":0,\"name\":\"LOAN\"},{\"index\":5,\"type\":\"string\",\"size\":0,\"name\":\"CONTACT\"},{\"index\":6,\"type\":\"string\",\"size\":0,\"name\":\"CAMPAIGN\"},{\"index\":7,\"type\":\"string\",\"size\":0,\"name\":\"PDAYS\"},{\"index\":8,\"type\":\"string\",\"size\":0,\"name\":\"PREVIOUS\"},{\"index\":9,\"type\":\"string\",\"size\":0,\"name\":\"EURIBOR3M\"},{\"index\":10,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_APR\"},{\"index\":11,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_AUG\"},{\"index\":12,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_DEC\"},{\"index\":13,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUL\"},{\"index\":14,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUN\"},{\"index\":15,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAR\"},{\"index\":16,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAY\"},{\"index\":17,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_NOV\"},{\"index\":18,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_OCT\"},{\"index\":19,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_SEP\"},{\"index\":20,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_FRI\"},{\"index\":21,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_MON\"},{\"index\":22,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_THU\"},{\"index\":23,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_TUE\"},{\"index\":24,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_WED\"},{\"index\":25,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_FAILURE\"},{\"index\":26,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_NONEXISTENT\"},{\"index\":27,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_SUCCESS\"}],\"columns\":27,\"rows\":7925,\"consumeOptions\":[],\"dataPath\":\"/home/user1/data/data_root/bank_predict_partyA_20220818-062409.csv\",\"condition\":3,\"originId\":\"07ac869b639a4a810caa3d23cc1a3872109b0258f8da9ff13046f9fbee048c21\",\"size\":609112,\"consumeTypes\":[],\"hasTitle\":true}",
      "user": "0x7e336d121679e9d741ab771992d5f32286f60d4a",
      "userType": 1,
      "sign": "77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c"
}'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="b-引用本地原始数据发布元数据" tabindex="-1"><a class="header-anchor" href="#b-引用本地原始数据发布元数据" aria-hidden="true">#</a> <strong>（b）引用本地原始数据发布元数据</strong></h4>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
      <span class="token property">"metadataId"</span><span class="token operator">:</span> <span class="token string">"metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"</span><span class="token punctuation">,</span>
      <span class="token property">"metadataName"</span><span class="token operator">:</span> <span class="token string">"bank_predict_partyA"</span><span class="token punctuation">,</span>
      <span class="token property">"metadataType"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"dataHash"</span><span class="token operator">:</span> <span class="token string">"295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87"</span><span class="token punctuation">,</span>
      <span class="token property">"desc"</span><span class="token operator">:</span> <span class="token string">"bank_predict_partyA"</span><span class="token punctuation">,</span>
      <span class="token property">"locationType"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"dataType"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"industry"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
      <span class="token property">"state"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">"metadataOption"</span><span class="token operator">:</span> <span class="token string">"{\"metadataColumns\":[{\"index\":1,\"type\":\"string\",\"size\":0,\"name\":\"CLIENT_ID\"},{\"index\":2,\"type\":\"string\",\"size\":0,\"name\":\"DEFAULT\"},{\"index\":3,\"type\":\"string\",\"size\":0,\"name\":\"HOUSING\"},{\"index\":4,\"type\":\"string\",\"size\":0,\"name\":\"LOAN\"},{\"index\":5,\"type\":\"string\",\"size\":0,\"name\":\"CONTACT\"},{\"index\":6,\"type\":\"string\",\"size\":0,\"name\":\"CAMPAIGN\"},{\"index\":7,\"type\":\"string\",\"size\":0,\"name\":\"PDAYS\"},{\"index\":8,\"type\":\"string\",\"size\":0,\"name\":\"PREVIOUS\"},{\"index\":9,\"type\":\"string\",\"size\":0,\"name\":\"EURIBOR3M\"},{\"index\":10,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_APR\"},{\"index\":11,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_AUG\"},{\"index\":12,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_DEC\"},{\"index\":13,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUL\"},{\"index\":14,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUN\"},{\"index\":15,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAR\"},{\"index\":16,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAY\"},{\"index\":17,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_NOV\"},{\"index\":18,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_OCT\"},{\"index\":19,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_SEP\"},{\"index\":20,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_FRI\"},{\"index\":21,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_MON\"},{\"index\":22,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_THU\"},{\"index\":23,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_TUE\"},{\"index\":24,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_WED\"},{\"index\":25,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_FAILURE\"},{\"index\":26,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_NONEXISTENT\"},{\"index\":27,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_SUCCESS\"}],\"columns\":27,\"rows\":7925,\"consumeOptions\":[],\"dataPath\":\"/home/user1/data/data_root/bank_predict_partyA_20220818-062409.csv\",\"condition\":3,\"originId\":\"07ac869b639a4a810caa3d23cc1a3872109b0258f8da9ff13046f9fbee048c21\",\"size\":609112,\"consumeTypes\":[],\"hasTitle\":true}"</span><span class="token punctuation">,</span>
      <span class="token property">"user"</span><span class="token operator">:</span> <span class="token string">"0x7e336d121679e9d741ab771992d5f32286f60d4a"</span><span class="token punctuation">,</span>
      <span class="token property">"userType"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"sign"</span><span class="token operator">:</span> <span class="token string">"77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
      <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"originId"</span><span class="token operator">:</span> <span class="token string">"0xdadad...454545"</span><span class="token punctuation">,</span>
        <span class="token property">"metadataId"</span><span class="token operator">:</span> <span class="token string">"metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"OK"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--location</span> <span class="token parameter variable">--request</span> POST <span class="token string">'https://datum.io/api/v2/metadat/publishMetadataWithLocalDdata'</span> <span class="token punctuation">\</span>
<span class="token parameter variable">--header</span> <span class="token string">'Content-Type: application/json'</span> <span class="token punctuation">\</span>
--data-raw <span class="token string">'{
      "metadataId": "metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646",
      "metadataName": "bank_predict_partyA",
      "metadataType": 1,
      "dataHash": "295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87",
      "desc": "bank_predict_partyA",
      "locationType": 1,
      "dataType": 1,
      "industry": "1",
      "state": 2,
      "metadataOption": "{\"metadataColumns\":[{\"index\":1,\"type\":\"string\",\"size\":0,\"name\":\"CLIENT_ID\"},{\"index\":2,\"type\":\"string\",\"size\":0,\"name\":\"DEFAULT\"},{\"index\":3,\"type\":\"string\",\"size\":0,\"name\":\"HOUSING\"},{\"index\":4,\"type\":\"string\",\"size\":0,\"name\":\"LOAN\"},{\"index\":5,\"type\":\"string\",\"size\":0,\"name\":\"CONTACT\"},{\"index\":6,\"type\":\"string\",\"size\":0,\"name\":\"CAMPAIGN\"},{\"index\":7,\"type\":\"string\",\"size\":0,\"name\":\"PDAYS\"},{\"index\":8,\"type\":\"string\",\"size\":0,\"name\":\"PREVIOUS\"},{\"index\":9,\"type\":\"string\",\"size\":0,\"name\":\"EURIBOR3M\"},{\"index\":10,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_APR\"},{\"index\":11,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_AUG\"},{\"index\":12,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_DEC\"},{\"index\":13,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUL\"},{\"index\":14,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUN\"},{\"index\":15,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAR\"},{\"index\":16,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAY\"},{\"index\":17,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_NOV\"},{\"index\":18,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_OCT\"},{\"index\":19,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_SEP\"},{\"index\":20,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_FRI\"},{\"index\":21,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_MON\"},{\"index\":22,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_THU\"},{\"index\":23,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_TUE\"},{\"index\":24,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_WED\"},{\"index\":25,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_FAILURE\"},{\"index\":26,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_NONEXISTENT\"},{\"index\":27,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_SUCCESS\"}],\"columns\":27,\"rows\":7925,\"consumeOptions\":[],\"dataPath\":\"/home/user1/data/data_root/bank_predict_partyA_20220818-062409.csv\",\"condition\":3,\"originId\":\"07ac869b639a4a810caa3d23cc1a3872109b0258f8da9ff13046f9fbee048c21\",\"size\":609112,\"consumeTypes\":[],\"hasTitle\":true}",
      "user": "0x7e336d121679e9d741ab771992d5f32286f60d4a",
      "userType": 1,
      "sign": "77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c"
}'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发布数据hash" tabindex="-1"><a class="header-anchor" href="#发布数据hash" aria-hidden="true">#</a> 发布数据Hash</h3>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
      <span class="token property">"dataHash"</span><span class="token operator">:</span> <span class="token string">"295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87"</span><span class="token punctuation">,</span>
      <span class="token property">"desc"</span><span class="token operator">:</span> <span class="token string">"bank_predict_partyA"</span><span class="token punctuation">,</span>
      <span class="token property">"user"</span><span class="token operator">:</span> <span class="token string">"0x7e336d121679e9d741ab771992d5f32286f60d4a"</span><span class="token punctuation">,</span>
      <span class="token property">"userType"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"sign"</span><span class="token operator">:</span> <span class="token string">"77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
      <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token property">"result"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"OK"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--location</span> <span class="token parameter variable">--request</span> POST <span class="token string">'https://datum.io/api/v2/metadat/publishDataHash'</span> <span class="token punctuation">\</span>
<span class="token parameter variable">--header</span> <span class="token string">'Content-Type: application/json'</span> <span class="token punctuation">\</span>
--data-raw <span class="token string">'{
      "dataHash": "295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87",
      "desc": "bank_predict_partyA",
      "user": "0x7e336d121679e9d741ab771992d5f32286f60d4a",
      "userType": 1,
      "sign": "77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c"
}'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>补充</strong></p>
<h4 id="storageoption值说明" tabindex="-1"><a class="header-anchor" href="#storageoption值说明" aria-hidden="true">#</a> <span id="storageOption值说明"> storageOption值说明： </span></h4>
<ul>
<li>
<p>storageType： 0</p>
</li>
<li>
<p>storageOption：</p>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>""
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>storageType： 1</p>
</li>
<li>
<p>storageOption：</p>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>"{
    "cloudType": 0    // 0: 使用Datum默认的方式存储； 1: 使用Datum提供的阿里云存储； 2: 使用Datum提供的腾讯云存储；...
  }"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>storageType： 2</p>
</li>
<li>
<p>storageOption：</p>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>""
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>storageType： 3</p>
</li>
<li>
<p>storageOption：</p>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>"{
    "chainType": 0 // 0: 使用Alaya存储； 1: 使用PlatON存储； 2: 使用Etheruem存储；...
  }"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


