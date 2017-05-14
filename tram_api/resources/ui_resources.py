from flask import (
    session,
    url_for,
    redirect,
    send_from_directory
)
from tram_api.resources import BaseResource


class VKLogInResource(BaseResource):

    def get(self):
        user_id = session.get('user_id', 0) or 0
        if not user_id:
            return send_from_directory('static/dist/html', 'main.html')
        return redirect(url_for('vk_ui.home'))


class HomePageResource(BaseResource):

    def get(self):
        user_id = session.get('user_id', 0) or 0
        if not user_id:
            return redirect(url_for('vk_ui.base'))
        return send_from_directory('static/dist/html', 'index.html')
