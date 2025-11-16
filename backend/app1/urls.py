from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import register_user, logout_user, get_user_info
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet

router = DefaultRouter()
router.register('tasks', TaskViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),

    # Auth
    path('api/register/', register_user, name='register'),
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/logout/', logout_user, name='logout'),
    path('api/user/', get_user_info, name='user_info'),
    path('api/', include(router.urls)),
    # JWT token refresh
    
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]