let mainCharacter={name:"casse_dent",
               level:58,
               life:5,
             weapon:{
                 name: "cure_dent",
                 damage:127,

            }}


let attack =()=>{
    alert(mainCharacter.name + " attaque avec " + mainCharacter.weapon.name + " les dégats sont de "  + mainCharacter.level*mainCharacter.weapon.damage)
}
attack()
