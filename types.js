const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = require('graphql')
const _ = require('lodash')
const {users} = require('./data')
const userType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        grade: {type: GraphQLString},
        teacherId: {type: GraphQLID}
    }
})
const teacherType = new GraphQLObjectType({
    name: 'Teacher',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        users: {
            type: new GraphQLList(userType),
            resolve(source, args) {
                return _.filter(users, {directorId: source.id})
            }
        }
    }
})
exports.userType = userType
exports.teacherType = teacherType
