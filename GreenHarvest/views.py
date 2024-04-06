from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from data.green_house_data import GREENHOUSE_DATA
@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})

@api_view(['GET'])
def view_green_houses(request):
    """Function used to view all greenhouse houses information"""

    return Response(
        {"greenhouse houses": GREENHOUSE_DATA}
    )