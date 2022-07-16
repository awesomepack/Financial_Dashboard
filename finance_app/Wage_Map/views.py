from datetime import datetime
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def Salary_Map(request):
    return render(
        request,
        'Wage_Map/Finance_Salary_Map.html',
        {
            'name': 'Merari',
            'date': datetime.now()
        }
    )
    