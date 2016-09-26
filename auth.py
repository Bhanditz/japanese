"""
auth.py
http://www.freytag.org.uk/html/web/gaehttpauth.html
"""

import os
import webapp2
import base64

class AdminHandler(webapp2.RequestHandler):
    def get(self):
        # The auth function returns the supplied user name if successfully
        # authenticated or None otherwise.
        user = self.doAuth()
        if not user:
            self.response.out.write("Access Denied")
            return
        # Otherwise, we are authenticated, so take advantage of our
        # application_readable=true directive in app.yaml and return the
        # requested static file.
        html = open(os.path.dirname(__file__) + self.request.path, 'r')
        self.response.out.write(html.read())

    def doAuth(self):
        # Test if some auth info is already supplied.
        auth = self.request.headers.get("Authorization")

        # Ask for info if it is not supplied.
        if not auth:
            # Send headers for BasicAuth. Adjust YourRealm here!
            self.response.headers['WWW-Authenticate'] = 'Basic realm="YourRealm"'
            self.response.set_status(401)
            return False

        # Browsers send the auth header value as:
        # Basic space base64encode(user:password)
        # We first retrieve the encoded user:password string
        auth = auth.split()[1]

        # The Base64 encoded value can sometimes have padding errors.
        # base64 lib will throw a type error on this. A hacky
        # solution is to see if adding one or two "=" at the end
        # makes up for the padding.
        try:
            user, password = base64.b64decode(auth).split(":")
        except TypeError:
            try:
                user, password = base64.b64decode(auth + "=").split(":")
            except TypeError:
                try:
                    user, password = base64.b64decode(auth + "==").split(":")
                except TypeError:
                    # unable to check padding errors, give up!
                    return None

        # Finally, the username and password are defined here.
        if user == "googlefonts" and password == "typespecimensite":
            return user

        return None


application = webapp2.WSGIApplication([
    ('/*.*.html', AdminHandler),
], debug=True)
