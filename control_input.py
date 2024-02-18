def control_user_input(answer, user_input):
    if answer == user_input:
        print("Correct")
        return True
    else:
        print(f"Incorrect")
        return False

