from urllib import request

from flask import jsonify

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'  # Здесь указывается URL базы данных
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)

    def __init__(self, username, password):
        self.username = username
        self.password = password


@app.route('/register', methods=['POST'])
def register():
    username = request.json['username']
    password = request.json['password']

    if User.query.filter_by(username=username).first() is not None:
        return {'message': 'Пользователь уже существует'}, 400

    new_user = User(username, password)
    db.session.add(new_user)
    db.session.commit()

    return {'message': 'Пользователь успешно зарегистрирован'}, 201


@app.route('/login', methods=['POST'])
def login():
    username = request.json['username']
    password = request.json['password']

    user = User.query.filter_by(username=username).first()

    if user is None or user.password != password:
        return jsonify(False), 200

    return jsonify(True), 200


@app.route('/login', methods=['POST'])
def login():
    username = request.json['username']
    password = request.json['password']

    user = User.query.filter_by(username=username).first()

    if user is None:
        return {'message': 'Пользователь не найден'}, 404

    if user.password != password:
        return {'message': 'Неверный пароль'}, 401

    return {'message': 'Успешная авторизация'}, 200


if __name__ == '__main__':
    db.create_all()
    app.run()
