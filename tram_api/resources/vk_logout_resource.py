from flask import (
    session,
    redirect,
    url_for
)
from flask_restful_swagger import swagger
from tram_api.resources import BaseResource


class VKLogOutResource(BaseResource):

    @swagger.operation(
        notes='Endpoint for logout from vk',
        summary='VK logout',
        nickname='Logout',
    )
    def post(self):
        session.clear()
        return redirect(url_for('vk_ui.base'))
