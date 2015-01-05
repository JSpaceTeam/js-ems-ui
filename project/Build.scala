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
    version       := "0.1",
    scalacOptions := Seq("-unchecked", "-deprecation", "-encoding", "utf8"),
    parallelExecution in Test := false,
    libraryDependencies ++= Seq(
      "net.juniper" %% "easy-rest-core" % "0.1",
      "net.juniper" %% "ui-core" % "0.1",
      "net.juniper" %% "ui-base" % "0.1",
      "net.juniper" %% "webserver" % "0.1",
      "com.github.tntim96" % "JSCover" % "1.0.15" % "test",
      "com.github.detro" % "phantomjsdriver" % "1.2.0",
      "org.specs2" %%  "specs2-core"   % "2.3.11"
    ),
    publishMavenStyle := true,
    parallelExecution in Test := false,
    publishTo := Some(Resolver.file("file",  new File("../mavenrepo/release"))),
    unmanagedResourceDirectories in Compile += baseDirectory.value / "resources",
    unmanagedResources in Compile += baseDirectory.value / "web.json",
    resolvers += "JSpace Maven Repo" at "https://raw.github.com/JSpaceTeam/mavenrepo/master/release"
  ) ++ scalariformSettings ++ net.virtualvoid.sbt.graph.Plugin.graphSettings ++ XitrumPackage.copy()

  lazy val root = Project("ems-ui", file("."), settings = gSettings ++ XitrumPackage.copy("configuration", "bin/run.sh", "bin/run.bat")).aggregate(emsConfigure, emsDevice, emsRbac, emsAdmin, emsNetworkMonitor)

  lazy val emsConfigure = Project("ems-configure", file("ems-configure"), settings = gSettings)

  lazy val emsDevice = Project("ems-device", file("ems-device"), settings = gSettings)

  lazy val emsRbac = Project("ems-rbac", file("ems-rbac"), settings = gSettings)

  lazy val emsAdmin = Project("ems-administration", file("ems-administration"), settings = gSettings)

  lazy val emsNetworkMonitor = Project("ems-networkmonitor", file("ems-networkmonitor"), settings = gSettings)
}