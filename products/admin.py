from django.contrib import admin

from .forms import ProductForm
from .models import Product


class ProductAdmin(admin.ModelAdmin):
    form = ProductForm


admin.site.register(Product, ProductAdmin)
