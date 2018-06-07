from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.filters import SearchFilter
import django_filters

from .models import premiumCourses
from. serializers import premiumCoursesSerializer

# Create your views here.
class premiumCoursesViewSet(viewsets.ModelViewSet):
    queryset = premiumCourses.objects.all()
    serializer_class = premiumCoursesSerializer

