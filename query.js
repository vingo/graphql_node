const {GraphQLString, GraphQLObjectType, GraphQLInt} = require('graphql')
const {users, teachers} = require('./data') 
const {userType, teacherType} =  require('./types')
const _= require('lodash')
//define query
const queryType = new GraphQLObjectType({
    name: 'query',
    fields: {
        hello: {  //hello 端点
            type: GraphQLString,
            resolve: function() {
                return 'hello world'
            }
        },
        user: {
            type: userType,  //自定义的类型
            args: {
                id: {type: GraphQLInt}
            },
            resolve: function(source, args) {
                return _.find(users, { id: args.id });
            }
        },
        teacher: {
            type: teacherType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve: function(source, args) {
                const data =  _.find(teachers, {id: args.id})
                return data
            }
        }
    }
})
exports.queryType = queryType