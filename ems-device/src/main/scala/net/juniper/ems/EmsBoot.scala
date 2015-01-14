package net.juniper.ems

import net.juniper.easyrest.boot.Bootstrap
import net.juniper.shadowfax.webserver.boot.WebActor

/**
 * Ems app bootstrap.
 * Created by juntaod on 14-12-27.
 */
object EmsBoot extends App {
  new EmsBootstrap().start()
}

class EmsActor extends WebActor {
}

class EmsBootstrap extends Bootstrap[EmsActor]

