#!/bin/base

CURRDIR=`pwd`
BASEDIR=$CURRDIR/..
DISTDIR=$BASEDIR/target/dist/js-ems-ui

package(){
    #1 package all sub modules
    cd $BASEDIR
    sbt package

    rm -rf $DISTDIR/*
    mkdir -p $DISTDIR


    #2 collect all modules to root project.

    dirs=$(ls -l $BASEDIR |awk '/^d/ {print $NF}')
    for dir in $dirs
        do
           if [ -d $BASEDIR/$dir/target/scala-2.11 ]; then
	      find $BASEDIR/$dir/target/scala-2.11/ -type f -name "*.jar" | xargs -i cp -rf {} $DISTDIR
           fi
        done
}
package
