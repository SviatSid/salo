from flask import (
    session,
    url_for,
    redirect,
    send_from_directory
)
from tram_api.resources import BaseResource


class VKLogInResource(BaseResource):

    def get(self):
        print(session)
        access_token = session.get('access_token', 0) or 0
        if not access_token:
            return send_from_directory('static/dist/html', 'main.html')
        return redirect(url_for('vk_ui.home'))


class HomePageResource(BaseResource):

    def get(self):
        access_token = session.get('access_token', 0) or 0
        if not access_token:
            return redirect(url_for('vk_ui.base'))
        return send_from_directory('static/dist/html', 'index.html')
