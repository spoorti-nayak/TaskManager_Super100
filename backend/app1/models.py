from django.db import models

# Create your models here.
class Task_Model(models.Model):
    user_name = models.CharField(max_length=40)
    task_name = models.CharField(max_length=40)
    task_description = models.TextField()