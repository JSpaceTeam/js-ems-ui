package net.juniper.shadowfax.webserver.routing

import jscover.instrument.JavascriptInstrumenter
import spray.http.{ MediaTypes, HttpEntity }
import spray.routing.{ RequestContext, Directive0 }
import scala.collection.mutable.ArrayBuffer

/**
 * Instrument directive for client side javascript files.
 */
trait EasyRestInstrumentDirective {
  import spray.routing.directives.BasicDirectives._
  val isInstrumentSet = System.getProperty("instrument") == "1" || System.getenv("instrument") == "1"
  val instrumenter = new JavascriptInstrumenter()
  val instrumentedUrls = ArrayBuffer[String]()
  /**
   * instrument files according configurations
   * @return excludeList - the paths that should be excluded by instrumenter. Like: /shadowfax/ext-lib. The request url
   * that contains this part will be ignored.
   */
  def instrument(excludeList: List[String] = List[String]()): Directive0 = {
    mapRequestContext { ctx ⇒
      ctx.withHttpResponseEntityMapped(
        entity => {
          if (!isInstrumentSet || !needTobeInstrumented(ctx, excludeList)) {
            entity
          } else {
            val source = entity.data.asString
            val relativePath = ctx.request.uri.path.toString
            val ctxPath = relativePath.substring(0, relativePath.indexOf("/", 1))
            val sourcePath = ctxPath + "/resources/web" + relativePath
            val instrumented = instrumenter.instrument(source, sourcePath)
            instrumentedUrls += ctx.request.uri.toString
            HttpEntity(MediaTypes.`application/javascript`, instrumented)
          }
        }
      )
    }
  }

  private def needTobeInstrumented(ctx: RequestContext, excludeList: List[String]): Boolean = {
    val uri = ctx.request.uri.path.toString
    if (!uri.endsWith(".js"))
      false
    else if (instrumentedUrls.contains(uri))
      false
    else {
      for (excludeUri <- excludeList) {
        if (uri.contains(excludeUri))
          return false
      }
      true
    }
  }
}
