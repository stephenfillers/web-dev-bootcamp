const comments = [
    {
        username: 'Tammy',
        text: 'lololol',
        votes: 9
    },
    {
        username: 'Fishboi',
        text: 'glub glub',
        votes: 12387,
    },
]

// How to access Fishboi's text?
comments[1]["text"]; // or
comments[1].text;

// How to access Tammy's votes?
comments[0]["votes"]; // or
comments[0].votes;