let meetups = [
    {name :'JS', isActive:true, member:450},
    {name :'Angular', isActive:true, member:900},
    {name :'Node', isActive:false, member:900},
];
let activeMeetups = [];
for (let i = 0; i < meetups.length; i++){
    let m = meetups[i];
    if (m.isActive) {
        activeMeetups.push(m);
    }
}

console.log(activeMeetups);

let activeMeetupsFP = [];
activeMeetupsFP = (meetups.filter((m)=>{
    return m.isActive;
}));

console.log(activeMeetupsFP);