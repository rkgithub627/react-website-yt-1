#!/usr/bin/python


import urllib.request


def download(url, FILE):
    # if file is exists open the html file return content
    # else crawl and return the content
    response = urllib.request.urlopen(url)

    print(response.status)
    responseText = response.read()

    with open(FILE, 'wb') as fp:
        fp.write(responseText)

    return responseText


page = download(
    url  = 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes',
    FILE = 'status.html',
)
