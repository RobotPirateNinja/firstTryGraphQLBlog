const users = [{
    id: '1',
    name: 'Roy Taylor',
    email: 'me@yourmom.com' ,
    age: 45
},{
    id: '2',
    name: 'Sara',
    email: 'sara@yourmom.com' ,

},{
    id: '3',
    name: 'Mike',
    email: 'Mike@yourmom.com' ,
    age: 53
}
]

const posts = [{
    id: '10',
    title: 'How we want to change the world',
    body: 'With the Newslander Experience' ,
    published: true,
    author: '1'
},{
    id: '11',
    title: "Why it's going to be quite hard",
    body: 'Lots of Folks have this idea before' ,
    published: true,
    author: '2'

},{
    id: '12',
    title: 'I quit',
    body: 'Told ya so, boyos' ,
    published: false,
    author: '1'}
,{
    id: '13',
    title: 'I win',
    body: 'LIke I said' ,
    published: false,
    author: '3'}
]

const comments = [{
    id: '1',
    text: 'First Post!!!',
    author: '3',
    post: '10'
},{
    id: '2',
    text: 'You idiot!',
    author: '2',
    post: '11'
}, {
    id: '3',
    text: 'Yall stop it!',
    author: '1',
    post: '12'
}, {
    id: '4',
    text: 'Thats a great idea!',
    author: '3',
    post: '13'
}]

const db = {
    users,
    posts,
    comments
}

export { db as default}