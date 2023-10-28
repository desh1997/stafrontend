from django.urls import path
from .views import Nifty50DataView

urlpatterns = [
    path('nifty50/', Nifty50DataView.as_view(), name='nifty50_data'),
]