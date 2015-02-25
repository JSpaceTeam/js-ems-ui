package net.juniper.ems

import net.juniper.easyrest.boot.Bootstrap
import net.juniper.easyrest.persistence.DatabaseSupport
import net.juniper.easyrest.subsystem.EasyRestIntegrationSubsystem
import net.juniper.ems.notifications.EmsNotifications
import net.juniper.shadowfax.webserver.boot.WebActor
import net.juniper.yang.EmsServerAllRoutes

/**
 * Ems app bootstrap. Only for development environment convenience.
 * Created by juntaod on 14-12-27.
 */
object EmsGUIWithBackendBoot extends App {
  new EmsGUIWithBackendBootstrap().start()
}

class EmsGUIWithBackendActor extends WebActor with EmsServerAllRoutes {
  override def getRoute = super.getRoute ~ emsServerAllRoutes
}

class EmsGUIWithBackendBootstrap extends Bootstrap[EmsGUIWithBackendActor] with DatabaseSupport with EasyRestIntegrationSubsystem with EmsNotifications