#from graphene import ObjectType, String, Schema
#
#class Query(ObjectType):
#    hello = String(name=String(default_value="stranger"))
#    goodbye = String()
#
#    def resolve_hello(root, info, name):
#        return "Hello %s!" % name
#
#    def resolve_goodbye(root, info):
#        return 'See ya!'
#
#schema = Schema(query=Query)
#
#query_string = '{ hello }'
#result = schema.execute(query_string)
#print(result.data['hello'])
#
#query_with_argument = '{ hello (name: "GraphQL") }'
#result = schema.execute(query_with_argument)
#print(result.data['hello'])

import graphene
# Example of mutation
class CreatePerson(graphene.Mutation):
    class Arguments:
        name = graphene.String()
    
    ok = graphene.Boolean()
    person = graphene.Field(lambda: Person)
    
    def mutate(root, info, name):
        person = Person(name=name)
        ok = True
        return CreatePerson(person=person, ok=ok)
class Person(graphene.ObjectType):
    name = graphene.String()
    age = graphene.Int()

class MyMutations(graphene.ObjectType):
    create_person = CreatePerson.Field()

# We must define a query for our schema
class Query(graphene.ObjectType):
    person = graphene.Field(Person)

schema = graphene.Schema(query=Query, mutation=MyMutations)

from time import time as timer

def timing_middleware(next, root, info, **args):
    start = timer()
    return_value = next(root, info, **args)
    duration = timer() - start
    print("%s.%s: {%s} ms" % (root._meta.name if root and hasattr(root, '_meta') else '', info.field_name, round(duration * 1000, 2)))

query_str = 'mutation myFirstMutation {createPerson(name:"Peter") { person { name } ok } }'
result = schema.execute(query_str, middleware=[timing_middleware])
print(result.data)
