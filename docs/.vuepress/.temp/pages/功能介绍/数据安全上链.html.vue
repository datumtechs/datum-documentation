<template><div><h1 id="数据安全上链介绍" tabindex="-1"><a class="header-anchor" href="#数据安全上链介绍" aria-hidden="true">#</a> 数据安全上链介绍</h1>
<h2 id="什么是数据安全上链" tabindex="-1"><a class="header-anchor" href="#什么是数据安全上链" aria-hidden="true">#</a> 什么是数据安全上链？</h2>
<p>数据安全上链本质上是Datum为用户提供引流数据从web2进入web3的生命周期起点。数据可通过Datum由用户自定义存储方式存储到IPFS、Arweave等去中心化存储以及AWS、Azure、GCP等云存储上，最终由Datum将数据流转到web3世界中。Datum提供一系列服务API，使用户能以合适的方式传输、存管数据并将数据Hash上链。Datum将作为服务商为用户提供数据传输、存管环节的各类解决方案，包括：原始数据对接、数据传输、数据存储管理。并作为可信任的存管服务商，使用户能够方便的实现web3模式下的数据资产化、数据检索、数据使用、数据预言机等服务。</p>
<h2 id="支持的传输和存管模式" tabindex="-1"><a class="header-anchor" href="#支持的传输和存管模式" aria-hidden="true">#</a> 支持的传输和存管模式</h2>
<ul>
<li>数据安全存管：支持AWS、Azure、GCP等云存储集中存储、IPFS、Arweave等去中心化存储</li>
<li>数据安全上链：数据Hash上链存管、元数据发布链上</li>
<li>数据一致性校验：提供链上Hash和存管的原始数据一致性校验</li>
</ul>
<h2 id="数据安全上链存管原理" tabindex="-1"><a class="header-anchor" href="#数据安全上链存管原理" aria-hidden="true">#</a> 数据安全上链存管原理</h2>
<p><img src="@source/img/data_safe_onchain.png" alt=""></p>
<h2 id="元数据发布" tabindex="-1"><a class="header-anchor" href="#元数据发布" aria-hidden="true">#</a> 元数据发布</h2>
<p>在数据通过Datum进入Web3世界后，如需要使得存储到IPFS、Arweave等去中心化存储以及AWS、Azure、GCP等云存储上的数据能被web3生态应用方检索到，但又不暴露所有数据原始信息，可以通过Datum对存管的数据进行元数据发布。元数据是对数据的特征的描述信息，通过元数据用户能在未泄露数据的原始内容前提下将自己的数据特征展现给应用方，方便应用方做数据使用前对数据内容的判断。</p>
<h2 id="发布元数据原理" tabindex="-1"><a class="header-anchor" href="#发布元数据原理" aria-hidden="true">#</a> 发布元数据原理</h2>
<p><img src="@source/img/publish_metadata.png" alt=""></p>
<h2 id="详细的api使用说明-请参考数据安全上链api说明" tabindex="-1"><a class="header-anchor" href="#详细的api使用说明-请参考数据安全上链api说明" aria-hidden="true">#</a> 详细的API使用说明，请参考<RouterLink to="/API%E8%AF%B4%E6%98%8E/%E6%95%B0%E6%8D%AE%E5%AE%89%E5%85%A8%E4%B8%8A%E9%93%BE.html">数据安全上链API说明</RouterLink></h2>
</div></template>


