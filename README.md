# webflow-oauth

This code provides an implementation for integrating Google Sign-In using the OAuth2 authorization code flow in Webflow application.

## Getting Started

Include the Google Identity Platform library in your project, before </body> tag:

```
<script src="https://accounts.google.com/gsi/client"></script>
<script src="https://cdn.jsdelivr.net/gh/datawars-io/webflow-oauth@latest/js/oauth.min.js"></script>

<button onclick="client.requestCode();">Sign up with Google</button>
```

### Purge and force update

```
https://www.jsdelivr.com/tools/purge
```
