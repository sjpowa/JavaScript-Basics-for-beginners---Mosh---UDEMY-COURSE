// like the blog post exercise
// u have to create a constructor and a post obj
// but thinking on how it should be used in real life

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0; // at the beginning our views are zero, so we start them by default to zero..
    this.comments = []; // we dont have comments at the beginning so we leave the array empty, so u can fill it n times u want
    this.isLive = false; // we set isLive to false as default because we can create a post but decice when we have to put it live
}

const p1 = new Post("t", "b", 'a');
console.log(p1);