import requests

from flask import (
    session,
    request,
    redirect
)
from flask_restful_swagger import swagger

from tram_api.resources import BaseResource


class VKOAuthResource(BaseResource):

    @swagger.operation(
        notes='Endpoint for smoke testing',
        summary='Smoke test endpoint',
        nickname='smoke',
    )
    def get(self):
        code = request.args.get('code', 0) or 0
        r = requests.get('https://graph.facebook.com/v2.9/oauth/access_token', params={
            'code': code,
            'client_id': 313127969107763,
            'client_secret': '5a7dc0a5eebffe3dc6ac08aae5b0c721',
            'redirect_uri': 'http://localhost:5000/vk_publisher/v1/verify'
        })
        user_data = r.json()
        print(user_data)
        session.update(user_data)
        return redirect('/')
