const CronJob = require("cron").CronJob; // include part of the library, not all of it

const mainWorker = new CronJob(
  "1 * * * * *",
  function() {
    console.log("ALL YOUR BASE ARE BWLONG TO US");
  },
  null,
  false,
  "America/New_York"
);

module.exports = mainWorker;

// null indicates there are no tasks/actions to do once the job is complete
//fale: indicates not to run on build
//we want this task to start manually
//we want the job to start when the user accesses an endpoint
