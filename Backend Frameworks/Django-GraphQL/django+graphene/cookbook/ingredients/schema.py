import graphene
from graphene_django import DjangoObjectType

from ingredients.models import Category, Ingredient


class CategoryType(DjangoObjectType):
    class Meta:
        model = Category


class IngredientType(DjangoObjectType):
    class Meta:
        model = Ingredient


class IngredientMutation(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        id = graphene.ID()
        notes = graphene.String(required=True)

    ingredient = graphene.Field(IngredientType)

    def mutate(self, info, name, id, notes):
        ingredient = Ingredient.objects.get(pk=id)
        ingredient.name = name
        ingredient.notes = notes
        ingredient.save()
        return IngredientMutation(ingredient=ingredient)


class Mutation:
    update_ingredient = IngredientMutation.Field()


class Query(object):
    all_categories = graphene.List(CategoryType)
    all_ingredients = graphene.List(IngredientType)
    category = graphene.Field(CategoryType,
                              id=graphene.Int(),
                              name=graphene.String())
    ingredient = graphene.Field(IngredientType,
                                id=graphene.Int(),
                                name=graphene.String())

    def resolve_all_categories(self, info, **kwargs):
        return Category.objects.all()

    def resolve_all_ingredients(self, info, **kwargs):
        return Ingredient.objects.select_related('category').all()

    def resolve_category(self, info, **kwargs):
        id = kwargs.get('id')
        name = kwargs.get('name')

        if id:
            return Category.objects.get(pk=id)
        if name:
            return Category.objects.get(name=name)
        return None

    def resolve_ingredient(self, info, **kwargs):
        id = kwargs.get('id')
        name = kwargs.get('name')

        if id:
            return Ingredient.objects.get(pk=id)
        if name:
            return Ingredient.objects.get(name=name)
        return None
