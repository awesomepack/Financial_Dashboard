from datetime import datetime
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def dashboard(request):
    return render(
        request,
        'finance_dashboard.html',
        {

        }
    )