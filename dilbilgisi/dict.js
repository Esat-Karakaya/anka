// flags
// 0b?001: noun -> 0, verb -> 1
// 0b??10: 3.tekil yok -> 0, 3.tekil var -> 1

// flags
// 0b???_1: yabancıda yumuşama var -> 1  
// 0b??_?1: Türkçesinde yumuşama var -> 1
// 0b?_??1: yabancıda er, ar -> 0; ir, ır, ur, ür -> 1 
// 0b_???1: ir, ır, ur, ür -> 1; Türkçesinde er, ar ->0

export const words = {
	"absürt": { local: "saçma", flags: 0 },
	"adapte ol": { local: "uyum sağla", flags: 0b01001 },  // FIIL
	"adisyon": { local: "hesap fiş", flags: 0b10 },
	"aidat": { local: "ödenti", flags: 0 },
	"aksesuar": { local: "donatımlık", flags: 0 },
	"ambiyans": { local: "ortam", flags: 0 },
	"analiz": { local: "çözümleme", flags: 0 },
	"analiz et": { local: "çözümle", flags: 0b00011 },  // FIIL
	"anksiyete": { local: "kaygı", flags: 0 },
	"anons": { local: "duyuru", flags: 0 },
	"anons et": { local: "duyur", flags: 0b00011 },  // FIIL
	"anormal": { local: "olağandışı", flags: 0 },
	"antipatik": { local: "sevimsiz", flags: 0 },
	"bodyguard": { local: "koruma", flags: 0 },
	"brifing": { local: "özetleme", flags: 0 },
	"brifing yap": { local: "özetle", flags: 0b00001 },  // FIIL
	"bye": { local: "hoşça kal", flags: 0 },
	"bye bye": { local: "güle güle", flags: 0 },
	"catering": { local: "yemek hizmet", flags: 0b10 },
	"center": { local: "merkez", flags: 0 },
	"cool": { local: "havalı", flags: 0 },
	"counter": { local: "sayaç", flags: 0 },
	"cv": { local: "özgeçmiş", flags: 0b100, pronounce: "sivi",  },
	"data": { local: "veri", flags: 0 },
	"deadline": { local: "son tarih", flags: 0 },
	"deklare et": { local: "bildir", flags: 0b00011 },  // FIIL
	"default": { local: "varsayılan", flags: 0 },
	"departman": { local: "bölüm", flags: 0 },
	"dermatoloji": { local: "cildiye", flags: 0 },
	"dizayn": { local: "tasarım", flags: 0 },
	"dizayn et": { local: "tasarla", flags: 0b00011 },  // FIIL
	"döküman": { local: "belge", flags: 0 },
	"download et": { local: "indir", flags: 0b00011 },  // FIIL
	"driver": { local: "sürücü", flags: 0 },
	"e-mail": { local: "e-posta", flags: 0 },
	"elimine et": { local: "ele", flags: 0b00011 },  // FIIL
	"empoze et": { local: "dayat", flags: 0b00011 },  // FIIL
	"emergency": { local: "acil", flags: 0 },
	"ekstra": { local: "fazladan", flags: 0 },
	"entegre ol": { local: "bütünleş", flags: 0b01001 },  // FIIL
	"exit": { local: "çıkış", flags: 0 },
	"feedback": { local: "geri bildirim", flags: 0 },
	"full": { local: "dolu", flags: 0 },
	"full time": { local: "tam gün", flags: 0 },
	"global": { local: "küresel", flags: 0 },
	"hümanist": { local: "insancıl", flags: 0 },
	"illegal": { local: "yasa dış", flags: 0b10 },
	"imitasyon": { local: "taklit", flags: 0 },
	"influencer": { local: "etkileyen", flags: 0, pronounce: "sır", },
	"irregular": { local: "düzensiz", flags: 0 },
	"izolasyon": { local: "yalıtım", flags: 0 },
	"jenerasyon": { local: "nesil", flags: 0 },
	"kampüs": { local: "yerleşke", flags: 0 },
	"klasifikasyon": { local: "sınıflandırma", flags: 0 },
	"kompleks": { local: "karmaşık", flags: 0 },
	"komünikasyon": { local: "iletişim", flags: 0 },
	"konser": { local: "dinleti", flags: 0 },
	"kontrol": { local: "denetim", flags: 0 },
	"kontrol et": { local: "denetle", flags: 0b00011 },  // FIIL
	"konsensüs": { local: "uzlaşma", flags: 0 },
	"kreatif": { local: "yaratıcı", flags: 0 },
	"kriter": { local: "ölçüt", flags: 0 },
	"laptop": { local: "dizüstü", flags: 0 },
	"link": { local: "bağlantı", flags: 0 },
	"mantalite": { local: "anlayış", flags: 0 },
	"manipülasyon": { local: "yönlendirme", flags: 0 },
	"manipüle et": { local: "yönlendir", flags: 0b00011 },  // FIIL
	"manipüle ol": { local: "yönlendiril", flags: 0b01001 },  // FIIL
	"motivasyon": { local: "güdüleme", flags: 0 },
	"monoton": { local: "tekdüze", flags: 0 },
	"nick name": { local: "kullanıcı ad", flags: 0b10 },
	"normal": { local: "olağan", flags: 0 },
	"objektif": { local: "nesnel", flags: 0 },
	"offline": { local: "çevrim dış", flags: 0b10 },
	"okey": { local: "tamam", flags: 0 },
	"okeyle": { local: "onayla", flags: 0b00001 },  // FIIL
	"online": { local: "çevrim iç", flags: 0b10 },
	"opsiyonel": { local: "seçmeli", flags: 0 },
	"optimist": { local: "iyimser", flags: 0 },
	"orijinal": { local: "özgün", flags: 0 },
	"orjinal": { local: "özgün", flags: 0 },
	"part time": { local: "yarı zamanlı", flags: 0 },
	"partikül": { local: "parçacık", flags: 0 },
	"perspektif": { local: "bakış açı", flags: 0b10 },
	"pesimist": { local: "kötümser", flags: 0 },
	"pozisyon": { local: "durum", flags: 0 },
	"prestij": { local: "saygınlık", flags: 0 },
	"prezentasyon": { local: "sunum", flags: 0 },
	"printer": { local: "yazıcı", flags: 0 },
	"print out": { local: "çıktı", flags: 0 },
	"provoke et": { local: "kışkırt", flags: 0b00001 },  // FIIL
	"randıman": { local: "verim", flags: 0 },
	"reaksiyon": { local: "tepkime", flags: 0 },
	"recycling": { local: "geri dönüşüm", flags: 0 },
	"relaks ol": { local: "rahatla", flags: 0b01001 },  // FIIL
	"resetle": { local: "sıfırla", flags: 0 },
	"revize et": { local: "yenile", flags: 0b00001 },  // FIIL
	"screenshot": { local: "ekran görüntü", flags: 0b10 },
	"security": { local: "güvenlik", flags: 0 },
	"selfie": { local: "özçekim", flags: 0 },
	"selfie çek": { local: "özçekim yap", flags: 0b00001 },  // FIIL
	"selfie çekin": { local: "özçekim yap", flags: 0b00001 },  // FIIL
	"sempatik": { local: "sevimli", flags: 0 },
	"spontane": { local: "kendiliğinden", flags: 0 },
	"sponsor": { local: "katkıcı", flags: 0 },
	"ss": { local: "ekran görüntü", flags: 0b10, pronounce: "eses" },
	"star": { local: "yıldız", flags: 0 },
	"start al": { local: "başla", flags: 0b00001 },  // FIIL
	"straplez": { local: "askısız giysi", flags: 0 },
	"subjektif": { local: "öznel", flags: 0 },
	"trend": { local: "moda", flags: 0 },
	"web": { local: "ağ", flags: 0 },
};

export const twoWords={
	adapte: [ 'ol' ],
	analiz: [ 'et' ],
	anons: [ 'et' ],
	brifing: [ 'yap' ],
	deklare: [ 'et' ],
	dizayn: [ 'et' ],
	download: [ 'et' ],
	elimine: [ 'et' ],
	empoze: [ 'et' ],
	entegre: [ 'ol' ],
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