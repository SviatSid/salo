from flask import send_from_directory
from tram_api.resources import BaseResource


class UIResource(BaseResource):

    def get(self):
        return send_from_directory('../static/app/', 'index.html')
