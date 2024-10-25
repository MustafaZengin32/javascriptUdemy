let ogrenci={

    ad:'Musti',

    yas:29,

    email:'mzng@gmail.com',

    sinif:12,

    dersler:['math','fizik','kimya'],

    login:function(){
       
        console.log('giris yapti');

    },

    logout:function(){

        console.log('cikis yapti');

    },

    printLessons:function(){

        console.log(this.dersler);

        this.dersler.forEach(function(dersimiz){

            console.log(dersimiz);
            
            }
            );
            


    }

};

//this icinde bulunulan window un tamamini gosterir

ogrenci.printLessons();








