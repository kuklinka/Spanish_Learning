import random

def take_random_word_from_dict(data_dict):
    return random.choice(list(data_dict.keys()))

def take_random_person_from_list():
    person_list = ["yo", "tu", "el", "ella", "usted", "nosotros", "ellos", "ellas", "ustedes"]
    return random.choice(person_list)