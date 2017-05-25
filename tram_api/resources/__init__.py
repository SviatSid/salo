from flask import current_app
from flask_restful import Resource


class BaseResource(Resource):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.mongo = current_app.config['mongo']
