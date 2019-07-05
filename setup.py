from setuptools import find_packages, setup


setup(
    name='use-flask',
    version='1.0-dev',
    url='https://github.com/ThiefMaster/use-flask',
    license='MIT',
    author='Adrian Moennich',
    author_email='adrian.moennich@cern.ch',
    description='Example app for using Flask with a React frontend',
    packages=find_packages(),
    zip_safe=False,
    install_requires=[
        'Flask',
        'flask_url_map_serializer',
        'python-dotenv'
    ],
)
