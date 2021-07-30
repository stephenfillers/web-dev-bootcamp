const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweetList');

// This will work, but is inefficient. See how we use the form's elements property below.
// const usernameInput = document.querySelector('#usernameField');
// const tweetInput = document.querySelector('#tweetField');

tweetForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting to a new page

    // Forms contain an 'elements' property that can help determine an element's .value
    const username = tweetForm.elements.username; // Derive username from a form element named 'username'
    const tweet = tweetForm.elements.tweet; // Derive tweet from a form element named 'tweet'
    createTweet(username.value, tweet.value); // Call the function that creates the new tweet
    tweet.value = ''; // Reset the tweet form field
})

const createTweet = (username, tweet) => {
    const newTweet = document.createElement('li'); // Create the list item that will contain our full tweet
    const boldName = document.createElement('b'); // Create the bold tag that will contain our username
    boldName.append(username); // Append the username value to an empty bold tag
    newTweet.append(boldName); // Append said bold tag to the newTweet list item
    newTweet.append(` - ${tweet}`); // Append the tweet value to the list item after the bold tag
    tweetsContainer.append(newTweet); // Append the list item to tweetList, our original <ul> element
}