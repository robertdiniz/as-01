# Generated by Django 5.0.2 on 2024-03-01 00:13

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("despesas", "0002_alter_despesas_categorias"),
    ]

    operations = [
        migrations.AlterField(
            model_name="despesas",
            name="categorias",
            field=models.ForeignKey(
                blank=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="despesas.categorias",
            ),
        ),
    ]
