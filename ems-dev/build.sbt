libraryDependencies ++= Seq(
  "net.juniper" %% "ems-server" % "0.3.4" withSources() exclude("javax.jms", "jms"),
  "net.juniper" %% "ems-device-mgt" % "0.3.4" withSources(),
  "net.juniper" %% "ems-boot"   % "0.3.4" withSources()
)