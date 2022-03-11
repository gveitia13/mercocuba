from django.urls import path
from mercocuba.views import *

urlpatterns = [
    path('cart_details/', CartDetails.as_view(), name='cart_details'),
    path('store_details/', TiendaDetails.as_view(), name='tienda_details'),
    path('', Home.as_view(), name='home'),
    path('product_details/', ProductDetails.as_view(), name='product_details'),
    path('all_stores/', AllStores.as_view(), name='all_stores'),
]
