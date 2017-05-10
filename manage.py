from flask_script import Manager

from tram_api.app import create_app, init_app

app = create_app()
init_app(app)
manager = Manager(app)


if __name__ == '__main__':
    manager.run()
