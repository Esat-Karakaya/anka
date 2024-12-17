// foreignFlags
// 0b??_: noun -> 0, verb -> 1
// 0b?_1: yumuşama var -> 1 
// 0b_?1: tek heceli -ar, -er veya çok heceli ir, ır, ur, ür -> 0; değilse -> 1 

// localFlags (noun)
// 0b_: 3.tekil yok -> 0, 3.tekil var -> 1

// localFlags (verb)
// 0b?_: yumuşama var -> 1
// 0b_?: tek heceli -ar, -er veya çok heceli ir, ır, ur, ür -> 0; değilse -> 1 

export const words = { // kelimelerin farklı karşılıkları yazılmalı
	"absürt": { locals: ["saçma"], foreignFlags:0, localFlags: [0] },
	"adapte ol": { locals: ["uyum sağla", "uy"], foreignFlags:0b101, localFlags: [0b00, 0b00] },  // FIIL
	"adisyon": { locals: ["hesap fiş"], foreignFlags:0, localFlags: [1] },
	"aidat": { locals: ["ödenti"], foreignFlags:0, localFlags: [0] },
	"aksesuar": { locals: ["donatımlık"], foreignFlags:0, localFlags: [0] },
	"alternatif": { locals: ["seçenek", "farklı", "karşı", "almaşık", "dalgalı"], foreignFlags:0, localFlags: [0, 0, 0, 0,] },
	"ambiyans": { locals: ["ortam"], foreignFlags:0, localFlags: [0] },
	"analiz": { locals: ["çözümleme"], foreignFlags:0, localFlags: [0] },
	"analiz et": { locals: ["çözümle, değerlendir"], foreignFlags:0b011, localFlags: [0b00, 0b00] },  // FIIL
	"anksiyete": { locals: ["kaygı"], foreignFlags:0, localFlags: [0] },
	"anons": { locals: ["duyuru"], foreignFlags:0, localFlags: [0] },
	"anons et": { locals: ["duyur"], foreignFlags:0b011, localFlags: [0b00] },  // FIIL
	"anormal": { locals: ["olağandışı"], foreignFlags:0, localFlags: [0] },
	"antipatik": { locals: ["sevimsiz"], foreignFlags:0, localFlags: [0] },
	"bodyguard": { locals: ["koruma"], foreignFlags:0, localFlags: [0] },
	"brifing": { locals: ["özetleme"], foreignFlags:0, localFlags: [0] },
	"brifing al": { locals: ["bilgilen"], foreignFlags:0b101, localFlags: [0] },  // FIIL
	"brifing ver": { locals: ["bilgilendir"], foreignFlags:0b101, localFlags: [0] },  // FIIL
	"brifing yap": { locals: ["özetle"], foreignFlags:0b001, localFlags: [0b00] },  // FIIL
	"bye": { locals: ["hoşça kal"], foreignFlags:0, localFlags: [0] },
	"bye bye": { locals: ["güle güle"], foreignFlags:0, localFlags: [0] },
	"catering": { locals: ["yemek hizmet"], foreignFlags:0, localFlags: [1] },
	"center": { locals: ["merkez"], foreignFlags:0, localFlags: [0] },
	"cool": { locals: ["havalı"], foreignFlags:0, localFlags: [0] },
	"counter": { locals: ["sayaç"], foreignFlags:0, localFlags: [0] },
	"cv": { locals: ["özgeçmiş"], foreignFlags:0, localFlags: [0], pronounce: "sivi", },
	"data": { locals: ["veri"], foreignFlags:0, localFlags: [0] },
	"deadline": { locals: ["son tarih"], foreignFlags:0, localFlags: [0], pronounce: "layn" },
	"deklare et": { locals: ["bildir"], foreignFlags:0b011, localFlags: [0b00] },  // FIIL
	"default": { locals: ["varsayılan"], foreignFlags:0, localFlags: [0] },
	"departman": { locals: ["bölüm"], foreignFlags:0, localFlags: [0] },
	"dermatoloji": { locals: ["cildiye"], foreignFlags:0, localFlags: [0] },
	"dizayn": { locals: ["tasarım"], foreignFlags:0, localFlags: [0] },
	"dizayn et": { locals: ["tasarla"], foreignFlags:0b011, localFlags: [0b00] },  // FIIL
	"döküman": { locals: ["belge"], foreignFlags:0, localFlags: [0] },
	"download et": { locals: ["indir"], foreignFlags:0b011, localFlags: [0b00] },  // FIIL
	"driver": { locals: ["sürücü"], foreignFlags:0, localFlags: [0] },
	"e-mail": { locals: ["e-posta"], foreignFlags:0, localFlags: [0] },
	"elimine et": { locals: ["ele"], foreignFlags:0b011, localFlags: [0b00] },  // FIIL
	"elimine ol": { locals: ["elen"], foreignFlags:0b101, localFlags: [0b00] },  // FIIL
	"emperyalizm": { locals: ["yayılmacılık", "yayılımcılık"], foreignFlags:0, localFlags: [0b00, 0b00] },
	"empoze et": { locals: ["dayat"], foreignFlags:0b011, localFlags: [0b00] },  // FIIL
	"emergency": { locals: ["acil"], foreignFlags:0, localFlags: [0] },
	"ekstra": { locals: ["fazladan", "üstün nitelikli", "en iyi"], foreignFlags:0, localFlags: [0, 0, 0] },
	"entegre ol": { locals: ["bütünleş"], foreignFlags:0b101, localFlags: [0b00] },  // FIIL
	"entegre et": { locals: ["bütünleştir"], foreignFlags:0b011, localFlags: [0b00] },  // FIIL
	"exit": { locals: ["çıkış"], foreignFlags:0, localFlags: [0] },
	"feedback": { locals: ["geri bildirim"], foreignFlags:0, localFlags: [0] },
	"full": { locals: ["dolu"], foreignFlags:0, localFlags: [0] },
	"full time": { locals: ["tam gün"], foreignFlags:0, localFlags: [0] },
	"global": { locals: ["küresel"], foreignFlags:0, localFlags: [0] },
	"hümanist": { locals: ["insancıl"], foreignFlags:0, localFlags: [0] },
	"internet": { locals: ["genel ağ"], foreignFlags:0, localFlags: [0] },
	"illegal": { locals: ["yasa dış"], foreignFlags:0, localFlags: [1] },
	"imitasyon": { locals: ["taklit"], foreignFlags:0, localFlags: [0] },
	"influencer": { locals: ["etkileyen"], foreignFlags:0, localFlags: [0], pronounce: "sır", },
	"irregular": { locals: ["düzensiz"], foreignFlags:0, localFlags: [0] },
	"izolasyon": { locals: ["yalıtım"], foreignFlags:0, localFlags: [0] },
	"jenerasyon": { locals: ["nesil"], foreignFlags:0, localFlags: [0] },
	"kampüs": { locals: ["yerleşke"], foreignFlags:0, localFlags: [0] },
	"klasifikasyon": { locals: ["sınıflandırma"], foreignFlags:0, localFlags: [0] },
	"kompleks": { locals: ["karmaşık"], foreignFlags:0, localFlags: [0] },
	"komünikasyon": { locals: ["iletişim"], foreignFlags:0, localFlags: [0] },
	"konser": { locals: ["dinleti"], foreignFlags:0, localFlags: [0] },
	"kontrol": { locals: ["denetim"], foreignFlags:0, localFlags: [0], pronounce: "kontrül" }, // kontrol kelimesine gelen eklere uyum için "pronounce: 'kontrül'" dendi
	"kontrollü": { locals: ["denetimli"], foreignFlags:0, localFlags: [0]}, // kontrol kelimesine gelen eklere uyum için "pronounce: 'kontrül'" dendi
	"kontrolsüz": { locals: ["denetimsiz"], foreignFlags:0, localFlags: [0]}, // kontrol kelimesine gelen eklere uyum için "pronounce: 'kontrül'" dendi
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
	"motivasyon": { locals: ["güdüleme"], foreignFlags:0, localFlags: [0] },
	"monoton": { locals: ["tekdüze"], foreignFlags:0, localFlags: [0] },
	"nick name": { locals: ["kullanıcı ad"], foreignFlags:0, localFlags: [1] },
	"normal": { locals: ["olağan"], foreignFlags:0, localFlags: [0] },
	"objektif": { locals: ["nesnel"], foreignFlags:0, localFlags: [0] },
	"offline": { locals: ["çevrim dış"], foreignFlags:0, localFlags: [1] },
	"okey": { locals: ["tamam"], foreignFlags:0, localFlags: [0] },
	"okeyle": { locals: ["onayla"], foreignFlags:0b001, localFlags: [0b00] },  // FIIL
	"online": { locals: ["çevrim iç"], foreignFlags:0, localFlags: [1] },
	"opsiyonel": { locals: ["seçmeli"], foreignFlags:0, localFlags: [0] },
	"optimist": { locals: ["iyimser"], foreignFlags:0, localFlags: [0] },
	"orijinal": { locals: ["özgün"], foreignFlags:0, localFlags: [0] },
	"orjinal": { locals: ["özgün"], foreignFlags:0, localFlags: [0] },
	"part time": { locals: ["yarı zamanlı"], foreignFlags:0, localFlags: [0] },
	"partikül": { locals: ["parçacık"], foreignFlags:0, localFlags: [0] },
	"perspektif": { locals: ["bakış açı"], foreignFlags:0, localFlags: [1] },
	"pesimist": { locals: ["kötümser"], foreignFlags:0, localFlags: [0] },
	"pozisyon": { locals: ["durum"], foreignFlags:0, localFlags: [0] },
	"prestij": { locals: ["saygınlık"], foreignFlags:0, localFlags: [0] },
	"prezentasyon": { locals: ["sunum"], foreignFlags:0, localFlags: [0] },
	"printer": { locals: ["yazıcı"], foreignFlags:0, localFlags: [0] },
	"print out": { locals: ["çıktı"], foreignFlags:0, localFlags: [0] },
	"provoke et": { locals: ["kışkırt"], foreignFlags:0b001, localFlags: [0b00] },  // FIIL
	"randıman": { locals: ["verim"], foreignFlags:0, localFlags: [0] },
	"reaksiyon": { locals: ["tepkime"], foreignFlags:0, localFlags: [0] },
	"recycling": { locals: ["geri dönüşüm"], foreignFlags:0, localFlags: [0] },
	"relaks ol": { locals: ["rahatla"], foreignFlags:0b101, localFlags: [0b00] },  // FIIL
	"resetle": { locals: ["sıfırla"], foreignFlags:0, localFlags: [0] },
	"revize et": { locals: ["yenile"], foreignFlags:0b001, localFlags: [0b00] },  // FIIL
	"screenshot": { locals: ["ekran görüntü"], foreignFlags:0, localFlags: [1] },
	"security": { locals: ["güvenlik"], foreignFlags:0, localFlags: [0] },
	"selfie": { locals: ["özçekim"], foreignFlags:0, localFlags: [0] },
	"selfie çek": { locals: ["özçekim yap"], foreignFlags:0b001, localFlags: [0b00] },  // FIIL
	"selfie çekil": { locals: ["özçekim yap"], foreignFlags:0b001, localFlags: [0b00] },  // FIIL
	"sempatik": { locals: ["sevimli"], foreignFlags:0, localFlags: [0] },
	"spontane": { locals: ["kendiliğinden"], foreignFlags:0, localFlags: [0] },
	"sponsor": { locals: ["katkıcı"], foreignFlags:0, localFlags: [0] },
	"ss": { locals: ["ekran görüntü"], foreignFlags:0, localFlags: [1], pronounce: "eses" },
	"star": { locals: ["yıldız"], foreignFlags:0, localFlags: [0] },
	"start al": { locals: ["başla"], foreignFlags:0b001, localFlags: [0b00] },  // FIIL
	"straplez": { locals: ["askısız giysi"], foreignFlags:0, localFlags: [0] },
	"subjektif": { locals: ["öznel"], foreignFlags:0, localFlags: [0] },
	"trend": { locals: ["eğilim"], foreignFlags:0, localFlags: [0] },
	"web": { locals: ["ağ"], foreignFlags:0, localFlags: [0] },
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