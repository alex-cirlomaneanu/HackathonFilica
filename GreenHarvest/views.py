import json

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .data.green_house_data import GREENHOUSE_DATA
from .data.temperature_evolution import TEMPERATURE_EVOLUTION
from .data.humidity_evolution import HUMIDITY_EVOLUTION
from .data.ph_evolution import PH_EVOLUTION
from .data.solar_energy import SOLAR_ENERGY


@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})


@api_view(['GET'])
def view_green_houses(request):
    """Function used to view all greenhouse houses information"""

    return Response(
        {"greenhouse_houses": GREENHOUSE_DATA.get("greenhouses")}
    )


@api_view(['GET'])
def get_greenhouse_info(request, greenhouse_id):
    """Function used to view all greenhouse information by id"""
    print(greenhouse_id)
    for greenhouse in GREENHOUSE_DATA.get("greenhouses"):
        if greenhouse.get("id") == greenhouse_id:
            return Response({
                "greenhouse_info": greenhouse
            })

    return Response({"message": f"GreenHouse {greenhouse_id} not found"})


@api_view(['GET'])
def view_temperature_evolution(request, greenhouse_id):
    """Function used to view the evolution of temperature during the day."""

    return Response(
        {"temp_data": TEMPERATURE_EVOLUTION.get(greenhouse_id).get("temperature_evolution")}
    )


@api_view(['GET'])
def view_humidity_evolution(request, greenhouse_id):
    """Function used to view the evolution of humidity during the day."""

    return Response(
        {"humidity_data": HUMIDITY_EVOLUTION.get(greenhouse_id).get("humidity_evolution")}
    )


@api_view(['GET'])
def get_ph_data(request, greenhouse_id):
    """Function used to view the ph data of each day."""

    return Response(
        {"ph_data": PH_EVOLUTION.get(greenhouse_id).get("ph_evolution")}
    )


@api_view(['GET'])
def get_power_data(request, greenhouse_id):
    """Function used to view the power data for each day."""

    return Response({
        "used_power": SOLAR_ENERGY.get(greenhouse_id).get("power_consumption"),
        "generated_power": SOLAR_ENERGY.get(greenhouse_id).get("solar_power_production")
    })