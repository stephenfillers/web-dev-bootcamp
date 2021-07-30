const tweetForm = document.querySelector('#form')
const tweetContainer = document.querySelector('#list')

tweetForm.addEventListener('submit', function(event) {   
    event.preventDefault();

    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
})

const addTweet = function(username, tweet) {
    const tweetLi = document.createElement('li');
    const boldUsername = document.createElement('b');
    boldUsername.append(username);
    tweetLi.append(boldUsername);
    tweetLi.append(` - ${tweet}`);
    tweetContainer.append(tweetLi);  
}

tweetContainer.addEventListener('click', function(event) {
    // Uses the .target property on the event object to help select the desired element.
    // .target on its own isn't enough. Using console.dir(event.target) returns a new list of properties attached to .target
    // .nodeName is what ultimately allows us to target the specific node, in this case LI.
    event.target.nodeName === 'LI' && event.target.remove(); 
    console.dir(event.target);

    // regarding the fancy &&, in a boolean 'and' operation, the right half of the program never runs if the left side is false.
    // Because the left side is true, the right side runs and removes the node we had targeted.
})