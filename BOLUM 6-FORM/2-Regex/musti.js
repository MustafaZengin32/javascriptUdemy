//regex101.com
/**
 * Regex / ile baslar / ile biter
 * ^can$ -> can ->basinda ve sonunda bisi olmayacak sadece ortadaki can olacak
 * [a-z] -> a dan z ye kadar olan harfleri alir
 * [a-zA-Z] -> kucuk ve buyuk harfleri alir
 * [a-zA-Z0-9] -> kucuk buyuk harfleri ve rakamlari alir
 * [^a-z] -> a dan z ye kadar olan harfleri almayacak
 * [a-z]{2} -> 2 tane harf alacak
 * [a-z]{2,4} -> 2 ile 4 arasinda harf alacak
 * [a-z]{2,} -> 2 den fazla harf alacak
 * [a-z]+ -> 1 den fazla harf alacak
 * [a-z]* -> 0 dan fazla harf alacak
 * [a-z]? -> 0 ya da 1 tane harf alacak
 * \d -> rakamlari alir
 * \D -> rakamlari almaz
 * \w -> harf ve rakamlari alir
 * \W -> harf ve rakamlari almaz
 * \s -> bosluk karakteri alir
 * \S -> bosluk karakteri almaz
 * . -> herhangi bir karakteri alir
 * \. -> noktayi alir
 * .{5,10} -> 5 ile 10 arasinda karakter alir
 */

const username='cancanbo';
const pattern=/^[a-z]{6,10}$/;

let result=pattern.test(username);

if(result){
    console.log('regex test gecti');
}
else{
    console.log('regex test basarisiz');
}

