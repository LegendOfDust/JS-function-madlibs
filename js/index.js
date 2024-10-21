console.log('Successfully linked');

//Generate Mad Libs Function
const generateMadLibs = () => {
    //get values
    const dayOfWeek = getInput('dayOfWeek');
    const somethingEdible = getInput('somethingEdible');
    const articleOfClothing = getInput('articleOfClothing');
    const animal = getInput('animal');
    const name = getInput('name');

    const madLib = `When I woke up this ${dayOfWeek}, I started by having a healthy serving of ${somethingEdible} for breakfast. I then put on my ${articleOfClothing} and went outside to take my pet ${animal} for a walk. My ${animal}'s name is ${name}!`;
    const MadLibElement = document.getElementById('mad-libs');
    MadLibElement.textContent = madLib;
    //concatinate Mad Lib string
    //Update P tag to show Mad lib
}
    
//Reusable get input function
const getInput = (id) => {
    const input = document.getElementById(id);
    const thing = input.value;
    return thing;
}
