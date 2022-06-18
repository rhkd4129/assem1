from django.contrib.auth import get_user_model
from django.http import HttpResponse
from django.shortcuts import get_object_or_404

from rest_framework.permissions import AllowAny
from rest_framework.generics import CreateAPIView, ListAPIView, _get_object_or_404
# from rest_framework.response import Response
from .serializers import SignupSerializer 
from .models import User

class SignupView(CreateAPIView):
    model = get_user_model()
    serializer_class = SignupSerializer
    # permission_classes = [
    #     AllowAny,
    # ]
