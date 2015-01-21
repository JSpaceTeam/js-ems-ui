package net.juniper.ems

import net.juniper.easyrest.boot.Bootstrap
import net.juniper.shadowfax.webserver.boot.WebActor

/**
 * Ems app bootstrap.
 * Created by juntaod on 14-12-27.
 */
object EmsGUIBoot extends App {
  new EmsGUIBootstrap().start()
}

class EmsGUIActor extends WebActor {
}

class EmsGUIBootstrap extends Bootstrap[EmsGUIActor]

