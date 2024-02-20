from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.homepage_view, name='homepage')
]
