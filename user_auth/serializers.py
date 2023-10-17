from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework import exceptions


class UserSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)  # Add the confirmPassword field
    
    class Meta:
        model = User
        fields = ('email', 'password', 'first_name', 'last_name', 'confirm_password')
        extra_kwargs = {
            'password': {'write_only': True},
            'username': {'read_only': True},
        }

    def create(self, validated_data):
        email = validated_data['email']
        password = validated_data['password']
        confirm_password = validated_data.pop('confirm_password')  # Remove confirmPassword from validated_data
        
        if User.objects.filter(email=email).exists():
            raise exceptions.ValidationError("User with this email already exists.")
        
        if password != confirm_password:
            raise exceptions.ValidationError("Password and Confirm Password do not match.")
        
        user = User(
            email=email,
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )
        user.set_password(password)  # Use the password from the validated_data
        user.username = email
        user.save()
        return user
