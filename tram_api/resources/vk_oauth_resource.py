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
        r = requests.get('https://oauth.vk.com/access_token', params={
            'code': code,
            'client_id': 6018129,
            'client_secret': 'Kikh5h8WeCeO3bG9TAHn',
            'redirect_uri': 'http://localhost:5000/vk_publisher/v1/verify'
        })
        user_data = r.json()
        session.update(user_data)
        return redirect('/')
