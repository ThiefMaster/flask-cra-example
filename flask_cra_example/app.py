import os

from flask import Flask
from werkzeug.middleware.shared_data import SharedDataMiddleware

from .api import api
from .frontend import frontend


def create_app():
    app = Flask('flask_cra_example')
    # Using the shared data middleware we can let the Flask app serve everything,
    # but you need to do a `npm run build` for it which creates a production-like
    # build.  For an actual production deployment you would have your web server
    # serve the data from `.../client/build/` and just forward API requests to
    # the Flask app!
    app.wsgi_app = SharedDataMiddleware(app.wsgi_app, {
        '/': os.path.join(os.path.dirname(__file__), 'client', 'build')
    })
    app.register_blueprint(frontend)
    app.register_blueprint(api)
    return app
