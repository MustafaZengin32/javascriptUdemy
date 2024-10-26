const points=[70,75,25,35,10,80,27];
const newpoint=points.map( eleman=>{


    return eleman+5;
}


)

console.log(newpoint);

const students=[

    {name:'can',point:40},
    {name:'tuba',point:60},
    {name:'elif',point:30},
    {name:'osman',point:100}
];

const newstud=students.map(a=>{

    if(a.point<50){

        return a.point+=10;
    }

    else{

        return a;
    }




})

console.log(students);