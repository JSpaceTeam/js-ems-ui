package net.juniper.ems.device

import net.juniper.shadowfax.webserver.boot.WebActor
import net.juniper.shadowfax.webserver.testkit.ClientRobotSpecification
import org.openqa.selenium.By
import spray.routing.Route

class PocTestActorImpl extends WebActor {
  override def getRoute: Route = {
    get {
      path(ROUTING_PREFIX / ROUTING_DATA_PREFIX / "poctest:pocdatas" / "pocdata=" ~ IntNumber) {
        id =>
          {
            val str = "{\"id\": 1, \"name\": \"Super User\", \"birthday\": \"1900-12-12\", \"status\": \"1\"}"
            complete(str)
          }
      }
    } ~ super.getRoute
  }
}

class ClientPocSpec extends ClientRobotSpecification[PocTestActorImpl] {
  "The Page Test" should {
    "behaves as expected" in {
      runTask("ui-core/poctestcase") {
        driver =>
          driver.findElement(By.id("ui-core_poctestcase_birthday_calendar")).click()
          driver.findElement(By.id("ui-core_poctestcase_name")).clear()
          driver.findElement(By.id("ui-core_poctestcase_name")).sendKeys("shadowfax")
          driver.findElement(By.linkText("1")).click()
          driver.findElement(By.id("ui-core_poctestcase_status_input")).click()
          driver.findElement(By.id("ui-core_poctestcase_status_value_1")).click()
          driver.findElement(By.id("ui-core_poctestcase_submit")).click()
          success
      }
    }
  }
}
