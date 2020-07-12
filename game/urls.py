from django.urls import path
from . import views
app_name = 'game'

urlpatterns = [
    path('',views.index, name='index'),
    path('testing/',views.testing, name = 'index'),
    path('testing/event/',views.save_events_json, name = 'save_event'),
]