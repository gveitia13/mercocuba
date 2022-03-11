from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView


class CartDetails(TemplateView):
    template_name = ''


class TiendaDetails(TemplateView):
    template_name = ''


class Home(TemplateView):
    template_name = ''


class ProductDetails(TemplateView):
    template_name = ''


class AllStores(TemplateView):
    template_name = ''
