from rest_framework import serializers

from .models import News

#Serializers define the Api representation.
class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ('title', 'text', 'img')