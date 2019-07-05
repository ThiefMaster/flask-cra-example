from datetime import datetime
from time import sleep

from flask import Blueprint, jsonify


api = Blueprint('api', __name__, url_prefix='/api')


@api.route('/time')
def time():
    sleep(0.25)
    return jsonify(now=datetime.now().replace(microsecond=0).isoformat())


@api.route('/greet/<name>')
@api.route('/greet-stranger/', defaults={'name': 'mysterious person'})
def greeting(name):
    sleep(0.25)
    msg = 'Welcome, ' + name
    return jsonify(greeting=msg)
