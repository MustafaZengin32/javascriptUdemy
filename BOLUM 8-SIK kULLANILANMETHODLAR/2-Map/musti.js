const points=[70,75,25,35,10,80,27];

/*

const newPoint=points.map(update);

function update(x){

    return x+=10;

}

console.log(newPoint);

*/

const newPoint=points.map(update=>{

    return update+=10;
}
);

console.log(newPoint);


const students=[

    {name:'can',point:40},
    {name:'tuba',point:60},
    {name:'elif',point:30},
    {name:'osman',point:100}
];

students.map(kys=>{

    if(kys.point<50){

        return kys.point+=10;

    }

    else{
        return kys
    }

})

console.log(students);