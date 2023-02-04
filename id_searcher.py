import http.client
import json

def find_id(token, user_input):
    conn = http.client.HTTPSConnection("api.spotify.com")
    user_input = user_input.strip("\n")

    payload = ""

    headers = {
        'Authorization': f"Bearer {token}",
        'Content-Type': "application/x-www-form-urlencoded"
        }

    conn.request("GET", f"/v1/search?q={user_input}&type=artist", payload, headers)

    res = conn.getresponse()
    data = res.read()

    i = json.loads(data.decode("utf-8"))
    #uri = i['artists']['items'][9]["id"]
    #return uri.strip("\n")
    return i['artists']['items'][0]['id']


