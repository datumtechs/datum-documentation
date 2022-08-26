<template><div><p>原始数据传输指的是datum为用户提供了一系列API服务，用户可以使用这些API将自己的数据交由datum进行托管流入Web3中。</p>
<h3 id="为什么使用原始数据传输" tabindex="-1"><a class="header-anchor" href="#为什么使用原始数据传输" aria-hidden="true">#</a> 为什么使用原始数据传输?</h3>
<p>使用原始数据传输可以将自己的原始数据交由datum进行可信托管，方便其他有需要的用户检索，并做进一步的查看和使用，是的用户的原始数据在可信的环境下流动起来。另外，通过datum的api用户让自己的原始数据进入Web3世界发挥流动价值。</p>
<h3 id="原始数据传输提供什么" tabindex="-1"><a class="header-anchor" href="#原始数据传输提供什么" aria-hidden="true">#</a> 原始数据传输提供什么？</h3>
<ul>
<li>可信的数据托管环境</li>
<li>一键托管数据</li>
<li>数据上云</li>
<li>数据上链</li>
</ul>
<h3 id="原始数据传输支持哪些存储" tabindex="-1"><a class="header-anchor" href="#原始数据传输支持哪些存储" aria-hidden="true">#</a> 原始数据传输支持哪些存储？</h3>
<ul>
<li>用户自行存储原始数据，给datum托管原始数据的元数据或原始数据Hash</li>
<li>本地存储</li>
<li>云存储</li>
<li>区块链存储</li>
</ul>
<h3 id="原始数据传输支持哪些链" tabindex="-1"><a class="header-anchor" href="#原始数据传输支持哪些链" aria-hidden="true">#</a> 原始数据传输支持哪些链？</h3>
<ul>
<li>PlatON</li>
<li>Ethereum</li>
<li>IPFS</li>
<li>....</li>
</ul>
<h3 id="数据存储" tabindex="-1"><a class="header-anchor" href="#数据存储" aria-hidden="true">#</a> 数据存储</h3>
<h4 id="本地存储" tabindex="-1"><a class="header-anchor" href="#本地存储" aria-hidden="true">#</a> 本地存储</h4>
<h6 id="流程说明" tabindex="-1"><a class="header-anchor" href="#流程说明" aria-hidden="true">#</a> 流程说明</h6>
<p>将自己本地的原始数据上传到datum，并选择datum提供的服务器本地存储能力保存原始数据。</p>
<h6 id="接口说明-api" tabindex="-1"><a class="header-anchor" href="#接口说明-api" aria-hidden="true">#</a> 接口说明（API）</h6>
<h4 id="云存储" tabindex="-1"><a class="header-anchor" href="#云存储" aria-hidden="true">#</a> 云存储</h4>
<h6 id="流程说明-1" tabindex="-1"><a class="header-anchor" href="#流程说明-1" aria-hidden="true">#</a> 流程说明</h6>
<p>将自己本地的原始数据上传到datum，并选择datum提供的云服务器存储能力保存原始数据。</p>
<h6 id="接口说明-api-1" tabindex="-1"><a class="header-anchor" href="#接口说明-api-1" aria-hidden="true">#</a> 接口说明（API）</h6>
<h4 id="ipfs存储" tabindex="-1"><a class="header-anchor" href="#ipfs存储" aria-hidden="true">#</a> IPFS存储</h4>
<h6 id="流程说明-2" tabindex="-1"><a class="header-anchor" href="#流程说明-2" aria-hidden="true">#</a> 流程说明</h6>
<p>将自己本地的原始数据通过datum选择IPFS存储选项上传到IPFS。</p>
<h6 id="接口说明-api-2" tabindex="-1"><a class="header-anchor" href="#接口说明-api-2" aria-hidden="true">#</a> 接口说明（API）</h6>
<h4 id="第三方代理重加密-proxy-re-encryption-存储" tabindex="-1"><a class="header-anchor" href="#第三方代理重加密-proxy-re-encryption-存储" aria-hidden="true">#</a> 第三方代理重加密[Proxy Re-Encryption]存储</h4>
<h6 id="流程说明-3" tabindex="-1"><a class="header-anchor" href="#流程说明-3" aria-hidden="true">#</a> 流程说明</h6>
<p>将自己本地的（密文）原始数据上传到datum提供的各类存储源上（本质是数据加密共享）。</p>
<h6 id="接口说明-api-3" tabindex="-1"><a class="header-anchor" href="#接口说明-api-3" aria-hidden="true">#</a> 接口说明（API）</h6>
<h3 id="数据上链" tabindex="-1"><a class="header-anchor" href="#数据上链" aria-hidden="true">#</a> 数据上链</h3>
<h4 id="用户的原始数据直接上链" tabindex="-1"><a class="header-anchor" href="#用户的原始数据直接上链" aria-hidden="true">#</a> 用户的原始数据直接上链</h4>
<h6 id="流程说明-4" tabindex="-1"><a class="header-anchor" href="#流程说明-4" aria-hidden="true">#</a> 流程说明</h6>
<p>将自己本地的原始数据通过datum选择datum官方所支持的区块链进行上链存储。</p>
<h6 id="接口说明-api-4" tabindex="-1"><a class="header-anchor" href="#接口说明-api-4" aria-hidden="true">#</a> 接口说明（API）</h6>
<h4 id="数据hash上链" tabindex="-1"><a class="header-anchor" href="#数据hash上链" aria-hidden="true">#</a> 数据Hash上链</h4>
<h6 id="流程说明-5" tabindex="-1"><a class="header-anchor" href="#流程说明-5" aria-hidden="true">#</a> 流程说明</h6>
<p>将自己本地的原始数据的Hash通过datum选择datum官方所支持的区块链进行上链存储。</p>
<h6 id="接口说明-api-5" tabindex="-1"><a class="header-anchor" href="#接口说明-api-5" aria-hidden="true">#</a> 接口说明（API）</h6>
<h3 id="发布元数据" tabindex="-1"><a class="header-anchor" href="#发布元数据" aria-hidden="true">#</a> 发布元数据</h3>
<h4 id="发布基于原始数据的元数据" tabindex="-1"><a class="header-anchor" href="#发布基于原始数据的元数据" aria-hidden="true">#</a> 发布基于原始数据的元数据</h4>
<h6 id="流程说明-6" tabindex="-1"><a class="header-anchor" href="#流程说明-6" aria-hidden="true">#</a> 流程说明</h6>
<p>选择自己上传到datum的原始数据进行元数据选择datum官方所支持的区块链发布链上。</p>
<h6 id="接口说明-api-6" tabindex="-1"><a class="header-anchor" href="#接口说明-api-6" aria-hidden="true">#</a> 接口说明（API）</h6>
<h4 id="发布基于用户存储在自己的本地数据的元数据" tabindex="-1"><a class="header-anchor" href="#发布基于用户存储在自己的本地数据的元数据" aria-hidden="true">#</a> 发布基于用户存储在自己的本地数据的元数据</h4>
<h6 id="流程说明-7" tabindex="-1"><a class="header-anchor" href="#流程说明-7" aria-hidden="true">#</a> 流程说明</h6>
<p>选择自己本地原始数据生成元数据选择datum官方所支持的区块链发布链上。</p>
<h6 id="接口说明-api-7" tabindex="-1"><a class="header-anchor" href="#接口说明-api-7" aria-hidden="true">#</a> 接口说明（API）</h6>
</div></template>


