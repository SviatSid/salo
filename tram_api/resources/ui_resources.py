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
        user_id = session.get('user_id', 0) or 0
        if not user_id:
            return send_from_directory('../static/app', 'log_in.html')
        return redirect(url_for('home'))