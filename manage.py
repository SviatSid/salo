from flask_script import Manager

from tram_api.app import create_app, init_session, init_db

app = create_app()
init_session(app)
init_db(app)
manager = Manager(app)


if __name__ == '__main__':
    manager.run()
