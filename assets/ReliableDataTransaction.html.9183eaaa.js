import{_ as s,o as r,c as i,b as e,e as o,a as n,d as a,r as c}from"../app.4a7976c2.mjs";const d="/datum-documentation/assets/data_security_transaction.f76344b8.png",l={},h=n('<h1 id="reliable-data-transaction" tabindex="-1"><a class="header-anchor" href="#reliable-data-transaction" aria-hidden="true">#</a> Reliable Data Transaction</h1><p>Datum attaches various verifiable credential properties to Data NFTs and leverages proxy re-encryption algorithms to offer such functions as authorization for data access, secure data sharing, and ownership transfer. The platform achieves the settlement of data transactions via Data Tokens.</p><h2 id="supported-data-security-transaction-modes" tabindex="-1"><a class="header-anchor" href="#supported-data-security-transaction-modes" aria-hidden="true">#</a> Supported Data Security Transaction Modes</h2><ul><li>Authorized access based on token properties: Verify data access rights and legality</li><li>Secure sharing based on token properties: Control how data is used</li><li>Settlement operations after token usage: Evidence after data use and easy audit</li></ul><h2 id="usage-process" tabindex="-1"><a class="header-anchor" href="#usage-process" aria-hidden="true">#</a> Usage Process</h2><ul><li><p>Diagram</p><p><img src="'+d+'" alt=""></p></li><li><p>Summary</p><ul><li>The user calls the API for viewing metadata to obtain the specific metadata of the NFT, which helps him decide whether to make the purchase;</li><li>The user buys the NFT through the NFT marketplace;</li><li>If the raw data is stored through entrusted storage (the specific storage method is specified in the metadata), the user will need to apply for permission to access the plaintext data and acquire the decryption key;</li><li>The user calls the API for viewing or downloading the raw data to access the raw data;</li><li>If the raw data is stored through entrusted storage, the user will need to decrypt the data using the decryption key to obtain the plaintext data;</li><li>Once the data transaction is completed, the user&#39;s Data Token will be processed accordingly (burned).</li></ul></li></ul>',6),u={id:"please-refer-to-apis-for-reliable-data-transaction-api-desc-for-more-specific-user-instructions",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#please-refer-to-apis-for-reliable-data-transaction-api-desc-for-more-specific-user-instructions","aria-hidden":"true"},"#",-1),f=a(),m=a("Please refer to [APIs for Reliable Data Transaction](api desc) for more specific user instructions");function _(g,b){const t=c("RouterLink");return r(),i("div",null,[h,e("h2",u,[p,f,o(t,{to:"/en/APIDescription/ReliableDataTransaction.html"}),m])])}const T=s(l,[["render",_],["__file","ReliableDataTransaction.html.vue"]]);export{T as default};
