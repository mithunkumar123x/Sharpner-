// console.log('person1 : show ticket ')
// console.log('person2 : show ticket');

// const promiseWifeBringTicks = new Promise((resolve , reject) => {
//    setTimeout(() => {
//     resolve('ticket')
//    } , 3000); 
// })

// const getPopcorn =   promiseWifeBringTicks.then((t) => {
//     console.log('wife : i have tics');
//     console.log('husband : we should go in');
//     console.log('wife : no , i am hungry');
//     return new Promise((resolve , reject) => resolve(`${t} Popcorn`))
// });


// const getButter = getPopcorn.then((t) => {
//     console.log('husband : i got some popcorn');
//     console.log('husband : we should go in');
//     console.log('wife : I need butter on my popcorn');
//     return new Promise((resolve , reject) => resolve(`${t} butter`))
// })

// getButter.then((t) => console.log(t));

// console.log('person4 : show ticket');
// console.log('person5 : show ticket');


console.log('person1 : Show ticket ');
console.log('person2 : Show ticket ');

const preMovie = async () => {
    const promiseWifeBringTicks = new Promise((resolve,reject) => {
        setTimeout(() => resolve('ticket') , 3000)
    });

    const getPopcorn = new Promise((resolve ,reject) => resolve(`popcorn`))
    const addButter = new Promise((resolve,reject) => resolve(`butter`))
    let ticket = await promiseWifeBringTicks;

    console.log('wife : i have the tics');
    console.log('husband : we should go in');
    console.log('wife : no, i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband : i got some ${popcorn}`);
    console.log('husband : we should go in');
    console.log('wife : I need butter in my popcorn  ');
     
    let butter = await addButter;

    console.log(`husband : i got some ${butter} on  popcorn`);
    console.log(`husband : anything else darling?`);
    console.log(`wife : lets got we are getting late`);
    console.log(`husband : thank you for the remainder *grins*`);

   const getColdDrinks = new Promise((resolve , reject) => resolve('cold drinks'));
   let drinks = await getColdDrinks;

   console.log(`husband: I got some ${drinks}`);
   console.log(`husband: Anything else ,  my dear darling ?`);
   console.log(`wife: No, let's go`);


    return ticket;


}

preMovie().then((m) => console.log(`person3: shows ${m}`))

console.log('person4 : shows ticket');
console.log('person5 : shows ticket');