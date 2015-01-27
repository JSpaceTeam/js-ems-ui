Junos Space EMS GUI Project
============

### Setting up dev environment

We recommend using Ubuntu 14.04 or MacOS as you dev environment.

##### Preparation
######For MacOS:

Install [MacPorts](http://www.macports.org/) (It's a software package management tool like 'apt-get' in Ubuntu).

Install Sun [JDK1.7](http://www.oracle.com/technetwork/java/javase/downloads/index.html) for Mac.

Install [Intellij](http://www.jetbrains.com/idea/download/) for Mac.

In mac 'Terminal':

`````
$ mkdir ~/develop
$ cd ~/develop
$ wget http://10.155.87.253:8080/mavenrepo/resources/mac-setup.sh
$ sh mac-setup.sh
$ source ~/.bashrc_devenv
```

###### For Ubuntu:

```
$ mkdir ~/develop
$ cd ~/develop
$ wget http://10.155.87.253:8080/mavenrepo/resources/ubuntu-setup.sh
$ sh ubuntu-setup.sh
$ . ~/.bashrc
```

##### Clone js-ems-ui project from github. 
(Git was automatically installed by the first step. But it still need to be configured before using. Don't know well about how to setup git? Click [here](https://github.com/JSpaceTeam/JSpaceTeam.github.io/wiki/setup-git) for details）.

```
$ cd ~/develop
$ git clone git@github.com:{your github account}/js-ems-ui
```

##### Open the project with Intellij IDEA.

```
$ sh idea.sh&
```
    On the first start screen, click "configure  => Project Defaults => Project Structure" to set up default JDK. Then directly open the project 'js-easy-rest' with IDEA.

**Build/Run the project**

Here is the command to build the all the projects with sbt:

```
$ cd js-ems-ui
$ sbt compile
```

Here is the command to start the Spray server(With backend support)

```
$ sbt "project ems-ui-dev" run
```

Here is the command to start the Spray server(Without backend support)

```
$ sbt "project ems-ui-boot" run
```

**Code coverage**

To run jacoco code coverage on all unit tests, run the following command:

```
$ sbt clean compile jacoco:cover
```

The test report is generated under `target/scala-2.11/jacoco/html`. jacoco does code coverage for both
java and scala code.

**Config development environment**

You can view [here](https://github.com/JSpaceTeam/js-easy-rest/wiki/Setting-up-dev-environment) for details of setting up development environment.
