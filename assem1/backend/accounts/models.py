from django.db import models
from django.conf import settings
from django.shortcuts import resolve_url
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator


class User(AbstractUser):
    student_number = models.IntegerField(unique=True,help_text="학번을 입력하세요",null=True)
    # phone_number = models.CharField(
    #     max_length=15,
    #     blank=True,
        
    # )


