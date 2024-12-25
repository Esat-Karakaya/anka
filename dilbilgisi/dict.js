// foreignFlags
// 0b??_: noun -> 0, verb -> 1
// 0b?_1: yumuşama var -> 1 
// 0b_?1: tek heceli -ar, -er veya çok heceli ir, ır, ur, ür -> 0; değilse -> 1 

// localFlags (noun)
// 0b_: 3.tekil yok -> 0, 3.tekil var -> 1

// localFlags (verb)
// 0b?_: yumuşama var -> 1
// 0b_?: tek heceli -ar, -er veya çok heceli ir, ır, ur, ür -> 0; değilse -> 1 

export const words = {
	"absürt": { locals: ["saçma"], foreignFlags:0, localFlags: [0] },
	"adapte ol": { locals: ["uyum sağla", "uy"], foreignFlags:0b101, localFlags: [0b00, 0b00] },  // FIIL
	"adisyon": { locals: ["hesap"], foreignFlags:0, localFlags: [0] },
	"aidat": { locals: ["ödenti"], foreignFlags:0, localFlags: [0] },
	"aksesuar": { locals: ["donatımlık"], foreignFlags:0, localFlags: [0] },
	"alternatif": { locals: ["seçenek", "farklı", "karşı", "almaşık", "dalgalı"], foreignFlags:0, localFlags: [0, 0, 0, 0,] },
	"ambiyans": { locals: ["hava", "tarz"], foreignFlags:0, localFlags: [0, 0] },
	"analiz": { locals: ["çözümleme"], foreignFlags:0, localFlags: [0] },
	"analiz et": { locals: ["çözümle, değerlendir"], foreignFlags:0b011, localFlags: [0b00, 0b00] },  // FIIL
	"anksiyete": { locals: ["kaygı bozukluk"], foreignFlags:0, localFlags: [1] },
	"anons": { locals: ["duyuru", "sesli duyuru"], foreignFlags:0, localFlags: [0, 0] },
	"anons et": { locals: ["duyur"], foreignFlags:0b011, localFlags: [0b00] },  // FIIL
	"anormal": { locals: ["düzgüsüz"], foreignFlags:0, localFlags: [0, 0] },
	"antipatik": { locals: ["sevimsiz"], foreignFlags:0, localFlags: [0] },
	"bug": { locals: ["yazılım hata"], foreignFlags:0, localFlags: [1], pronounce:"bag" }, // YOK
	"bodyguard": { locals: ["koruma"], foreignFlags:0, localFlags: [0] },
	"brifing": { locals: ["özetlem", "bilgilendirme"], foreignFlags:0, localFlags: [0, 0] },
	"brifing al": { locals: ["bilgilen"], foreignFlags:0b101, localFlags: [0] },  // FIIL
	"brifing ver": { locals: ["bilgilendir"], foreignFlags:0b101, localFlags: [0] },  // FIIL
	"brifing yap": { locals: ["bilgilendir"], foreignFlags:0b001, localFlags: [0b00] },  // FIIL // YOK
	"bye": { locals: ["görüşürüz"], foreignFlags:0, localFlags: [0] }, // YOK
	"bye bye": { locals: ["güle güle"], foreignFlags:0, localFlags: [0] }, // YOK
	"catering": { locals: ["yemek hizmet"], foreignFlags:0, localFlags: [1] },
	"center": { locals: ["merkez"], foreignFlags:0, localFlags: [0] },
	"cool": { locals: ["havalı"], foreignFlags:0, localFlags: [0] }, // YOK
	"counter": { locals: ["sayaç"], foreignFlags:0, localFlags: [0] }, // YOK
	"cv": { locals: ["özgeçmiş"], foreignFlags:0, localFlags: [0], pronounce: "sivi", },  // YOK
	"data": { locals: ["veri"], foreignFlags:0, localFlags: [0] },
	"deadline": { locals: ["süre sonu"], foreignFlags:0, localFlags: [0], pronounce: "layn" },
	"deklare et": { locals: ["bildir"], foreignFlags:0b011, localFlags: [0b00] },  // FIIL
	"default": { locals: ["varsayılan"], foreignFlags:0, localFlags: [0] }, // YOK
	"departman": { locals: ["bölüm"], foreignFlags:0, localFlags: [0] },
	"dermatoloji": { locals: ["cildiye"], foreignFlags:0, localFlags: [0] },
	"dermatolog": { locals: ["cildiyeci"], foreignFlags:0, localFlags: [0] },
	"direkt": { locals: ["aracısız", "doğruca", "doğrudan doğruya"], foreignFlags:0, localFlags: [0, 0, 0] },
	"dizayn": { locals: ["tasarım"], foreignFlags:0, localFlags: [0] },
	"dizayn et": { locals: ["tasarla"], foreignFlags:0b011, localFlags: [0b00] },  // FIIL // YOK
	"doküman": { locals: ["belge"], foreignFlags:0, localFlags: [0] },
	"download et": { locals: ["indir"], foreignFlags:0b011, localFlags: [0b00] },  // FIIL  // YOK
	"driver": { locals: ["sürücü"], foreignFlags:0, localFlags: [0] }, // YOK
	"e-mail": { locals: ["elektronik posta"], foreignFlags:0, localFlags: [0] },
	"elimine et": { locals: ["ele"], foreignFlags:0b011, localFlags: [0b00] },  // FIIL
	"elimine ol": { locals: ["elen"], foreignFlags:0b101, localFlags: [0b00] },  // FIIL
	"emperyalizm": { locals: ["yayılmacılık", "yayılımcılık"], foreignFlags:0, localFlags: [0b00, 0b00] },
	"empoze et": { locals: ["dayat"], foreignFlags:0b011, localFlags: [0b00] },  // FIIL
	"emergency": { locals: ["acil"], foreignFlags:0, localFlags: [0] }, // YOK
	"ekstra": { locals: ["fazladan", "üstün nitelikli", "en iyi"], foreignFlags:0, localFlags: [0, 0, 0] },
	"extra": { locals: ["fazladan", "üstün nitelikli", "en iyi"], foreignFlags:0, localFlags: [0, 0, 0] },
	"entegre ol": { locals: ["bütünleş"], foreignFlags:0b101, localFlags: [0b00] },  // FIIL
	"exit": { locals: ["çıkış"], foreignFlags:0, localFlags: [0] }, // YOK
	"feedback": { locals: ["geri bildirim"], foreignFlags:0, localFlags: [0] }, // YOK
	"full time": { locals: ["tam gün"], foreignFlags:0, localFlags: [0] },
	"global": { locals: ["küresel"], foreignFlags:0, localFlags: [0] },
	"globalleş": { locals: ["küreselleş"], foreignFlags:0b101, localFlags: [0b00] },  // FIIL
	"globalleştir": { locals: ["küreselleştir"], foreignFlags:0b101, localFlags: [0b00] },  // FIIL
	"hümanist": { locals: ["insancıl"], foreignFlags:0, localFlags: [0] },
	"internet": { locals: ["genel ağ"], foreignFlags:0, localFlags: [0] },
	"illegal": { locals: ["yasa dış"], foreignFlags:0, localFlags: [1] },
	"illegallik": { locals: ["yasa dışılık"], foreignFlags:0, localFlags: [0] },
	"imitasyon": { locals: ["taklit"], foreignFlags:0, localFlags: [0] },
	"influencer": { locals: ["etkileyen"], foreignFlags:0, localFlags: [0], pronounce: "sır", }, // YOK
	"irregular": { locals: ["düzensiz"], foreignFlags:0, localFlags: [0] }, // YOK
	"istatistik": { locals: ["sayımlama", "sayım bilim"], foreignFlags:0, localFlags: [0, 1] },
	"izolasyon": { locals: ["yalıtım"], foreignFlags:0, localFlags: [0] },
	"jenerasyon": { locals: ["kuşak"], foreignFlags:0, localFlags: [0] },
	"jeneratör": { locals: ["üreteç"], foreignFlags:0, localFlags: [0] },
	"kampüs": { locals: ["yerleşke"], foreignFlags:0, localFlags: [0] },
	"klasifikasyon": { locals: ["sınıflandırma"], foreignFlags:0, localFlags: [0] },
	"kompleks": { locals: ["karmaşık"], foreignFlags:0, localFlags: [0] },
	"komünikasyon": { locals: ["iletişim"], foreignFlags:0, localFlags: [0] },
	"konser": { locals: ["dinleti"], foreignFlags:0, localFlags: [0] },
	"kontrol": { locals: ["denetim"], foreignFlags:0, localFlags: [0], pronounce: "kontrül" }, // kontrol kelimesine gelen eklere uyum için "pronounce: 'kontrül'" dendi
	"kontrollü": { locals: ["denetimli"], foreignFlags:0, localFlags: [0]},
	"kontrolsüz": { locals: ["denetimsiz"], foreignFlags:0, localFlags: [0]},
	"kontrol et": { locals: ["denetle", "yokla"], foreignFlags:0b011, localFlags: [0b00, 0b00] },  // FIIL
	"konsensüs": { locals: ["uzlaşma"], foreignFlags:0, localFlags: [0] },
	"kreatif": { locals: ["yaratıcı"], foreignFlags:0, localFlags: [0] },
	"kriter": { locals: ["ölçüt"], foreignFlags:0, localFlags: [0] },
	"laptop": { locals: ["dizüstü"], foreignFlags:0, localFlags: [0] },
	"link": { locals: ["bağlantı"], foreignFlags:0, localFlags: [0] },
	"mantalite": { locals: ["anlayış"], foreignFlags:0, localFlags: [0] },
	"manipülasyon": { locals: ["yönlendirme"], foreignFlags:0, localFlags: [0] },
	"manipüle et": { locals: ["yönlendir"], foreignFlags:0b011, localFlags: [0b00] },  // FIIL
	"manipüle ol": { locals: ["yönlendiril"], foreignFlags:0b101, localFlags: [0b00] },  // FIIL
	"manipüle olun": { locals: ["yönlendiril"], foreignFlags:0b101, localFlags: [0b00] },  // FIIL
	"motivasyon": { locals: ["isteklendirme", "güdüleme"], foreignFlags:0, localFlags: [0, 0] },
	"monoton": { locals: ["tekdüze"], foreignFlags:0, localFlags: [0] },
	"nickname": { locals: ["takma ad"], foreignFlags:0, localFlags: [1] },
	"normal": { locals: ["olağan"], foreignFlags:0, localFlags: [0] },
	"objektif": { locals: ["nesnel"], foreignFlags:0, localFlags: [0] },
	"objektiflik": { locals: ["nesnellik"], foreignFlags:0, localFlags: [0] },
	"offline": { locals: ["çevrim dış"], foreignFlags:0, localFlags: [1] },
	"okey": { locals: ["tamam"], foreignFlags:0, localFlags: [0] },
	"okeyle": { locals: ["onayla"], foreignFlags:0b001, localFlags: [0b00] },  // FIIL
	"online": { locals: ["çevrimiç"], foreignFlags:0, localFlags: [1] },
	"opsiyonel": { locals: ["isteğe bağlı"], foreignFlags:0, localFlags: [0] },
	"optimist": { locals: ["iyimser"], foreignFlags:0, localFlags: [0] },
	"orijinal": { locals: ["özgün"], foreignFlags:0, localFlags: [0] },
	"orjinal": { locals: ["özgün"], foreignFlags:0, localFlags: [0] },
	"part time": { locals: ["yarım gün"], foreignFlags:0, localFlags: [0] },
	"partikül": { locals: ["parçacık"], foreignFlags:0, localFlags: [0] },
	"partiküllü": { locals: ["parçacıklı"], foreignFlags:0, localFlags: [0] },
	"perspektif": { locals: ["bakış açı", "görünge",], foreignFlags:0, localFlags: [1, 0] },
	"pesimist": { locals: ["kötümser"], foreignFlags:0, localFlags: [0] },
	"pozisyon": { locals: ["konum", "durum"], foreignFlags:0, localFlags: [0, 0] },
	"prestij": { locals: ["saygınlık"], foreignFlags:0, localFlags: [0] },
	"prezentasyon": { locals: ["sunum"], foreignFlags:0, localFlags: [0] },
	"printer": { locals: ["yazıcı"], foreignFlags:0, localFlags: [0] },
	"print out": { locals: ["çıktı"], foreignFlags:0, localFlags: [0] },
	"provoke et": { locals: ["kışkırt"], foreignFlags:0b001, localFlags: [0b00] },  // FIIL
	"randıman": { locals: ["verim"], foreignFlags:0, localFlags: [0] },
	"reaksiyon": { locals: ["tepki", "tepkime", "yanıt"], foreignFlags:0, localFlags: [0, 0, 0] },
	"recycling": { locals: ["geri dönüşüm"], foreignFlags:0, localFlags: [0] }, // YOK
	"relaks ol": { locals: ["rahatla"], foreignFlags:0b101, localFlags: [0b00] },  // FIIL
	"resetle": { locals: ["sıfırla"], foreignFlags:0, localFlags: [0] }, // YOK
	"revize et": { locals: ["düzelt", "yenile"], foreignFlags:0b001, localFlags: [0b00, 0b00] },  // FIIL
	"rezervuar": { locals: ["depo"], foreignFlags:0, localFlags: [0] },
	"screenshot": { locals: ["ekran görüntü"], foreignFlags:0, localFlags: [1] }, // YOK
	"security": { locals: ["güvenlik"], foreignFlags:0, localFlags: [0] }, // YOK
	"selfie": { locals: ["özçekim"], foreignFlags:0, localFlags: [0] },
	"selfie çek": { locals: ["özçekim yap"], foreignFlags:0b001, localFlags: [0b00] },  // FIIL
	"selfie çekil": { locals: ["özçekim yap"], foreignFlags:0b001, localFlags: [0b00] },  // FIIL
	"sempatik": { locals: ["sevimli"], foreignFlags:0, localFlags: [0] },
	"spontane": { locals: ["anlık", "kendiliğinden"], foreignFlags:0, localFlags: [0,0] },
	"sponsor": { locals: ["destekleyici"], foreignFlags:0, localFlags: [0] },
	"ss": { locals: ["ekran görüntü"], foreignFlags:0, localFlags: [1], pronounce: "eses" }, // YOK
	"star": { locals: ["yıldız"], foreignFlags:0, localFlags: [0] },
	"start al": { locals: ["başla"], foreignFlags:0b001, localFlags: [0b00] },  // FIIL
	"straplez": { locals: ["askısız giysi"], foreignFlags:0, localFlags: [0] },
	"subjektif": { locals: ["öznel"], foreignFlags:0, localFlags: [0] },
	"trend": { locals: ["eğilim"], foreignFlags:0, localFlags: [0] },
	"web": { locals: ["ağ"], foreignFlags:0, localFlags: [0] }, // YOK
};

export const twoWords={
	adapte: [ 'ol' ],
	analiz: [ 'et' ],
	anons: [ 'et' ],
	brifing: [ 'yap', 'al', 'ver' ],
	deklare: [ 'et' ],
	dizayn: [ 'et' ],
	download: [ 'et' ],
	elimine: [ 'et', 'ol' ],
	empoze: [ 'et' ],
	entegre: [ 'ol', 'et' ],
	kontrol: [ 'et' ],
	manipüle: [ 'et', 'ol' ],
	provoke: [ 'et' ],
	relaks: [ 'ol' ],
	revize: [ 'et' ],
	save: [ 'et' ],
	selfie: [ 'çek' ],
	start: [ 'al' ],
	bye: [ 'bye' ],
	full: [ 'time' ],
	nick: [ 'name' ],
	part: [ 'time' ],
}