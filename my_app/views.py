from django.shortcuts import render
import json
from .utils.randomizer import shuffle_dict

# Create your views here.
def homepage_view(request):
    # Open a json file with regular verbs
    with open('static/database/regular_verbs.json') as json_file:
        json_data = json.load(json_file)

    # Shuffle the dict
    json_data = shuffle_dict(json_data)

    # Retrieve the first item in the dict and convert it to a json dict
    first_item = json_data.popitem()
    first_word, first_translation = first_item
    json_data = json.dumps(json_data)
    return render(request, 'index.html', {"first_word" : first_word, "first_translation" : first_translation, "json_data" : json_data})