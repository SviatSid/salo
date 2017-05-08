from flask import Flask, Blueprint
from flask_restful import Api
from flask_restful_swagger import swagger

from tram_api.resources.smoke_resource import SmokeResource
from tram_api.resources.ui_resource import UIResource


def create_app():
    app = Flask(__name__)
    api_bp = Blueprint('vk_api', __name__)
    ui_bp = Blueprint('vk_ui', __name__)
    ui_route = Api(ui_bp)
    api = swagger.docs(Api(api_bp), apiVersion='0.1', description='TramAPI')

    # Add resources here

    # Smoke test resource
    api.add_resource(SmokeResource, '/smoke')

    # Base route
    ui_route.add_resource(UIResource, '/')

    app.register_blueprint(api_bp, url_prefix='/vk_publisher/v1')
    app.register_blueprint(ui_bp)
    return app
