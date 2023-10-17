from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework import exceptions

class UserRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        data = request.data
        if not data.get('first_name') or not data.get('last_name') or not data.get('email') or not data.get('password') or not data.get('confirm_password'):
            raise exceptions.ValidationError("All the fields are mandatory")
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            serializer.save()  # This will call the `create` method in your serializer
            # return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
