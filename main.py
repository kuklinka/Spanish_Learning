from loader import load_json_file_from_path
from randomizer import take_random_person_from_list, take_random_word_from_dict
from grammar_rules import conjugate_regular_verbs
from control_input import control_user_input

path_regular_verbs = "regular_verbs.json"

data_dict = load_json_file_from_path(path_regular_verbs)

person = take_random_person_from_list()
verb = take_random_word_from_dict(data_dict)
print(f"Conjugate with {person} and {verb}")

conjugated_verb = conjugate_regular_verbs(person, verb)
user_input = input("Enter your answer here: ")

control_user_input(person, conjugated_verb, user_input)