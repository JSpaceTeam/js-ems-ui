libraryDependencies ++= Seq(
  "net.juniper" %% "jspace-ems-server" % "0.1.3" withSources(),
  "net.juniper" %% "jspace-device-mgt" % "0.1.3" withSources(),
  "net.juniper" %% "jspace-ems-boot" % "0.1.3"   withSources()
)

mainClass := Some("net.juniper.ems.EmsGUIBoot")