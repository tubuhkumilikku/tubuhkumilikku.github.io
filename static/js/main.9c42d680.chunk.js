(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(a,e){e.ROUTE_HOME="/",e.ROUTE_ARTICLE="/artikel"},,,,,,,,,,function(a,e,n){a.exports=n.p+"static/media/logo.a26b4b25.png"},,,function(a,e,n){a.exports=n.p+"static/media/apakah-aku-normal.906f57be.jpg"},function(a,e,n){a.exports=n.p+"static/media/mabuk-bukan-berarti.4fc3c191.jpg"},function(a,e,n){a.exports=n.p+"static/media/menolong-teman-keluar.d71a79dd.jpg"},function(a,e,n){a.exports=n.p+"static/media/logo-komnas-perempuan.7b5b489f.png"},function(a,e,n){a.exports=n.p+"static/media/tisa.fc8ce5c7.jpg"},function(a,e,n){a.exports=n(56)},,,,,function(a,e,n){},,,,,,,,,function(a,e,n){},function(a,e,n){},function(a,e,n){},function(a,e,n){},function(a,e,n){},function(a,e,n){},function(a,e,n){},function(a,e,n){},function(a,e,n){},function(a,e,n){},function(a,e,n){},function(a,e,n){"use strict";n.r(e);var t=n(0),i=n.n(t),r=n(22),u=n.n(r),l=n(12);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(1),m=n(5),k=n(3),d=n(2),c=n(4),g=n(8),p=n(13),b=function(a){function e(){return Object(s.a)(this,e),Object(k.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(c.a)(e,a),Object(m.a)(e,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}}]),e}(t.Component),o=n(23),h=n.n(o),y=(n(36),function(a){function e(){return Object(s.a)(this,e),Object(k.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(c.a)(e,a),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"navbar"},i.a.createElement("div",{className:"title"},i.a.createElement("img",{src:h.a,alt:"Tubuhku, Milikku"})),i.a.createElement("div",{className:"menus"},i.a.createElement(l.b,{className:"menu",to:p.ROUTE_ARTICLE},i.a.createElement("div",null,"Artikel")),i.a.createElement(l.b,{className:"menu"},i.a.createElement("div",null,"Video")),i.a.createElement(l.b,{className:"menu"},i.a.createElement("div",null,"Pertanyaan")),i.a.createElement(l.b,{className:"menu"},i.a.createElement("div",null,"Penyintas")),i.a.createElement(l.b,{className:"menu"},i.a.createElement("div",null,"Tentang Kami"))))}}]),e}(t.Component)),j=n(7),E=(n(45),function(a){function e(a){var n;return Object(s.a)(this,e),(n=Object(k.a)(this,Object(d.a)(e).call(this,a))).direction="",n}return Object(c.a)(e,a),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"carousel__arrow carousel__arrow--".concat(this.direction),onClick:this.props.onClick},i.a.createElement("span",{className:"fa fa-2x fa-angle-".concat(this.direction)}))}}]),e}(t.Component)),v=function(a){function e(a){var n;return Object(s.a)(this,e),(n=Object(k.a)(this,Object(d.a)(e).call(this,a))).direction="left",n}return Object(c.a)(e,a),e}(E),f=function(a){function e(a){var n;return Object(s.a)(this,e),(n=Object(k.a)(this,Object(d.a)(e).call(this,a))).direction="right",n}return Object(c.a)(e,a),e}(E),O=(n(46),function(a){function e(){return Object(s.a)(this,e),Object(k.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(c.a)(e,a),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:this.props.index===this.props.activeIndex?"carousel__indicator carousel__indicator--active":"carousel__indicator",onClick:this.props.onClick})}}]),e}(t.Component)),w=(n(47),function(a){function e(){return Object(s.a)(this,e),Object(k.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(c.a)(e,a),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:this.props.index===this.props.activeIndex?"carousel__slide carousel__slide--active":"carousel__slide"},i.a.createElement("div",{className:"carousel-slide__content"},this.props.slide.content))}}]),e}(t.Component)),A=(n(48),function(a){function e(a){var n;return Object(s.a)(this,e),(n=Object(k.a)(this,Object(d.a)(e).call(this,a))).loopSlide=n.loopSlide.bind(Object(j.a)(n)),n.goToSlide=n.goToSlide.bind(Object(j.a)(n)),n.goToPrevSlide=n.goToPrevSlide.bind(Object(j.a)(n)),n.goToNextSlide=n.goToNextSlide.bind(Object(j.a)(n)),n.state={activeIndex:0},n.loopSlide(),n}return Object(c.a)(e,a),Object(m.a)(e,[{key:"loopSlide",value:function(){this.goToNextSlide(),setTimeout(this.loopSlide,5e3)}},{key:"goToSlide",value:function(a){this.setState({activeIndex:a})}},{key:"goToPrevSlide",value:function(a){a&&a.preventDefault();var e=this.state.activeIndex,n=this.props.slides.length;e<1&&(e=n),--e,this.setState({activeIndex:e})}},{key:"goToNextSlide",value:function(a){a&&a.preventDefault();var e=this.state.activeIndex;e===this.props.slides.length-1&&(e=-1),++e,this.setState({activeIndex:e})}},{key:"render",value:function(){var a=this;return i.a.createElement("div",{className:"carousel"},i.a.createElement("div",{className:"background-image"},i.a.createElement("img",{src:this.props.slides[this.state.activeIndex].backgroundImage,alt:"background"})),i.a.createElement("div",{className:"carousel-main"},i.a.createElement(v,{onClick:function(e){return a.goToPrevSlide(e)}}),i.a.createElement("div",{className:"carousel__slides"},this.props.slides.map(function(e,n){return i.a.createElement(w,{key:n,index:n,activeIndex:a.state.activeIndex,slide:e})})),i.a.createElement(f,{onClick:function(e){return a.goToNextSlide(e)}})),i.a.createElement("div",{className:"carousel__indicators"},this.props.slides.map(function(e,n){return i.a.createElement(O,{key:n,index:n,activeIndex:a.state.activeIndex,onClick:function(e){return a.goToSlide(n)}})})))}}]),e}(t.Component)),N=n(26),S=n.n(N),T=n(27),I=n.n(T),x=n(28),C=n.n(x),B=[{title:"Apakah aku normal?",slug:"apakah-aku-normal",preview:"Banyak gadis remaja mengalami perasaan tidak menyukai tubuh mereka pada satu titik atau lain. Di media, kita cenderung melihat hanya tipe tubuh tertentu, jadi tidak mengejutkan bahwa seseorang mungkin merasa buruk tentang tubuhnya.",backgroundImage:S.a,content:i.a.createElement("div",null,i.a.createElement("p",null,"Banyak gadis remaja mengalami perasaan tidak menyukai tubuh mereka pada satu titik atau lain. Di media, kita cenderung melihat hanya tipe tubuh tertentu, jadi tidak mengejutkan bahwa seseorang mungkin merasa buruk tentang tubuhnya."),i.a.createElement("p",null,'Katya Summers, 17, dari Piscataway, NJ, mengutip ini sebagai alasan mengapa banyak gadis memiliki masalah tubuh: "Anda tidak melihat banyak tubuh telanjang wanita sehari-hari sepanjang waktu."'),i.a.createElement("p",null,'Dan ketika Anda tersandung gambar tubuh di media, mereka sering menjalani operasi kosmetik atau dipilih karena mereka terlihat seperti beberapa "ideal." Jadi apakah itu ada hubungannya dengan payudara Anda atau vulva Anda atau bentuk tubuh Anda, kemungkinan adalah segala sesuatu yang membuat Anda malu tentang tubuh Anda mungkin normal dan banyak gadis lain mengalami perasaan serupa.'),i.a.createElement("h4",null,"Payudara"),i.a.createElement("p",null,"Beberapa gadis cenderung merasa bahwa payudara mereka terlalu kecil. Ini adalah sesuatu yang ditangani Lily Greene, 17, Piscataway, NJ, sebelumnya."),i.a.createElement("p",null,'"Saya selalu berpikir payudara saya seperti ... terlalu kecil, tetapi kemudian saya menyadari bahwa ukuran tangan mereka sangat bagus, seperti pas di tangan dengan benar - dan mereka tidak memberi saya masalah punggung! Mereka tidak terlalu kecil, dan mereka tidak terlalu besar. Mereka hebat!"'),i.a.createElement("p",null,"Keyakinan Lily adalah sesuatu yang banyak perempuan raih. Butuh waktu berbulan-bulan atau bertahun-tahun bagi seseorang untuk merasa nyaman dengan tubuhnya."),i.a.createElement("p",null,"Bagaimana jika Anda tidak peduli dengan ukuran payudara Anda, tetapi faktanya ukurannya berbeda? Banyak wanita dan gadis remaja memiliki payudara yang dua ukuran berbeda. Sebagian besar waktu, perbedaannya tidak banyak. Ada juga kemungkinan bahwa pada saat payudara seorang gadis selesai berkembang, ukurannya bahkan akan keluar. Tetapi meskipun begitu, mereka terkadang tidak. Ini berbeda untuk semua orang, dan semuanya normal."),i.a.createElement("p",null,'Beberapa gadis mungkin juga memperhatikan bahwa puting mereka tidak menunjukkan, tetapi sebaliknya tampak datar atau mungkin sebenarnya terbalik, yang berarti mereka berbalik. Ini normal, seperti halnya beberapa orang memiliki pusar yang \u201cpusing\u201d dan beberapa memiliki "bawaan". Variasi dalam puting adalah umum.'),i.a.createElement("p",null,"Areola \u2014 area kulit di sekitar puting yang lebih gelap daripada bagian payudara lainnya \u2014 adalah hal lain yang bervariasi di antara anak perempuan. Seperti beberapa gadis, Lily juga berjuang dengan ini."),i.a.createElement("p",null,"\"Saya benar-benar berpikir saya terlalu gelap untuk sementara waktu,\" katanya. \u201cTeman-teman cowokku pernah berbicara tentang bagaimana dalam porno mereka melihat wanita, dan jika areola wanita itu 'terlalu gelap' atau 'terlalu besar,' mereka seperti 'Oh, itu menjijikkan!' Dan untuk sementara waktu rasanya seperti , 'Bagaimana jika milik saya terlalu gelap?'\u201d"),i.a.createElement("p",null,"Pada kenyataannya, warna areola berbeda dari orang ke orang. Apakah areola besar atau gelap atau kecil dan pucat, berbeda untuk semua orang dan tidak ada yang merasa malu."),i.a.createElement("h4",null,"Vulva"),i.a.createElement("p",null,"Vulva adalah bagian lain dari tubuh yang bisa membuat perempuan merasa tidak aman. Untuk memulainya, ada labia, yang memiliki dua bagian: labia majora dan labia minora. Labia majora adalah bibir luar, dan selama dan setelah pubertas, rambut tumbuh pada mereka. Labia minora adalah bibir bagian dalam, dan merupakan dua lipatan di kedua sisi lubang vagina. Beberapa gadis memiliki labia minora yang lebih panjang dari labia majora mereka, dan itu O.K. Warna juga berbeda di antara labia setiap gadis."),i.a.createElement("p",null,'Sage Wilson, 14, dari Wichita, KS, memperhatikan bahwa labia-nya "lebih gelap daripada setiap bagian lain dari tubuhnya," yang biasa terjadi. Banyak gadis memiliki labia yang warnanya berbeda dari bagian tubuh lainnya. Itu normal.'),i.a.createElement("p",null,'Klitoris \u2014 organ yang terletak di dekat bagian atas vulva dengan lebih dari 8.000 ujung saraf \u2014 juga merupakan sesuatu yang berbeda di antara wanita. Beberapa gadis mungkin memiliki klitoris kecil yang disembunyikan oleh kap klitoris. Beberapa gadis mungkin memiliki klitoris yang lebih besar yang dapat menyerupai penis yang sangat kecil. Tidak ada "ukuran yang tepat" \u2014semuanya berbeda.'),i.a.createElement("p",null,"Labia dan klitoris memiliki berbagai bentuk, ukuran, dan warna. Jika kami berbaris gambar vulva wanita yang berbeda, tidak ada dua yang akan terlihat persis sama, yang sebenarnya sangat menakjubkan jika Anda memikirkannya."),i.a.createElement("p",null,'Ketika saya bertanya kepada Lily saran apa yang dia miliki untuk gadis-gadis yang mencoba merasa nyaman dengan tubuh mereka, dia berkata, "Sadarilah bahwa tubuhmu berbeda dari temanmu dan teman mereka."'),i.a.createElement("p",null,"Langkah pertama untuk merasa nyaman dengan tubuh Anda adalah menerima seperti apa rupanya dan fakta bahwa itu adalah milik Anda. Anda tidak akan terlihat seperti gadis-gadis di TV karena Anda bukan mereka. Kamu adalah kamu."))},{title:"Mabuk bukan berarti setuju untuk bersetubuh!",slug:"mabuk-bukan-berarti-setuju-untuk-bersetubuh",preview:"Seringkali, orang berpendapat bahwa itu adalah pilihan seseorang untuk minum dan mereka harus sepenuhnya menyadari efek alkohol pada pikiran; oleh karena itu, adalah kesalahan mereka jika mereka bangun pagi berikutnya dan menyadari bahwa mereka diperkosa. Tapi itu bukan kesalahan orang yang diperkosa.",backgroundImage:I.a,content:i.a.createElement("div",null,i.a.createElement("p",null,"Saya berlari ke atas dan membuka pintu ke berbagai ruangan, mencari teman dekat saya di sebuah pesta. Akhirnya, saya membuka pintu kamar tidur, dan di sanalah dia, hampir telanjang bulat di tempat tidur dengan seorang atlet mabuk memaksa lidahnya ke tenggorokannya. Mata saya mengunci matanya, tetapi dia memalingkan muka dan melanjutkan apa yang dia lakukan. Teman saya terlihat rentan, seolah-olah dia tidak memiliki kendali atas apa yang terjadi. Pada awalnya, saya menutup pintu dan berpikir. Haruskah saya menghentikan mereka? Haruskah saya membiarkan mereka melanjutkan? Tidak. Salah satu teman terdekat saya mabuk; dia tidak bisa menyetujui apa yang terjadi. Dengan cepat, saya menangkap teman baik saya yang lain di pesta itu, dan kami berdua menerobos masuk ke dalam ruangan dan menghentikan hal-hal yang lebih jauh."),i.a.createElement("h4",null,"Perkosaan adalah Perkosaan"),i.a.createElement("p",null,"Meskipun kami tahu Anda harus berusia di atas 21 tahun untuk mengonsumsi alkohol di Amerika Serikat, kenyataannya adalah beberapa remaja minum di acara sosial dan pesta. Kadang-kadang, orang mencoba mengambil keuntungan dari mereka yang berada di bawah pengaruh, karena mereka tahu dia tidak dapat membuat keputusan yang masuk akal. Melalui agresi, kegigihan dan bujukan, seseorang yang mabuk dapat dipaksa atau dipaksa untuk terlibat dalam perilaku seksual. Ini pemerkosaan."),i.a.createElement("p",null,"Seringkali, orang berpendapat bahwa itu adalah pilihan seseorang untuk minum dan mereka harus sepenuhnya menyadari efek alkohol pada pikiran; oleh karena itu, adalah kesalahan mereka jika mereka bangun pagi berikutnya dan menyadari bahwa mereka diperkosa. Tapi itu bukan kesalahan orang yang diperkosa. Bahkan, seseorang tidak dapat secara hukum menyetujui ketika dia berada di bawah pengaruh. Periode. Jadi, jika seseorang mengatakan ya saat mabuk atau tinggi, itu secara hukum tidak. Jika orang yang mabuk itu mengajukan dakwaan pemerkosaan, secara hukum itu adalah perkosaan karena seseorang tidak bisa menyetujui jenis kelamin apa pun, termasuk berhubungan seks, meraba dan oral seks, ketika berada di bawah pengaruh. Itu bukan orang yang minum kesalahan, tetapi itu adalah kesalahan siapa pun yang mengambil keuntungan dari seseorang yang mabuk."),i.a.createElement("p",null,i.a.createElement("em",null,"Lihat itu? Hentikan.")),i.a.createElement("p",null,"Orang seharusnya tidak memperkosa. Adalah pemerkosa yang bertanggung jawab dan perlu bertanggung jawab penuh atas kejahatan tersebut. Salahnya sering diletakkan pada orang yang diperkosa, terutama jika alkohol atau zat lain terlibat. Pola pikir ini perlu diubah, dan siapa pun dapat membantu mengubahnya. Jika Anda menyaksikan suatu pertemuan di mana Anda berpikir seseorang mungkin diperkosa, Anda harus turun tangan dan menghentikannya."),i.a.createElement("p",null,'Misalnya, seperti yang saya lakukan, Anda dapat meminta seorang teman untuk membantu Anda turun tangan. Atau Anda dapat membantu teman Anda dengan membuat pengalihan atau membuat alasan. Katakanlah Anda berdua harus pulang karena perjalanan Anda ada di sini, lalu ambil teman Anda dan pergi. Tentu saja, Anda selalu dapat menarik pengalihan khas "polisi datang \u2014 semua orang keluar" untuk menyingkirkan pemerkosa yang potensial. Terlepas dari bagaimana Anda mengintervensi, Anda harus berada di sana untuk calon korban \u2015 pastikan orang itu dirawat dan pulang dengan selamat.'),i.a.createElement("p",null,'Saya tidak akan pernah melupakan teks panjang "terima kasih" yang panjang dan rumit yang saya dapatkan sehari setelah pesta. Pada awalnya, teman saya menyalahkan dirinya sendiri atas apa yang hampir terjadi, tetapi saya meyakinkannya bahwa itu selalu kesalahan si pemerkosa \u2014 dan hanya kesalahan si pemerkosa. Saya tidak yakin apa yang akan terjadi jika saya tidak menghentikannya. Meskipun tidak mungkin, mungkin dia akan menyadari bahwa dia salah dan berhenti. Tapi itu adalah peluang yang tidak sebanding dengan risikonya. Yang saya tahu adalah bahwa saya membuat keputusan yang tepat. "Ya" mabuk adalah "tidak" dan akan selamanya demikian.'))},{title:"Menolong teman keluar dari hubungan yang toxic",slug:"menolong-teman-keluar-dari-hubungan-yang-toxic",preview:"Tahukah Anda bahwa setiap tahun di AS, hampir 1,5 juta siswa sekolah menengah akan mengalami pelecehan fisik dari pasangan yang berpacaran? Kedengarannya terlalu banyak, kan?",backgroundImage:C.a,content:i.a.createElement("div",null,i.a.createElement("p",null,"Tahukah Anda bahwa setiap tahun di AS, hampir 1,5 juta siswa sekolah menengah akan mengalami pelecehan fisik dari pasangan yang berpacaran? Kedengarannya terlalu banyak, kan? Dan itu bahkan tidak termasuk berapa banyak remaja yang mengalami pelecehan jenis lain dari pasangan intim, seperti pelecehan emosional, verbal dan seksual. Namun, hanya 33 persen remaja yang memberi tahu siapa pun tentang pelecehan tersebut. Kenapa ini bisa terjadi?"),i.a.createElement("p",null,"Yah, korban pelecehan sering dihadapkan dengan banyak stigma dan rasa malu. Adalah umum bagi para korban kekerasan dalam pacaran untuk diberi tahu bahwa mereka hanya mengada-ada dan dianggap setidaknya bertanggung jawab atas pelecehan itu sendiri (atau dikenal sebagai korban menyalahkan). Hal ini membuat sulit untuk mengencani korban kekerasan untuk maju dan mendapatkan bantuan, karena tidak ada yang mau berurusan dengan reaksi negatif. Selain itu, banyak remaja jatuh cinta dengan pasangan mereka yang kasar dan tidak ingin meninggalkan hubungan."),i.a.createElement("p",null,"Akhirnya, remaja dan orang tua sama-sama sering tidak tahu tanda-tanda bahwa pelecehan sedang terjadi dan kurang terdidik tentang kekerasan kencan remaja pada umumnya. Inilah sebabnya kami meminta bantuan Laura Luciano, Direktur Sementara Kantor Pencegahan Kekerasan dan Bantuan Korban di Universitas Rutgers. Dia bersemangat tentang pelecehan dan pencegahan kekerasan seksual dan memberikan konseling, pendidikan dan intervensi krisis kepada banyak orang muda. Kami menanyakan beberapa pertanyaan kepadanya untuk mendapatkan informasi lebih lanjut tentang pelecehan dan apa yang dapat kami lakukan untuk menghentikannya."),i.a.createElement("p",null,i.a.createElement("em",null,"Apa itu pelecehan? Dan apa saja jenis pelecehan yang terjadi?")),i.a.createElement("p",null,"Orang dapat mendefinisikan pelecehan dengan berbagai cara, tetapi biasanya, pelecehan dapat dijelaskan sebagai segala bentuk perlakuan kejam atau kekerasan. Ini dapat berkisar dari memanipulasi seseorang (menipu mereka untuk melakukan sesuatu yang tidak ingin mereka lakukan), menjaga mereka dari berkomunikasi dengan orang lain (sering disebut isolasi), menggunakan intimidasi untuk mengancam mereka, memanggil nama atau meletakkan mereka dengan cara tertentu untuk menggunakan segala jenis kekuatan fisik (misalnya, memukul, menampar, mendorong, meninju, menendang, menggigit) atau memaksa atau memaksa (berusaha meyakinkan atau menekan) mereka untuk melakukan sesuatu secara seksual yang tidak ingin mereka lakukan. Kami juga melihat penyalahgunaan terjadi melalui penggunaan media sosial atau teknologi, seperti melecehkan seseorang melalui teks atau posting media sosial, mengikuti atau melacak mereka melalui cara-cara itu atau memaksa mereka untuk memberikan kata sandi atau menghapus pengikut atau teman dari situs."),i.a.createElement("p",null,i.a.createElement("em",null,"Apa yang harus Anda lakukan jika orang yang dicintai memberi tahu Anda bahwa mereka dilecehkan?")),i.a.createElement("p",null,"Jika orang yang dicintai mengungkapkan kepada Anda, ada beberapa hal yang dapat Anda lakukan untuk mendukung dan membantu:"),i.a.createElement("p",null,"Percayalah apa yang mereka katakan kepada Anda."),i.a.createElement("p",null,"Bersikap mendukung dan tidak menghakimi. (Jangan mencoba mencari kesalahan, menyalahkan atau menghakimi keputusan mereka.)"),i.a.createElement("p",null,"Bicarakan dengan mereka tentang apa yang mereka inginkan atau butuhkan."),i.a.createElement("p",null,"Tawarkan bantuan dalam menemukan sumber daya. (Hubungi hotline atau cari online untuk informasi dari situs yang memiliki reputasi baik.)"),i.a.createElement("p",null,"Jika mereka ingin mencari bantuan, Anda dapat menawarkan untuk pergi bersama mereka. Jangan menekan atau memaksa mereka untuk melakukan sesuatu yang tidak ingin mereka lakukan."),i.a.createElement("p",null,"Akhirnya, ini bisa sangat melelahkan, jadi jaga dirimu baik-baik dan berbicaralah dengan seseorang jika perlu. Anda dapat melakukannya tanpa melanggar kerahasiaan orang yang Anda cintai."),i.a.createElement("p",null,i.a.createElement("em",null,"Apakah ada populasi tertentu yang lebih rentan terhadap pelecehan?")),i.a.createElement("p",null,"Wanita berusia antara 18 hingga 24 tahun paling sering dilecehkan oleh pasangan intim. Juga secara umum, individu dengan disabilitas perkembangan dan fisik berisiko tinggi untuk pelecehan seksual, seperti juga anggota populasi LGBTQ. Namun, tingkat kekerasan dalam pacaran adalah konsisten terlepas dari ras, agama, status sosial ekonomi atau orientasi seksual."),i.a.createElement("p",null,i.a.createElement("em",null,"Tindakan apa yang bisa kita lakukan setiap hari untuk menghentikan pelecehan dan membantu orang yang selamat?")),i.a.createElement("p",null,'Pelaku sangat penting untuk mengakhiri kekerasan berkencan. Ini berarti bersedia untuk mengambil tindakan secara langsung atau tidak langsung ketika kita melihat atau mendengar sesuatu yang tidak benar. Saya mendorong orang untuk menggunakan "usus" mereka dan, jika terasa salah, untuk mengambil tindakan. Ini bisa jadi menantang penggunaan bahasa yang tidak pantas oleh teman, bertanya pada teman apakah mereka membutuhkan bantuan atau tidak masalah setelah Anda melihat pasangan romantis mereka berteriak pada mereka atau berbicara dengan teman yang memperlakukan orang yang mereka cintai dengan cara yang kasar. Kami dapat meminta bantuan orang lain jika kami tidak tahu harus berbuat apa.'))}],_=(n(49),function(a){function e(){return Object(s.a)(this,e),Object(k.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(c.a)(e,a),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"carousel-card"},i.a.createElement("div",{className:"card"},i.a.createElement("h2",null,this.props.title),this.props.text))}}]),e}(t.Component)),K=B.map(function(a,e){return{content:i.a.createElement(_,{title:a.title,text:a.preview}),backgroundImage:a.backgroundImage}}),P=n(29),L=n.n(P),J=(n(50),[{title:"Pacarku memaksaku berhubungan seksual sebagai tanda sayang kepadanya, padahal aku tidak mau karena aku tau itu salah, tetapi aku takut pacarku meninggalkanku. Aku harus bagaimana?"},{title:"Bagaimana cara aku bisa menghindari kehamilan tidak diinginkan?"},{title:"Apa itu Penyakit Menular Seksual dan bagaimana penularannya?"},{title:"Aku merasa tubuhku tidak sama seperti perempuan lainnya. Aku masih memakai singlet sementara teman-temanku sudah memakai BH. Apakah aku normal?"},{title:"Apa hukuman bagi pelaku kekerasan seksual?"}]),M=function(a){function e(){return Object(s.a)(this,e),Object(k.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(c.a)(e,a),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"home"},i.a.createElement("div",{className:"page"},i.a.createElement(y,null),i.a.createElement("div",{className:"carousel-container"},i.a.createElement(A,{slides:K}))),i.a.createElement("div",{className:"page second"},i.a.createElement("div",{className:"join"},i.a.createElement("div",{className:"circle"},i.a.createElement("span",null,"Kamu penyintas kekerasan seksual? Ikuti komunitas penyintas kami!"))),i.a.createElement("div",{className:"questions"},J.map(function(a,e){return i.a.createElement("div",{className:"question"},a.title)}))),i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"container footer-content"},i.a.createElement("img",{className:"logo",src:L.a,alt:"komnas perempuan"}),i.a.createElement("h3",null,"Didukung oleh:"))))}}]),e}(b),D=(n(51),function(a){function e(){return Object(s.a)(this,e),Object(k.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(c.a)(e,a),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"article"},i.a.createElement(y,null),i.a.createElement("div",{className:"cards"},B.map(function(a,e){return i.a.createElement(l.b,{to:"".concat(p.ROUTE_ARTICLE,"/").concat(a.slug)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("img",{src:a.backgroundImage,alt:"thumb"})),i.a.createElement("div",{className:"card-body"},i.a.createElement("h2",null,a.title),i.a.createElement("p",null,a.preview," Baca lebih lanjut ..."))))})))}}]),e}(b)),U=function(a){function e(){return Object(s.a)(this,e),Object(k.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(c.a)(e,a),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement(g.c,null,i.a.createElement(g.a,{path:p.ROUTE_ARTICLE,component:D}),i.a.createElement(g.a,{path:p.ROUTE_HOME,component:M}))}}]),e}(t.Component),R=n(15),H=n(30),W=n.n(H),V=(n(52),function(a){function e(a){var n;return Object(s.a)(this,e),(n=Object(k.a)(this,Object(d.a)(e).call(this,a))).chatInput=i.a.createRef(),n.state={messages:[{text:"Halo, apakah ada yang bisa saya bantu?",source:"reply"}]},n.addText=n.addText.bind(Object(j.a)(n)),n.onSendButtonClick=n.onSendButtonClick.bind(Object(j.a)(n)),n.onChatInputKeyUp=n.onChatInputKeyUp.bind(Object(j.a)(n)),n}return Object(c.a)(e,a),Object(m.a)(e,[{key:"onChatInputKeyUp",value:function(a){13===a.keyCode&&this.onSendButtonClick()}},{key:"addText",value:function(a,e){this.setState(function(n){var t=n.messages;return t.unshift({text:a,source:e?"request":"reply"}),Object(R.a)({},n,{messages:t})})}},{key:"onSendButtonClick",value:function(){this.addText(this.chatInput.current.value,!0),this.chatInput.current.value=""}},{key:"render",value:function(){return i.a.createElement("div",{className:"contact-bubble-chat"+(this.props.isOpen?" active":"")},i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"photo-wrapper"},i.a.createElement("img",{src:W.a,alt:"profpic"})),i.a.createElement("div",{className:"profile"},i.a.createElement("div",{className:"name"},"Titisari Wardani"),i.a.createElement("div",{className:"status"},"Online"))),i.a.createElement("div",{className:"body"},this.state.messages.map(function(a,e){return i.a.createElement("div",{className:"message "+a.source},a.text)})),i.a.createElement("div",{className:"footer"},i.a.createElement("input",{type:"text",className:"chat",ref:this.chatInput,onKeyUp:this.onChatInputKeyUp}),i.a.createElement("button",{className:"send",onClick:this.onSendButtonClick},i.a.createElement("i",{className:"fa fa-paper-plane"}))))}}]),e}(t.Component)),q=(n(53),function(a){function e(){return Object(s.a)(this,e),Object(k.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(c.a)(e,a),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"contact-fab"},i.a.createElement("div",{className:"circle",onClick:this.props.onClick},i.a.createElement("i",{className:"fa fa-comment-dots"})))}}]),e}(t.Component)),Y=(n(54),function(a){function e(a){var n;return Object(s.a)(this,e),(n=Object(k.a)(this,Object(d.a)(e).call(this,a))).state={isBubbleOpen:!1},n.toggleBubbleOpen=n.toggleBubbleOpen.bind(Object(j.a)(n)),n}return Object(c.a)(e,a),Object(m.a)(e,[{key:"toggleBubbleOpen",value:function(){this.setState(function(a){return Object(R.a)({},a,{isBubbleOpen:!a.isBubbleOpen})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"contact"},i.a.createElement(V,{isOpen:this.state.isBubbleOpen}),i.a.createElement(q,{onClick:this.toggleBubbleOpen}))}}]),e}(t.Component));n(55);u.a.render(i.a.createElement("div",null,i.a.createElement(l.a,null,i.a.createElement(U,null)),i.a.createElement(Y,null)),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(a){a.unregister()})}],[[31,1,2]]]);
//# sourceMappingURL=main.9c42d680.chunk.js.map