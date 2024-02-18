import json

def load_json_file_from_path(file_path):
    with open(file_path, 'r') as json_file:
        return json.load(json_file)

