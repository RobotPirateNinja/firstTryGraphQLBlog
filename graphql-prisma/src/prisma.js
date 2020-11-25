import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466'
})

prisma.query.comments(null, ' {id author {name id} text post {id title}}').then((data) => {
    console.log(JSON.stringify(data,undefined,2))
} )
 
prisma.mutation.createPost({
    data: {
        title: "New Post via Node",
        body: "You can find the new post here",
        published: true,
        author: {
            connect: {
                id: "ckhllewwj005r0707aady7f4r"
            }
        }
    }
}, '{ id, title, body, published }').then((data) => {
    console.log(data)
})