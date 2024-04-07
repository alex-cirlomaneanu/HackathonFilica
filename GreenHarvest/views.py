import json

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .data.green_house_data import GREENHOUSE_DATA
from .data.temperature_evolution import TEMPERATURE_EVOLUTION
from .data.humidity_evolution import HUMIDITY_EVOLUTION
from .data.ph_evolution import PH_EVOLUTION
from .data.solar_energy import SOLAR_ENERGY
from PIL import Image
import tensorflow as tf
import numpy as np
def model_prediction(test_image):

    model = tf.keras.models.load_model("C:\\Users\mihai\WebstormProjects\HackathonFilica\GreenHarvest\\trained_model.keras")
    image = tf.keras.preprocessing.image.load_img(test_image,target_size=(128,128))
    input_arr = tf.keras.preprocessing.image.img_to_array(image)
    input_arr = np.array([input_arr]) #convert single image to batch
    predictions = model.predict(input_arr)
    return np.argmax(predictions) #return index of max element
@api_view(['GET'])
def hello_filica(request):
    class_name = ['Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
                  'Blueberry___healthy', 'Cherry_(including_sour)___Powdery_mildew',
                  'Cherry_(including_sour)___healthy', 'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
                  'Corn_(maize)___Common_rust_', 'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy',
                  'Grape___Black_rot', 'Grape___Esca_(Black_Measles)', 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
                  'Grape___healthy', 'Orange___Haunglongbing_(Citrus_greening)', 'Peach___Bacterial_spot',
                  'Peach___healthy', 'Pepper,_bell___Bacterial_spot', 'Pepper,_bell___healthy',
                  'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy',
                  'Raspberry___healthy', 'Soybean___healthy', 'Squash___Powdery_mildew',
                  'Strawberry___Leaf_scorch', 'Strawberry___healthy', 'Tomato___Bacterial_spot',
                  'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold',
                  'Tomato___Septoria_leaf_spot', 'Tomato___Spider_mites Two-spotted_spider_mite',
                  'Tomato___Target_Spot', 'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus',
                  'Tomato___healthy']
    return Response({'message': "Model is Predicting it's a {}".format(class_name[model_prediction(Image.open("C:\\Users\mihai\WebstormProjects\HackathonFilica\GreenHarvest\images.jpg"))])})
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