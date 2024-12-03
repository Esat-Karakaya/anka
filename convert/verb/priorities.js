import { olumsuzluk, haberKipi, dilekKipi, şahıs, birleşikZaman, dir, kurallıBir } from "./çekim.js";
import { isimFiil, sıfatFiil, zarfFiil } from "./fiilimsi.js";

export const priorities = {
	kök: [
		[haberKipi.geniş, "zaman"],
		[haberKipi.genişOlumsuz, "zaman"],
		[haberKipi.genişOlumsuzS1, "kök"],
		[haberKipi.genişOlumsuzP1, "kök"],
		[haberKipi.şimdiki, "zaman"],
		[haberKipi.görülen, "zaman"],
		[haberKipi.görülenS2, "şahıs"],
		[haberKipi.görülenP1, "end"],
		[haberKipi.görülenP2, "şahıs"],
		[haberKipi.duyulan, "zaman"],
		[haberKipi.gelecek, "zaman"],

		[dilekKipi.istek, "zaman"],
		[dilekKipi.istekS1, "şahıs"],
		[dilekKipi.istekP1, "end"],
		[dilekKipi.şart, "zaman"],
		[dilekKipi.şartP1, "end"],
		[dilekKipi.şartP2, "şahıs"],
		[dilekKipi.şartS2, "şahıs"],
		[dilekKipi.emirS3, "end"],
		[dilekKipi.emirP3, "end"],
		[dilekKipi.emirP2_1, "end"],
		[dilekKipi.emirP2_2, "end"],
		[dilekKipi.gereklilik, "zaman"],
		[dilekKipi.gereklilikS1, "şahıs"],

		[olumsuzluk, "kök"],

		[isimFiil.ma, "isim"],
		[isimFiil.ış, "isim"],
		[isimFiil.mak, "isim"],

		[sıfatFiil.an, "isim"],
		[sıfatFiil.ası, "isim"],
		[sıfatFiil.mez, "isim"],
		[sıfatFiil.ar, "isim"],
		[sıfatFiil.dik, "isim"],
		[sıfatFiil.ecek, "isim"],
		[sıfatFiil.miş, "isim"],

		[zarfFiil.arak, "end"],
		[zarfFiil.alı, "end"],
		[zarfFiil.ip, "end"],
		[zarfFiil.ince, "end"],
		[zarfFiil.madan, "end"],
		[zarfFiil.maksızın, "end"],
		[zarfFiil.ken, "end"],
		[zarfFiil.dikçe, "end"],

		[kurallıBir.yeterlilik, "kök"],
		[kurallıBir.yeterlilikOlumsuz, "kök"],
		[kurallıBir.yeterlilikGenişOlumsuz, "zaman"],
		[kurallıBir.yeterlilikGenişOlumsuzP1, "şahıs"],
		[kurallıBir.yeterlilikGenişOlumsuzS1, "şahıs"],
		[kurallıBir.tezlik, "kök"],
		[kurallıBir.yaklaşma, "kök"],
		[kurallıBir.edur, "kök"],
	],

	zaman: [
		[şahıs.s1, "şahıs"],
		[şahıs.s2, "şahıs"],
		[şahıs.p1, "end"],
		[şahıs.p2, "şahıs"],
		[şahıs.p3, "zaman"],

		[birleşikZaman.görülen, "zaman"],
		[birleşikZaman.görülenS2, "şahıs"],
		[birleşikZaman.görülenP1, "end"],
		[birleşikZaman.görülenP2, "şahıs"],

		[birleşikZaman.duyulan, "zaman"],

		[birleşikZaman.şart, "zaman"],
		[birleşikZaman.şartP1, "end"],
		[birleşikZaman.şartP2, "şahıs"],
		[birleşikZaman.şartS2, "şahıs"],

		[dir, "end"],
	],

	şahıs: [
		[dir, "end"],
	],

	end: [],
}