from django.db import models

from mostaardimgur.models import ImgurImage


class Product(models.Model):
    description = models.CharField(max_length=200, null=True, blank=True)
    price = models.DecimalField(decimal_places=2, max_digits=12, null=True, blank=True)
    image = models.OneToOneField(ImgurImage, related_name='product', on_delete=models.PROTECT)

    def __str__(self):
        if self.description:
            return self.description
        else:
            return str(self.id)
