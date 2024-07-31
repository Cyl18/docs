import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.H5mczSy9.js";const c=JSON.parse('{"title":"v0.14.0 版本新增特性","description":"","frontmatter":{},"headers":[],"relativePath":"old/ruyi/updates/0.14.0.md","filePath":"old/ruyi/updates/0.14.0.md","lastUpdated":1722415340000}'),h={name:"old/ruyi/updates/0.14.0.md"},p=n(`<h1 id="v0-14-0-版本新增特性" tabindex="-1">v0.14.0 版本新增特性 <a class="header-anchor" href="#v0-14-0-版本新增特性" aria-label="Permalink to &quot;v0.14.0 版本新增特性&quot;">​</a></h1><ul><li>新增 box64-upstream 模拟器包</li><li>新增 wps-office 支持</li></ul><h2 id="安装-v0-14-0" tabindex="-1">安装 v0.14.0 <a class="header-anchor" href="#安装-v0-14-0" aria-label="Permalink to &quot;安装 v0.14.0&quot;">​</a></h2><p>在 amd64 架构环境安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.14.0/ruyi.amd64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.amd64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.amd64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/ruyi</span></span></code></pre></div><p>在 riscv64 架构环境安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.14.0/ruyi.riscv64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.riscv64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.riscv64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/ruyi</span></span></code></pre></div><p>在 arm64 架构环境安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.14.0/ruyi.arm64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.arm64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.arm64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/ruyi</span></span></code></pre></div><p>检查安装版本：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Ruyi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.14.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Running</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linux/x86_64.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Copyright</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (C) 2023 Institute of Software, Chinese Academy of Sciences (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ISCAS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">All</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rights</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reserved.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">License:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apache-2.0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://www.apache.org/licenses/LICENSE-2.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">0&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">This</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> makes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> code</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> licensed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> under</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Mozilla</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Public</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">License</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (https://mozilla.org/MPL/2.0/). You can get the respective</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">project</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;s sources from the project&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> official</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> website:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> certifi: https://github.com/certifi/python-certifi</span></span></code></pre></div><h2 id="新增-box64-upstream-模拟器包" tabindex="-1">新增 box64-upstream 模拟器包 <a class="header-anchor" href="#新增-box64-upstream-模拟器包" aria-label="Permalink to &quot;新增 box64-upstream 模拟器包&quot;">​</a></h2><p>从 <code>ruyi list</code> 可以看到新增的 box64-upstream 软件包。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> emulator/box64-upstream</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0.2.9-pre.ruyi.20240702+git.4b0b3fc9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (prerelease, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">latest-prerelease</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0.2.8-ruyi.20240702</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (latest)</span></span></code></pre></div><p>由于上游 0.2.9 版本尚未发布，而 0.2.9 包含了众多重要的修复，故提供了 0.2.9 的主线快照版本，且推荐安装该版本。</p><p>编辑配置文件 <code>~/.config/ruyi/config.toml</code> 以允许安装预发布版本的软件包：</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">packages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prereleases = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><h2 id="新增-wps-office-支持" tabindex="-1">新增 wps-office 支持 <a class="header-anchor" href="#新增-wps-office-支持" aria-label="Permalink to &quot;新增 wps-office 支持&quot;">​</a></h2><p>注意， box64-upstream 0.2.8 版本无法正常运行 WPS 办公套件。</p><p>注意，该支持当前已知在 RevyOS 和 openEuler RISC-V 23.09 独立发行版本通过验证，在 BPI-F3 Bianbu 验证失败。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> box64-upstream</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> downloading</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/dist/box64-upstream-0.2.9-pre.ruyi.20240702+git.4b0b3fc9.riscv64.tar.zst</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span></span></code></pre></div><p>由于 WPS 套件使用了一个启动 Bash 脚本，最简单的复用该脚本的方式便是采用 binfmt_misc 机制。若不希望配置 binfmt_misc 或系统不支持，同样也可以手动启动。</p><p>若希望配置 binfmt_misc，则首先确认 box64 二进制位置。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.local/share/ruyi/binaries/riscv64/box64-upstream-0.2.9-pre.ruyi.20240702+git.4b0b3fc9/bin/box64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> realpath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.local/share/ruyi/binaries/riscv64/box64-upstream-0.2.9-pre.ruyi.20240702+git.4b0b3fc9/bin/box64</span></span></code></pre></div><p>使用文本编辑器编辑 binfmt_misc 配置文件，将行尾的 <code>//bin/box64</code> 改为先前验证过的绝对路径。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nano</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.local/share/ruyi/binaries/riscv64/box64-upstream-0.2.8-ruyi.20240702/etc/binfmt.d/box64.conf</span></span></code></pre></div><p>部署配置并使其生效。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.local/share/ruyi/binaries/riscv64/box64-upstream-0.2.8-ruyi.20240702/etc/binfmt.d/box64.conf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/binfmt.d/box64.conf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemd-binfmt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc/sys/fs/binfmt_misc/box64</span></span></code></pre></div><p>注意，如果系统中已经配置过 QEMU linux-user 等其他的 x86_64 模拟机制，则需要保证 box64 被默认采用，否则 WPS 套件的启动脚本将依然无法正常工作。</p><p>安装 x86 sysroot，补全 WPS 套件运行所需的 x86_64 动态链接库。注意这里提供的 sysroot 链接为临时性链接，后续待本功能迭代稳定之后，操作方式将改变，此链接也将失效。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pushd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/Downloads</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/dist/temp/debian-bookworm.gui.20240705.amd64.tar.zst</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/debian-bookworm.amd64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/debian-bookworm.amd64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/Downloads/debian-bookworm.gui.20240705.amd64.tar.zst</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> popd</span></span></code></pre></div><p>安装 x86_64 架构的 WPS Office 软件包。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --host</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x86_64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wps-office</span></span></code></pre></div><p>该命令将打印提示信息，需要根据提示手动下载 wps-office 发布的 deb 软件包。</p><p>注意在 locale 配置为 en_US.UTF-8 和 zh_CN.UTF-8 以外的环境下当前版本 ruyi 包管理器该命令会失败。</p><p>注意当前版本只支持 11.1.0.11719 版本的 WPS，包名应为 wps-office_11.1.0.11719_amd64.deb。</p><p>调整 WPS Office 启动脚本。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pushd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.local/share/ruyi/binaries/x86_64/wps-office-11.1.0-r.11719</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;s@gInstallPath=/@gInstallPath=$(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pwd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)/@&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./usr/bin/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> popd</span></span></code></pre></div><p>运行 WPS Office。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> export</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> BOX64_EMULATED_LIBS=libsqlite3.so.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> export</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> BOX64_LD_LIBRARY_PATH=/opt/debian-bookworm.amd64/usr/lib/x86_64-linux-gnu</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.local/share/ruyi/binaries/x86_64/wps-office-11.1.0-r.11719/usr/bin/wps</span></span></code></pre></div><p>若运行失败，可以手动运行获取日志，这里给出 WPS 文字和 WPS 演示的运行命令。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.local/share/ruyi/binaries/riscv64/box64-upstream-0.2.9-pre.ruyi.20240702+git.4b0b3fc9/bin/box64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.local/share/ruyi/binaries/x86_64/wps-office-11.1.0-r.11719/opt/kingsoft/wps-office/office6/wps</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.local/share/ruyi/binaries/riscv64/box64-upstream-0.2.9-pre.ruyi.20240702+git.4b0b3fc9/bin/box64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.local/share/ruyi/binaries/x86_64/wps-office-11.1.0-r.11719/opt/kingsoft/wps-office/office6/wpp</span></span></code></pre></div><p>若您在 openEuler RISC-V 23.09 独立发行版本运行 wps-office 时遇到以下错误：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Error</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> initializing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> native</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libxkbcommon-x11.so.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (last </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">dlerror</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libxkbcommon-x11.so.0:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cannot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shared</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> object</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> No</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> such</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> directory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Error</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> loading</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> needed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lib</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libxkbcommon-x11.so.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Using</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> native</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wrapped</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">libxkbcommon.so.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Error</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> loading</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> one</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> needed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lib</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Error</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> initializing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> needed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lib</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/openeuler/.local/share/ruyi/binaries/x86_64/wps-office-11.1.0-r.11719/opt/kingsoft/wps-office/office6/qt/plugins/platforms/libqxcb.so</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">qt.qpa.plugin:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Could</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> load</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Qt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> platform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;xcb&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> even</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> though</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> was</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> found.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">This</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> application</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> failed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> because</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Qt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> platform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> could</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> initialized.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Reinstalling</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> application</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> may</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> problem.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Available</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> platform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugins</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> are:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xcb.</span></span></code></pre></div><p>请手动安装 libxkbcommon-x11 软件包。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dnf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libxkbcommon-x11</span></span></code></pre></div><p>若 WPS 官网版本已经更新，可能无法从官网下载页面下载到历史版本，可以参考下一节内容。</p><h2 id="wps-office-版本下载参考" tabindex="-1">WPS Office 版本下载参考 <a class="header-anchor" href="#wps-office-版本下载参考" aria-label="Permalink to &quot;WPS Office 版本下载参考&quot;">​</a></h2><p>若希望以 wget 或 curl 的方式下载 WPS Office，这里给出两种方法供参考。</p><ol><li>使用优麒麟二次分发的 deb 包 <a href="https://archive.ubuntukylin.com/ubuntukylin/pool/partner/wps-office_11.1.0.11719_amd64.deb" target="_blank" rel="noreferrer">https://archive.ubuntukylin.com/ubuntukylin/pool/partner/wps-office_11.1.0.11719_amd64.deb</a></li><li>参考 AUR wps-office-cn PKGBUILD 中的 <a href="https://aur.archlinux.org/cgit/aur.git/tree/PKGBUILD?h=wps-office-cn&amp;id=da5958b5179c1345d24840ea30803a8d52c8d0c6#n21" target="_blank" rel="noreferrer">_get_source_url</a> 函数</li></ol>`,50),t=[p];function l(k,e,F,r,d,g){return a(),i("div",null,t)}const y=s(h,[["render",l]]);export{c as __pageData,y as default};
