import generateToken
import id_searcher
import songfinder
import json
#When the user opens website
def main(artist):
    token = generateToken.create_token()

    #When input taken
    uri = id_searcher.find_id(token, artist)

    #Returns dictionary with recommendations


    recom = songfinder.recommendations(token, uri)
    print(recom)
    return recom

#print(json.dumps(recom, indent=4))
