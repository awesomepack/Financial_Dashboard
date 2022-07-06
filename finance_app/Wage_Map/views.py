from datetime import datetime
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return render(
        request,
        'Wage_Map/Wage_Map.html',
        {
            'name': 'Merari',
            'date': datetime.now()
        }
    )
    