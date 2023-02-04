import http.client
import json

def recommendations(token, uri):
    conn = http.client.HTTPSConnection("api.spotify.com")

    payload = ""

    headers = { 'Authorization': f"Bearer {token}" }

    conn.request("GET", f"/v1/recommendations?seed_artists={uri}", payload, headers)

    res = conn.getresponse()
    data = res.read()

    n = json.loads(data.decode("utf-8"))
    return n