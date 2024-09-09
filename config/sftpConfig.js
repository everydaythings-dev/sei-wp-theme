const devSFTPConfig = {
  host: "seidevelopment.sftp.wpengine.com",
  user: "seidevelopment-dev",
  port: "2222",
  pass: "n75Bqvk5JlSb",
  remotePath: "/wp-content/themes/sei-wp-vite",
};

const stageSFTPConfig = {
  host: "stagesei.sftp.wpengine.com",
  user: "stagesei-stage",
  port: "2222",
  pass: "9s0GQkFyvEb1",
  remotePath: "/wp-content/themes/sei-wp-vite",
};

const prodSFTPConfig = {
  host: "seiconsulting.sftp.wpengine.com",
  user: "seiconsulting-terra",
  port: "2222",
  pass: ",q$6!.nf63e0t;^^U",
  remotePath: "/wp-content/themes/sei-wp-vite",
};

const filesToExclude = [
  "!functions/project/hash.php",
  "!functions/project/local-variable.php",
  "!public/**/*", // Exclude public folder and everything inside
  "!config/**/*", // Exclude config folder and everything inside
  "!node_modules/**/*", // Exclude node_modules folder and everything inside
  "!src/**/*", // Exclude src folder and everything inside
  "!.env.production", // Exclude .env.production file
  "!.env.virtual", // Exclude .env.virtual file
  "!gulpfile.js", // Exclude gulpfile.js
  "!package-lock.json", // Exclude package-lock.json file
  "!package.json", // Exclude package.json file
  "!readme.md", // Exclude readme.md file
  "!vite.config.js", // Exclude vite.config.js file
  "!documentation/**/*", // Exclude documentation folder and everything inside
  "!*.zip", // Exclude all zip files
  "!*.tgz", // Exclude all tgz files
];

module.exports = {
  devSFTPConfig,
  stageSFTPConfig,
  prodSFTPConfig,
  filesToExclude,
};
