from rest_framework import serializers

from .models import premiumCourses

#Serializers define the Api representation.
class premiumCoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = premiumCourses
        fields = ('id', 'img', 'title', 'text')