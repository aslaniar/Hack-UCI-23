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

    num = len(n["tracks"])

    ls = []

    for i in range(num):
        temp = []
        temp.append(n["tracks"][i]["name"])
        temp.append(n["tracks"][i]["album"]["images"][0]['url'])
        temp.append(n["tracks"][i]["album"]["name"])
        temp.append(n["tracks"][i]["artists"][0]["name"])
        temp.append(n['tracks'][i]["preview_url"])
        mili = n['tracks'][i]["duration_ms"]
        min = mili / 1000 / 60
        sec = mili / 1000 % 60
        temp.append(f'{int(min)}:{int(sec)}')
        ls.append(temp)
    return ls

