package app

import net.juniper.easyrest.boot.Bootstrap
import net.juniper.easyrest.core.EasyRestSubSystemInit
import net.juniper.easyrest.persistence.DatabaseSupport
import net.juniper.shadowfax.webserver.boot.WebActor
import net.juniper.yang.EmsServerAllRoutes

/**
 * Ems app bootstrap. Only for development environment convenience.
 * Created by juntaod on 14-12-27.
 */
object AppBoot extends App {
  new EmsTestBootstrap().start()
}

class EmsTestActor extends WebActor with EmsServerAllRoutes {
  override def getRoute = super.getRoute ~ emsServerAllRoutes
}

class EmsTestBootstrap extends Bootstrap[EmsTestActor] with DatabaseSupport with EasyRestSubSystemInit
