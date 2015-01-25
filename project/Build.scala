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
    version       := "0.1.2",
    scalacOptions := Seq("-unchecked", "-deprecation", "-encoding", "utf8"),
    parallelExecution in Test := false,
    libraryDependencies ++= Seq(
      "net.juniper" %% "easy-rest-core" % "0.1.2"           withSources(),
      "net.juniper" %% "shadowfax-ui-core" % "0.1.2"        withSources(),
      "net.juniper" %% "shadowfax-ui-base" % "0.1.2"        withSources(),
      "net.juniper" %% "shadowfax-webserver" % "0.1.2"      withSources(),
      "com.github.tntim96" % "JSCover" % "1.0.15" % "test"  withSources(),
      "com.github.detro" % "phantomjsdriver" % "1.2.0"      withSources(),
      "org.specs2" %%  "specs2-core"   % "2.3.11"           withSources()
    ),
    publishMavenStyle := true,
    parallelExecution in Test := false,
    publishTo := Some(Resolver.file("file",  new File(System.getProperty("user.home") + "/mavenrepo/release"))),
    unmanagedResourceDirectories in Compile += baseDirectory.value / "resources",
    unmanagedResources in Compile += baseDirectory.value / "web.json",
    resolvers += "JSpace Maven Repo" at "http://10.155.87.253:8080/mavenrepo/release"
  ) ++ scalariformSettings ++ net.virtualvoid.sbt.graph.Plugin.graphSettings ++ XitrumPackage.copy()

  lazy val root = Project("ems-ui", file("."), settings = gSettings ++ XitrumPackage.copy("configuration", "bin/run.sh", "bin/run.bat")).aggregate(emsConfigure, emsDevice, emsRbac, emsAdmin, emsNetworkMonitor, boot)

  lazy val emsConfigure = Project("ems-ui-configure", file("ems-configure"), settings = gSettings)

  lazy val emsDevice = Project("ems-ui-device", file("ems-device"), settings = gSettings)

  lazy val emsRbac = Project("ems-ui-rbac", file("ems-rbac"), settings = gSettings)

  lazy val emsAdmin = Project("ems-ui-administration", file("ems-administration"), settings = gSettings)

  lazy val emsNetworkMonitor = Project("ems-ui-networkmonitor", file("ems-networkmonitor"), settings = gSettings)

  lazy val boot = Project("ems-ui-boot", file("ems-boot"), settings = gSettings)
}
