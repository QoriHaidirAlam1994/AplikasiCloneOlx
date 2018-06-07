from django.db import models

# Create your models here.

class News(models.Model):
    title = models.CharField(max_length=225)
    text = models.TextField()
    img = models.TextField()