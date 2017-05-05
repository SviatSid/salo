from flask import Flask, Blueprint
from flask_restful import Api
from flask_restful_swagger import swagger

from tram_api.resources.smoke_resource import SmokeResource


def create_app():
    app = Flask(__name__)
    api_bp = Blueprint('tram_api', __name__)
    api = swagger.docs(Api(api_bp), apiVersion='0.1', description='TramAPI')

    # Add resources here

    # Smoke test resource
    api.add_resource(SmokeResource, '/smoke')

    app.register_blueprint(api_bp, url_prefix='/tram_api/v1')
    return app


# app = create_app()
