from rest_framework import authentication
from sassda.models import AFDDlkllkklk
from .serializers import AFDDlkllkklkSerializer
from rest_framework import viewsets


class AFDDlkllkklkViewSet(viewsets.ModelViewSet):
    serializer_class = AFDDlkllkklkSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = AFDDlkllkklk.objects.all()
