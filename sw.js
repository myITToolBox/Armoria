if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,a,c)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const i={uri:location.origin+r.slice(1)};return Promise.all(a.map((r=>{switch(r){case"exports":return s;case"module":return i;default:return e(r)}}))).then((e=>{const r=c(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-5d8f33f5"],(function(e){"use strict";e.setCacheNameDetails({prefix:"armoria"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"charges/anchor.svg",revision:"7a2ea139d277d4c5dbd879b78d6d5a68"},{url:"charges/armillarySphere.svg",revision:"abbddede794d39b955fb053435fa67e9"},{url:"charges/arrow.svg",revision:"00dd872944f35b673b4088de22bb0f08"},{url:"charges/arrowsSheaf.svg",revision:"aa076dcaaa3dff4843feaeb16e04c0b1"},{url:"charges/bearPassant.svg",revision:"ecc5fb4a82c54602bf66d3e1cd927f28"},{url:"charges/bearRampant.svg",revision:"988b44247e9ea2789634aad2c99e7d73"},{url:"charges/bell.svg",revision:"10bdabeac9f744073ad6d58a5b1b612f"},{url:"charges/boarRampant.svg",revision:"147568f4bcbb68648a4eea5536de8ad6"},{url:"charges/boat.svg",revision:"a742b25ec22fb946dbc6d86ceceb470c"},{url:"charges/bow.svg",revision:"ea382fa79ea4749043f6d56e0ed0e563"},{url:"charges/bowWithArrow.svg",revision:"67e414cb0cb47eb05b6cc49509b8b0cb"},{url:"charges/buckle.svg",revision:"48527e8d180313063a04f09311042493"},{url:"charges/bugleHorn.svg",revision:"35d970cf706d3b4a2fe9e07635d2befb"},{url:"charges/bullHeadCaboshed.svg",revision:"513fbd3f938b1176655309d7f45bf194"},{url:"charges/bullPassant.svg",revision:"53d4f523e3aac0522ff52391757e7c2e"},{url:"charges/cancer.svg",revision:"b1dbb95f4824c74f06a7ea5b8281146a"},{url:"charges/castle.svg",revision:"ad67efa344fc7cf6ee7c91c752dab3ff"},{url:"charges/chalice.svg",revision:"d57a5bd61e70dccb363d274d5a68f2a0"},{url:"charges/cinquefoil.svg",revision:"971c7133572d723aa32b136ee075d3ab"},{url:"charges/cock.svg",revision:"cf2f67041e55ad8173568ef996a97884"},{url:"charges/compassRose.svg",revision:"fe9bf4d7798ce0b0637cdd11a706752f"},{url:"charges/cowHorns.svg",revision:"a184ce809790aaf73ba38ac6318f6bc5"},{url:"charges/crescent.svg",revision:"68f633a7dffecefef0ab10040481b2b5"},{url:"charges/crosier.svg",revision:"d7b333e771ff49a51ee5ea9a43662d25"},{url:"charges/crown.svg",revision:"f2e647fbdab6074d712024c676f07e04"},{url:"charges/deerHeadCaboshed.svg",revision:"c35557be54d474f238510f288ebae8b6"},{url:"charges/dolphin.svg",revision:"ff2cb0d1e7fe67f4da2870f4f7e9b06f"},{url:"charges/dragonPassant.svg",revision:"7d8f65ac19957584cce1ff16422da390"},{url:"charges/eagle.svg",revision:"c31d42d63501b3c71299436cdc4e948b"},{url:"charges/eagleTwoHeards.svg",revision:"ff07226b7fc31af3551dc19e418fe47a"},{url:"charges/elephant.svg",revision:"7a117ad2efe1100181bb45942c43c545"},{url:"charges/escallop.svg",revision:"d4891e499554ad85fe87037ec28238c3"},{url:"charges/estoile.svg",revision:"5e6df928d512abfb60c778b01bf31cbd"},{url:"charges/fleurDeLis.svg",revision:"315a40db91319437ad520d00484f7948"},{url:"charges/fountain.svg",revision:"29ba6cf6533123843e97788794367008"},{url:"charges/garb.svg",revision:"3cb92715a9816abd9c78be6b1eb5e25f"},{url:"charges/goat.svg",revision:"9093ae75a7f6a5c6fccfbf9a17a9e24d"},{url:"charges/greyhoundСourant.svg",revision:"db1031ebed05d225329c93d3753187d8"},{url:"charges/griffinPassant.svg",revision:"8f398e4e6f9c0c7e41abd2048be37f04"},{url:"charges/griffinRampant.svg",revision:"9f12d140bbe21e19ef64b2d94de75ec3"},{url:"charges/hand.svg",revision:"eb5932f95efb8a98919440dff50f1f24"},{url:"charges/harp.svg",revision:"ba1152a8b759a32480a2925caa7544ce"},{url:"charges/hatchet.svg",revision:"d73f847c979109c8268941ee205fe101"},{url:"charges/heron.svg",revision:"d8292382d555788a95efc58c0aec4884"},{url:"charges/horseRampant.svg",revision:"f7475d4318cb6cc3f0afe65867f0fe3f"},{url:"charges/horseSalient.svg",revision:"81cbc377a84bab28d420cd88332bf06c"},{url:"charges/horseshoe.svg",revision:"57658af97fcbb59b2287314b8813f507"},{url:"charges/key.svg",revision:"999a6b49f88859987de90f522dc3b398"},{url:"charges/lamb.svg",revision:"afec9ed3e7c58467002888adc6232433"},{url:"charges/lionPassant.svg",revision:"998fc04004aceeb040a56abb6fb35f9e"},{url:"charges/lionRampant.svg",revision:"81e5cc46ea9c4b9fbd7e985bf363d953"},{url:"charges/lochaberAxe.svg",revision:"6c2871d3f2e530a936e34b21e218dd4b"},{url:"charges/lute.svg",revision:"3f3662a7e868cdd6b06dc1d5a981b4d1"},{url:"charges/mallet.svg",revision:"eeb8eef9273ed6f12b22be884cea3aff"},{url:"charges/parrot.svg",revision:"66f80b9e0b3852ceaed0eb1045be9a8b"},{url:"charges/pegasus.svg",revision:"81920e45338347e7338c39bdf0364c64"},{url:"charges/pike.svg",revision:"90892b7b9294943dc617232daf805652"},{url:"charges/raven.svg",revision:"2a8d2d2edb723494f3b5b924d99d6bf5"},{url:"charges/rose.svg",revision:"ab6ae0aac56fdcb490fb95e034ed11a0"},{url:"charges/sabre.svg",revision:"4eb14d9b69c7204a916e3935f7bb0cb1"},{url:"charges/sabresCrossed.svg",revision:"05355d48fc344be326dc912beb8da15a"},{url:"charges/serpent.svg",revision:"a1d916a854529bb3ff67235eed1ff2f7"},{url:"charges/stagsAttires.svg",revision:"4a9a320267eb6e0675b7bc98a34e2a48"},{url:"charges/sunInSplendour.svg",revision:"ef6a9764fbe4fc8dd78904b020cf86bf"},{url:"charges/swan.svg",revision:"9d8304b57e5b1808df3ac5f9bef429dd"},{url:"charges/swanErased.svg",revision:"affa7653d8a075318b5376b8a6934bc5"},{url:"charges/sword.svg",revision:"4feb60a6685e9716714612e841386986"},{url:"charges/template.svg",revision:"10eae543891210ddad3d8059acb010c3"},{url:"charges/tower.svg",revision:"f36490d83541e0d29e1020666f6043ea"},{url:"charges/unicornRampant.svg",revision:"79eb995aa9530d5cf0237be5ba63d63e"},{url:"charges/wheel.svg",revision:"f909b27bd5de63148d70f12183eb267b"},{url:"charges/wing.svg",revision:"08a45fec62b333090c8556cf73778225"},{url:"charges/wingSword.svg",revision:"9f76c3ff1524f6dd6860b9b13a6595b2"},{url:"charges/wolfPassant.svg",revision:"97124b8a65e017be7990d6ada8861562"},{url:"charges/wyvern.svg",revision:"1b09bbc9aeb003fda4038b0224b90dc0"},{url:"logo.svg",revision:"016f30156e22b7be14b92ffaeb9d2c79"},{url:"manifest.json",revision:"454461966b36b5e28c3391cfbe839a85"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/.*/,new e.NetworkFirst({cacheName:"armoria-cache",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
