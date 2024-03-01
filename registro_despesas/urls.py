from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from despesas.views import *

router = routers.DefaultRouter()

router.register('categorias', CategoriasViewSet, basename="categorias")
router.register('despesas', DespesasViewSet, basename="despesas")

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', include('rest_framework.urls')),
]

urlpatterns += router.urls