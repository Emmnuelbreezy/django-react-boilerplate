from django.urls import path
from .views import login_page

app_name = 'post'
urlpatterns = [
    path('login',login_page, name='plogin'),
    #re_path(r'^(?P<slug>[\w-]+)/$', PostDetailAPIView.as_view(), name='detail'),

]
