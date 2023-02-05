import generateToken
import id_searcher
import songfinder
import json
#When the user opens website
token = generateToken.create_token()
user_input = input()

#When input taken
uri = id_searcher.find_id(token, user_input)

#Returns dictionary with recommendations


recom = songfinder.recommendations(token, uri)
print(recom)

#print(json.dumps(recom, indent=4))
