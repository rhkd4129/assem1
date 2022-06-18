import re
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Post



class AuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ["username",'student_number']

class PostSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)
    class Meta:
        model = Post
        fields = [
            "id",
            "author",
            "created_at",
            "title",
            "content",
            "photo",
        ]

