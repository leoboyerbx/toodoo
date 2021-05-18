const Spinnies = require("spinnies");
const { exec } = require("child_process");

const spinnies = new Spinnies({
  spinnerColor: "cyan",
});

console.log(`
Installing sub-folder dependencies...
`);

spinnies.add("spinner-mobile-app", {
  text: "Installing mobile app dependencies",
});
spinnies.add("spinner-cast-app", { text: "Installing cast dependencies" });
spinnies.add("spinner-server", { text: "Installing server dependencies" });

exec(
  "yarn install",
  {
    cwd: "server",
  },
  (error, stdout, stderr) => {
    if (error) {
      spinnies.fail("spinner-server", {
        text: "Error installing server dependencies",
      });
    } else {
      spinnies.succeed("spinner-server", {
        text: "Server dependencies installed !",
      });
      spinnies.add("spinner-docker", { text: "Pulling docker images" });
      // docker sub execution
      exec(
        "docker-compose pull",
        {
          cwd: "server",
        },
        (error, stdout, stderr) => {
          if (error) {
            spinnies.fail("spinner-docker", {
              text: "Error installing server dependencies",
            });
          } else {
            spinnies.succeed("spinner-docker", {
              text: "Docker images successfully pulled !",
            });
            endMessage();
          }
        }
      );
    }
  }
);

exec(
  "yarn install",
  {
    cwd: "mobile-app",
  },
  (error, stdout, stderr) => {
    if (error) {
      spinnies.fail("spinner-mobile-app", {
        text: "Error installing mobile app dependencies",
      });
    } else {
      spinnies.succeed("spinner-mobile-app", {
        text: "Mobile app dependencies installed !",
      });
      endMessage();
    }
  }
);

exec(
  "yarn install",
  {
    cwd: "cast-app",
  },
  (error, stdout, stderr) => {
    if (error) {
      spinnies.fail("spinner-cast-app", {
        text: "Error installing cast dependencies",
      });
    } else {
      spinnies.succeed("spinner-cast-app", {
        text: "Cast dependencies installed !",
      });
      endMessage();
    }
  }
);
let count = 0;
function endMessage() {
  count++;
  if (count < 3) return;
  console.log(
    `
Successfully set up project !

==== Run server ====
- cd server
- yarn dk:dev

==== Run mobile app ====
- cd mobile-app
- yarn dev

==== Run cast ====
- cd cast-app
- yarn dev

 `
  );
}
