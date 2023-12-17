from rest_framework import serializers
from .models import SafePlace

class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = SafePlace
        fields = '__all__'