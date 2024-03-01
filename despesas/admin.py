from django.contrib import admin

from .models import *

@admin.register(Categorias)
class CategoriasAdmin(admin.ModelAdmin):
    pass

@admin.register(Despesas)
class DespesasAdmin(admin.ModelAdmin):
    pass




