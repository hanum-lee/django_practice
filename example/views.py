from django.shortcuts import render

# Create your views here.

def user_list(request):
    return(request, 'example/user_list.html')

def index(request):
    return render(request,'example/index.html')
