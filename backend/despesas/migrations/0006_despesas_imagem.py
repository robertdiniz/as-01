# Generated by Django 5.0.2 on 2024-03-03 14:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("despesas", "0005_rename_categorias_despesas_categoria"),
    ]

    operations = [
        migrations.AddField(
            model_name="despesas",
            name="imagem",
            field=models.ImageField(default="", upload_to="images"),
            preserve_default=False,
        ),
    ]
