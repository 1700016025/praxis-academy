function kamus() {

    let kamus = new Map([
        ['yellow', 'Kuning']
    ]);
    console.log(kamus);
    var a = prompt("Kata : ");
    var b = prompt("kata : ");

    kamus.set(a,b);

    alert(kamus.get(a));
    console.log(kamus);
}
kamus();