from django.urls import path
from . import views

urlpatterns = [
    path('hello-world/', views.hello_world, name='hello_world'),
    path('list-greenhouses/', views.view_green_houses, name='list_greenhouses'),
    path('greenhouse/<str:greenhouse_id>/', views.get_greenhouse_info, name='greenhouse_info'),
    path('temperature-evolution/<str:greenhouse_id>/', views.view_temperature_evolution, name='temperature_evolution'),
    path('humidity-evolution/<str:greenhouse_id>/', views.view_humidity_evolution, name='humidity_evolution'),
    path('ph-data/<str:greenhouse_id>/', views.get_ph_data, name='ph_data'),
    path('power-data/<str:greenhouse_id>/', views.get_power_data, name='power-data'),
]
