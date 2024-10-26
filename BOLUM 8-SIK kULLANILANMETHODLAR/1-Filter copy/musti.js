const points=[70,75,25,9,35,10,80,27]; //50 uzeri notlar

const elliustu=points.filter((a)=>{


    return a>50;

}

)

console.log(elliustu);

const students=[

    {name:'can',passed:false},
    {name:'tuba',passed:false},
    {name:'ali',passed:true},
    {name:'mustafa',passed:true}

];

const succ=students.filter((a)=>{

    return a.passed===false;


}
    
)

console.log(succ);