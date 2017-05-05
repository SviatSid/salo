from flask_restful_swagger import swagger

from tram_api.resources import BaseResource


class SmokeResource(BaseResource):

    @swagger.operation(
        notes='Endpoint for smoke testing',
        summary='Smoke test endpoint',
        nickname='smoke',
    )
    def get(self):
        return {'status': 'ok'}, 200
