/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("issues.opened", async (context) => {
    const issueTitle = context.payload.issue.title

    if (issueTitle.startsWith("#NewRepository#")) {
      const repoName = issueTitle.split("NewRepository#")[1]
      const org = "deep-mm"

      context.octokit.repos.createInOrg({
        org: org,
        name: repoName,
        private: true
      });
    }
  });
};
