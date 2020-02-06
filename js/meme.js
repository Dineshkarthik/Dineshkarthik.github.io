console.log("%cHowdy Partner..! %c\nPeeking for Source-Code.!? Drop me a Mail.\nNo Error here but I have Meme for You.", "color: #483D8B; font-size:35px;font-weight: bold; font-family: 'Times New Roman', Times, serif;", "font-size:20px;font-family: 'Times New Roman', Times, serif;");
var items = [{
    text1: "Not sure if memes in dev tools is stupid",
    text2: "or disastrous.",
    meme: "Not Sure Fry"
}, {
    text1: "Not sure if am a Good developer",
    text2: "or good at Googling",
    meme: "Not Sure Fry"
}, {
    text1: "Nothing to show here",
    text2: "Go get a Life.!",
    meme: "10 Guy"
}, {
    text1: "Are you able to see this?",
    text2: "yes..! my code works..",
    meme: "3rd World Success Kid"
}, {
    text1: "What if 'Terms and Conditions' held the cure for cancer.",
    text2: "but no one knew",
    meme: "Conspiracy Keanu"
}, {
    text1: "What if told you",
    text2: "i ain't no developer, i don't have the beard",
    meme: "Matrix Morpheus"
}, {
    text1: "What if told you",
    text2: "U will be forever alone coz u are a nerd checking others code",
    meme: "Matrix Morpheus"
}, {
    text1: "What if am sexy?",
    text2: "And i don't know it.",
    meme: "Conspiracy Keanu"
}, {
    text1: "Girlfriend..?",
    text2: "Is it available in GitHub.?",
    meme: "Forever Alone"
}, {
    text1: "one does not simply code",
    text2: "without any mistakes",
    meme: "One Does Not Simply"
}, {
    text1: "one does not simply",
    text2: "Display a meme in dev console",
    meme: "One Does Not Simply"
}];
var item = items[Math.floor(Math.random() * items.length)];
console.meme(item.text1, item.text2, item.meme, 400, 300);
