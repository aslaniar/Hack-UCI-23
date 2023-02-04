import http.client
import json

def create_token() -> str:
    conn = http.client.HTTPSConnection("accounts.spotify.com")

    payload = "grant_type=client_credentials"

    headers = {
        'cookie': "__Host-device_id=AQDMi2Bmx6jpuRGVgYgDUW6cQcC8xGDMBib0iFf212Yl3mhl8T9VxIpaOAC7mydOmJOWv9aAvBuhU1Q0Tbc-Srtxl5qaz_7DN0o; sp_tr=false",
        'Content-Type': "application/x-www-form-urlencoded",
        'Authorization': "Basic ZWFiMWY2NjBjNjM3NDRiNGFjYTQyOGU5ZWE2MmRiNzI6MmQyYWE3NDFjMjJkNDY0YWI1MjEzNDUzNWYxODdlMDE="
        }

    conn.request("POST", "/api/token", payload, headers)

    res = conn.getresponse()
    data = res.read()

    #dictionary = data.decode("utf-8")
    n = json.loads(data.decode("utf-8"))
    return n["access_token"]
