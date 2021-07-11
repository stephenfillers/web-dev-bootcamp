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
    event.target.nodeName === 'LI' && event.target.remove();
})