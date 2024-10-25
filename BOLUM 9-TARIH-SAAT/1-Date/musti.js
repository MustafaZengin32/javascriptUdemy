const now=new Date();

console.log(now);//2024-10-25T19:45:28.696Z

console.log(typeof now);//object

console.log(now.getFullYear());

console.log(now.getMonth());//ocak 0 inci index de Oct normalde 10 ama 9 verir index den dolayi

console.log(now.getDate());//25 date normal

console.log(now.getDay());//5 //haftanin hangi gunu

console.log(now.getHours());

console.log(now.getMinutes());

console.log(now.getSeconds());

console.log(now.getTime());//1729886256169 zaman farkinda kullanilir

console.log(now.toDateString());//Fri Oct 25 2024

console.log(now.toTimeString());//22:02:33 GMT+0200 (Central European Summer Time)

console.log(now.toLocaleString());//10/25/2024, 10:03:02 PM
















