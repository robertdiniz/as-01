from django.db import models

class Categorias(models.Model):
    nome = models.CharField("Nome da categoria", max_length=100)

    def __str__(self) -> str:
        return self.nome
    
class Despesas(models.Model):
    categoria = models.ForeignKey(Categorias, on_delete=models.CASCADE, blank=True, null=True)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    data = models.DateField()

    def __str__(self) -> str:
        return f"{self.categorias} - {self.valor} - {self.data}"