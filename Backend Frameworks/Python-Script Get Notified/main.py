#!/usr/bin/env python

import requests
from bs4 import BeautifulSoup
import time
import smtplib

from twilio.rest import Client

if __name__ == "__main__":
    while True:
        # set the url as VentureBeat,
        url = "http://www.cs.ubbcluj.ro/files/orar/2018-1/"
        # set the headers like we are a browser,
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}
        # download the homepage
        response = requests.get(url, headers=headers)
        # parse the downloaded homepage and grab all text, then,
        soup = BeautifulSoup(response.text, "lxml")
        # if on the page the words "Not Found" appears that wait 60 sec and then continue,
        iteration = 1
        if str(soup).find("Not Found") != -1:
            # wait 60 seconds,
            print(iteration)
            print("\n")
            iteration += 1
            time.sleep(300)
            # continue with the script,
            continue

        # but if the words "Not Found" not appear anymore,
        else:
            account_sid = 'YOUR_KEY'
            auth_token = 'YOUR_KEY'
            client = Client(account_sid, auth_token)

            message = client.messages \
                .create(
                    body='Check the link for the university time schedule: http://www.cs.ubbcluj.ro/files/orar/2018-1/',
                    from_='+18509295281',
                    to='YOUR_PHONE_NUMBER'
            )
            print(message.sid)
            break
