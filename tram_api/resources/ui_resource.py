# from flask import send_from_directory
from tram_api.resources import BaseResource


class UIResource(BaseResource):

    def get(self):
        # return current_app.send_static_file('index.html')
        return {'status': 'ok'}
