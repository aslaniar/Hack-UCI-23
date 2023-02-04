import generateToken
import id_searcher
import songfinder
#When the user opens website
token = generateToken.create_token()
user_input = input()

# correct uri: 7tYKF4w9nC0nq9CsPZTHyP
##
#When input taken
uri = id_searcher.find_id(token, user_input)

print(uri)
#Returns dictionary with recommendations
recom = songfinder.recommendations(token, uri)
print(recom)
