from django.urls import path
from .views import UserRegisterView, UserLoginView, UserLogoutView

urlpatterns = [
    path('user-register/', UserRegisterView.as_view(), name='user_register'),
    path('user-login/', UserLoginView.as_view(), name='user_login'),
    path('user-logout/', UserLogoutView.as_view(), name='user_logout'),
]