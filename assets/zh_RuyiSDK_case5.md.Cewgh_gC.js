import{_ as i,c as a,a2 as h,o as n}from"./chunks/framework.DxHMuem5.js";const g=JSON.parse('{"title":"使用 qemu 和 llvm","description":"","frontmatter":{},"headers":[],"relativePath":"zh/RuyiSDK/case5.md","filePath":"zh/RuyiSDK/case5.md","lastUpdated":1735794563000}'),k={name:"zh/RuyiSDK/case5.md"};function l(p,s,t,e,F,r){return n(),a("div",null,s[0]||(s[0]=[h(`<h1 id="使用-qemu-和-llvm" tabindex="-1">使用 qemu 和 llvm <a class="header-anchor" href="#使用-qemu-和-llvm" aria-label="Permalink to &quot;使用 qemu 和 llvm&quot;">​</a></h1><p>本案例基于 <a href="./case1.html">使用 gcc 编译 coremark</a></p><p>首先安装必要的依赖：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> llvm-upstream</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-plct</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu-user-riscv-upstream</span></span></code></pre></div><p>创建虚拟环境并激活：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> llvm-upstream</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --sysroot-from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-plct</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu-user-riscv-upstream</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generic</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv/bin/ruyi-activate</span></span></code></pre></div><p>解包出 coremark 并编译：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> milkv-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coremark</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> milkv-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coremark</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> milkv-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extract</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coremark</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> milkv-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/\\bgcc\\b/riscv64-unknown-linux-gnu-gcc/g&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linux64/core_portme.mak</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> milkv-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PORT_DIR=linux64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span></span></code></pre></div><p>这时通过 qemu 运行 coremark：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi-qemu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coremark.exe</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2K</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> performance</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> parameters</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coremark.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CoreMark</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Size</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 666</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Total</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ticks</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 19567</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Total</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (secs): 19.567000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Iterations/Sec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10221.290949</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Iterations</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Compiler</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GCCClang</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 17.0.5</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Compiler</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flags</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   -lrt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Memory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Please</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> put</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> memory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">e.g.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> code</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flash,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> heap</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> etc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">seedcrc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0xe9f5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[0]crclist       </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 0xe714</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[0]crcmatrix     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 0x1fd7</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[0]crcstate      </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 0x8e3a</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[0]crcfinal      </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 0x4983</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Correct</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> operation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> validated.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> See</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> readme.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reporting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rules.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CoreMark</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10221.290949</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GCCClang</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 17.0.5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   -lrt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Heap</span></span></code></pre></div>`,10)]))}const C=i(k,[["render",l]]);export{g as __pageData,C as default};