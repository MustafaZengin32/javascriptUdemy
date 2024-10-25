const points=[70,75,25,35,10,80,27];

const arrayIndex=points.findIndex(point=>{

    return point==35;
});

const arralt=points.indexOf(75);


console.log(arrayIndex);

console.log(arralt);

points[arralt]=33;

points[arrayIndex]=44;

console.log(points);



const students=[
    {name:'can',point:40},
    {name:'tuba',point:60},
    {name:'elif',point:30},
    {name:'osman',point:100}
];

const changeArr=students.findIndex(chn=>{

    return chn.name=='osman';

});

students[changeArr].name='hakki';

console.log(students);




