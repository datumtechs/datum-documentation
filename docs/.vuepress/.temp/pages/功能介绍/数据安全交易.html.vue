<template><div><h1 id="数据安全交易" tabindex="-1"><a class="header-anchor" href="#数据安全交易" aria-hidden="true">#</a> 数据安全交易</h1>
<p>在Data NFT中附加可验证的各类凭证属性，结合代理重加密算法，实现数据访问授权、数据安全分享、所有权转移等功能。 通过Data Token实现数据交易的清结算。</p>
<h2 id="基于token属性的鉴权访问" tabindex="-1"><a class="header-anchor" href="#基于token属性的鉴权访问" aria-hidden="true">#</a> 基于Token属性的鉴权访问</h2>
<p>用户在发起数据访问请求时，服务通过用户持有的Token进行鉴权，判断用户是否可以查看元数据或原数据；Token属性包含了对数据的访问权限，服务通过Token属性即可判断用户的访问请求是否合法。</p>
<h2 id="基于token属性的安全分享" tabindex="-1"><a class="header-anchor" href="#基于token属性的安全分享" aria-hidden="true">#</a> 基于Token属性的安全分享</h2>
<p>Token属性还包含了对数据的操作权限，如使用权，所有权等等；用户可以通过购买Token获得数据的所有权，然后通过拥有所有权的Token下载原数据；服务在收到下载原数据请求时，会通过Token属性中的操作权限判断用户的操作请求是否合法。</p>
<h2 id="token使用后的结算处理" tabindex="-1"><a class="header-anchor" href="#token使用后的结算处理" aria-hidden="true">#</a> Token使用后的结算处理</h2>
<p>用户在使用Token完成对数据的操作后，服务会进行确认Token的使用，然后修改Token的操作属性并上链，如：修改使用后的Token的操作次数，或设置为冻结/销毁状态，此类属性都将作为是否有操作权限的判定标准。</p>
<h2 id="使用流程" tabindex="-1"><a class="header-anchor" href="#使用流程" aria-hidden="true">#</a> 使用流程</h2>
<ul>
<li>
<p>图示</p>
<p><img src="@source/img/data_security_transaction.png" alt=""></p>
</li>
<li>
<p>概述</p>
<ul>
<li>
<p>调用元数据查看api，即可获得对于NFT的元数据详情，用户通过元数据详情决定要不要购买NFT；</p>
</li>
<li>
<p>用户通过NFT交易市场购买NFT；</p>
</li>
<li>
<p>对于托管存储的原数据（数据存储方式用户可以根据元数据详情中获取），用户需要申请授权访问明文数据权限，获得解密密钥；</p>
</li>
<li>
<p>用户调用原数据查看或下载api对原数据进行访问；</p>
</li>
<li>
<p>对于托管存储的原数据，需要使用解密密钥进行解密，获得明文数据；</p>
</li>
<li>
<p>完成数据交易后，会通过用户持有的Data Token进行清结算操作；</p>
</li>
</ul>
</li>
</ul>
<h2 id="详细的api使用说明-请参考数据安全交易api说明" tabindex="-1"><a class="header-anchor" href="#详细的api使用说明-请参考数据安全交易api说明" aria-hidden="true">#</a> 详细的API使用说明，请参考<RouterLink to="/API%E8%AF%B4%E6%98%8E/%E6%95%B0%E6%8D%AE%E5%AE%89%E5%85%A8%E4%BA%A4%E6%98%93.html">数据安全交易API说明</RouterLink></h2>
</div></template>


