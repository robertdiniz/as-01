from rest_framework import serializers
from .models import *

class CategoriaSerializers(serializers.ModelSerializer):
    class Meta:
        model = Categorias
        fields = ('id', 'nome')

class DespesaSerializers(serializers.ModelSerializer):

    categoria = serializers.PrimaryKeyRelatedField(queryset=Categorias.objects.all())

    class Meta:
        model = Despesas
        fields = ('id', 'categoria', 'valor', 'data')

    # Representar nome da categoria na API
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['categoria'] = instance.categoria.nome
        return representation