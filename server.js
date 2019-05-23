const express = require('express')
const port = 5000
const app = express()

const graphHTTP =  require('express-graphql')
const {GraphQLSchema} = require('graphql')
const {queryType} = require('./query.js')
const schema = new GraphQLSchema({query: queryType})

app.use('/graphql', graphHTTP({
    schema,
    graphiql: true  // 设置开启web ui 调用
}))

app.get('/hello', (req, res, next) => {
    res.end('hello world')
})
app.listen(port)
console.log(`Graphql server running at localhost: ${port}`)