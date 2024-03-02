from django.shortcuts import render
from rest_framework import permissions, viewsets
from rest_framework import generics
from .models import *
from .serializers import *

class CategoriasViewSet(viewsets.ModelViewSet):
    queryset = Categorias.objects.all()
    serializer_class = CategoriaSerializers
    # permission_classes = [permissions.IsAuthenticated]

class DespesasViewSet(viewsets.ModelViewSet):
    queryset = Despesas.objects.all()
    serializer_class = DespesaSerializers
    # permission_classes = [permissions.IsAuthenticated]


