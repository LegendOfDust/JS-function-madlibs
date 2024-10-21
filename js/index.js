console.log('Successfully linked');

//Generate Mad Libs Function
const generateMadLibs = () => {
    //get values
    const bird = getInput('typeOfBird');
    const name = getInput('name');
    const noun = getInput('noun');
    const liquid = getInput('liquid');
    const bodyPart = getInput('bodyPart');

    const madLib = `It was a cold October day. I woke to the smell of ${bird} roasting in the kitchen. My roommate said, "See if ${name} needs a fresh ${noun}. So I carried a glass of ${liquid} into ${name}'s room. When I got there, I couldn't believe my ${bodyPart}!`;
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
