from django.views import generic


class IndexView(generic.TemplateView):
    """home page of the noisebox platform"""
    template_name = 'mavan/index.html'
