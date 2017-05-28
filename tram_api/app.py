from flask import Flask, Blueprint
from flask_restful import Api
from flask_restful_swagger import swagger
from flask_session import Session
from flask_pymongo import PyMongo

from tram_api.config import Config

from tram_api.resources.smoke_resource import SmokeResource
from tram_api.resources.ui_resources import (
    VKLogInResource,
    HomePageResource
)
from tram_api.resources.vk_oauth_resource import VKOAuthResource
from tram_api.resources.vk_logout_resource import VKLogOutResource
from tram_api.resources.rules_resource import RulesResource
from tram_api.resources.posts_resource import PostsResource


def create_app():
    app = Flask('vk_publisher')
    api_bp = Blueprint('vk_api', __name__)
    ui_bp = Blueprint('vk_ui', __name__, static_folder='../static', static_url_path='')
    ui_route = Api(ui_bp)
    api = swagger.docs(Api(api_bp), apiVersion='0.1', description='TramAPI')

    # Add api resources here
    api.add_resource(VKOAuthResource, '/verify')
    api.add_resource(VKLogOutResource, '/logout')
    api.add_resource(RulesResource, '/rules')
    api.add_resource(PostsResource, '/posts')

    # Add ui resources here
    ui_route.add_resource(VKLogInResource, '/', endpoint='base')
    ui_route.add_resource(HomePageResource, '/home', endpoint='home')

    # Smoke test resource
    api.add_resource(SmokeResource, '/smoke')

    # Register blueprints
    app.register_blueprint(api_bp, url_prefix='/vk_publisher/v1')
    app.register_blueprint(ui_bp)
    return app


def init_session(app):
    app.config.from_object(Config())
    Session(app)


def init_db(app):
    mongo = PyMongo(app)
    app.config['mongo'] = mongo
