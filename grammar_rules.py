def conjugate_regular_verbs(person, verb):

    def change_regular_verbs_ending(verb, ending, ir_ending, other_ending):
        if ending == "ir":
            return verb[:-2] + ir_ending
        else:
            return verb[:-1] + other_ending
    
    ending = verb[-2:]
    if person == "yo":
        return verb[:-2] + "o"
    elif person == "tu":
        return change_regular_verbs_ending(verb, ending, "es", "")
    elif person in ["el", "ella", "usted"]:
        return change_regular_verbs_ending(verb, ending, "e", "")
    elif person == "nosotros":
        return change_regular_verbs_ending(verb, ending, "imos", "mos")
    elif person in ["ellos", "ellas", "ustedes"]:
        return change_regular_verbs_ending(verb, ending, "en", "n")
    else:
        return ""
    

