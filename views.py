from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from places.models import SafePlace
from places.serializers import PlaceSerializer
from rest_framework import generics

# Create your views here.

# Mostrar un lugar seguro de acuerdo con ID
class RetrievePlace(APIView):
    permission_classes = (AllowAny, )

    def get(self, request):
        place_list = SafePlace.objects.all()
        serializer = PlaceSerializer(place_list, many = True)
        return Response(serializer.data)# Listar un lugar seguro


# Listar lugares seguros guardados por la usuaria
class ListPlace(APIView):
    permission_classes = (AllowAny, )

    def get(self, request):
        place_list = places.objects.all()
        serializer = PlaceSerializer(place_list, many=True)
        return Response(serializer.data)


# Eliminar un lugar seguro de mi lista
    def delete(self, request, place_id):
        place_obj = get_object_or_404(SafePlace, pk=place_id)
        place_obj.status = False
        place_obj.save()
        return Response({'message':'Lugar seguro eliminado'}, status=status.HTTP_204_NO_CONTENT)

# Actualizar un lugar seguro de mi lista
class EditPlace(APIView):
    permission_classes = (AllowAny, )

    def get(self, request, place_id):
        places_obj = get_object_or_404(SafePlace, pk=place_id)
        serializer = PlaceSerializer(places_obj)

    def put(self, request, place_id):
        place_obj = get_object_or_404(places, pk=place_id)
        serializer = PlaceSerializer (instance=place_obj, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)