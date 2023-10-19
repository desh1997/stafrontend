from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import UserSerializer, UserLoginSerializer
from rest_framework import exceptions
from django.contrib.auth import authenticate
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.generics import GenericAPIView
from django.contrib.auth import logout


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


class UserLoginView(generics.CreateAPIView):
    serializer_class = UserLoginSerializer

    def create(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(username=email, password=password)
        
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class UserLogoutView(GenericAPIView):
    # serializer_class = LogoutSerializer

    def post(self, request, *args, **kwargs):
        logout(request)
        return Response({'message': 'Logged out successfully.'}, status=status.HTTP_200_OK)