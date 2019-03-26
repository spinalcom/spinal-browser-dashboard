import {
  SpinalDrive_App,
  SpinalDrive_Env
} from "spinal-env-drive-core";

class SpinalOpenDashboard extends SpinalDrive_App {
  constructor() {
    super("OpenDashBoard", "Open Dashboard", "openDashboard_123",
      "dashboard");
  }



  action(obj) {
    console.log(obj);
  }

}

SpinalDrive_Env.add_applications('FileExplorer', new SpinalOpenDashboard());