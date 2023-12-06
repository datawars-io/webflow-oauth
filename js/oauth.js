// https://developers.google.com/identity/oauth2/web/guides/use-code-model#popup-mode
const client = google.accounts.oauth2.initCodeClient({
  client_id:
    "963016868800-q3fen128rt0u8ksul91k5lq2fs81drk4.apps.googleusercontent.com",
  scope: "openid profile email",
  ux_mode: "popup",
  callback: async (response) => {
    const code = response.code;

    const apiUrl = "https://api.dev.datawars.io/api/v1/";
    const appUrl = "https://app.dev.datawars.io/";
    const apiGoogleOauthUrl = `${apiUrl}users/auth/google-oauth2`;
    const utmTagsObject = JSON.parse(
      localStorage.getItem("dw_ref_params") || {}
    );

    console.log({ code });
    console.log({ utmTagsObject });

    try {
      const response = await fetch(apiGoogleOauthUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          code,
          metadata: utmTagsObject,
        }),
      });
      const user = await response.json();

      if (user.id) {
        console.log("REDIRECT");
        window.location.href = appUrl;
      } else {
        console.error(user);
      }
    } catch (error) {
      console.log(error);
      console.error("Error:", error.message);
    }
  },
});
