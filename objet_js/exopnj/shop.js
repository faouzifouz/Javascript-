let shopper = [
    {title: 'Epée',
    physic: 2,
    magic: 3,
    minLevel: 8,
    available: true,}
    , 
    {title: 'Hache',
    physic: 2,
    magic: 4,
    minLevel: 15,
    available: false,}
    , 
    {title: 'Spectre',
    physic: 3,
    magic: 2,
    minLevel: 9,
    available: true}
    , 
    {title: 'Bouclier',
    physic: 40,
    magic: 40,
    minLevel: 56,
    available: false},
]



// const object = ()  => {
//     for (let x in shopper){
//         console.log(shoper[x].title)
//     }
// }
// object()

// const dispo = () =>{
// for (let x in shopper){
//     if(shopper[x].available==true){
//         console.log(shopper[x].title)
        
//     }
// }

// }
// dispo()


const niv =()=> {
    for (let x in shopper){
        if (shopper[x].minLevel >= 10){
            alert(shopper[x].title)
        }
    }
}
niv()



