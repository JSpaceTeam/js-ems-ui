libraryDependencies ++= Seq(
  "net.juniper" %% "ems-server" % "0.3.3" withSources() exclude("javax.jms", "jms"),
  "net.juniper" %% "device-mgt" % "0.3.3" withSources(),
  "net.juniper" %% "ems-boot"   % "0.3.3" withSources()
)