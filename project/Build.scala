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
    publishTo := Some(Resolver.file("file",  new File("../mavenrepo/release"))),
    unmanagedResourceDirectories in Compile += baseDirectory.value / "resources",
    unmanagedResources in Compile += baseDirectory.value / "web.json",
    resolvers += "JSpace Maven Repo" at "https://raw.github.com/JSpaceTeam/mavenrepo/master/release"
  ) ++ scalariformSettings ++ net.virtualvoid.sbt.graph.Plugin.graphSettings ++ XitrumPackage.copy()

  lazy val root = Project("hello-world", file("."), settings = gSettings ++ XitrumPackage.copy("configuration", "bin/runner.sh", "bin/runner.bat")).aggregate(uiConfigure, uiDevice, uiRbac, uiAdmin, uiDashboard, uiNetworkMonitor)

  lazy val uiConfigure = Project("ui-configure", file("ui-configure"), settings = gSettings)

  lazy val uiDevice = Project("ui-device", file("ui-device"), settings = gSettings)

  lazy val uiRbac = Project("ui-rbac", file("ui-rbac"), settings = gSettings)

  lazy val uiAdmin = Project("ui-administration", file("ui-administration"), settings = gSettings)

  lazy val uiNetworkMonitor = Project("ui-networkmonitor", file("ui-networkmonitor"), settings = gSettings)

  lazy val uiDashboard = Project("ui-dashboard", file("ui-dashboard"), settings = gSettings)
}
