const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "kemalkujovic1111",
        mongodb_password: "7UYnSjS2DPn5nB2I",
        mongodb_clustername: "cluster0",
        mongodb_datebase: "my-site-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "kemalkujovic1111",
      mongodb_password: "7UYnSjS2DPn5nB2I",
      mongodb_clustername: "cluster0",
      mongodb_datebase: "my-site",
    },
  };
};
