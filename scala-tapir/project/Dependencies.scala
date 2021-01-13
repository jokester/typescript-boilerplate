import sbt._

package hey {

  object Dependencies {
    lazy val runtimeDeps: Seq[ModuleID] = Seq(
      // logging
      "com.typesafe.scala-logging" %% "scala-logging"   % "3.9.2",
      "ch.qos.logback"              % "logback-classic" % "1.2.3" // this provides SLJ4J backend
//      "com.softwaremill.sttp.client3" %% "core"            % Versions.sttp
    ) ++ Seq(
      "io.circe" %% "circe-core",
      "io.circe" %% "circe-generic",
      "io.circe" %% "circe-parser"
    ).map(_ % Versions.circe) ++ Seq(
      "com.softwaremill.sttp.tapir" %% "tapir-core",
      "com.softwaremill.sttp.tapir" %% "tapir-json-circe",
      "com.softwaremill.sttp.tapir" %% "tapir-openapi-docs",
      "com.softwaremill.sttp.tapir" %% "tapir-openapi-circe-yaml",
      "com.softwaremill.sttp.tapir" %% "tapir-akka-http-server"
    ).map(_ % "0.17.0-M4") ++ Seq(
      "com.typesafe.akka" %% "akka-stream"      % Versions.akkaStreams,
      "com.typesafe.akka" %% "akka-http"        % Versions.akkaHttp,
      "com.typesafe.akka" %% "akka-actor-typed" % Versions.akkaStreams,
      "ch.megard"         %% "akka-http-cors"   % "1.1.0"
    )

    lazy val testDeps: Seq[ModuleID] = Seq(
      "org.scalatest" %% "scalatest" % "3.1.1"
    ).map(_ % Test)

    lazy val buildDeps: Seq[ModuleID] = Seq.empty
  }

  private object Versions {
    val http4s                  = "0.21.8"
    val catsEffect              = "2.2.0"
    val circe                   = "0.13.0"
    val circeYaml               = "0.13.1"
    val sttp                    = "3.0.0-RC5"
    val sttpModel               = "1.2.0-RC4"
    val sttpShared              = "1.0.0-RC6"
    val akkaHttp                = "10.2.1"
    val akkaStreams             = "2.6.10"
    val swaggerUi               = "3.35.2"
    val upickle                 = "1.2.2"
    val playJson                = "2.9.1"
    val silencer                = "1.7.1"
    val finatra                 = "20.9.0"
    val catbird                 = "20.9.0"
    val sprayJson               = "1.3.5"
    val scalaCheck              = "1.14.3"
    val scalaTest               = "3.2.2"
    val scalaTestPlusScalaCheck = "3.2.2.0"
    val refined                 = "0.9.17"
    val enumeratum              = "1.6.1"
    val zio                     = "1.0.3"
    val zioInteropCats          = "2.2.0.1"
    val playServer              = "2.8.2"
    val tethys                  = "0.11.0"
    val vertx                   = "3.9.1"
  }
}
