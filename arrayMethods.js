const things = [
    {
        id: 0,
        title: 'whiskers on kittens',
        favorite: true,
        points: 97
    },
    {
        id: 1,
        title: 'raindrops on roses',
        favorite: true,
        points: 77
    },
    {
        id: 2,
        title: 'brown paper packages tied up with string',
        favorite: true,
        points: 87
    },
    {
        id: 3,
        title: 'dog bite',
        favorite: false,
        featured: 'true',
        points: 12
    },
    {
        id: 4,
        title: 'bee sting',
        favorite: false,
        points: 6
    }
];

myFavoriteThings = things.filter((thing) => thing.favorite === true);

console.log(myFavoriteThings);
console.log(things);

things.find((thing) =>thing.id === 2);

const selectedThingByID =id =>{
    return things.find(thing => thing.id === id);
}

const selectedThing = selectedThingByID(2);
console.log(selectedThing);