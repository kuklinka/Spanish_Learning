def control_user_input(person, conjugated_verb, user_input):

    answer = " ".join([person, conjugated_verb])

    if " ".join([person, conjugated_verb]) == user_input:
        print("Correct")
        return True
    else:
        print(f"Incorrect, answer: {answer}")
        return False

