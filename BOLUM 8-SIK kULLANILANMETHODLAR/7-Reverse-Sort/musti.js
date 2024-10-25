const names=['can','tuba','elif','hakan','osman'];

names.sort();

console.log(names);//[ 'can', 'elif', 'hakan', 'osman', 'tuba' ]

names.reverse();

console.log(names);//[ 'tuba', 'osman', 'hakan', 'elif', 'can' ]


const points=[70,75,25,3,35,10,80,27];//10 25 27 3 35 70 75 80

points.sort();//10 25 27 3 35 70 75 80

console.log("first"+points);

points.sort( (a,b)=>{

    if(a>b){

        return -1;

    }

    else if(b>a){

        return 1;
    }

    else{
        return 0;
    }
}

);

console.log("second"+points);



points.reverse();

console.log(points);



const students=[
    {name:'can',point:40},
    {name:'tuba',point:60},
    {name:'elif',point:30},
    {name:'osman',point:100}
];

students.sort((a,b)=>{

    if(a.point>b.point){

        return -1;//dokunma
    }


    else if(b.point>a.point){

        return 1;//yer degistir
    }

    else{

        return 0;//hicbisi yapma
    }

}

);

console.log(students);