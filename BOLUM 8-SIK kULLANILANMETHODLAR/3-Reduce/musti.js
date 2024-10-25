const points=[70,75,25,35,10,80,27];

const aa=points.reduce((value,point)=>{

    if(point>50){

        value++;
    }

    return value;


},0);

console.log(aa);


const students=[
    {name:'can',point:40},
    {name:'tuba',point:60},
    {name:'elif',point:30},
    {name:'osman',point:100},
    {name:'can',point:80},
    {name:'tuba',point:30},
    {name:'elif',point:60},
    {name:'osman',point:40},

];

const result=students.reduce((value1,student1)=>{

    if(student1.name=='can'){

        value1+=student1.point;
       
    }

    return value1;

},0);

console.log(result);

