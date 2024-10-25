const points=[70,75,25,35,10,80,27]; //50 uzeri notlar

const studentPassed=points.filter(function xx (a){

    return a>50;

}
);

console.log(studentPassed);


const students=[

    {name:'can',passed:false},
    {name:'tuba',passed:false},
    {name:'ali',passed:true},
    {name:'mustafa',passed:true}

];

/*
const result=students.filter(check);

function check(x){
    
   return x.passed===true;
}

*/


const result=students.filter(check=>{


    return !check.passed;

});

console.log(result);











