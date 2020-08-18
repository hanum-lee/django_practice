from django.urls import path
#from example.views import user_list
from . import views

app_name = 'example'
urlpatterns = [
    #url(r'^$',user_list, name= "user_list"),
    path('',views.index,name='index')
]