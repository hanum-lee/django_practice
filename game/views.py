from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from django.template import loader

# Create your views here.

def index(request):
    #return HttpResponse("Here is the game index")
    return render(request,'game/index.html')
    #return render(request,'polls/gametest.html')
def testing(request):
    return render(request,'game/test.html')
def save_events_json(request):
    if request.is_ajax():
        if request.method == 'POST':
            print ('Raw Data: "%s"' % request.body)
    return HttpResponse("OK")