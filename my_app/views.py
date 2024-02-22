from django.shortcuts import render
import json

# Create your views here.
def homepage_view(request):
    with open('static/database/regular_verbs.json') as json_file:
        json_data = json.load(json_file)
    first_item = json_data.popitem()
    first_word, first_translation = first_item
    json_data = json.dumps(json_data)
    """
    modify this by adding a randomizer!
    """
    return render(request, 'index.html', {"first_word" : first_word, "first_translation" : first_translation, "json_data" : json_data})