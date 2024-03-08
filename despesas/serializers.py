from rest_framework import serializers
from .models import *

class CategoriaSerializers(serializers.ModelSerializer):
    class Meta:
        model = Categorias
        fields = ('id', 'nome', 'imagem')

class DespesaSerializers(serializers.ModelSerializer):

    categoria = serializers.PrimaryKeyRelatedField(queryset=Categorias.objects.all())
    categoria_imagem = serializers.SerializerMethodField()

    class Meta:
        model = Despesas
        fields = ('id', 'categoria', 'valor', 'data', 'categoria_imagem')

    def get_categoria_imagem(self, instance):
        return instance.categoria.imagem.url if instance.categoria.imagem else None

    # Representar nome da categoria na API
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['categoria'] = instance.categoria.nome
        
        return representation