addSbtPlugin("com.typesafe.sbt" % "sbt-scalariform" % "1.3.0")

addSbtPlugin("net.virtual-void" % "sbt-dependency-graph" % "0.7.4")

addSbtPlugin("tv.cntt" % "xitrum-package" % "1.8")

resolvers += Resolver.file("Local Repository", new File(Path.userHome.absolutePath + "/mavenrepo/sbt"))(Resolver.ivyStylePatterns)

resolvers += Resolver.url(
  "jspace-private-plugins",
  url("http://10.155.87.253:8080/mavenrepo/sbt"))(Resolver.ivyStylePatterns)

addSbtPlugin("net.juniper" % "yang-plugin" % "0.3.2")

addSbtPlugin("net.juniper" % "shadowfax-plugin" % "0.3.1")
