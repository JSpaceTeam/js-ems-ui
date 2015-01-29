import java.io.File

import sbt.Keys._
import sbt._
import com.typesafe.sbt.SbtScalariform._

object Build extends Build {

  val akkaV = "2.3.7"

  val sprayV = "1.3.2"

  var spray_jsonV = "1.2.6"

  var gSettings = Defaults.coreDefaultSettings ++ Seq(
    scalaVersion  := "2.11.4",
    organization  := "net.juniper",
    version       := "0.1.4",
    scalacOptions := Seq("-unchecked", "-deprecation", "-encoding", "utf8"),
    parallelExecution in Test := false,
    libraryDependencies ++= Seq(
      "net.juniper" %% "easy-rest-core" % "0.1.4"           withSources(),
      "net.juniper" %% "shadowfax-ui-core" % "0.1.5"        withSources(),
      "net.juniper" %% "shadowfax-ui-base" % "0.1.5"        withSources(),
      "net.juniper" %% "shadowfax-webserver" % "0.1.5"      withSources(),
      "com.github.tntim96" % "JSCover" % "1.0.15" % "test"  withSources(),
      "com.github.detro" % "phantomjsdriver" % "1.2.0"      withSources(),
      "org.specs2" %%  "specs2-core"   % "2.3.11"           withSources()
    ),
    publishMavenStyle := true,
    parallelExecution in Test := false,
    publishTo := Some(Resolver.file("file",  new File(System.getProperty("user.home") + "/mavenrepo/release"))),
    unmanagedResourceDirectories in Compile += baseDirectory.value / "resources",
    unmanagedResources in Compile += baseDirectory.value / "web.json",
    resolvers += "Local Maven Repository" at "file://"+Path.userHome.absolutePath+"/mavenrepo/release",
    resolvers += "JSpace Maven Repo" at "http://10.155.87.253:8080/mavenrepo/release"
  ) ++ scalariformSettings ++ net.virtualvoid.sbt.graph.Plugin.graphSettings ++ XitrumPackage.copy()

  lazy val root = Project("ems-ui", file("."), settings = gSettings ++ XitrumPackage.copy("configuration", "bin/run.sh", "bin/run.bat")).aggregate(server, emsConfigure, emsDevice, emsRbac, emsAdmin, emsNetworkMonitor, boot)

  lazy val server = Project("ems-ui-server", file("server"), settings = gSettings)

  lazy val emsConfigure = Project("ems-ui-configure", file("ems-configure"), settings = gSettings).dependsOn(server)

  lazy val emsDevice = Project("ems-ui-device", file("ems-device"), settings = gSettings).dependsOn(server)

  lazy val emsRbac = Project("ems-ui-rbac", file("ems-rbac"), settings = gSettings).dependsOn(server)

  lazy val emsAdmin = Project("ems-ui-administration", file("ems-administration"), settings = gSettings).dependsOn(server)

  lazy val emsNetworkMonitor = Project("ems-ui-networkmonitor", file("ems-networkmonitor"), settings = gSettings).dependsOn(server)

  lazy val boot = Project("ems-ui-boot", file("ems-boot"), settings = gSettings).dependsOn(server)

  //This module is only for development convenience, so skip packaging.
  lazy val dev = Project("ems-ui-dev", file("ems-dev"), settings = gSettings ++ XitrumPackage.skip).dependsOn(server)
}
