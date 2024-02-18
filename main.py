from loader import load_json_file_from_path
from randomizer import take_random_person_from_list, take_random_word_from_dict
from grammar_rules import conjugate_regular_verbs
from control_input import control_user_input

# load a json file with regular verbs
path_regular_verbs = "regular_verbs.json"
data_dict = load_json_file_from_path(path_regular_verbs)

while True:
    person = take_random_person_from_list()
    verb = take_random_word_from_dict(data_dict)
    print(f"Conjugate with {person} and {verb}")

    conjugated_verb = conjugate_regular_verbs(person, verb)

    attempt_tries = 3

    while attempt_tries > 0:
        user_input = input("Enter your answer here: ")
        answer = " ".join([person, conjugated_verb])
        flow_controller = control_user_input(answer, user_input)
        if flow_controller:
            break
        else:
            attempt_tries -= 1
            print(f"{attempt_tries} tries left to attempt")
            if attempt_tries == 0:
                print(f"Right answer: {answer}")