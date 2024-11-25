import {
	çoğulEki,
	iyelikEki,
	ilgiZamiriEki,
	halEki,
	tamlayanEki,
	eşitlikEki,
	birliktelikEki,
	genişZamanEki,
	görülenZamanEki,
	duyulanZamanEki,
	şartZamanEki,
	nePekiştirmesi
} from "./suffix-adders.js";

export const priorities = {
	kök : {
		çoğulEki,

		iyelikEkiS1: iyelikEki.s1,
		iyelikEkiS2: iyelikEki.s2,
		iyelikEkiS3: iyelikEki.s3,
		iyelikEkiP1: iyelikEki.p1,
		iyelikEkiP2: iyelikEki.p2,
		iyelikEkiP3: (...props) => iyelikEki.p3(...props),

		halEkiBelirtme: halEki.belirtme,
		halEkiYaklaşma: halEki.yaklaşma,
		halEkiBulunma: halEki.bulunma,
		halEkiAyrılma: halEki.ayrılma,

		tamlayanEki,

		eşitlikEki,

		birliktelikEki,
	},
	çoğulEki : {
		iyelikEkiS1: iyelikEki.s1,
		iyelikEkiS2: iyelikEki.s2,
		iyelikEkiS3: iyelikEki.s3,
		iyelikEkiP1: iyelikEki.p1,
		iyelikEkiP2: iyelikEki.p2,
		iyelikEkiP3: (...props) => iyelikEki.p3(...props),

		halEkiBelirtme: halEki.belirtme,
		halEkiYaklaşma: halEki.yaklaşma,
		halEkiBulunma: halEki.bulunma,
		halEkiAyrılma: halEki.ayrılma,

		tamlayanEki,

		eşitlikEki,

		birliktelikEki,
	},
	iyelikEkiS1 : {
		halEkiBelirtme: halEki.belirtme,
		halEkiYaklaşma: halEki.yaklaşma,
		halEkiBulunma: halEki.bulunma,
		halEkiAyrılma: halEki.ayrılma,

		tamlayanEki,

		eşitlikEki,

		birliktelikEki,

		nePekiştirmesi,
	},
	get iyelikEkiS2(){ return this.iyelikEkiS1 },
	get iyelikEkiS3(){ return this.iyelikEkiS1 },
	get iyelikEkiP1(){ return this.iyelikEkiS1 },
	get iyelikEkiP2(){ return this.iyelikEkiS1 },
	get iyelikEkiP3(){ return this.iyelikEkiS1 },

	ilgiZamiriEki : {
		çoğulEki,

		halEkiBelirtme: halEki.belirtme,
		halEkiYaklaşma: halEki.yaklaşma,
		halEkiBulunma: halEki.bulunma,
		halEkiAyrılma: halEki.ayrılma,

		tamlayanEki,

		eşitlikEki,

		birliktelikEki,

		nePekiştirmesi,
	},

	halEkiBelirtme: { ilgiZamiriEki },
	halEkiYaklaşma: { ilgiZamiriEki },
	halEkiBulunma: { ilgiZamiriEki },
	halEkiAyrılma: { ilgiZamiriEki },

	tamlayanEki : { ilgiZamiriEki },

	eşitlikEki : {
		çoğulEki,

		iyelikEkiS1: iyelikEki.s1,
		iyelikEkiS2: iyelikEki.s2,
		iyelikEkiS3: iyelikEki.s3,
		iyelikEkiP1: iyelikEki.p1,
		iyelikEkiP2: iyelikEki.p2,
		iyelikEkiP3: (...props) => iyelikEki.p3(...props),

		halEkiBelirtme: halEki.belirtme,
		halEkiYaklaşma: halEki.yaklaşma,
		halEkiBulunma: halEki.bulunma,
		halEkiAyrılma: halEki.ayrılma,

		birliktelikEki,
	},
	birliktelikEki : {},
	nePekiştirmesi : {},
}

export const isimEylem = [
	(...props)=>genişZamanEki.s1(...props),
	(...props)=>genişZamanEki.s2(...props),
	(...props)=>genişZamanEki.s3(...props),
	(...props)=>genişZamanEki.p1(...props),
	(...props)=>genişZamanEki.p2(...props),
	(...props)=>genişZamanEki.p3_1(...props),
	(...props)=>genişZamanEki.p3_2(...props),

	(...props)=>görülenZamanEki.s1(...props),
	(...props)=>görülenZamanEki.s2(...props),
	(...props)=>görülenZamanEki.s3(...props),
	(...props)=>görülenZamanEki.p1(...props),
	(...props)=>görülenZamanEki.p2(...props),
	(...props)=>görülenZamanEki.p3(...props),

	(...props)=>duyulanZamanEki.s1(...props),
	(...props)=>duyulanZamanEki.s2(...props),
	(...props)=>duyulanZamanEki.s3(...props),
	(...props)=>duyulanZamanEki.p1(...props),
	(...props)=>duyulanZamanEki.p2(...props),
	(...props)=>duyulanZamanEki.p3(...props),

	(...props)=>şartZamanEki.s1(...props),
	(...props)=>şartZamanEki.s2(...props),
	(...props)=>şartZamanEki.s3(...props),
	(...props)=>şartZamanEki.p1(...props),
	(...props)=>şartZamanEki.p2(...props),
	(...props)=>şartZamanEki.p3(...props),
]