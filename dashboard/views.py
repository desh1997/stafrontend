from rest_framework import generics,status
from rest_framework.response import Response
import requests

from datetime import date
from nsepython import index_history
import json
from django.http import JsonResponse
import pandas as pd

class Nifty50DataView(generics.GenericAPIView):
    def get(self, request):
        try:
            symbol = "NIFTY 50"
            start_date = "01-Mar-2011"
            end_date = "07-Jun-2021"
            df = index_history(symbol,start_date,end_date)
            # df = pd.DataFrame(df)
            # json_data = df.to_json(orient='records')
            #json_data = df.to_dict()
            return Response(df, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": f"Failed to fetch Nifty50 data. Error: {str(e)}"}, status=500)
