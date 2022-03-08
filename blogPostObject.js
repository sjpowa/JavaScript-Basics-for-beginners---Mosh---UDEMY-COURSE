// U HAVE TO CREATE A BLOG POST OBJECT WITH THE FOLLOWING PROPERTIES
// title, body, author, views, comments(author, body), isLive[has to be true or false]

// the point of this exercise is to learn and use literals. STOP!

let post = {
    title: "UKRAIN",
    body: `ACTUALLY,
    THANKS TO MR.P, ZAR OF RUSSIA,
    WHO IS INVADING UKRAINE,
    LOTS OF PEOPLE ARE DYING..
    
    THERE ISN'T SO MUCH TO SAY ABOUT IT..
    .. THE ONLY THING WE CAN IS THAT,
    AS U CAN SEE,
    DICTATURES ARE BAD
    AND
    U CAN'T PUT THE SAME PERSON ON TOP POWER FOR YEARS
    BECAUSE, AS ELON MUSK SAID,
    U RISK TO HAVE THAT PERSON WITH HIS IDEA AND
    UR PEOPLE WILL BE LOCKED IN A BUBBLE AND NO ABLE TO
    IMPROVE..
    
    BTW THANKS TO HIS ACTION,
    RUSSIANS PEOPLE WHO SUPPORTED MR.P NOW ARE UNDERSTANDING
    THAT THIS PERSON IS CRAZY AND I DON'T THINK CIVIL PEOPLE LIKE 99% OF RUSSIANS
    WANT A WAR
    
    THANKS MR. P
    
    HOPE SOMETHING WILL MATERIALIZE IN THE SKIES AND WILL LASER U
    
    BYE`,
    author: "a",
    views: 10475,
    comments: [ // whe u open the square brackets it means u are opening to an array, in this case we have passed two objects..
        {author: "Marine", body: 'b'},
        {author: "IDK", body: 'b'}
    ],
    isLive: true
}

console.log(post);