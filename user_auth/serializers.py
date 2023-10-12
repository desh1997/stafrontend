from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework import exceptions


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password', 'first_name', 'last_name')
        extra_kwargs = {
            'password': {'write_only': True},
            'username': {'read_only': True},
        }

    def create(self, validated_data):
        email = validated_data['email']
        
        if User.objects.filter(email=email).exists():
            raise exceptions.ValidationError("User with this email already exists.")
        
        user = User(
            email=email,
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )
        user.set_password(validated_data['password'])
        user.username = email
        user.save()
        return user