from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.filters import SearchFilter
import django_filters

from .models import News
from. serializers import NewsSerializer

# Create your views here.
class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
