from datetime import datetime
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def Home(request):
    return render(
        request,
        'Wage_Map/Finance_Homee.html',
        {
            'name': 'Merari',
            'date': datetime.now()
        }
    )
    