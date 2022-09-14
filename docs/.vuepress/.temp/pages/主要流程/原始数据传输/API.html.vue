<template><div><h2 id="原始数据传输api" tabindex="-1"><a class="header-anchor" href="#原始数据传输api" aria-hidden="true">#</a> 原始数据传输API</h2>
<h4 id="原始数据上传-datum本地存储" tabindex="-1"><a class="header-anchor" href="#原始数据上传-datum本地存储" aria-hidden="true">#</a> 原始数据上传（datum本地存储）</h4>
<h6 id="流程说明" tabindex="-1"><a class="header-anchor" href="#流程说明" aria-hidden="true">#</a> 流程说明</h6>
<p>将自己本地的原始数据上传到datum，并选择datum提供的服务器本地存储能力保存原始数据。</p>
<h6 id="接口说明-api" tabindex="-1"><a class="header-anchor" href="#接口说明-api" aria-hidden="true">#</a> 接口说明（API）</h6>
<h4 id="原始数据上传-云存储" tabindex="-1"><a class="header-anchor" href="#原始数据上传-云存储" aria-hidden="true">#</a> 原始数据上传（云存储）</h4>
<h6 id="流程说明-1" tabindex="-1"><a class="header-anchor" href="#流程说明-1" aria-hidden="true">#</a> 流程说明</h6>
<p>将自己本地的原始数据上传到datum，并选择datum提供的云服务器存储能力保存原始数据。</p>
<h6 id="接口说明-api-1" tabindex="-1"><a class="header-anchor" href="#接口说明-api-1" aria-hidden="true">#</a> 接口说明（API）</h6>
<h4 id="原始数据上传-ipfs存储" tabindex="-1"><a class="header-anchor" href="#原始数据上传-ipfs存储" aria-hidden="true">#</a> 原始数据上传（IPFS存储）</h4>
<h6 id="流程说明-2" tabindex="-1"><a class="header-anchor" href="#流程说明-2" aria-hidden="true">#</a> 流程说明</h6>
<p>将自己本地的原始数据通过datum选择IPFS存储选项上传到IPFS。</p>
<h6 id="接口说明-api-2" tabindex="-1"><a class="header-anchor" href="#接口说明-api-2" aria-hidden="true">#</a> 接口说明（API）</h6>
<h4 id="原始数据上传-第三方代理重加密-proxy-re-encryption-存储" tabindex="-1"><a class="header-anchor" href="#原始数据上传-第三方代理重加密-proxy-re-encryption-存储" aria-hidden="true">#</a> 原始数据上传（第三方代理重加密[Proxy Re-Encryption]存储）</h4>
<h6 id="流程说明-3" tabindex="-1"><a class="header-anchor" href="#流程说明-3" aria-hidden="true">#</a> 流程说明</h6>
<p>将自己本地的（密文）原始数据上传到datum提供的各类存储源上（本质是数据加密共享）。</p>
<h6 id="接口说明-api-3" tabindex="-1"><a class="header-anchor" href="#接口说明-api-3" aria-hidden="true">#</a> 接口说明（API）</h6>
<h4 id="数据上链-用户的原始数据直接上链" tabindex="-1"><a class="header-anchor" href="#数据上链-用户的原始数据直接上链" aria-hidden="true">#</a> 数据上链（用户的原始数据直接上链）</h4>
<h6 id="流程说明-4" tabindex="-1"><a class="header-anchor" href="#流程说明-4" aria-hidden="true">#</a> 流程说明</h6>
<p>将自己本地的原始数据通过datum选择datum官方所支持的区块链进行上链存储。</p>
<h6 id="接口说明-api-4" tabindex="-1"><a class="header-anchor" href="#接口说明-api-4" aria-hidden="true">#</a> 接口说明（API）</h6>
<h4 id="数据hash链上发布-只发布hash信息" tabindex="-1"><a class="header-anchor" href="#数据hash链上发布-只发布hash信息" aria-hidden="true">#</a> 数据Hash链上发布 (只发布Hash信息)</h4>
<h6 id="流程说明-5" tabindex="-1"><a class="header-anchor" href="#流程说明-5" aria-hidden="true">#</a> 流程说明</h6>
<p>将自己本地的原始数据的Hash通过datum选择datum官方所支持的区块链进行上链存储。</p>
<h6 id="接口说明-api-5" tabindex="-1"><a class="header-anchor" href="#接口说明-api-5" aria-hidden="true">#</a> 接口说明（API）</h6>
<h4 id="元数据链上发布-发布基于原始数据的元数据" tabindex="-1"><a class="header-anchor" href="#元数据链上发布-发布基于原始数据的元数据" aria-hidden="true">#</a> 元数据链上发布（发布基于原始数据的元数据）</h4>
<h6 id="流程说明-6" tabindex="-1"><a class="header-anchor" href="#流程说明-6" aria-hidden="true">#</a> 流程说明</h6>
<p>选择自己上传到datum的原始数据进行元数据选择datum官方所支持的区块链发布链上。</p>
<h6 id="接口说明-api-6" tabindex="-1"><a class="header-anchor" href="#接口说明-api-6" aria-hidden="true">#</a> 接口说明（API）</h6>
<h4 id="元数据链上发布-发布基于用户存储在自己的本地数据的元数据" tabindex="-1"><a class="header-anchor" href="#元数据链上发布-发布基于用户存储在自己的本地数据的元数据" aria-hidden="true">#</a> 元数据链上发布（发布基于用户存储在自己的本地数据的元数据）</h4>
<h6 id="流程说明-7" tabindex="-1"><a class="header-anchor" href="#流程说明-7" aria-hidden="true">#</a> 流程说明</h6>
<p>选择自己本地原始数据生成元数据选择datum官方所支持的区块链发布链上。</p>
<h6 id="接口说明-api-7" tabindex="-1"><a class="header-anchor" href="#接口说明-api-7" aria-hidden="true">#</a> 接口说明（API）</h6>
</div></template>


