from django import forms
from django.core.exceptions import ValidationError

from mostaardimgur.models import ImgurImage
from .models import Product


class ProductForm(forms.ModelForm):
    file = forms.FileField()

    class Meta:
        model = Product
        fields = ['description', 'price']

    def __init__(self, *args, **kwargs):
        super(ProductForm, self).__init__(*args, **kwargs)
        self.fields['description'].label = "Beschrijving"
        self.fields['price'].label = "prijschz"
        if self.instance.id:
            self.fields['file'].required = False

    def save(self, commit=True):
        product = super(ProductForm, self).save(commit=False)
        if self.cleaned_data['file']:
            image = ImgurImage.objects.create_imgur_image(self.cleaned_data['file'].file)
            product.image = image
        product.save()
        return product
