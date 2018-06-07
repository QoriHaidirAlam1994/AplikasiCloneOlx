from django.db import models

# Create your models here.

class premiumCourses(models.Model):
    title = models.CharField(max_length=225)
    img = models.TextField()
    text = models.TextField()