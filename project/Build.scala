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
    version       := "0.3.1",
    scalacOptions := Seq("-unchecked", "-deprecation", "-encoding", "utf8"),
    parallelExecution in Test := false,
    libraryDependencies ++= Seq(
      "net.juniper" %% "shadowfax-ui-core"        % "0.3.1",
      "net.juniper" %% "shadowfax-ui-base"        % "0.3.1",
      "net.juniper" %% "shadowfax-webserver"      % "0.3.1"
    ),
    publishMavenStyle := true,
    parallelExecution in Test := false,
    publishTo := Some(Resolver.file("file",  new File(System.getProperty("user.home") + "/mavenrepo/release"))),
    unmanagedResourceDirectories in Compile += baseDirectory.value / "resources",
    unmanagedResources in Compile += baseDirectory.value / "web.json",
    resolvers += "Local Maven Repository" at Path.userHome.asFile.toURI.toURL + "/mavenrepo/release",
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
