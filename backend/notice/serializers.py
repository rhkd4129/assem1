import re
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Post



class PostSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Post
        fields = [
            "id",
            "created_at",
            "title",
            "content",
            "photo",
    
        ]

