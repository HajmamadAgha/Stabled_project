from rest_framework import generics
from .models import User, Package, Style, Order, OrderItem
from .serializers import UserSerializer, PackageSerializer, StyleSerializer, OrderSerializer, OrderItemSerializer
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PackageListCreate(generics.ListCreateAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer

class PackageRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer

class StyleListCreate(generics.ListCreateAPIView):
    queryset = Style.objects.all()
    serializer_class = StyleSerializer

class StyleRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Style.objects.all()
    serializer_class = StyleSerializer

class OrderListCreate(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderItemListCreate(generics.ListCreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

class OrderItemRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
