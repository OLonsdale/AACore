if(!self.define){let e,s={};const c=(c,r)=>(c=new URL(c+".js",r).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,o)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let b={};const a=e=>c(e,i),d={module:{uri:i},exports:b,require:a};s[i]=Promise.all(r.map((e=>d[e]||a(e)))).then((e=>(o(...e),b)))}}define(["./workbox-45d48eca"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"board-sets/expanded.js",revision:"dd69cd86b1e0c65b1b973ea0aac535ac"},{url:"board-sets/initial.js",revision:"f0a9044a76e6617c1cd057c373c186f3"},{url:"board-sets/standard.js",revision:"668bbe4cb8f744332b462a95a1d7e37a"},{url:"index.html",revision:"b5cc8dd44c9556e250ba920e0192c94c"},{url:"manifest.json",revision:"cad56c5a488c07b9bbcfa970619a1483"},{url:"resouces/delete-all.svg",revision:"7fc962c134c7bfcc7dfe6293dfa77df0"},{url:"resouces/delete.svg",revision:"a54a71be5ed135079c68930923c2be77"},{url:"resouces/favicon_128px.png",revision:"44fb0f68d40477c11b3ed907a83c5cc3"},{url:"resouces/favicon_16px.png",revision:"00ce7cc734aaa978de463f22f1d3fd4d"},{url:"resouces/favicon_32px.png",revision:"0528efdd67e4c871f672e01b91519aad"},{url:"resouces/favicon_512px.png",revision:"da284511d90e5938e6fc8fe642bd7d97"},{url:"resouces/favicon-ios.png",revision:"9da656b34d59dd61ec4ba21a0a052a7e"},{url:"resouces/icons/add.webp",revision:"466d6d3a40b0cf0e4e5ae8763147fff7"},{url:"resouces/icons/adult.webp",revision:"cabdeee5ccfe43ef5f292b38e8e63cd3"},{url:"resouces/icons/angry.webp",revision:"1887c713e2dabb59ae88603b12b9f6ab"},{url:"resouces/icons/animal.webp",revision:"d8504e35a7cb12ab882241f26e735987"},{url:"resouces/icons/apple.webp",revision:"f5d79fdab78ac92b7d9ac466bcbf9f85"},{url:"resouces/icons/arm.webp",revision:"37e86fbdb57f734b23b8e01f2d95a271"},{url:"resouces/icons/baby.webp",revision:"e04ad9b02d082741df4e90e35c35a475"},{url:"resouces/icons/ball.webp",revision:"cc3d86196022882d2b4c70573be350fc"},{url:"resouces/icons/balloon.webp",revision:"b296358985e554fea393eeca2a9ab152"},{url:"resouces/icons/banana.webp",revision:"47d7d3dfdf58011c8f01a9be51f607a8"},{url:"resouces/icons/bath.webp",revision:"73a8a4a70fe1798e2c735c2bcaa5b533"},{url:"resouces/icons/bathroom.webp",revision:"c0c8051e030cc7fe2063f00651e1119c"},{url:"resouces/icons/bean.webp",revision:"04e354ebb30b6af2333e714e9a6a7e51"},{url:"resouces/icons/bed.webp",revision:"fa4054fdc96955e089e63f27852c7cf4"},{url:"resouces/icons/bedroom.webp",revision:"7651449d09a003a35a14e44b7d08255a"},{url:"resouces/icons/big.webp",revision:"7cdab31cc65c5ebe6cac50bd18659af6"},{url:"resouces/icons/bike.webp",revision:"4791b365b31e41ac9594812e1ab31fea"},{url:"resouces/icons/bird.webp",revision:"f67245171ce01af5d24bc00c39824106"},{url:"resouces/icons/birthday.webp",revision:"57d00b0e599edffd404bf6d57cd16f84"},{url:"resouces/icons/biscuit.webp",revision:"75c2db0d3acedf7d8f648fcd9e4d930e"},{url:"resouces/icons/black.webp",revision:"8712ea178788e52ce367b5bc38e9c602"},{url:"resouces/icons/blackberry.webp",revision:"9e3eb4424f2f50cfcb48bd171858e829"},{url:"resouces/icons/blackcurrant.webp",revision:"d5f31eaa80a8bb06804c3e3c09bdd64f"},{url:"resouces/icons/blackcurrant2.webp",revision:"2e60f625d24421c41ee3d44f23a565f0"},{url:"resouces/icons/blocks.webp",revision:"701be46c26533f1f239027ac72c4ee90"},{url:"resouces/icons/blood.webp",revision:"0a6da63ec4f0a37310f928eda3279259"},{url:"resouces/icons/blue.webp",revision:"52815f26b214044c3228a97087e53e39"},{url:"resouces/icons/blueberry.webp",revision:"58cdc299af165bd7ee4b5d9b3aa859e4"},{url:"resouces/icons/board-game.webp",revision:"12d103f89ef6ead05fa59bc54c00cda5"},{url:"resouces/icons/boat.webp",revision:"5833ba3a2260d37bdb47be39fa127088"},{url:"resouces/icons/body.webp",revision:"9960b7627c37db063ddeb3ca65249ae9"},{url:"resouces/icons/book.webp",revision:"2061b801749edf5ce623d104476aeb34"},{url:"resouces/icons/bored.webp",revision:"e1f583715f882a1df40ad3c7a6708faf"},{url:"resouces/icons/bowl.webp",revision:"32e543db0e0880a0bcd2365cd2fffa43"},{url:"resouces/icons/boy.webp",revision:"9750adbf2f392f3f7b2e74723b34a5df"},{url:"resouces/icons/bread.webp",revision:"47e8c308b4f47b288a173a04fa79bde8"},{url:"resouces/icons/breakfast.webp",revision:"35bf20b1bfd51fdfe1568553207a2aad"},{url:"resouces/icons/broccoli.webp",revision:"ec3b87c79e30f52f135dacd38d78373a"},{url:"resouces/icons/broken.webp",revision:"21617ca303ca3f5111a4862d2d4b39ff"},{url:"resouces/icons/brother.webp",revision:"171819480409c3c01645800af28b0152"},{url:"resouces/icons/brown.webp",revision:"19e9f8c02256b3f6db4366058f68c1fc"},{url:"resouces/icons/bruise.webp",revision:"664649681c60180cb746c1dc2a3c7645"},{url:"resouces/icons/bubbles.webp",revision:"a2716f360762ca9191f185e4d200fd6d"},{url:"resouces/icons/bug.webp",revision:"780510c5a5b61ef50c98a202184ec34c"},{url:"resouces/icons/bum.webp",revision:"d571d7176b8e276eb17bd2000a7582a1"},{url:"resouces/icons/burger.webp",revision:"9da029544d70439bc59869b697a6a11b"},{url:"resouces/icons/burn.webp",revision:"04770287d3f2936649e16eac6dc3c17b"},{url:"resouces/icons/bus.webp",revision:"6bebdc5fd479522b9ff7604647bac479"},{url:"resouces/icons/butter.webp",revision:"af45dd363ff25d3e8778ad7d3d0b151a"},{url:"resouces/icons/button.webp",revision:"6f1a3ebd0bf1af15730eb5bf6002f368"},{url:"resouces/icons/buy.webp",revision:"a649315de99d3024043af28dcfb72707"},{url:"resouces/icons/car.webp",revision:"f74a1042ee52eddb2175af1185082145"},{url:"resouces/icons/carrot.webp",revision:"5b979c5cdecc91770e37a0d5d6540470"},{url:"resouces/icons/cat.webp",revision:"fdd45f6714883cf05c8c76b8c2f89dbd"},{url:"resouces/icons/catch.webp",revision:"0dd5eff610a19ab78b9488607250f1d7"},{url:"resouces/icons/cereal.webp",revision:"39e537fee6b7287d792f59f181958a47"},{url:"resouces/icons/chair.webp",revision:"d2373e0139f771d9c14a99e190e09915"},{url:"resouces/icons/cheese.webp",revision:"9260209f363b4c130b75e747870d8713"},{url:"resouces/icons/cherry.webp",revision:"855ec57cf08490a1d56445e352d539cf"},{url:"resouces/icons/chest.webp",revision:"20d8aedf98c6a00148e301a837cb3af9"},{url:"resouces/icons/chicken.webp",revision:"cb361c1da05b10b6e180938fd7b74dcf"},{url:"resouces/icons/child.webp",revision:"48470d9d38d2c798c436f620dba4c4ea"},{url:"resouces/icons/chip.webp",revision:"3b19c0e9185db3d9caede003d76a6321"},{url:"resouces/icons/chocolate.webp",revision:"83cf96d0106175875b79dac7ed22bb34"},{url:"resouces/icons/christmas.webp",revision:"8467d5ef25d4274aecdf559ce8612db1"},{url:"resouces/icons/clap.webp",revision:"5aa60e1e5102b6347bf45bc60f712147"},{url:"resouces/icons/class.webp",revision:"e52ec3ef6160a1f2ef8009df36d4366b"},{url:"resouces/icons/claw.webp",revision:"482e2329594b80fa54b28cb0b416c542"},{url:"resouces/icons/clean.webp",revision:"fdc2448f5b47bb284a460dd2cfd80c54"},{url:"resouces/icons/climb.webp",revision:"ed2adf2b2e127e397a95563cffeedfaf"},{url:"resouces/icons/close.webp",revision:"4ec378c50fe7808d32cc5dda7c5c8e4a"},{url:"resouces/icons/cloud.webp",revision:"da47ceae1654ae9b93934bc3ea71ca83"},{url:"resouces/icons/coat.webp",revision:"adc3655e3967785317a450a10dab352c"},{url:"resouces/icons/coffee.webp",revision:"373458e04a13f697e096ab8486734098"},{url:"resouces/icons/cola.webp",revision:"8f977ea3c5f82c5cda5c02ea66e8f7dd"},{url:"resouces/icons/cold.webp",revision:"f2d0fb5831e593424f51cd12ba4f07a4"},{url:"resouces/icons/colour-activity.webp",revision:"7bec21f29cd2cd0d0af8cc21c1ab3b64"},{url:"resouces/icons/computer.webp",revision:"c13c6417c1ff06f887c3c22763dbc6aa"},{url:"resouces/icons/confused.webp",revision:"840d48d651c80e14404fdcead1864ada"},{url:"resouces/icons/connect-four.webp",revision:"8bd560e022ffce1e90f425d123c36b98"},{url:"resouces/icons/cook.webp",revision:"a98195d2b59a4c4fdee84b6282c48c73"},{url:"resouces/icons/cooker.webp",revision:"1d13bb1d7e41b208ad0c1533cef18c58"},{url:"resouces/icons/count.webp",revision:"89de0c5432972e5b8149aa11d46ecbd8"},{url:"resouces/icons/cow.webp",revision:"a729dc55531f01f17c39c77b2bc94d62"},{url:"resouces/icons/crisp.webp",revision:"84acca3ec18cefb61f18755fcb4b5bad"},{url:"resouces/icons/cry.webp",revision:"e35f450fdb24c9c1c18ea095607fe1a8"},{url:"resouces/icons/cup.webp",revision:"9d965331d536cf404d81a727400f4c12"},{url:"resouces/icons/curry.webp",revision:"ff411fdf53d353d0b40d53b71e667d9f"},{url:"resouces/icons/cut.webp",revision:"be2e426b2742bca6e923cf9c7820f522"},{url:"resouces/icons/cutlery.webp",revision:"0162ed57d245549c44aadb4f5d703fad"},{url:"resouces/icons/dad.webp",revision:"875ab1dd0fd32c146821e623fc79a02b"},{url:"resouces/icons/dance.webp",revision:"a9537ba97e7437cd023a51e5d618a120"},{url:"resouces/icons/dark.webp",revision:"ce63c183dc0c061552af8c361eee05fc"},{url:"resouces/icons/dessert.webp",revision:"856bd68a8dbc7c6116b16d50fec55278"},{url:"resouces/icons/dice.webp",revision:"00113dd3ddb9aa4b6123fea6e91f9dfe"},{url:"resouces/icons/different.webp",revision:"94e1041e063e252294c1fbf79481e84e"},{url:"resouces/icons/difficult.webp",revision:"190a35ae25adc9a15ee186f960684663"},{url:"resouces/icons/dining-room.webp",revision:"0ce5b76736d29a92ec420853a48e8c20"},{url:"resouces/icons/dirty.webp",revision:"9f0216404d183b2cab9d00ab87f78cec"},{url:"resouces/icons/dish.webp",revision:"8ade6ba7c9aff9785dfd2bb8e2b118fb"},{url:"resouces/icons/dishes.webp",revision:"e4c30d881e802529fd450e43293ad553"},{url:"resouces/icons/divide.webp",revision:"2727a6c602a5863cbd7fa85af171415c"},{url:"resouces/icons/do.webp",revision:"a6fd1766afc9d894891dc837802a1f44"},{url:"resouces/icons/dog.webp",revision:"8b3c65c500c8a0024f0d15caa736add8"},{url:"resouces/icons/doll.webp",revision:"bf062fb3bcbf3051d2bee1c131bf5cce"},{url:"resouces/icons/domestic.webp",revision:"17a8bb796fcbe1d025e210a9e276ab91"},{url:"resouces/icons/door.webp",revision:"69b76904389619e3710275bc873dd0d6"},{url:"resouces/icons/dots.webp",revision:"744673873ab1b11ccb82373a52dca115"},{url:"resouces/icons/down.webp",revision:"21ed8601db02873266d4689987c0f268"},{url:"resouces/icons/drink.webp",revision:"71b154bd33c2ff9cb136663966e4d503"},{url:"resouces/icons/drinks.webp",revision:"80c66ae79f022945c014fdacb2187912"},{url:"resouces/icons/drive.webp",revision:"da4c2913b9e5a27cff90a8e287793fc2"},{url:"resouces/icons/dry.webp",revision:"47f6d05439da60fc7e6121486d7780a8"},{url:"resouces/icons/ear.webp",revision:"822b089e179c1b7ff010457c57600e2d"},{url:"resouces/icons/easter.webp",revision:"dcd5e55ae85bde04daa1de9ceb016976"},{url:"resouces/icons/easy.webp",revision:"296e5963da4f14d84b440b8ea7c63bf2"},{url:"resouces/icons/eat.webp",revision:"00bfcfa6ab149c222480de6fb15bc8b7"},{url:"resouces/icons/egg.webp",revision:"7a9ca030d187cd550da02f257d663e71"},{url:"resouces/icons/eid.webp",revision:"d443d7df5fe9829162c54fb557fdfcdf"},{url:"resouces/icons/elbow.webp",revision:"3c24bb27a0781435129383d88958c7df"},{url:"resouces/icons/elephant.webp",revision:"8ea0671117ae5345153ba089bc131a7c"},{url:"resouces/icons/embarrassed.webp",revision:"affbb2f6d1a69e95c04dd3747900e5da"},{url:"resouces/icons/empty.svg",revision:"645a262ae116d95ec778ffe5a46b1e32"},{url:"resouces/icons/empty.webp",revision:"2481737a4f1b31a3ddd27210ccd7222d"},{url:"resouces/icons/equals.webp",revision:"295943e90428b237ea5ec820416d0492"},{url:"resouces/icons/excited.webp",revision:"f22a0660b46083f16b334cc291238b5b"},{url:"resouces/icons/eye.webp",revision:"9cd64ae68f02c877d95215ccb268bcd9"},{url:"resouces/icons/farm.webp",revision:"a85e7752a5a5c20307d00f442df9cf13"},{url:"resouces/icons/fart.webp",revision:"e6c4bf6f7cbb8db7c29f3c5a3ab5891e"},{url:"resouces/icons/fast.webp",revision:"b9879dcf6f2394eed0f673853ae2998b"},{url:"resouces/icons/favourite.webp",revision:"c170919b39f369e8c96010a781fc17fd"},{url:"resouces/icons/feel.webp",revision:"95320c5d78d4b26a34daf706cc45d05f"},{url:"resouces/icons/feelings.webp",revision:"812302c80754c63547fd93f0b75821d8"},{url:"resouces/icons/finger.webp",revision:"544a070c2f5c325fdca5fd903615f2a7"},{url:"resouces/icons/finish.webp",revision:"3cd5e9192e45603f7baa907461405ff3"},{url:"resouces/icons/fish.webp",revision:"c10ca6d421b63434a652d5e576f905bd"},{url:"resouces/icons/fizzy.webp",revision:"410aea6d2c52e6d78c077733be217259"},{url:"resouces/icons/fluffy.webp",revision:"a82b0dc47580148d483ca75f2600369d"},{url:"resouces/icons/fly.webp",revision:"8130df8fccb651419a7ac99f25f6ce62"},{url:"resouces/icons/foam.webp",revision:"dca689e53f05a6792f8c28b798390c92"},{url:"resouces/icons/food.webp",revision:"9e45353d03e46b8f43ca7de02bd23cc7"},{url:"resouces/icons/foot.webp",revision:"168b85128d267b398add2eccb183120e"},{url:"resouces/icons/fork.webp",revision:"86c04b57fcd910f971d8d3d2d18636a7"},{url:"resouces/icons/fruit.webp",revision:"e6b6fb6bd2be9889abacbf743522f95d"},{url:"resouces/icons/full.svg",revision:"4a9876e2e92b3334fdf3913d0ecbdb9f"},{url:"resouces/icons/full.webp",revision:"270a29959c4aa147cf044edff2c1e9b9"},{url:"resouces/icons/funny.webp",revision:"953dbed18bcc6b6ad84f1ca72ceae010"},{url:"resouces/icons/future.webp",revision:"67a0820f057c5f600a505f57b8154cdf"},{url:"resouces/icons/game.webp",revision:"af7de02ba871c7a2a025e8b9b929b505"},{url:"resouces/icons/garden.webp",revision:"e0ae8d8ad34009d135a48d997d2d0205"},{url:"resouces/icons/girl.webp",revision:"12ab4a4e7bfe9a861fcd721aaa154581"},{url:"resouces/icons/glitter.webp",revision:"5580a877c51acaf858ae798e47e0e102"},{url:"resouces/icons/go.webp",revision:"4e4b08efa5d74e1028574e73785ece90"},{url:"resouces/icons/grammar.webp",revision:"4823024e68038ed477ec775abe203027"},{url:"resouces/icons/grandad.webp",revision:"8c5955e5d3b732de12957353ec85a28c"},{url:"resouces/icons/grandma.webp",revision:"897d541207b3740006c7c087c73569b5"},{url:"resouces/icons/grape.webp",revision:"3fe9578a6fa36296bd48c912f734a38b"},{url:"resouces/icons/green.webp",revision:"43a5fec61d8770c190283e3b4e1cd325"},{url:"resouces/icons/grey.webp",revision:"a567e78801f4f0cb130beefd49084647"},{url:"resouces/icons/hair.webp",revision:"984828c733a5ed54f6fe54f4044559bd"},{url:"resouces/icons/ham.webp",revision:"c024edd2e537f6d660b147bb38d7a88d"},{url:"resouces/icons/hamster.webp",revision:"23994f39dd68d93bc1fd8ba7c8eb6f89"},{url:"resouces/icons/hand.webp",revision:"01bb1c852e69693100bb23873a18a46d"},{url:"resouces/icons/happy.webp",revision:"9334dd3d06f5357e5968ff472d0193b2"},{url:"resouces/icons/hard.webp",revision:"edb2a767f5d3d71988a9d6911359a5d5"},{url:"resouces/icons/have.webp",revision:"9efe7394add894ad3d85e5576945a0d0"},{url:"resouces/icons/he.webp",revision:"b46915f8b372d58e2c4e9ea78ee7e443"},{url:"resouces/icons/head.webp",revision:"f9375ef195a4f66174fc7b4eb2a9726b"},{url:"resouces/icons/healthy.webp",revision:"2e33a64ff2efbe3576d7f273cf353644"},{url:"resouces/icons/heavy.webp",revision:"bbb0261e3d2198891a7ef542872e2cf9"},{url:"resouces/icons/helicopter.webp",revision:"60af82511764a5473250f599be543229"},{url:"resouces/icons/help.webp",revision:"06e4f058dce871643914f9eb5eecb344"},{url:"resouces/icons/here.webp",revision:"08bf09950505397cffec4350525a9afc"},{url:"resouces/icons/holiday.webp",revision:"8212cc5cc8606d79e1c7232bd8e2a2c6"},{url:"resouces/icons/home.webp",revision:"e625b006e5a955dcf5678e443f1d9441"},{url:"resouces/icons/horse.webp",revision:"d9b7f022e78d19da02df94399a673b69"},{url:"resouces/icons/hot-chocolate.webp",revision:"25ed797c8043525bb3f68293fdc0e01b"},{url:"resouces/icons/hot.webp",revision:"4225581ff5364696a81f1bda68c98256"},{url:"resouces/icons/hungry.webp",revision:"229986fd79f222d38ae40fca6f679cc0"},{url:"resouces/icons/hurt.webp",revision:"8987b3c7a42e518a50f54773552281d6"},{url:"resouces/icons/i.webp",revision:"511ff34e8a23af865aa8f4ac49e1fd17"},{url:"resouces/icons/ice-cream.webp",revision:"5b4b617e10570d1fce99bc5519280441"},{url:"resouces/icons/in.webp",revision:"ac104cfb7e6c31e4f14939ab9caf593d"},{url:"resouces/icons/is.webp",revision:"295943e90428b237ea5ec820416d0492"},{url:"resouces/icons/it.webp",revision:"a3547910aae40684622efd8e4711a947"},{url:"resouces/icons/itch.webp",revision:"90f66228f3dda74f9281b9e390a4d050"},{url:"resouces/icons/jam.webp",revision:"10806b6d0474a59b642891c6a6251251"},{url:"resouces/icons/jigsaw.webp",revision:"740e0c0dee87c0dce7da08f7e2f1fec4"},{url:"resouces/icons/juice.webp",revision:"80c66ae79f022945c014fdacb2187912"},{url:"resouces/icons/jumper.webp",revision:"eaf72d28a6b47ac407295729d013a4ad"},{url:"resouces/icons/kick.webp",revision:"3a2113bbb06841b4df453d40b8fb086c"},{url:"resouces/icons/kitchen.webp",revision:"695366625064f70b17be030a0db5868b"},{url:"resouces/icons/knee.webp",revision:"ddc82959992b727839d1011db4832959"},{url:"resouces/icons/lace.webp",revision:"6bd284aa0da86be2cf7a1d07944ca540"},{url:"resouces/icons/ladder.webp",revision:"24a5864b61b4538f3d031588f3c45d9e"},{url:"resouces/icons/laugh.webp",revision:"36d23b8102f7ddd8593ca2461058bf01"},{url:"resouces/icons/learn.webp",revision:"3eb6577f8c5e612ab033ffa84d1f97e6"},{url:"resouces/icons/left.webp",revision:"d978981ffd75176b0945012cd3a990c2"},{url:"resouces/icons/leg.webp",revision:"c76523050d13faa89ca8fc011daf4849"},{url:"resouces/icons/lemon.webp",revision:"180dfaf7c8506c7bad148c4751528c86"},{url:"resouces/icons/lemonade.webp",revision:"1eb120a119f32a5398d43be43aa62b86"},{url:"resouces/icons/light.webp",revision:"e6d23df02eb3283e4f770f70f1078837"},{url:"resouces/icons/like.webp",revision:"f7d1c2891cbd8ece4e33f3db4cd41cec"},{url:"resouces/icons/lips.webp",revision:"41c1e9e6bd014f55a8f98323111d48d8"},{url:"resouces/icons/living-room.webp",revision:"7e98c170ddff38cd90608ff5645cd60a"},{url:"resouces/icons/lizard.webp",revision:"c063cadb2d8f627e6ceeb4188168a9d4"},{url:"resouces/icons/look.webp",revision:"744f65cce9a50cf2999845129c3c85be"},{url:"resouces/icons/lose.webp",revision:"e5e0f1169f79758a5c570dc65e3dd9a9"},{url:"resouces/icons/loud.webp",revision:"850ec509d8653dbc3397fb2058574d81"},{url:"resouces/icons/lunch.webp",revision:"f450423abd7d4a3496b5ef3f06b2e3fa"},{url:"resouces/icons/make.webp",revision:"fe582fb88c5ae79ba31d07d4d7926dc4"},{url:"resouces/icons/man.webp",revision:"00400ba3a9dbb1a17fced823401e8c36"},{url:"resouces/icons/mash.webp",revision:"52ac0ce8ce83427043cbbd4b80484ff3"},{url:"resouces/icons/maths.webp",revision:"1a0c7e2362f9829b2581651c5fbd86eb"},{url:"resouces/icons/meal.webp",revision:"83c03dbce2686b8d1f639545afaa659e"},{url:"resouces/icons/mean.webp",revision:"0d4c4de67e087ddadb67640f48af6678"},{url:"resouces/icons/meat.webp",revision:"55a1eaaa42b4671f2dd81b98ffa4fc7a"},{url:"resouces/icons/milk.webp",revision:"223c04bee6d7f9a66178e8ee0bee8bf7"},{url:"resouces/icons/milkshake.webp",revision:"a5c183d6edd44e3513ef04d785e20061"},{url:"resouces/icons/minus.webp",revision:"bf6d444475c14221e81716d73006e46f"},{url:"resouces/icons/money.webp",revision:"0f8e0fe7631d3f046160ff50cf626692"},{url:"resouces/icons/more.webp",revision:"327f51c95b4b58ed7944362cee69c407"},{url:"resouces/icons/motorbike.webp",revision:"c1801e8a7e3c3de4720e5240396f321f"},{url:"resouces/icons/mouth.webp",revision:"8c1c45c25a05be7c70d84e12b8b665a0"},{url:"resouces/icons/mr-potato.webp",revision:"677228543bc5acc9a46fb9686fcf6942"},{url:"resouces/icons/mud.webp",revision:"5d09039a8f0932b9a9eeb3bf7e81fec3"},{url:"resouces/icons/mum.webp",revision:"46e255b1b93cca7a8f62a083b8c5ad80"},{url:"resouces/icons/music.webp",revision:"c60e289ebc99e7b9e14a4438d2efc9ac"},{url:"resouces/icons/nana.webp",revision:"354f1f0b5dfe9236943c7a1f372cdad5"},{url:"resouces/icons/nappy.webp",revision:"b00a8e02882b76fcdc74d8c585da75fc"},{url:"resouces/icons/navigate-back.webp",revision:"72d6aae9d6eb06478a1fb17b3f598d3c"},{url:"resouces/icons/need.webp",revision:"fda6c524b623d2c1890b39adbc9162c9"},{url:"resouces/icons/negation.webp",revision:"260ca343e4929a273b2d74b5678c3267"},{url:"resouces/icons/nice.webp",revision:"dab6e527030b7e2aef879407a456718e"},{url:"resouces/icons/noodles.webp",revision:"f1b35581f60a51e114c7775bf297e20b"},{url:"resouces/icons/nose.webp",revision:"fdd17e92ee2e34c68e486ce0968fdcbe"},{url:"resouces/icons/not.webp",revision:"46dd04695ca78487274eba5cb2d26805"},{url:"resouces/icons/nugget.webp",revision:"7556f57d317ebf9be80c95e9f60bef82"},{url:"resouces/icons/off.webp",revision:"9c793483cdb635745c93bb530d3a6c0b"},{url:"resouces/icons/ok.webp",revision:"cf0de839c43a9f1060534d8b36c98f24"},{url:"resouces/icons/old.webp",revision:"8c85a953b113fbe18337a8b07bcdfe81"},{url:"resouces/icons/on.webp",revision:"b2b24f8819baa405632d111c385c7cbf"},{url:"resouces/icons/open.webp",revision:"2a7ff260de1cd864b747fd92e0ec7b30"},{url:"resouces/icons/orange-colour.webp",revision:"66bca7c24e020046c22c94267449c3a3"},{url:"resouces/icons/orange-fruit.webp",revision:"ba54674a43c3bc7fcdabaf42fdc9667e"},{url:"resouces/icons/outside.webp",revision:"f0c4356547cc3165df398ccdb5004f5e"},{url:"resouces/icons/pad.webp",revision:"9758bbb9d8a646ee0554093575f852a1"},{url:"resouces/icons/paint.webp",revision:"2b43168b0980e3b735e11d24bad9c888"},{url:"resouces/icons/pancake.webp",revision:"04cb72b1ccf6cddf00ea3724585b262d"},{url:"resouces/icons/pants.webp",revision:"8a31e25263f50766b2b4f4d9984d6b23"},{url:"resouces/icons/park.webp",revision:"038e94430f8f001f45136565e519683a"},{url:"resouces/icons/past.webp",revision:"a66aae9cbf034d556f30ebd04d5556b8"},{url:"resouces/icons/pasta.webp",revision:"85e1d131160a3abcf03e2341b04a0dd2"},{url:"resouces/icons/paw.webp",revision:"cea7e48bcd7377cf72b5ef801d2fefd2"},{url:"resouces/icons/pea.webp",revision:"f07afad7ff2800c6af658c82aff7f660"},{url:"resouces/icons/pear.webp",revision:"2852ff0e8892a49634ed905dd199354b"},{url:"resouces/icons/pen.webp",revision:"e592474eec8568fb36e7d7715a2b5e59"},{url:"resouces/icons/pencil.webp",revision:"323cd25871634eed37c6c952ab4bd960"},{url:"resouces/icons/people.webp",revision:"aa64a70deef2461a5c51db46439e3950"},{url:"resouces/icons/period.webp",revision:"27e3ca638e2f8bb15c28c5f837772f3d"},{url:"resouces/icons/pet.webp",revision:"0e90c0539b3fb1f67a6d716bbd2c407c"},{url:"resouces/icons/phone.webp",revision:"3d7c416acfa8bcba666fc107ebcc8684"},{url:"resouces/icons/pig.webp",revision:"0a8c2da41eae4bb549a5516156359daa"},{url:"resouces/icons/pink.webp",revision:"4cacdaf611bc52c53f3c1e944d76b893"},{url:"resouces/icons/pizza.webp",revision:"721fdcd7d6bc325acc59367cda299c84"},{url:"resouces/icons/plane.webp",revision:"f0c8b4d4d971f68b7f1ff539a024e01b"},{url:"resouces/icons/play.webp",revision:"57d081f72d3f6e0a4d4c93763d71368a"},{url:"resouces/icons/plural.webp",revision:"5ebab399eba2f13213cff3b595cdf47e"},{url:"resouces/icons/poo.webp",revision:"54e71a9f63b9880a5aac244654e5cd99"},{url:"resouces/icons/potato.webp",revision:"677228543bc5acc9a46fb9686fcf6942"},{url:"resouces/icons/private-parts.webp",revision:"6637e12b526ef13eecfacad7be94c6b3"},{url:"resouces/icons/pull.webp",revision:"e5072bb7cdaac7a1081b9c81cd6c3547"},{url:"resouces/icons/purple.webp",revision:"ef21fa9c7e0e9feec9afdeb0e66be5a2"},{url:"resouces/icons/push.webp",revision:"0e723dfb7e8dfd1ad50b235d9641c041"},{url:"resouces/icons/put.webp",revision:"e4e1d9fcab5bc54ad0a57e08bbc702c5"},{url:"resouces/icons/quiet.webp",revision:"1e4643b925a21c8eb5a9268f2c4396e8"},{url:"resouces/icons/rabbit.webp",revision:"02fbf8345aabecd1d4c0a28d4c4a277b"},{url:"resouces/icons/rain.webp",revision:"900d85dcfdccb411f40a293892d0a561"},{url:"resouces/icons/raisin.webp",revision:"2b95f821a2838b53c312d9a390c4301f"},{url:"resouces/icons/ramadam.webp",revision:"869260c5eae7ea164872874f233def5a"},{url:"resouces/icons/raspberry.webp",revision:"04eff39c23d7d1282d0a4869e9703551"},{url:"resouces/icons/read.webp",revision:"d0aaf1f9dff8075f13335ae1e36c5944"},{url:"resouces/icons/red.webp",revision:"7162dcdc29cce8f1a21ba588b055d172"},{url:"resouces/icons/restaurant.webp",revision:"eb807dc519da6107b7361c6275e8c02e"},{url:"resouces/icons/rice.webp",revision:"50b03e5f118695cb3cee7a0d97c7c4c0"},{url:"resouces/icons/ride.webp",revision:"3f8a043c8dab6f80ecb27c83a04c112b"},{url:"resouces/icons/right.webp",revision:"3dbff49f1076200cbabda898ab4b7132"},{url:"resouces/icons/roll.webp",revision:"427a6825f4a38d014113c936b5b4ea8b"},{url:"resouces/icons/roundabout.webp",revision:"0a8d29408c8f93d852cf332a060a1797"},{url:"resouces/icons/ruler.webp",revision:"600d60d5525217eef746920f24e68ddb"},{url:"resouces/icons/sad.webp",revision:"9cd0658e0f91bf0a79898081ffe1e85e"},{url:"resouces/icons/salad.webp",revision:"0038a351d2a074f382bd7e89cc140b2f"},{url:"resouces/icons/same.webp",revision:"1cb48b7b0dacfbd421ece60f06301944"},{url:"resouces/icons/sand-pit.webp",revision:"8d9d895be16e12462201626f02f0df00"},{url:"resouces/icons/sandwich.webp",revision:"18b23044cf9131c88f0de00e5c64d201"},{url:"resouces/icons/sauce.webp",revision:"37b2bc99b39b5065e3f1e64e6037ed98"},{url:"resouces/icons/sausage.webp",revision:"6890352793d3549d09bc422f0fcdc288"},{url:"resouces/icons/scared.webp",revision:"b857a68899789822979c9468443b8599"},{url:"resouces/icons/school.webp",revision:"fcb91779b4cedfe2e5737678a812aab5"},{url:"resouces/icons/scissors.webp",revision:"1707de25c271ba943dfc3bbe2eff9030"},{url:"resouces/icons/scooter.webp",revision:"538ef189f4f1fb23131feaaac0e647f9"},{url:"resouces/icons/seesaw.webp",revision:"1a67bba08d0bf40af019f9ba200b91b4"},{url:"resouces/icons/sensory-room.webp",revision:"bffbf5ae0fd2ede9e460edfcbe943c27"},{url:"resouces/icons/sharpener.webp",revision:"d337e346bbd9106c3c10085b09b0fda6"},{url:"resouces/icons/she.webp",revision:"a2454d76d5538d3990e6d9ed30b84083"},{url:"resouces/icons/sheep.webp",revision:"a96f886ac94ba215e950be570e11465d"},{url:"resouces/icons/shirt.webp",revision:"46ffb028924ff41c86c0180e9d2c7ad0"},{url:"resouces/icons/shoe.webp",revision:"9a4085b905e57ff6e4269b81e21a3389"},{url:"resouces/icons/shop.webp",revision:"eaf50c7165aa5addef4cbc79fc452311"},{url:"resouces/icons/shorts.webp",revision:"6fdd27376dc5bb94beecf1e1fc027749"},{url:"resouces/icons/shout.webp",revision:"a6ea2efda7826a5cd89496f8ca69e316"},{url:"resouces/icons/shower.webp",revision:"06f479bdc65d4d525b34bd2d3ea817de"},{url:"resouces/icons/sick.webp",revision:"0550280b17ad316b98dba58656c96b33"},{url:"resouces/icons/sing.webp",revision:"7c44ca3d84e37a67246392127a1df8b8"},{url:"resouces/icons/sink.webp",revision:"9c820f94a31e5137dbc62e5407e8bc4e"},{url:"resouces/icons/sister.webp",revision:"9110f556d8d56837242778fa055a354c"},{url:"resouces/icons/sit.webp",revision:"a117ffaeee64be2e15c4923d6d3b01b1"},{url:"resouces/icons/skirt.webp",revision:"f3f84cf081c1b539f42a7bde515a348f"},{url:"resouces/icons/sleep.webp",revision:"74adbc1f24029e57799ad1ab64384257"},{url:"resouces/icons/slide.webp",revision:"be2af6422ea6c451ba983d65453a2fc3"},{url:"resouces/icons/slow.webp",revision:"264b7df09f719d09c17008875d5b3df0"},{url:"resouces/icons/small.webp",revision:"76b212329a8a3ad6e1dce1d051645105"},{url:"resouces/icons/smile.webp",revision:"fb2898b4e98b527ecc9eb443790f9831"},{url:"resouces/icons/snack.webp",revision:"babca723a02b679d28b34eb58e10e6f4"},{url:"resouces/icons/snake.webp",revision:"dedf07c25c01d00465f68296270bbcf7"},{url:"resouces/icons/snow.webp",revision:"47eab75a3ad28fb5c0deeba96d350cf2"},{url:"resouces/icons/soap.webp",revision:"fe18d0e2b4dc5afc5c2ca621f720d778"},{url:"resouces/icons/socks.webp",revision:"a87ef60f8507555647e9b6b5e45a1764"},{url:"resouces/icons/sofa.webp",revision:"a0d943b0991ac651558f7fb9249355ea"},{url:"resouces/icons/soup.webp",revision:"fa87b90cc8f91f3fb2a3a5fa54e56b2f"},{url:"resouces/icons/spicy.webp",revision:"ed7d9ba31d0e303ef1619ecb5f119c00"},{url:"resouces/icons/spider.webp",revision:"677b14b8fe57b86eab6e805d35a76085"},{url:"resouces/icons/spinner.webp",revision:"79397bc1f1e9d7bb21c2e3c8c912a611"},{url:"resouces/icons/sponge.webp",revision:"d73677f9bb01943ded88fc8e7e64c3ae"},{url:"resouces/icons/spoon.webp",revision:"9988627398ab5d07be3f6e505a408caf"},{url:"resouces/icons/stairs.webp",revision:"fd627a58417e8fe8a11218726147162f"},{url:"resouces/icons/stop.webp",revision:"3fabebe78e6fa703efd14087c4d33f33"},{url:"resouces/icons/strawberry.webp",revision:"8179e0fe5aef4f4c05909c81a021de5f"},{url:"resouces/icons/stretchy-band.webp",revision:"e43c87f62791e83362873209c0ba11e0"},{url:"resouces/icons/stripes.webp",revision:"611db4430d5d6e94c69930324d109cc7"},{url:"resouces/icons/sun.webp",revision:"e1c05842fa7e427434424a34f8b918f1"},{url:"resouces/icons/sweet.webp",revision:"fc51be60d6e488a44ab58a0c6fd1836f"},{url:"resouces/icons/swim.webp",revision:"8b64219c6f8747cff8a00751bf3027fe"},{url:"resouces/icons/swimming-pool.webp",revision:"e73424cd1008ae8761312a8521cddc24"},{url:"resouces/icons/swing.webp",revision:"1dadd35bbb96227e9cd79967a4272b19"},{url:"resouces/icons/table.webp",revision:"71aadb148c8ab4ba8382b67877ea6d64"},{url:"resouces/icons/tablet.webp",revision:"5e21781e0efcf0c2cf1269e38a4b1fd1"},{url:"resouces/icons/tail.webp",revision:"372c0783481b63cb64cc72a563fb5032"},{url:"resouces/icons/talk.webp",revision:"3b175f3acac225545237544643a9de3d"},{url:"resouces/icons/tea.webp",revision:"70e85bd1928b5a75c296a83e5bf65f9a"},{url:"resouces/icons/teddy.webp",revision:"958dd15ef6a84760c12cd8ad5c5f62c9"},{url:"resouces/icons/television.webp",revision:"a461cb8783465535d640a34d3406f1eb"},{url:"resouces/icons/think.webp",revision:"a2eff167c560686ef0b508173a9de197"},{url:"resouces/icons/thirsty.webp",revision:"8fc5b895b56a75e1dd56d58e353bed3c"},{url:"resouces/icons/throw.webp",revision:"38a9e37b3d7ee0dcd148d5ddc0324232"},{url:"resouces/icons/tickle.webp",revision:"812db4b079ca5601b65d7de5704b29ba"},{url:"resouces/icons/tights.webp",revision:"9e6d175e5f61fd00fa9c25bdaffe40c1"},{url:"resouces/icons/times.webp",revision:"3d77afbd8d0ee536d3ed62184ad42f7e"},{url:"resouces/icons/tired.webp",revision:"3f89ebdeae1128f101c36e81aa563f17"},{url:"resouces/icons/toast.webp",revision:"4c6a73f514709a0760e25143f9183746"},{url:"resouces/icons/toe.webp",revision:"c3bad17701a164cdf9d983aa3af4c74f"},{url:"resouces/icons/toilet.webp",revision:"32e543db0e0880a0bcd2365cd2fffa43"},{url:"resouces/icons/tomato.webp",revision:"01cd16a62c82abc30336db075f7f1111"},{url:"resouces/icons/tooth.webp",revision:"8a60614ac447217dc084158fe56a0004"},{url:"resouces/icons/topic.webp",revision:"d8504e35a7cb12ab882241f26e735987"},{url:"resouces/icons/tortoise.webp",revision:"457057471eb7935728aa6ab5cd5690c8"},{url:"resouces/icons/towel.webp",revision:"fea62250983876174b1cdaf388460e96"},{url:"resouces/icons/toys.webp",revision:"0d3fcbeb868882e7c026af54aa2e6343"},{url:"resouces/icons/train.webp",revision:"677e408988e4ef1792316b4d82e0be30"},{url:"resouces/icons/trousers.webp",revision:"3127ee0ad6d569c9ef22ac4b87ae2dfc"},{url:"resouces/icons/tummy.webp",revision:"1083241487703846005e73465a142c79"},{url:"resouces/icons/tuna.webp",revision:"a109ffa2f0c43947f7920912c7dd7b2e"},{url:"resouces/icons/turn.webp",revision:"feeaf4206a25f4585cd61f7f5be38d5d"},{url:"resouces/icons/tv.webp",revision:"a461cb8783465535d640a34d3406f1eb"},{url:"resouces/icons/up.webp",revision:"0b161d5270a40040f8d8a3d87ed32b36"},{url:"resouces/icons/veg.webp",revision:"40284f0badec1dd4cf5b49df931b3d96"},{url:"resouces/icons/velcro.webp",revision:"a89217f45db7bddcbb022caaaec0b838"},{url:"resouces/icons/want.webp",revision:"6058bb7798af2b9314c2e9dc0704fa55"},{url:"resouces/icons/wash.webp",revision:"abeb6b80ababf1429c1098c95eda3478"},{url:"resouces/icons/water-tray.webp",revision:"cc79a06c3a486629c295e9df637b1ec9"},{url:"resouces/icons/water.webp",revision:"0ec0ace33b4ee388969b82c0c5beb5f4"},{url:"resouces/icons/weather.webp",revision:"061ed99ad562ded9de643903e702d94f"},{url:"resouces/icons/wee.webp",revision:"0494f11f5ac8170ae0d60e102ef05611"},{url:"resouces/icons/wet.webp",revision:"eda0039a69c3fee2f870ce5c4bc588d1"},{url:"resouces/icons/what.webp",revision:"6a2beebee0a34510ce5ce075062eff60"},{url:"resouces/icons/wheel.webp",revision:"66c6acbc7b05061631fb9c4dba7596fd"},{url:"resouces/icons/where.webp",revision:"aef4b80aa1ad1db6a4d83c84442b1d8a"},{url:"resouces/icons/white.webp",revision:"2bdd81ad6783c14c0db420fbb7abc338"},{url:"resouces/icons/who.webp",revision:"f7c186a2f8837c9f1001465c929c7e34"},{url:"resouces/icons/wild.webp",revision:"9eea34cc67bdd47ebc6cb638f547e17a"},{url:"resouces/icons/win.webp",revision:"916f95c71ecac7cbf1df2863e6ab55e5"},{url:"resouces/icons/wind-up.webp",revision:"84b24523682249abfcdd690d35b9a240"},{url:"resouces/icons/wind.webp",revision:"104a90223607bedc658a3d20b883d081"},{url:"resouces/icons/window.webp",revision:"04c05b4b752d7ba739a5414b8cb5a797"},{url:"resouces/icons/woman.webp",revision:"d6865688f3913a7b66a8997bf52f1717"},{url:"resouces/icons/wool.webp",revision:"7e69584c0f60c3d6568500d8d5871e36"},{url:"resouces/icons/worried.webp",revision:"54fa92383fa3ff3a92f696fa63cb1a8b"},{url:"resouces/icons/wrap.webp",revision:"832d12cf3aed1c1e3502ee1cf2e8a8f1"},{url:"resouces/icons/wrong.webp",revision:"6955497833b77680f7cd5bc4db819a56"},{url:"resouces/icons/yellow.webp",revision:"75680c26bc389f57250048ffcadd0033"},{url:"resouces/icons/yo-yo.webp",revision:"69875218fbe34b4b76656fa271211747"},{url:"resouces/icons/yogurt.webp",revision:"eb4603fa13c8d14bd79e2f9c70c18939"},{url:"resouces/icons/you.webp",revision:"e2cbe00a453dd086fb2c3f91a8533bf9"},{url:"resouces/icons/young.webp",revision:"29d8f274dd13dc60d6dbde57df51cdb9"},{url:"resouces/icons/zip.webp",revision:"5d0b5db04b282e5351d303e7605c83cf"},{url:"resouces/icons/zoo.webp",revision:"5588ea1449d15b6c832a9c80910e90d8"},{url:"resouces/play.svg",revision:"5af442ff50c6c8411a6050d0f6ecfa54"},{url:"resouces/settings.svg",revision:"36d6ae9dadf5cbb3edbdbb87c196e33f"},{url:"scripts.js",revision:"9894cdb280a2c024d79acbcc47bca088"},{url:"styles.css",revision:"3af07d4eb8fff010ffbbf6202111ba5a"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
