let ogrenci={

        ad:'Musti',
    
        yas:29,
    
        email:'mzng@gmail.com',
    
        sinif:12,
    
        dersler:[ 
            {
            isim:'Math',
            puan:90
        },
    
        {
            isim:'Fizik',
            puan:80
        },
    
        {
            isim:'Kimya',
            puan:85
        }
    ],

    printer(){

        this.dersler.forEach(function(komp){

            console.log(komp)
        }



        );
    }
    
    
    
    };

    console.log(ogrenci.dersler[0].isim);

    ogrenci.printer();

    

