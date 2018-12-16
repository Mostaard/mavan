from django.views import generic
from .models import Product


class IndexView(generic.TemplateView):
    template_name = 'mavan/index.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        context['products'] = Product.objects.all()
        return context
