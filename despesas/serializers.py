from rest_framework import serializers
from .models import *

class CategoriaSerializers(serializers.ModelSerializer):
    class Meta:
        model = Categorias
        fields = ('id', 'nome')

class DespesaSerializers(serializers.ModelSerializer):

    categorias = serializers.ReadOnlyField(source="categorias.nome")

    class Meta:
        model = Despesas
        fields = ('id', 'categorias', 'valor', 'data')