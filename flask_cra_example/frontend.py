import os

from flask import Blueprint, current_app, send_from_directory


frontend = Blueprint('frontend', __name__)


@frontend.route('/')
def index():
    # Serve index.html on the root so we don't have to add the (ugly) file name in the URL.
    # Again, this is only needed if you want to serve the production build of the frontend
    # through the Flask dev server
    return send_from_directory(os.path.join(current_app.root_path, 'client', 'build'), 'index.html')
