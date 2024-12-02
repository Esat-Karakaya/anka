import { olumsuzluk, haberKipi, dilekKipi, şahıs, birleşikZaman, dir } from "./suffix-adders.js";

export const priorities = {
	kök: [
		[haberKipi.geniş, "zaman"],
		[haberKipi.genişOlumsuz, "zaman"],
		[haberKipi.genişOlumsuzS1, "şahıs"],
		[haberKipi.genişOlumsuzP1, "end"],
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