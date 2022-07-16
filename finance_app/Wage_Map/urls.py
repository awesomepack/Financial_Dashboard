from django.urls import path
from . import views

urlpatterns = [
    path('',views.Salary_Map, name = 'Salary_Map'),

]