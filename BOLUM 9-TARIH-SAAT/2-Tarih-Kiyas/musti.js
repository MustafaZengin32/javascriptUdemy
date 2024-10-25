const stardate=new Date('2016-07-15');

console.log(stardate);//2016-07-15T00:00:00.000Z

const now=new Date();

const diff=now.getTime()-stardate.getTime();

console.log(diff);//261346092125 ms olarak

const mins=Math.round(diff/1000/60);//ms-s-dk

console.log(mins);//4355771

const hours=Math.round(mins/60);

console.log(`Video cekmeye ${mins} dakika once basladim`);

console.log(`Video cekmeye ${hours} saat once basladim`);

const gun=Math.round(hours/24);

console.log(`Video cekmeye ${gun} gun once basladim`);

const yil=Math.round(gun/365);

console.log(`Video cekmeye ${yil} yil once basladim`);

const timestampp=261346526771;

console.log(new Date(timestampp));







