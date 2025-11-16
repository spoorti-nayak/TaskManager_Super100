from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Task_Model

class Task_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Task_Model
        fields = "__all__"

class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "email", "password"]
        extra_kwargs = {"password":{"write_only": True}}

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = User.objects.create(**validated_data)
        if password is not None:
            user.set_password(password)
            user.save()
        return user