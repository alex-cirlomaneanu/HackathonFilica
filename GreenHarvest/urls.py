from django.urls import path
from . import views

urlpatterns = [
    path('hello-world/', views.hello_world, name='hello_world'),
    path('list-greenhouses/', views.view_green_houses, name='list_greenhouses'),
    path('greenhouse/<str:g_id>/', views.get_greenhouse_info, name='greenhouse_info'),
    path('temperature-evolution/', views.view_temperature_evolution, name='temperature_evolution'),
]
