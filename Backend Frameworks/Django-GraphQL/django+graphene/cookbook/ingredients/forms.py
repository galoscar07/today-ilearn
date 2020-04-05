from django import forms
from graphene import Field
from graphene_django.forms.mutation import DjangoFormMutation, DjangoModelFormMutation

from ingredients.models import Ingredient
from ingredients.schema import IngredientType


class IngredientForm(forms.Form):
    class Meta:
        model = Ingredient
        fields = ('name', 'notes')


class PetMutation(DjangoModelFormMutation):
    pet = Field(IngredientType)

    class Meta:
        form_class = IngredientForm