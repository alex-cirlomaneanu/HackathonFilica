import json

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .data.green_house_data import GREENHOUSE_DATA
from .data.temperature_evolution import TEMPERATURE_EVOLUTION


@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})


@api_view(['GET'])
def view_green_houses(request):
    """Function used to view all greenhouse houses information"""

    # response_data = [{"id": gh["id"], "name": gh["name"]} for gh in GREENHOUSE_DATA["greenhouses"]]
    # response = json.dumps(response_data)
    # print(response)
    return Response(
        {"greenhouse_houses": GREENHOUSE_DATA.get("greenhouses")}
    )


@api_view(['GET'])
def get_greenhouse_info(request):
    """Function used to view all greenhouse information by id"""
    print(request.GET)
    return Response({
        "greenhouse_houses": GREENHOUSE_DATA.get("greenhouses"),
        "data": request.GET
    })


@api_view(['GET'])
def view_temperature_evolution(request):
    """Function used to view the evolution of temperature during the day."""
    # print(TEMPERATURE_EVOLUTION.get("GH2345").get("temperature_evolution"))
    return Response(
        {"temp_data": TEMPERATURE_EVOLUTION.get("GH2345").get("temperature_evolution")}
    )
