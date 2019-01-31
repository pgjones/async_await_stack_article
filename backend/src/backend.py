from quart import jsonify, Quart


app = Quart(__name__)


@app.route("/items/")
async def items():
    return jsonify(["a", "b", "c"])


if __name__ == "__main__":
    app.run()
