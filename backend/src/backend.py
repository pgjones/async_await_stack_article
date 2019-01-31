from quart import jsonify, Quart, request

items = []


app = Quart(__name__)


@app.route("/items/", methods=["GET"])
async def get_items():
    return jsonify(items)


@app.route("/items/", methods=["POST"])
async def add_item():
    item = await request.get_json()
    items.append(item)
    return jsonify({})


if __name__ == "__main__":
    app.run()
