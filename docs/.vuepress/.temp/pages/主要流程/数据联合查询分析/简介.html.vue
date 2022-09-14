<template><div><h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1>
<p>数据联合查询分析模块提供了一系列API服务，可使用已资产化的数据进行联合计算。</p>
<p><strong>为什么使用本部分API？</strong></p>
<p>数据联合查询分析可以帮助用户更方便、安全、快速地执行联合计算，因为：</p>
<ul>
<li>本模块api集成了常见的联合计算场景，如联合查询、联合统计分析、联合模型训练和预测</li>
<li>开发者无需过多了解各种算法的实现细节，可直接调用，降低了使用门槛。</li>
</ul>
<p><strong>本部分API支持哪些联合计算？</strong></p>
<ul>
<li>
<p>两方数据合作</p>
<ul>
<li>
<p>隐私匹配</p>
</li>
<li>
<p>隐私标签查询</p>
</li>
<li>
<p>隐私SQL查询</p>
</li>
</ul>
</li>
<li>
<p>多方数据协作</p>
<ul>
<li>
<p>联合统计分析</p>
</li>
<li>
<p>联合模型训练</p>
</li>
<li>
<p>联合模型预测</p>
</li>
</ul>
</li>
</ul>
<p><strong>本部分API使用了哪些框架及技术？</strong></p>
<ul>
<li>隐私匹配使用了隐私求交集技术（Private Set Intersection），支持DH和HE两种算法实现。</li>
<li>隐私标签查询使用了基于标签的隐私求交集技术（Labeled Private Set Intersection），支持DH和HE两种算法实现。</li>
<li>联合统计分析、联合模型训练、联合模型预测使用了隐私AI框架Rosetta，它是基于Tensorflow的隐私AI框架，承载和结合AI、隐私AI和区块链三种典型的技术，大大降低了AI开发者的门槛，让AI开发者在对隐私AI技术没有深入了解的情况下，只需要改动两三行代码即可实现将现有AI代码转换为具备数据隐私保护功能的程序。</li>
</ul>
</div></template>


