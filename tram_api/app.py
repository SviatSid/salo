from flask import Flask, Blueprint
from flask_restful import Api
from flask_restful_swagger import swagger
from flask.ext.session import Session

from tram_api.config import Config

from tram_api.resources.smoke_resource import SmokeResource
from tram_api.resources.ui_resources import VKLogInResource
from tram_api.resources.vk_oauth_resource import VKOAuthResource
from tram_api.resources.vk_logout_resource import VKLogOutResource


def create_app():
    app = Flask(__name__)
    api_bp = Blueprint('vk_api', __name__)
    ui_bp = Blueprint('vk_ui', __name__, static_folder='../static', static_url_path='')
    ui_route = Api(ui_bp)
    api = swagger.docs(Api(api_bp), apiVersion='0.1', description='TramAPI')

    # Add api resources here
    api.add_resource(VKOAuthResource, '/verify')
    api.add_resource(VKLogOutResource, '/logout')

    # Add ui resources here
    ui_route.add_resource(VKLogInResource, '/', endpoint='base')

    # Smoke test resource
    api.add_resource(SmokeResource, '/smoke')

    # Register blueprints
    app.register_blueprint(api_bp, url_prefix='/vk_publisher/v1')
    app.register_blueprint(ui_bp)
    return app


def init_app(app):
    app.config.from_object(Config())
    Session(app)
