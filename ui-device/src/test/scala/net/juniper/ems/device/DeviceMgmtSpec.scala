package net.juniper.ems.device

import net.juniper.shadowfax.webserver.boot.WebActor
import net.juniper.shadowfax.webserver.testkit.ClientRobotSpecification

class ClientPocSpec extends ClientRobotSpecification[WebActor] {
  "The Page Test" should {
    "behaves as expected" in {
      runTask("ui-device/testcase") {
        driver =>
          success
      }
    }
  }
}
