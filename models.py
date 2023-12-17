from django.db import models

# Create your models here.

# Creacion de un lugar seguro / funcion POST
class SafePlace(models.Model):
    place_name = models.CharField(max_length=60, verbose_name = 'Nombre del lugar serguro')
    description = models.CharField(max_length=300, verbose_name = 'Descripcion del lugar seguro')
    state = models.CharField(max_length=40, verbose_name='Estado')
    city = models.CharField(max_length=40, verbose_name='Ciudad')
    neighborhood = models.CharField(max_length=40, verbose_name='Colonia')
    street = models.CharField(max_length=40, verbose_name='Calle')
    zip_code = models.IntegerField(default=0, verbose_name='Codigo postal')

    class Meta:
        db_table = 'lugares'


