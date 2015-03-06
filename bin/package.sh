#!/bin/base

CURRDIR=`pwd`
BASEDIR=$CURRDIR/..
DISTDIR=$BASEDIR/target/dist/js-ems-ui

package(){
    rm -rf $DISTDIR/*
    mkdir -p $DISTDIR

    #1 package all sub modules
    cd $BASEDIR
    sbt clean package

    #2 collect all modules to root project.
    if [ -d $BASEDIR/target/scala-2.11 ]; then
        cp -rf $BASEDIR/target/scala-2.11/*.jar $DISTDIR
    fi
}
package
