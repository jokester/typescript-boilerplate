import hey.Dependencies._

// "bare" definition, applies to all projects
ThisBuild / scalaVersion := "2.13.3"
ThisBuild / version := "0.1.0-SNAPSHOT"
ThisBuild / organization := "io.jokester.tapir_todoapi"
ThisBuild / organizationName := "scala tapir demo"

lazy val root = (project in file("."))
  .settings(
    name := "tapir_todoapi",
    libraryDependencies ++= runtimeDeps ++ testDeps ++ buildDeps,
    scalacOptions ++= Seq("-Xlint")
  )
