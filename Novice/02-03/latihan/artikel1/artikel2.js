let meetups = [
    {name :'JavaScript', isActive:true, member:700},
    {name :'Angular', isActive:true, member:900},
    {name :'Node', isActive:false, member:600},
    {name :'React', isActive:true, member:500},
];
let sumFPChain = meetups.filter((m)=>{
    return m.isActive;
})
.map((m)=>{
    return m.members- (0.1*m.members);
})
.reduce((acc, m)=>{
    return acc + m;
},0);
console.log(sumFPChain); 