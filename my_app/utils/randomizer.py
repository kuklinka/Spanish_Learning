import random

# Shuffle the items of a dictionary
def shuffle_dict(d):
    keys = list(d.keys())
    random.shuffle(keys)
    shuffled_dict = {key: d[key] for key in keys}
    return shuffled_dict