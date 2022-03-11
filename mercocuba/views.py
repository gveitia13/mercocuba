from django.views.generic import TemplateView


class CartDetails(TemplateView):
    template_name = 'mercocuba/detalle_carrito.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Detalles del carrito'
        context['cant_negocios'] = 16
        return context


class TiendaDetails(TemplateView):
    template_name = 'mercocuba/detalle_de_tienda.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Detalle de Tienda'
        return context


class Home(TemplateView):
    template_name = 'mercocuba/inicio.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Inicio'
        return context


class ProductDetails(TemplateView):
    template_name = 'mercocuba/detalle_de_producto.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Detalles del Producto'
        return context


class AllStores(TemplateView):
    template_name = 'mercocuba/todas_las_tiendas.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Todas las tiendas'
        return context
