from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import AFDDlkllkklkViewSet

router = DefaultRouter()
router.register("afddlkllkklk", AFDDlkllkklkViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
