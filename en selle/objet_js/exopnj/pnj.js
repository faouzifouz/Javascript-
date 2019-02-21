let character={
    name :"fouz",
    age:33,
    items_to_give :["epee","hache","couteau"],
    objetRadom : function (){
        return character.items_to_give[Math.floor(Math.random()*character.items_to_give.length)];
        
        
    }
};
for(x in character){
    console.log(character[x]);
}


console.log(character.objetRadom());
