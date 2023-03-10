import http.client
import json

def find_id(token, user_input):
    conn = http.client.HTTPSConnection("api.spotify.com")
    user_input = user_input.strip("\n")

    if " " in user_input:
        x = list(user_input)

        for k in x:
            if k == " ":
                n = x.index(k)
                x[n] = "%20"
        user_input = "".join(x)

    payload = ""

    headers = {
        'Authorization': f"Bearer {token}",
        'Content-Type': "application/x-www-form-urlencoded"
        }

    conn.request("GET", f"/v1/search?q={user_input}&type=artist", payload, headers)

    res = conn.getresponse()
    data = res.read()

    i = json.loads(data.decode("utf-8"))
    
    return i['artists']['items'][0]['id']


